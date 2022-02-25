import React from "react";
import { Button } from "reactstrap";
import Icons from "../../shared/icons";
import { themeColor } from "../../theme/color";

function tableColumns(data, responseFunction, publishHandler) {
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
              src={`${process.env.REACT_APP_DEV_API_IMAGE}${element.thumbnail}`}
              alt=""
              width="100"
              style={{ borderRadius: "5px" }}
            />
          </div>,
          <div>
            {element.isPublished === "true" && (
              <Button
                color="success"
                onClick={() => publishHandler("false", element._id)}
              >
                منتشر شده
              </Button>
            )}
            {element.isPublished === "false" && (
              <Button
                color="danger"
                onClick={() => publishHandler("true", element._id)}
              >
                منتشر نشده
              </Button>
            )}
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
