import React from "react";

function tableColumns(data, removerFunction, responseFunction) {
  let cols = [];

  data &&
    data.forEach((element) => {
      let newCol = {
        id: element._id,
        body: [
          element.title,
          <div>
            <img
              src={`http://localhost:5000/${element.main_image}`}
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
