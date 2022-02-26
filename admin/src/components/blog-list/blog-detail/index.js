/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import MultipleUpload from "./../../../shared/form/multiple-upload";
import FormContainer from "./../../../shared/form/form-container";
import TextEditor from "./../../../shared/text-editor";
import { textEditorStructure, formStructure } from "./form-structure";
import { getBlog, updateBlog } from "./data";
import { Button, Col, Form, ModalBody } from "reactstrap";
import { setInputsValues } from "./core";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { slugger } from "../../../helper/slugger";
import { Body } from "./style";
import Cookies from "universal-cookie";

const cookie = new Cookies();
const Token = cookie.get("i_v_c");

const BlogDetail = ({ _id }) => {
  const [blogInfo, setBloginfo] = useState({});
  const [content, setContent] = useState("");
  const [image, setImage] = useState([]);
  const [editorLengthErr, setEditorLengthErr] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  const {
    formState: { errors },
    handleSubmit,
    setValue,
    register,
  } = useForm();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    const getData = async () => {
      if (_id) {
        const { data } = await getBlog(_id, setBloginfo, Token);
        console.log(data);
        if (data.status === 200) {
          setContent(data.result.content);
        }
      }
    };
    getData();
    return () => {
      setBloginfo({});
      setContent("");
    };
  }, [_id]);

  const valueDispatcher = () =>
    setInputsValues(setValue, blogInfo, setBloginfo, setImage);

  const onSubmitHandler = async (data) => {
    setIsSubmited(true);
    if (content.length < 100) {
      setEditorLengthErr(true);
    } else {
      setEditorLengthErr(false);
    }

    const formData = new FormData();
    formData.append("_id", _id);
    formData.append("title", data.title);
    formData.append("slug", slugger(data.slug));
    formData.append("description", data.description);
    formData.append("keyword", data.keyword);
    formData.append("tags", "");
    formData.append("writer", user.username);
    formData.append("content", content);

    if (Array.isArray(image)) {
      formData.append("main_image", image[0].file);
    } else {
      formData.append("main_image", image);
    }

    await updateBlog(formData, Token);
  };
  valueDispatcher();

  return (
    <ModalBody>
      <Body>
        {blogInfo ? (
          <>
            <Form className={"mt-2"} onSubmit={handleSubmit(onSubmitHandler)}>
              {formStructure.map((x) => (
                <FormContainer
                  data={x}
                  key={x.id}
                  register={register}
                  errors={errors}
                />
              ))}

              <MultipleUpload
                setFiles={setImage}
                default_file={image}
                maxNumber={1}
              />

              <Col xl={12} className={"mt-5"}>
                <TextEditor
                  data={textEditorStructure}
                  setContent={setContent}
                  defaultValue={content}
                  editorLengthErr={editorLengthErr}
                  isSubmited={isSubmited}
                />
              </Col>

              <Button color={"primary"} className={"mt-5"}>
                Submit
              </Button>
            </Form>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </Body>
    </ModalBody>
  );
};

export default BlogDetail;
