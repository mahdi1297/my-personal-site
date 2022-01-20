import React from "react";
import axios from "axios";
import { TextEditorBody } from "./style";
import { Editor } from "@tinymce/tinymce-react";
import { Label } from "../form/style";
import { Col } from "reactstrap";

const TextEditor = ({ data, setContent, defaultValue }) => {
  const handleEditorChange = (e) => {
    setContent(e.target.getContent());
  };

  return (
    <TextEditorBody>
      <Col sm="12" xl={data.size} className="mb-3">
        <div className="form-group">
          <Label htmlFor={data.name} className="mb-3">
            {data.label}
          </Label>
          <div style={{ background: "#ccc" }}>
            <Editor
              apiKey={"trtvhes2el6zikxr7d8cz07gx3y2q77cgw9dcmqsvv0ktlqu"}
              initialValue={
                defaultValue
                  ? defaultValue
                  : "<p>This is the initial content of the editor</p>"
              }
              init={{
                selector: "textarea",
                deprecation_warnings: false,
                height: 800,
                menubar: "insert",
                paste_as_text: true,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                  "advlist autolink lists link anchor paste image",
                  "code",
                  "autosave",
                  "image imagetools",
                  "insertdatetime",
                  "visualblocks",
                  "toc",
                ],
                toolbar:
                  "undo redo | formatselect | " +
                  "bold italic backcolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help | code | restoredraft | toc | image | insertdatetime | visualblocks",
                br_in_pre: true,
                mobile: {
                  toolbar_drawer: "floating",
                },
                file_picker_types: "file image media",

                images_upload_handler: async function (
                  blobInfo,
                  success,
                  failure
                ) {
                  console.log(blobInfo.blob());
                  const formData = new FormData();
                  formData.append("image", blobInfo.blob());
                  const req = await axios.post(
                    "http://localhost:5000/api/v1/blog/image-upload",
                    formData
                  );
                  if (req.status !== 200) {
                    failure("something bad happend");
                  }
                  if (req.data) {
                    const imageUrl = `http://localhost:5000/${req.data.url}`;
                    success(imageUrl);
                  }
                },
              }}
              onChange={handleEditorChange}
            />
          </div>
        </div>
      </Col>
    </TextEditorBody>
  );
};

export default TextEditor;
