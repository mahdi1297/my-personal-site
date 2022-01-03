import React from "react";
import { ErrorP, Label, TextAreaBody } from "./style";
import { Col } from "reactstrap";

const TextArea = ({ data, register, errors }) => {
  return (
    <>
      <Col sm="12" xl={data.size}>
        <div className="form-group">
          <Label htmlFor={data.name} className="mb-3">
            {data.label}
          </Label>
          <TextAreaBody
            type="textarea"
            className="form-control"
            placeholder={data.placeholder}
            rows={data.rows}
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
        {errors && errors[data.name]?.type === "validate" && (
          <ErrorP>مقدار ورودی صحیح نیست</ErrorP>
        )}
      </>
    </>
  );
};

export default TextArea;
