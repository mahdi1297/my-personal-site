import React from "react";
import Icons from "../../shared/icons";
import { themeColor } from "../../theme/color";

function tableColumns(data, removerFunction, responseFunction) {
  console.log(data);
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
          <div className="w-100">
            <span
              className="c-pointer"
              onClick={() => responseFunction(element)}
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
