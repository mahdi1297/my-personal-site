import styled from "styled-components";
import {themeColor} from "../../theme/color";

const PageTitleBody = styled.div`
    width: 100%;
    border-bottom : 1px solid ${themeColor.LIGHT_BORDER_GRAY};
    padding-bottom: 6px;
    & p{
        border-bottom: 2px solid ${themeColor.ORANGE};
        display: inline;
        padding: 5px;
        margin: 0;
        color: ${themeColor.GRAY};
        font-size: 15px;
    }
`

export {
    PageTitleBody
}
