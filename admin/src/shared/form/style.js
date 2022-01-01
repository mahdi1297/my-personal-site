import styled from "styled-components";
import { appColor, themeColor } from "../../theme/color";

const InputBody = styled.input`
  background: ${themeColor.LIGHT};
  border: none;
  border-right: 4px solid ${themeColor.ORANGE};
  padding: 8px;
  border-radius: 0;
`;

const Label = styled.label`
  font-size: 16px;
  color: #9e9ea7;
  width: 100%;
  text-align: right;
`;

const TextAreaBody = styled.textarea`
  background: ${themeColor.LIGHT};
  border: none;
  border-right: 4px solid ${themeColor.ORANGE};
  padding: 8px;
  border-radius: 0;
`;

const FileInput = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  & input {
    width: 100%;
    height: 100%;
    position: relative;
    opacity: 0;
    z-index: 100000;
  }
  & div.inner_file-input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    background: ${themeColor.LIGHT};

    & div.inner_file-input-show {
      width: 70%;
      height: 80%;
      border: 3px dashed ${themeColor.ORANGE};
      border-radius: 10px;
      position: relative;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  & div.inner_file-input:hover {
    opacity: 50%;
    background-color: ${themeColor.BLUE};
  }
`;

const TypeheadBody = styled.div`
  width: 100%;
  margin-top: 20px;
  & div.rbt-input-multi.form-control.rbt-input {
    background: ${themeColor.LIGHT};
    border: none;
    border-right: 4px solid ${themeColor.ORANGE};
    padding: 8px;
    border-radius: 0;
  }
  & div.rbt-input-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  & div.rbt-token.rbt-token-removeable {
    display: inline;
    padding: 3px 20px;
    margin: 5px;

    border: 2px solid ${themeColor.ORANGE};
    border-radius: 5px;
    & button {
      border: none;
      background: none;
    }
  }
`;

const ErrorP = styled.p`
  width: 100%;
  color: ${appColor.DANGER};
  font-size: 13px;
`;

export { Label, InputBody, TextAreaBody, FileInput, TypeheadBody, ErrorP };
