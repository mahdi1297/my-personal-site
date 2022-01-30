import React from "react";
import Icons from "../../shared/icons";

function tableColumns(data, removerFunction, responseFunction) {
  let cols = [];

  data &&
    data.forEach((element) => {
      let newCol = {
        id: element._id,
        body: [
          element.username,
          new Date(element.createdAt).toLocaleDateString("fa-IR"),
          element.email,
          element.role,
          <div>
            {element.iSRegistered === "true" ? (
              <span
                className="c-pointer"
                onClick={() =>
                  removerFunction(element.iSRegistered, element._id)
                }
              >
                <Icons name="check" color="green" />
              </span>
            ) : (
              <span
                className="c-pointer"
                onClick={() =>
                  removerFunction(element.iSRegistered, element._id)
                }
              >
                <Icons name="x" color="red" />
              </span>
            )}
          </div>,
        ],
      };
      cols.push(newCol);
    });

  return cols;
}

export { tableColumns };
