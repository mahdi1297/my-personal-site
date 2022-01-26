/* eslint-disable */
import React, { useEffect } from "react";
import Icons from "../icons";
import ImageUploading from "react-images-uploading";
import { themeColor } from "../../theme/color";
import { ErrorP, MUploade } from "./style";
import { Label } from "./style";
import { Col } from "reactstrap";

const MultipleUpload = ({ setFiles, default_file, maxNumber }) => {
  const [images, setImages] = React.useState([]);

  const acceptType = ["png", "jpg", "gif", "jfif"];
  const maxFileSize = 2024 * 2024;
  const resolutionType = "absolute";
  const resolutionWidth = 500;
  const resolutionHeight = 500;

  useEffect(() => {
    if (default_file) {
      setImages([
        {
          data_url: `http://localhost:5000/${default_file}`,
        },
      ]);
    }

    return () => {
      setImages([]);
    };
  }, [default_file]);

  const onChange = (imageList, addUpdateIndex) => {
    // console.log(imageList);
    setFiles(imageList);
    console.log(imageList);
    // console.log(addUpdateIndex);
    setImages(imageList);
  };

  const onError = (errors, files) => {
    console.log(errors);
    console.log(files);
  };

  return (
    <>
      <Col sm="12" xl={12} className="mt-3">
        <div className="form-group">
          <Label htmlFor={"test"} className="mb-3">
            آپلود عکس
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
                          <div className="image-item__btn-wrapper d-flex ">
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
                  <div className="mt-3">
                    {errors.maxNumber && (
                      <ErrorP>حد مجاز آپلود فایل، {maxNumber} مورد است</ErrorP>
                    )}
                    {errors.acceptType && (
                      <ErrorP>
                        فقط فرمت های png, jpg, gif, jfif قابل قبول اند
                      </ErrorP>
                    )}
                    {errors.maxFileSize && (
                      <ErrorP>حداکثر سایز عکس 2024 * 2024 است</ErrorP>
                    )}
                    {errors.resolution && (
                      <ErrorP>
                        Selected file is not match your desired resolution
                      </ErrorP>
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
