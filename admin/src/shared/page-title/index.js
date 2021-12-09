import React from 'react'
import {PageTitleBody} from "./style";

const PageTitle = ({title}) => {
    return (
        <PageTitleBody>
            <p>{title}</p>
        </PageTitleBody>
    )
}

export default PageTitle;
