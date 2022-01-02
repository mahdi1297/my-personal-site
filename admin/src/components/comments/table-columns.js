import React from "react";
import Icons from "../../shared/icons";
import { themeColor } from "../../theme/color";

function tableColumns(data, removerFunction, responseFunction) {
  let cols = [];

  data &&
    data.forEach((element) => {
      let newCol = {
        id: element._id,
        body: [
          element.content,
          new Date(element.createdAt).toLocaleDateString("fa-IR"),
          <div>
            {element.isConfirmed === "true" ? (
              <span
                className="c-pointer"
                onClick={() =>
                  removerFunction(element.isConfirmed, element._id)
                }
              >
                <Icons name="check" color="green" />
              </span>
            ) : (
              <span
                className="c-pointer"
                onClick={() =>
                  removerFunction(element.isConfirmed, element._id)
                }
              >
                <Icons name="x" color="red" />
              </span>
            )}
          </div>,
          element.username,
          <div className="w-100">
            <span
              className="c-pointer"
              onClick={() =>
                responseFunction(element._id, element.content, element.parentId)
              }
            >
              <Icons name="edit" color={themeColor.BLUE} />
            </span>
          </div>,
        ],
      };
      cols.push(newCol);
    });

  return cols;
}

export { tableColumns };
