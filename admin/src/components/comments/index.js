/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, lazy, Suspense } from "react";
import TableContainer from "../../shared/table";
import Pagination from "../../shared/pagination";
import PageTitle from "../../shared/page-title";
import Loader from "../../shared/loader";
import { confirmComment, getCommentList, removeComment } from "./data";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import { tableColumns } from "./table-columns";
import { withRouter } from "react-router-dom";
import { heads } from "./table-heads";

const CommentDetail = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./comment-detail"));
  });
});

const Comments = ({ history, location }) => {
  const [choosedComment, setChoosedComment] = useState({});
  const [columnsLength, setColumnsLength] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [columns, setColumns] = useState([]);
  const [modal, setModal] = useState(false);

  let pageParam = new URLSearchParams(location.search).get("page") || 1;
  if (pageParam == 0) {
    pageParam = 1;
  }

  useEffect(() => {
    modal === false && request();
  }, [modal, currentPage, choosedComment, pageParam]);

  const toggle = () => setModal(!modal);

  const request = async () => {
    setIsLoading(true);

    const { data } = await getCommentList(pageParam);
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

  const responseFunction = async (_id, content, parentId) => {
    setChoosedComment({ _id, content, parentId });
    toggle();
  };

  const removerFunction = async (isConfirmed, _id) => {
    if (isConfirmed === "false") {
      await confirmComment(_id);
      request();
    } else if (isConfirmed === "true") {
      await removeComment(_id);
      request();
    }
  };

  const nextBtnFunc = () => {
    setCurrentPage(currentPage + 1);
    history.push(`/comments?page=${currentPage + 1}`);
    columnsLength !== 0 && request();
    setChoosedComment({});
  };

  const prevBtnFunc = () => {
    if (currentPage === 1 || currentPage < 1) {
      setCurrentPage(1);
      history.push(`/comments?page=${currentPage}`);
    }
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      let prevPage = pageParam - 1;
      history.push(`/comments?page=${prevPage}`);
      setChoosedComment({});
      request();
    }
  };

  return (
    <>
      <div>
        <PageTitle title=" نظرات کاربران" />
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
          <CommentDetail data={choosedComment} />
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

export default withRouter(Comments);
