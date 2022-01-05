import React, { useState } from "react";
import TypeaheadProvider from "../../shared/form/typehead";
import FormContainer from "../../shared/form/form-container";
import TextEditor from "../../shared/text-editor";
import PageTitle from "../../shared/page-title";
import axios from "axios";
import { Button, Col, Form } from "reactstrap";
import { useForm } from "react-hook-form";
import { slugger } from "../../helper/slugger";
import {
  textEditorStructure,
  typeheadStructure,
  formStructure,
} from "./form-structure";
import toast from "react-hot-toast";

const NewBlog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [content, setContent] = useState("");
  const [typehead, setTypeheades] = useState([]);

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
    const req = await axios.post("http://localhost:5000/api/v1/blog", formData);
    if (req) {
      if (req.status === 200) {
        console.log(req);
        console.log(req.message);
        toast.success("با موفقیت دخیره شد");
      }
    }
  };

  return (
    <>
      <PageTitle title="بلاگ جدید" />
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
        />

        <Col xl={12} className={"mt-5"}>
          <TextEditor data={textEditorStructure} setContent={setContent} />
        </Col>

        <Button color={"primary"} className={"mt-5"}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default NewBlog;
