import styled from "styled-components";
import {themeColor} from "../../theme/color";

const ButtonContainer = styled.button`
    width: ${(props) => props.block && '100%'};
    padding: ${(props) => props.size === 'lg' ? '8px 30px' : props.size === 'md' ? '8px 15px' : '5px 12px'};
    font-size: ${(props) => props.size === 'lg' ? '18px' : props.size === 'md' ? '17px' : '15px'};
    border-radius: ${(props) => props.radius ? props.radius : '5px'};
    border: none;
    color: ${(props) => props.color ? props.color : themeColor.BLACK};
    background: ${(props) => props.background ? props.background : themeColor.MAIN};
    cursor: pointer;
    &:hover{
        opacity: 80%;
    }
`

export {
    ButtonContainer
}