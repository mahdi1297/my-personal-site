import React, { useEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import ImageUploader from "quill-image-uploader";
// import Preview from "./preview";
import axios from "axios";
import { ImageResize } from "./image-resize";
import { Video } from "./quill-video-resize";
import { Col } from "reactstrap";
import { ErrorP, Label } from "../form/style";
import "react-quill/dist/quill.snow.css";
import "./quill-video-resize.css";

Quill.register("modules/imageUploader", ImageUploader);
Quill.register("modules/imageResize", ImageResize);
Quill.register({ "formats/video": Video });

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ direction: "rtl" }],
    ["link", "image", "video", "image-resize"],
    ["clean"],
    [{ font: [] }],
  ],

  clipboard: {
    matchVisual: false,
  },
  history: {
    delay: 1000,
    maxStack: 50,
    userOnly: false,
  },

  imageUploader: {
    upload: async (file, data) => {
      console.log(file);
      console.log(data);
      const bodyFormData = new FormData();

      bodyFormData.append("image", file);
      if (/^image\//.test(file.type)) {
        const response = await axios({
          method: "post",
          url: "http://localhost:5000/api/v1/blog/image-upload",
          data: bodyFormData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        return `http://localhost:5000/${response.data.url}`;
      } else {
        alert("please choose just image");
      }
    },
  },
  imageResize: {
    displayStyles: {
      backgroundColor: "black",
      border: "none",
      color: "white",
    },
    modules: ["Resize", "DisplaySize", "Toolbar"],
  },
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block",
  "color",
  "background",
  "font",
  "align",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "clean",
  "code",
  "imageResize",
];

const TextEditor = ({
  defaultValue,
  setContent,
  editorLengthErr,
  isSubmited,
}) => {
  const [value, setValue] = useState("متن خود را وارد کنید");

  console.log(isSubmited);
  console.log(editorLengthErr);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (data) => {
    setValue(data);
    setContent(data);
  };

  return (
    <>
      <Col sm="12" xl={12} className="mb-3 ">
        <div className="form-group">
          <Label className="mb-3">متن</Label>
          {isSubmited && editorLengthErr && (
            <ErrorP>متن باید بیشتر از 100 کاراکتر باشد</ErrorP>
          )}
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={value}
            onChange={handleChange}
          />
        </div>
      </Col>
    </>
  );
};

export default TextEditor;
