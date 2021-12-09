import React from "react";
import {ButtonContainer} from "./style";


const Button = ({children, size, color, fontSize, background, block, radius}) => {
    return (
        <ButtonContainer
            size={size}
            color={color}
            background={background}
            block={block}
            fontSize={fontSize}
            radius={radius}>
            {children}
        </ButtonContainer>
    )
}


export default Button