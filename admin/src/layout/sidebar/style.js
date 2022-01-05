import styled from "styled-components";
import {themeColor} from "../../theme/color";

const SidebarBody = styled.div`
    width: 17%;
    height: 100vh;
    position: fixed;
    top: 0;
    right:0;
    background: ${themeColor.LIGHT};
    border-left: 2px solid ${themeColor.LIGHT_BORDER_GRAY};
    
    & ul{
        width: 100%;
        padding: 0;
        margin: 0;
    }
    
    & li{
        border-bottom: 1px solid ${themeColor.LIGHT_BORDER_GRAY};
        
        & a{
            color: ${themeColor.GRAY};
            font-size: 15px;
            padding: 9px 45px;  
            
        }
    }
    & li.active{
        border-bottom: 1px solid ${themeColor.LIGHT_BORDER_GRAY};
        border-right: 4px solid ${themeColor.ORANGE};
        background: #fff;
        box-shadow: 1px 4px 19px #e7e7e7;
        & a{
            color: ${themeColor.BLACK};
            font-size: 15px;
        }
        & svg{
            color: ${themeColor.BLUE}!important;
        }
    }
    & li.active:hover{
        background: ${themeColor.BLUE};
        & a, svg{
            color: #fff;
        }
    }
    & li:hover{
        background: ${themeColor.BLUE};
        & a{
            color: #fff;
        }
    }
`

const SidebarHeader = styled.div`
    width: 100%;
    height: 80px;
    display: block;
    border-bottom: 2px solid ${themeColor.LIGHT_BORDER_GRAY};
    & > div{
        height: 100%;
        & a{
            color: ${themeColor.BLUE};
            font-size: 20px;
            font-weight: 900;
        }
    }
`

export {
    SidebarBody,
    SidebarHeader
}
