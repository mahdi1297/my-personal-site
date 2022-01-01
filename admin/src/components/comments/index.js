import React, { useEffect, useState } from "react";
import PageTitle from "../../shared/page-title";
import TableContainer from "../../shared/table";
import { getCommentList } from "./data";
import { tableColumns } from "./table-columns";
import { heads } from "./table-heads";

const Comments = () => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    request();
  }, []);

  const request = async () => {
    const { data } = await getCommentList();
    if (data.result) {
      let cols = tableColumns(data.result, removerFunction);
      setColumns(cols);
    }
  };

  function removerFunction(e) {
    console.log(e);
  }

  return (
    <div>
      <PageTitle title=" نظرات کاربران" />
      <div className="w-100 mt-5">
        <TableContainer heads={heads} columns={columns} />
      </div>
    </div>
  );
};

export default Comments;
