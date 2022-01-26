import React from "react";

const Preview = ({ value }) => {
  return (
    <div>
      <h1>Preview</h1>
      <div className="ql-container ql-snow">
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{ __html: value }}
        />
      </div>
    </div>
  );
};
export default Preview;
