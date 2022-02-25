import React, { useEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import ImageUploader from "quill-image-uploader";
import axios from "axios";
import { ImageResize } from "./image-resize";
import { Video } from "./quill-video-resize";
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
          url: `${process.env.REACT_APP_DEV_API}blog/image-upload`,
          data: bodyFormData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        return `${process.env.REACT_APP_DEV_API_IMAGE}${response.data.url}`;
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

const TextEditor = ({ defaultValue, setContent }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (data) => {
    setValue(data);
    setContent(data);
  };

  return (
    <>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default TextEditor;
