/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, lazy, Suspense } from "react";
import TableContainer from "../../shared/table";
import Pagination from "../../shared/pagination";
import PageTitle from "../../shared/page-title";
import Loader from "../../shared/loader";
import { confirmUser, removeUser, getUserList } from "./data";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import { tableColumns } from "./table-columns";
import { withRouter } from "react-router-dom";
import { heads } from "./table-heads";

const UserDetail = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./user-detail"));
  });
});

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
    const { data } = await getUserList(pageParam);
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
      await confirmUser(_id);
      request();
    } else if (isConfirmed === "true") {
      await removeUser(_id);
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
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader>پاسخ به دیدگاه</ModalHeader>
        <Suspense fallback={<Loader />}>
          <UserDetail data={choosedUser} />
        </Suspense>
        <ModalFooter>
          <div className="w-100">
            <Button color="secondary" onClick={toggle}>
              انصراف
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default withRouter(Users);
