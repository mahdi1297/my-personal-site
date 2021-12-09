import React from "react";
import { Col } from "reactstrap";
import { InputBody, Label, ErrorP } from "./style";

const Input = ({ data, register, errors }) => {
  return (
    <>
      <Col sm="12" xl={data.size} className="mb-3">
        <div className="form-group">
          <Label htmlFor={data.name} className="mb-3">
            {data.label}
          </Label>
          <InputBody
            type={data.type}
            className="form-control"
            placeholder={data.placeholder}
            {...register(data.name, {
              required: data.validation.required,
              minLength: data.validation.minLength,
              maxLength: data.validation.maxLength,
            })}
          />
        </div>
      </Col>
      <>
        {errors && errors[data.name]?.type === "required" && (
          <ErrorP>ورود این فیلد الزامیست</ErrorP>
        )}
        {errors && errors[data.name]?.type === "minLength" && (
          <ErrorP>
            تعداد کاراکتر ها باید بیشتر از {data.validation.minLength} باشد
          </ErrorP>
        )}
        {errors && errors[data.name]?.type === "maxLength" && (
          <ErrorP>
            تعداد کاراکتر ها باید کمتر از {data.validation.maxLength} باشد
          </ErrorP>
        )}
      </>
    </>
  );
};

export default Input;
