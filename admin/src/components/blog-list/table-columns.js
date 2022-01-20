import React from "react";
import Icons from "../../shared/icons";
import { themeColor } from "../../theme/color";

function tableColumns(data, responseFunction) {
  let cols = [];

  data &&
    data.forEach((element) => {
      let newCol = {
        id: element._id,
        body: [
          element.title,
          new Date(element.createdAt).toLocaleDateString("fa-IR"),
          element.writer,
          <div className="w-100">
            <img
              src={`http://localhost:5000/${element.thumbnail}`}
              alt=""
              width="100"
              style={{ borderRadius: "5px" }}
            />
          </div>,
          <div className="w-100">
            <span
              className="c-pointer"
              onClick={() => responseFunction(element._id)}
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
