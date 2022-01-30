import React, { useEffect, useState } from "react";
import PageTitle from "../../../../shared/page-title";
import TableContainer from "../../../../shared/table";
import { getPortfolioList } from "./data";
import { tableColumns } from "./table-columns";
import { heads } from "./table-heads";

const PortfolioList = () => {
  const [columnsLength, setColumnsLength] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const request = async () => {
      setIsLoading(true);
      const { data } = await getPortfolioList();
      if (data.result) {
        setColumnsLength(data.result.length);
        let cols = tableColumns(data.result, removerFunction, responseFunction);
        setColumns(cols);
        setTimeout(() => {
          setIsLoading(false);
        }, 400);
      }
    };
    request();
  }, []);

  function removerFunction() {}
  function responseFunction() {}

  return (
    <>
      <PageTitle title="لیست پورتفولیوها" />
      <div className="w-100 mt-5">
        {columns.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <TableContainer
            heads={heads}
            columns={columns}
            length={columnsLength}
            isLoading={isLoading}
          />
        )}
      </div>
    </>
  );
};

export default PortfolioList;
