import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"

function DashboardLeftList({ children }) {
    return (
        <div css={S.SLayout}>
            <ul css={S.SListBox}>       
                {children}
            </ul>
        </div>
    );
}

export default DashboardLeftList;