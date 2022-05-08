/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import TypeaheadProvider from "../../../shared/form/typehead";
import MultipleUpload from "./../../../shared/form/multiple-upload";
import FormContainer from "./../../../shared/form/form-container";
import TextEditor from "./../../../shared/text-editor";
import Cookies from "universal-cookie";
import Loader from "../../../shared/loader";
import { Button, Col, Form, ModalBody } from "reactstrap";
import { getBlog, updateBlog } from "./data";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { slugger } from "../../../helper/slugger";
import { Body } from "./style";
import {
  textEditorStructure,
  typeheadStructure,
  formStructure,
} from "./form-structure";

const cookie = new Cookies();
const Token = cookie.get("i_v_c");

const BlogDetail = ({ _id }) => {
  const [image, setImage] = useState([]);
  const [editorLengthErr, setEditorLengthErr] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [categories, setCategories] = useState("");

  const [blogData, setBlogData] = useState({
    blogInfo: {},
    typeheads: [],
  });

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
        const { data } = await getBlog(_id, Token);
        if (data.status === 200) {
          const valuesToSet = [
            { title: data.result.title },
            { slug: data.result.slug },
            { keywords: data.result.keywords },
            { main_keyword: data.result.main_keyword },
            { category: data.result.category },
            { description: data.result.description },
          ];

          valuesToSet.forEach((item) => {
            setValue(Object.keys(item)[0], Object.values(item)[0]);
          });

          setBlogData({
            blogInfo: data.result,
            typeheads: data.result.category
              ? data.result.category.split(",")
              : [],
          });
          if (data.result.category) {
            setCategories(data.result.category.split(","));
          } else {
            setCategories([]);
          }

          setImage(data.result.main_image);
        }
      }
    };
    getData();

    return () => {
      setBlogData({
        blogInfo: {},
        typeheads: [],
      });
    };
  }, [_id, setValue]);

  const onSubmitHandler = async (data) => {
    setIsSubmited(true);
    if (blogData.blogInfo.content.length < 100) {
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
    formData.append("main_keyword", data.main_keyword);
    formData.append("tags", "");
    formData.append("writer", user.username);
    formData.append("content", blogData.blogInfo.content);
    formData.append("category", categories);

    if (Array.isArray(image)) {
      formData.append("main_image", image[0].file);
    } else {
      formData.append("main_image", image);
    }
    await updateBlog(formData, Token);
  };

  const setTypeheadesHandler = (e) => {
    setBlogData({
      blogInfo: blogData.blogInfo,
      typeheads: e,
    });
    setCategories(e);
  };

  const setContentHandler = (data) => {
    setBlogData({
      blogInfo: {
        ...blogData.blogInfo,
        content: data,
      },
      typeheads: blogData.typeheads,
    });
  };

  return (
    <ModalBody>
      <Body>
        {blogData && blogData.blogInfo ? (
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

              <TypeaheadProvider
                data={typeheadStructure}
                setTypeheades={setTypeheadesHandler}
                defaultValue={categories}
              />
              <MultipleUpload
                setFiles={setImage}
                default_file={image}
                maxNumber={1}
              />
              <Col xl={12} className={"mt-5"}>
                <TextEditor
                  data={textEditorStructure}
                  setContent={setContentHandler}
                  defaultValue={blogData.blogInfo.content}
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
          <Loader />
        )}
      </Body>
    </ModalBody>
  );
};

export default BlogDetail;
