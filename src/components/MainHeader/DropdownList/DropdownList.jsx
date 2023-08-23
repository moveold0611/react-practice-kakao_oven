import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { isDropdownShowState  } from '../../../store/ShowState';
import { useRecoilState } from 'recoil';
import {  useNavigate } from 'react-router-dom';
// import {  BrowserRouter as Router } from "react-router-dom";

function DropdownList({ children }) {

    const [ isDropdownShow, setIsdropDownShow ] = useRecoilState(isDropdownShowState);

    // const navigate = useNavigate();

    return (
        <ul css={S.SLayout(isDropdownShow)} >
                <li css={S.SContent}>프로젝트 대쉬보드</li>
                <li css={S.SContent}>계정 설정하기</li>
                <li css={S.SContent}>헬프데스크</li>
                <li css={S.SLiner} />
                <li css={S.SContent}>로그아웃</li>
        </ul>
    );
}

export default DropdownList;