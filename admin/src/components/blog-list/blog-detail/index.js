/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import TypeaheadProvider from "./../../../shared/form/typehead";
import FormContainer from "./../../../shared/form/form-container";
import TextEditor from "./../../../shared/text-editor";
import { Button, Col, Form, ModalBody } from "reactstrap";
import { useSelector } from "react-redux";
import { getBlog, updateBlog } from "./data";
import {
  textEditorStructure,
  typeheadStructure,
  formStructure,
} from "./form-structure";
import { useForm } from "react-hook-form";
import { Body } from "./style";
import { slugger } from "../../../helper/slugger";

const BlogDetail = ({ _id }) => {
  const [content, setContent] = useState("");
  const [typehead, setTypeheades] = useState([]);
  const [blogInfo, setBloginfo] = useState({});
  const [tags, setTags] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    async function gett() {
      if (_id) {
        const { data } = await getBlog(_id, setBloginfo);
        let tagsMembers = [];
        if (data.status === 200) {
          JSON.parse(data.result.tags).forEach((element) => {
            tagsMembers.push(element.label);
          });
          setTags(tagsMembers);
          setContent(data.result.content);
        }
      }
    }
    gett();

    // return () => {
    //   setBloginfo({});
    // };
  }, [_id]);

  const valueDispatcher = () => {
    if (blogInfo.title) {
      setBloginfo({});
      setValue("title", blogInfo.title);
      setValue("slug", blogInfo.slug);
      setValue("keywords", blogInfo.keywords);
      setValue("description", blogInfo.description);
    }
  };

  valueDispatcher();

  const onSubmitHandler = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("slug", slugger(data.slug));
    formData.append("description", data.description);
    formData.append("keyword", data.keyword);
    formData.append("content", content);
    formData.append("image", data.image[0]);
    formData.append("tags", JSON.stringify(typehead));
    formData.append("writer", "مهدی علی پور");

    await updateBlog(formData);
  };

  return (
    <ModalBody>
      <Body>
        <strong>مقاله: </strong>

        <h2 className="f-18">{blogInfo && blogInfo.title}</h2>
        {blogInfo && tags.length !== 0 ? (
          <Form className={"mt-5"} onSubmit={handleSubmit(onSubmitHandler)}>
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
              setTypeheades={setTypeheades}
              defaultValue={tags}
            />

            <Col xl={12} className={"mt-5"}>
              <TextEditor
                data={textEditorStructure}
                setContent={setContent}
                defaultValue={content}
              />
            </Col>

            <Button color={"primary"} className={"mt-5"}>
              Submit
            </Button>
          </Form>
        ) : (
          <h1>Loading...</h1>
        )}
      </Body>
    </ModalBody>
  );
};

export default BlogDetail;
