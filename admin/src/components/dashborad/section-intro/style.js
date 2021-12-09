import styled from "styled-components";
import {themeColor} from "../../../theme/color";

const SectionIntroBody = styled.div`
    width: 100%;
    margin-top: 35px;
    
    & > div{
        width: 30%;
        height: 250px;
        border-radius: 5px;
        box-shadow: 1px 14px 29px ${themeColor.LIGHT_BORDER_GRAY};
        & h2{
            text-align: center;
            margin-top: 20px;
            font-size: 18px;
            & a{
                color: ${themeColor.BLACK};
            }
        }
        & p {
            padding: 2px;
            text-align: center;
            margin-top: 20px;
            color: ${themeColor.GRAY};
            font-size: 12px;
        }
       & svg{
           opacity: 50%;
       }
    }
    & > div.active{
        border: 2px solid ${themeColor.BLUE};
        & div.icon-container{
            width: 30px;
            height: 30px;
            background: ${themeColor.BLUE};
            border-radius: 50%;
            position: relative;
            right: 50%;
            transform: translateX(50%);
            top: -15px;
        }
       & a{
           color: ${themeColor.BLUE};
       }
                   & svg{
                opacity: 1;
            }
    }

`

export {SectionIntroBody}
