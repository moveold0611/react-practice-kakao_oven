/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import MainHeader from "../MainHeader/MainHeader";
import MainFooter from "../MainFooter/MainFooter";


function MainLayout({ children }) {
    return (
        <div css={S.SLayout}>
            <MainHeader />
                {children}
            <MainFooter />
        </div>
    );
}

export default MainLayout;  