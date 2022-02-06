/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import TableContainer from "../../shared/table";
import Pagination from "../../shared/pagination";
import PageTitle from "../../shared/page-title";
import { confirmUser, removeUser, getUserList } from "./data";
import { tableColumns } from "./table-columns";
import { withRouter } from "react-router-dom";
import { heads } from "./table-heads";
import Cookie from "universal-cookie";

const cookies = new Cookie();

const Token = cookies.get("i_v_c");

const Users = ({ history, location }) => {
  const [choosedUser, setChoosedUser] = useState({});
  const [columnsLength, setColumnsLength] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [columns, setColumns] = useState([]);
  const [modal, setModal] = useState(false);

  let pageParam = new URLSearchParams(location.search).get("page") || 1;
  if (pageParam == 0) {
    pageParam = 1;
  }

  useEffect(() => {
    modal === false && request();
  }, [modal, currentPage, choosedUser, pageParam]);

  const toggle = () => setModal(!modal);

  const request = async () => {
    setIsLoading(true);
    const { data } = await getUserList(pageParam, Token);
    if (data.result) {
      setColumnsLength(data.count);
      setTotalData(data.total);
      let cols = tableColumns(data.result, removerFunction, responseFunction);
      setColumns(cols);
      setTimeout(() => {
        setIsLoading(false);
      }, 400);
    }
  };

  const responseFunction = async (itemData) => {
    setChoosedUser(itemData);
    toggle();
  };

  const removerFunction = async (isConfirmed, _id) => {
    if (isConfirmed === "false") {
      await confirmUser(_id, Token);
      request();
    } else if (isConfirmed === "true") {
      await removeUser(_id, Token);
      request();
    }
  };

  const nextBtnFunc = () => {
    setCurrentPage(currentPage + 1);
    history.push(`/users?page=${currentPage + 1}`);
    columnsLength !== 0 && request();
    setChoosedUser({});
  };

  const prevBtnFunc = () => {
    if (currentPage === 1 || currentPage < 1) {
      setCurrentPage(1);
      history.push(`/users?page=${currentPage}`);
    }
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      let prevPage = pageParam - 1;
      history.push(`/users?page=${prevPage}`);
      setChoosedUser({});
      request();
    }
  };

  return (
    <>
      <div>
        <PageTitle title=" مدیریت کاربران" />
        <div className="w-100 mt-5">
          <TableContainer
            heads={heads}
            columns={columns}
            length={columnsLength}
            isLoading={isLoading}
          />
        </div>
        <Pagination
          nextBtnFunc={nextBtnFunc}
          prevBtnFunc={prevBtnFunc}
          currentPage={pageParam}
          pageCount={columnsLength}
          totalData={totalData}
        />
      </div>
      {/* response modal */}
    </>
  );
};

export default withRouter(Users);
