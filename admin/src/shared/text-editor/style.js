import styled from "styled-components";
import { themeColor } from "../../theme/color";

const TextEditorBody = styled.div`
  & div.tox.tox-tinymce {
    border-right: 4px solid ${themeColor.ORANGE}!important;
    direction: rtl !important;
  }
`;

export { TextEditorBody };
