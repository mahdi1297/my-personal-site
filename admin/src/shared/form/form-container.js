import React from "react";
import Input from "./input";
import File from "./file";
import TextArea from "./textarea";
import TypeaheadProvider from "./typehead";

const FormContainer = ({ data, register, errors }) => {
  let inp;

  if (data) {
    switch (data.type) {
      case "text":
        inp = (
          <Input
            type={data.type}
            data={data}
            register={register}
            errors={errors}
          />
        );
        break;
      case "file":
        inp = (
          <File
            type={data.type}
            data={data}
            register={register}
            errors={errors}
          />
        );
        break;
      case "textarea":
        inp = (
          <TextArea
            type={data.type}
            data={data}
            register={register}
            errors={errors}
          />
        );
        break;
      case "typehead":
        inp = <TypeaheadProvider data={data} />;
        break;
      default:
        return "";
    }
  }

  return <>{inp}</>;
};

export default FormContainer;
