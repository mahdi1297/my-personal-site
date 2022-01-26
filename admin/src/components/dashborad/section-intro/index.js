import React from "react";
import Icons from "../../../shared/icons";
import { SectionIntroBody } from "./style";
import { themeColor } from "../../../theme/color";
import { Link } from "react-router-dom";

const SectionIntro = () => {
  return (
    <SectionIntroBody className="d-flex justify-content-between">
      <div>
        <div className="icon-container d-flex align-items-center justify-content-center">
          <Icons name="check" color={themeColor.WHITE} />
        </div>
        <div className="main-icon-container d-flex justify-content-center">
          <Icons name="comment" color={themeColor.BLUE} width={60} />
        </div>
        <div>
          <h2>
            <Link to="/portfolio">پورتفولیو ها</Link>
          </h2>
        </div>
        <div>
          <p>
            برای دیدن نظرات کاربران کلیک کنید. نظرات کاربران در ابتدا در سایت
            نشان داده نمیشود. شما باید نظرات را در این قسمت تایید کنید
          </p>
        </div>
      </div>
      <div className="active">
        <div className="icon-container d-flex align-items-center justify-content-center">
          <Icons name="check" color={themeColor.WHITE} />
        </div>
        <div className="main-icon-container d-flex justify-content-center">
          <Icons name="blog" color={themeColor.BLUE} width={60} />
        </div>
        <div>
          <h2>
            <Link to="/new-blog">ساخت بلاگ جدید</Link>
          </h2>
        </div>
        <div>
          <p>برای ساخت وبلاگ جدید کلیک کنید</p>
        </div>
      </div>
      <div>
        <div className="icon-container d-flex align-items-center justify-content-center">
          <Icons name="check" color={themeColor.WHITE} />
        </div>
        <div className="main-icon-container d-flex justify-content-center">
          <Icons name="user" color={themeColor.BLUE} width={60} />
        </div>
        <div>
          <h2>
            <Link to="/comments?page=1">لیست کاربران</Link>
          </h2>
        </div>
        <div>
          <p>
            لیست تمامی کاربران در این قسمت است شما میتوانید برای فعال و فیر فعال
            اکانت کاربران، یا سطح دسترسی آنان از این قسمت استقاده کنید
          </p>
        </div>
      </div>
    </SectionIntroBody>
  );
};

export default SectionIntro;
