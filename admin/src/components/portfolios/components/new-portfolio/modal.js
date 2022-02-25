import React, { useEffect, useState } from "react";
import MultipleUpload from "../../../../shared/form/multiple-upload";
import FormContainer from "../../../../shared/form/form-container";
import { Button, Col, Form } from "reactstrap";
import { formStructure, techs_form_structre } from "./form-structure";
import { themeColor } from "../../../../theme/color";
import { useForm } from "react-hook-form";
import { createPortfolio } from "./data";
import { slugger } from "../../../../helper/slugger";
import TypeaheadProvider from "../../../../shared/form/typehead";
import Cookies from "universal-cookie";

const cookie = new Cookies();
const Token = cookie.get("i_v_c");

const NewPortfolioModal = ({ setModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [images, setImages] = useState([]);
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    return () => {};
  }, []);

  const createPortfolioSubmitHandler = async (data) => {
    let formData = new FormData();

    if (images.length !== 0) {
      let newImageName = 1;
      images.forEach((img) => {
        formData.append(`present_image${newImageName++}`, img.file);
      });
    }

    if (data.slug) {
      formData.append("slug", slugger(data.slug));
    } else {
      return;
    }
    formData.append("description", data.description);
    formData.append("title", data.title);
    formData.append("main_image", data.main_image[0]);
    formData.append("link", data.path);
    formData.append("technologies", JSON.stringify(techs));

    await createPortfolio(formData, Token);
    // setModal(false);
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
          <TypeaheadProvider
            data={techs_form_structre}
            setTypeheades={setTechs}
          />

          <MultipleUpload setFiles={setImages} maxNumber={5} />
          <Button
            type="submit"
            className=" c-white mt-5"
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
