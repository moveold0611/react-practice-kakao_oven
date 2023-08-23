/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';

function PageHeader({ title }) {
    return (
        <div css={S.SLayout}>
            <h1 css={S.SHeaderLeft}>{title}</h1>

            <div css={S.SHeaderRight}>
                <div css={S.SInputBox}>
                    <input type="text" css={S.SInput}/>
                    <span css={S.SSearchIcon}></span>
                </div>
                <div css={S.SListTypeToggleBtnBox}>
                    <button css={S.SListTypeToggleBtn}></button>
                    <button css={S.SListTypeToggleBtn}></button>
                </div>
            </div>
            
        </div>
    );
}

export default PageHeader;