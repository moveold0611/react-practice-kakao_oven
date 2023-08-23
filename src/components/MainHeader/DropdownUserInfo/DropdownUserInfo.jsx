/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React, { useEffect } from 'react';
import { BsFillCaretDownFill } from "react-icons/bs"
import { useRecoilState } from "recoil";
import { isDropdownShowState } from "../../../store/ShowState";

function DropdownUserInfo(props) {
    
    const [ isDropdownShow, setIsDropdownShow ] = useRecoilState(isDropdownShowState);

    const handleDropdownShowClick = () => {
        setIsDropdownShow(!isDropdownShow)
    }

    return (
        <a css={S.SDropdownUserInfo(isDropdownShow)} onClick={handleDropdownShowClick}>
            <img css={S.SUserImg} src="C:\aws\react\kakao-oven\public\logo512.png"/>
            <span css={S.SUsername}>moveold0611</span>
            <BsFillCaretDownFill css={S.SDropdownUserInfoToggleIcon}/>
        </a>
    );
}

export default DropdownUserInfo;