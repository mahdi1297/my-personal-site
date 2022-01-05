import styled from "styled-components";
import {appColor, themeColor} from "../../theme/color";

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

const MUploade = styled.div`
  background: ${themeColor.LIGHT}!important;
  border: none!important;
  border-right: 4px solid ${themeColor.ORANGE}!important;
  padding: 8px!important;
  border-radius: 0;
  
  & button.bn-uploader, & div.image-upload-body {
  padding: 0 100px;
  border: none;
    // border: 1px solid ${themeColor.GRAY};
    background: none;
    border-radius: 10px;
    position: relative;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    height: 300px!important;
    width: 90%;
    height: 90%;
  }
  & button.bn-uploader{
      border: 1px solid #eee;
      & button.image-remover {
        color: ${themeColor.BLACK};
      }
      & svg{
        margin-right: 10px;
      }
  }
  & button.bn-uploader:hover {
      background: #fff;
      
  }
  & div.image-upload-body {
     overflow-x: clip;
     overflow-y: auto;
     display: flex;
     justify-content: space-between;
     flex-wrap: wrap;
     
     & div.image-item{
        width: 130px;
        height: fit-content;
        min-height: 130px;
        padding: 10px;
        display: inline;
        margin-bottom: 5px;
        background: #fff;
        box-shadow: 1px 3px 5px #ccc;        
        border-radius: 20px;
        & img{
            width: 110px;
            height: 110px;
        }   
        
        & div.image-item__btn-wrapper{
            width: 100%;
            & button {
                border: none;
                margin-top: 10px;
            }
        }
     }
  }
`

export {Label, InputBody, TextAreaBody, FileInput, TypeheadBody, ErrorP, MUploade};
