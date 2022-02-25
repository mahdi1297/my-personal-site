import React, { useState } from "react";
import FormContainer from "../../shared/form/form-container";
import TextEditor from "../../shared/text-editor";
import PageTitle from "../../shared/page-title";
import axios from "axios";
import toast from "react-hot-toast";
import { textEditorStructure, formStructure } from "./form-structure";
import { Button, Col, Form } from "reactstrap";
import { useForm } from "react-hook-form";
import { slugger } from "../../helper/slugger";

import Cookies from "universal-cookie";

const cookie = new Cookies();
const Token = cookie.get("i_v_c");

const NewBlog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [content, setContent] = useState();
  const [editorLengthErr, setEditorLengthErr] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  const onSubmitHandler = async (data) => {
    setIsSubmited(true);
    if (content.length < 100) {
      setEditorLengthErr(true);
    } else {
      setEditorLengthErr(false);
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("slug", slugger(data.slug));
    formData.append("description", data.description);
    formData.append("keyword", data.keyword);
    formData.append("content", content);
    formData.append("image", data.image[0]);
    formData.append("tags", "");
    formData.append("writer", "مهدی علی پور");
    formData.append("main_keywork", data.main_keywork);
    formData.append("isPublished", "flase");

    try {
      const req = await axios.post(
        `${process.env.REACT_APP_DEV_API}blog`,
        formData,
        {
          headers: { Authorization: `${Token}` },
        }
      );
      if (!req || (req && req.status !== 200)) {
        toast.error("مشکلی در انجام عملیات به وجود آمد");
        return;
      }

      toast.success("با موفقیت دخیره شد");
    } catch (err) {
      console.log(err);
      toast.error("مشکلی در انجام عملیات به وجود آمد");
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

        <Col xl={12} className={"mt-5"}>
          <TextEditor
            data={textEditorStructure}
            setContent={setContent}
            editorLengthErr={editorLengthErr}
            isSubmited={isSubmited}
          />
        </Col>

        <Button color={"primary"} className={"mt-5"}>
          ساخت بلاگ
        </Button>
      </Form>
    </>
  );
};

export default NewBlog;
