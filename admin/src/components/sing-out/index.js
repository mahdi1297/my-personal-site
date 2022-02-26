import React from "react";
import Cookies from "universal-cookie";

const cookie = new Cookies();

const SignOut = () => {
  cookie.remove("i_v_c");
  window.location.href = "/";
  return <></>;
};

export default SignOut;
