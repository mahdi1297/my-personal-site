/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import TypeaheadProvider from "./../../../shared/form/typehead";
import MultipleUpload from "./../../../shared/form/multiple-upload";
import FormContainer from "./../../../shared/form/form-container";
import TextEditor from "./../../../shared/text-editor";
import { Button, Col, Form, ModalBody } from "reactstrap";
import { getBlog, updateBlog } from "./data";
import { useSelector } from "react-redux";
import { slugger } from "../../../helper/slugger";
import { useForm } from "react-hook-form";
import { Body } from "./style";
import {
  textEditorStructure,
  typeheadStructure,
  formStructure,
} from "./form-structure";

const BlogDetail = ({ _id }) => {
  const [content, setContent] = useState("");
  const [typehead, setTypeheades] = useState([]);
  const [blogInfo, setBloginfo] = useState({});
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState([]);

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
          setTypeheades(tagsMembers);
          setContent(data.result.content);
        }
      }
    }
    gett();

    return () => {
      setBloginfo({});
      setImage("");
    };
  }, [_id]);

  const valueDispatcher = () => {
    if (blogInfo.title) {
      setBloginfo({});
      const valuesToSet = [
        { title: blogInfo.title },
        { slug: blogInfo.slug },
        { keywords: blogInfo.keywords },
        { description: blogInfo.description },
      ];
      valuesToSet.forEach((item) => {
        setValue(Object.keys(item)[0], Object.values(item)[0]);
      });
      setImage(blogInfo.main_image);
    }
  };

  valueDispatcher();

  const onSubmitHandler = async (data) => {
    const formData = new FormData();
    const formDataItems = [
      { _id },
      { title: data.title },
      { slug: slugger(data.slug) },
      { description: data.description },
      { content: content },
      { main_image: image },
      { thumbnail: image },
      { tags: JSON.stringify(typehead) },
      { writer: "مهدی علی پور" },
    ];

    formDataItems.forEach((item) => {
      formData.append(Object.keys(item)[0], Object.values(item)[0]);
    });

    await updateBlog(formData);
  };

  return (
    <ModalBody>
      <Body>
        {blogInfo && tags.length !== 0 ? (
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
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </Body>
    </ModalBody>
  );
};

export default BlogDetail;
