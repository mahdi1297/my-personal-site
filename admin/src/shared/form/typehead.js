/* eslint-disable no-unused-vars */
import React from "react";
import { Label, TypeheadBody } from "./style";
import { Typeahead } from "react-bootstrap-typeahead";
import { Col } from "reactstrap";

const TypeaheadProvider = ({ data, setTypeheades, defaultValue }) => {
  const typeHeadChangeHandler = (e) => {
    let items = [];
    if (Array.isArray(e)) {
      e.forEach((item) => {
        items.push(item.label);
      });
    }

    setTypeheades(items);
  };

  return (
    <>
      <Col sm="12" xl={data.size} className="mb-3">
        <TypeheadBody>
          <div className="form-group">
            <Label htmlFor={data.name} className="mb-3">
              {data.label}
            </Label>
            {Array.isArray(defaultValue) && (
              <Typeahead
                id="custom-typeahead"
                defaultSelected={defaultValue}
                allowNew
                multiple
                newSelectionPrefix={data.newSelectionPrefix}
                options={[]}
                placeholder={data.placeholder}
                onChange={typeHeadChangeHandler}
              />
            )}
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
