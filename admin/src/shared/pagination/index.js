import React from "react";
import Icons from "../icons";
import { PaginateBody, Btns } from "./style";

const Pagination = ({ nextBtnFunc, prevBtnFunc, currentPage, pageCount }) => {
  function nextTopBtn() {
    if (pageCount !== 0) {
      nextBtnFunc();
    }
  }
  function prevTopBtn() {
    if (currentPage !== 1 || currentPage > 0) {
      prevBtnFunc();
    }
  }
  return (
    <PaginateBody className="w-100 d-flex justify-content-between">
      <Btns>
        <div>
          <button
            onClick={nextTopBtn}
            className={pageCount === 0 ? "disabled" : ""}
          >
            <Icons name="arrow-right" width="25" />
          </button>
          <button
            className={currentPage && currentPage === 1 ? "disabled" : ""}
            onClick={prevTopBtn}
          >
            <Icons name="arrow-left" width="25" />
          </button>
        </div>
        <div></div>
      </Btns>
      <div>5465</div>
    </PaginateBody>
  );
};

export default Pagination;
