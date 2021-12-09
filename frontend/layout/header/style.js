import styled from "styled-components";
import {themeColor} from "../../theme/color";

const HeaderBody = styled.header`
    width: 100%;
    height: auto;
    box-shadow: 1px 3px 8px rgba(122, 118, 255, 0.1);  k                                                                                        
`;

const InnerHeader = styled.div`
    width: 100%;
    height: 80px;
    & h1{
        color: ${themeColor.BLACK};
        padding-top: 5px;
        font-size: 20px;
    }
`

const Nav = styled.ul`
    & a{
        display: flex;
        padding-left: 30px;
        padding-bottom: 2px;
        color: ${themeColor.BLACK};
        font-size: 15px;
    }
`

const AuthButtons = styled.div`
    a{
        padding: 0px 25px; 
        display: flex;
        font-size: 13px;
        height: 40px;
        display: flex;
        align-items: center;
        border-radius: 5px;
    }
    a.login-btn{
        border: 2px solid ${themeColor.LIGHT};
        color: #7a76ff;
        margin-left: 10px;
    }
    a.register-btn{
        background: ${themeColor.MAIN};
        border: 1px solid ${themeColor.MAIN};
        color: ${themeColor.WHITE};
    }
`

const SidebarContainer = styled.div`
    display: none;
    margin-top: 10px;
    color: ${themeColor.BLACK};
    
    & svg:hover {
        color: ${themeColor.MAIN}!important;
        cursor: pointer;
    }

    @media (max-width: 900px){
        display: block;
    }
`

const HeaderWrapper = styled.div`
    & div.sidebar-close-btn{
        display: none;
    }
    @media (max-width: 900px){
        position: fixed;    
        width: 280px;
        height: 100vh;
        top: 0;
        right: 0;
        background: #fff;
        z-index: 100000;
        width: ${(props) => props.open ? '250px' : '0px'};
        visibility: ${(props) => props.open ? 'visible' : 'hidden'};
        transition: all 0.2s ease-in;
        
        & div.sidebar-close-btn{
            display: flex;
            justify-content: flex-start;
            width: 100%;
            padding-right: 20px;
            
            & svg{
                cursor: pointer;
            }
            & svg:hover{
                color: ${themeColor.MAIN}!important;
                opacity: 50%;
            }
        }
        
        & > div{
            display: flex;
            flex-direction: column!important;
        }
        & ul{
            width: 100%;
            position: relative;
            right: -20px;
            margin-bottom: 50px;
            
        }
        &  ul > div{
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column!important;
            & li {
                width: 100%!important;
                display: block!important;
                padding: 3px;
                border-radius: 5px;
                visibility: ${(props) => props.open ? 'visible' : 'hidden'};
                // transition: all 0.2s ease-in;
            }
            & li:hover{
                background: ${themeColor.MAIN}
            }
            & li:hover a{
                color: #fff;
            }
        }
        & a.register-btn, a.login-btn{
            opacity: ${(props) => props.open ? '1' : '0'};
        }
    }
    transition: all 0.2s ease-in;

`

const BodyDarker = styled.div`
    width: 100%;
    height: ${(props) => props.sidebarOpen ? '100vh' : '0'};
    visibility: ${(props) => props.sidebarOpen ? 'visible' : 'hidden'};
    position: fixed;
    z-index: 10000;
    background: rgba(39, 36, 67, 0.43);
    top: 0;
`

export {
    HeaderBody,
    InnerHeader,
    AuthButtons,
    SidebarContainer,
    HeaderWrapper,
    Nav,
    BodyDarker
}