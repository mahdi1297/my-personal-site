import React, { useState } from "react";
import { InputBody, Label, FileInput } from "./style";
import Icons from "../icons";
import { themeColor } from "../../theme/color";
import { Col } from "reactstrap";

const File = ({ data, register, errors }) => {
  const [file, setFile] = useState("");
  const fileOInitHandler = (e) => {
    setFile(e.target.value);
  };
  return (
    <>
      <Col sm="12" xl={data.size} className="mb-3">
        <div className="form-group">
          <Label htmlFor={data.name} className="mb-3">
            {data.label}
          </Label>
          <FileInput style={{ position: "relative" }}>
            <InputBody
              type={data.type}
              className="form-control"
              {...register(data.name, {
                required: data.validation.required,
              })}
              onInput={fileOInitHandler}
            />
            <div className="inner_file-input">
              <div className="inner_file-input-show d-flex justify-content-center">
                {file === "" ? (
                  <>
                    <div>
                      <Icons
                        name="upload"
                        width="60"
                        color={themeColor.ORANGE}
                      />
                    </div>
                    <p>برای انتخاب تصویر کلیک کنید</p>
                  </>
                ) : (
                  <>
                    <p>{file}</p>
                  </>
                )}
              </div>
            </div>
          </FileInput>
        </div>
      </Col>
      <>{errors && errors[data.name] && <h2>Error</h2>}</>
    </>
  );
};

export default File;
