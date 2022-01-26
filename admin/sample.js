{
  /* <div style={{ background: "#ccc" }}>
  <x
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
          `${process.env.REACT_APP_API}blog/image-upload`,
          formData
        );
        if (req.status !== 200) {
          failure("something bad happend");
        }
        if (req.data) {
          const imageUrl = `${process.env.REACT_APP_DOWNLOAD_PATH}/${req.data.url}`;
          success(imageUrl);
        }
      },
    }}
    onChange={handleEditorChange}
  />
  </div> */
}

function uploadAdapter(loader) {
  return {
    upload: () => {
      return new Promise((resolve, reject) => {
        const body = new FormData();
        loader.file.then((file) => {
          console.log(file);
          body.append("files", file);
          // let headers = new Headers();
          // headers.append("Origin", "http://localhost:3000");
          fetch(`http://localhost:5000`, {
            method: "post",
            body: body,
            // mode: "no-cors"
          })
            .then((res) => res.json())
            .then((res) => {
              resolve({
                default: `http://localhost:5000`,
              });
            })
            .catch((err) => {
              reject(err);
            });
        });
      });
    },
  };
}
function uploadPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return uploadAdapter(loader);
  };
}

return (
  <TextEditorBody>
    <Col sm="12" xl={data.size} className="mb-3">
      <div className="form-group">
        <Label htmlFor={data.name} className="mb-3">
          {data.label}
        </Label>
        <CKEditor
          editor={ClassicEditor}
          config={{
            extraPlugins: [uploadPlugin],
          }}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    </Col>
  </TextEditorBody>
);
