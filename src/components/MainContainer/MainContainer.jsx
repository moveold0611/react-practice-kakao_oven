/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import PageHeader from "./PageHeader/PageHeader";


function MainContainer({ children }) {
    return (
        <div css={S.SLayout}> 
            {children}
        </div>
    )
}   

export default MainContainer;