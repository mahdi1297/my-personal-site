/* eslint-disable */
import React from "react";
import Icons from "../icons";
import ImageUploading from "react-images-uploading";
import { themeColor } from "../../theme/color";
import { MUploade } from "./style";
import { Label } from "./style";
import { Col } from "reactstrap";

const MultipleUpload = ({ data }) => {
  const [images, setImages] = React.useState([]);

  const maxNumber = 3;
  const acceptType = ["png", "jpg", "gif", "jfif"];
  const maxFileSize = 1024 * 1024; // 1mb
  const resolutionType = "absolute";
  const resolutionWidth = 500;
  const resolutionHeight = 500;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const onError = (errors, files) => {
    console.log(errors);
    console.log(files);
  };

  return (
    <>
      <Col sm="12" xl={12} className="mb-3">
        <div className="form-group">
          <Label htmlFor={"test"} className="mb-3">
            لیبل تستی
          </Label>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            onError={onError}
            dataURLKey="data_url"
            maxNumber={maxNumber}
            acceptType={acceptType}
            maxFileSize={maxFileSize}
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
              errors,
            }) => (
              <div className="upload__image-wrapper">
                <MUploade className="upload__image-buttons w-100 border d-flex">
                  <Col xl="6" md="12">
                    <button
                      className="bn-uploader"
                      style={isDragging ? { color: "red" } : undefined}
                      onClick={onImageUpload}
                      type="button"
                      {...dragProps}
                    >
                      <div>
                        <Icons
                          name="folder"
                          width="60"
                          color={themeColor.BLACK}
                        />
                      </div>
                      <p>برای انتخاب چند تصویر کلیک کنید</p>
                      {images && images.length !== 0 && (
                        <div className="w-100 d-flex justify-content-center">
                          <div
                            className="d-flex border bg-white c-black image-remover p-2"
                            onClick={onImageRemoveAll}
                          >
                            تمام تصاویر پاک شوند
                            <Icons name="remove" color={themeColor.DANGER} />
                          </div>
                        </div>
                      )}
                    </button>
                  </Col>
                  <Col xl="6" md="12">
                    <div className="image-upload-body">
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          <img src={image["data_url"]} alt="" width="100" />
                          <div className="image-item__btn-wrapper d-flex justify-content-evenly">
                            <button
                              onClick={() => onImageUpdate(index)}
                              type="button"
                            >
                              <Icons name="pen" color={themeColor.BLACK} />
                            </button>
                            <button
                              onClick={() => onImageRemove(index)}
                              type="button"
                            >
                              <Icons name="remove" color={themeColor.DANGER} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Col>
                </MUploade>

                {errors && (
                  <div style={{ color: "red" }}>
                    {errors.maxNumber && (
                      <p>Number of selected images exceed maxNumber</p>
                    )}
                    {errors.acceptType && (
                      <p>Your selected file type is not allow</p>
                    )}
                    {errors.maxFileSize && (
                      <p>Selected file size exceed maxFileSize</p>
                    )}
                    {errors.resolution && (
                      <p>Selected file is not match your desired resolution</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </ImageUploading>
        </div>
      </Col>
    </>
  );
};

export default MultipleUpload;
