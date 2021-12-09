/* eslint-disable no-unused-vars */
import React from "react";
import { Label, ErrorP, TypeheadBody } from "./style";
import { Typeahead } from "react-bootstrap-typeahead";
import { Col } from "reactstrap";

const TypeaheadProvider = ({ data, isSubmited, setTypeheades }) => {
  const typeHeadChangeHandler = (e) => setTypeheades(e);
  return (
    <>
      <Col sm="12" xl={data.size} className="mb-3">
        <TypeheadBody>
          <div className="form-group">
            <Label htmlFor={data.name} className="mb-3">
              {data.label}
            </Label>
            <Typeahead
              id="custom-typeahead"
              allowNew
              multiple
              newSelectionPrefix={data.newSelectionPrefix}
              options={[]}
              placeholder={data.placeholder}
              onChange={typeHeadChangeHandler}
            />
          </div>
        </TypeheadBody>
      </Col>
      <>
        {/* {errors && errors[data.name]?.type === "required" && (
          <ErrorP>ورود این فیلد الزامیست</ErrorP>
        )} */}
      </>
    </>
  );
};

export default TypeaheadProvider;
