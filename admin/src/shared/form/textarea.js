import React from "react";
import { Label, TextAreaBody } from "./style";
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
      <>{errors && errors[data.name] && <h2>Error</h2>}</>
    </>
  );
};

export default TextArea;
