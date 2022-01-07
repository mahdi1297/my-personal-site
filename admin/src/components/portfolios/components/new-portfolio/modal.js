import React, { useState } from "react";
import MultipleUpload from "../../../../shared/form/multiple-upload";
import FormContainer from "../../../../shared/form/form-container";
import { Button, Col, Form } from "reactstrap";
import { formStructure } from "./form-structure";
import { themeColor } from "../../../../theme/color";
import { useForm } from "react-hook-form";
import { createPortfolio } from "./data";

const NewPortfolioModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [images, setImages] = useState([]);

  const createPortfolioSubmitHandler = async (data) => {
    let formData = new FormData();

    if (images.length !== 0) {
      let newImageName = 1;
      images.forEach((img) => {
        formData.append(`present_image${newImageName++}`, img.file);
      });
    }
    formData.append("title", data.title);
    formData.append("main_image", data.main_image[0]);
    formData.append("path", data.path);
    formData.append("details", data.details);

    await createPortfolio(formData);
  };

  return (
    <div className="w-100">
      <Col xl="12">
        <Form onSubmit={handleSubmit(createPortfolioSubmitHandler)}>
          {formStructure &&
            formStructure.map((form) => (
              <FormContainer
                key={form.id}
                data={form}
                register={register}
                errors={errors}
              />
            ))}
          <MultipleUpload setFiles={setImages} />
          <Button
            type="submit"
            className=" c-white"
            style={{ background: themeColor.BLUE }}
          >
            ساخت portfolio
          </Button>
        </Form>
      </Col>
    </div>
  );
};

export default NewPortfolioModal;
