import React from "react";

function tableColumns(data) {
  let cols = [];

  data &&
    data.forEach((element) => {
      let newCol = {
        id: element._id,
        body: [
          element.title,
          <div>
            <img
              src={`${process.env.REACT_APP_DEV_API_IMAGE}${element.main_image}`}
              width="200"
              alt="x"
            />
          </div>,
        ],
      };
      cols.push(newCol);
    });

  return cols;
}

export { tableColumns };
