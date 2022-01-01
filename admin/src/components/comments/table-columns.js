import React from "react";
import Icons from "../../shared/icons";

function tableColumns(data, removerFunction) {
  let cols = [];

  data &&
    data.forEach((element) => {
      let newCol = {
        id: element._id,
        body: [
          element.content,
          element.isConfirmed,
          <div
            className="w-100 c-pointer"
            onClick={() => removerFunction(element.isConfirmed)}
          >
            {element.isConfirmed === "true" ? (
              <Icons name="check" color="green" />
            ) : (
              <Icons name="x" color="red" />
            )}
          </div>,
          new Date(element.createdAt).toLocaleDateString("fa-IR"),
          element.username,
        ],
      };
      cols.push(newCol);
    });

  return cols;
}

export { tableColumns };
