import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import DropdownList from './DropdownList/DropdownList';
import DropdownUserInfo from './DropdownUserInfo/DropdownUserInfo';

function MainHeader(props) {
    return (
        <header css={S.SHeader}>
            <div css={S.SContainer}>
                <div css={S.SSiteLogo}>
                    <a css={S.SSiteLargeLogo}>Oven</a>
                    <a css={S.SSiteSmallLogo}>Beta</a>
                </div>
                <ul css={S.SDropdownBox}>
                    <li css={S.SDropdownBoxContainer}>
                        <DropdownUserInfo />
                        <DropdownList />
                    </li>
                </ul>
            </div>  
        </header>
    );
}

export default MainHeader;