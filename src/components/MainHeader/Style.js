import { css } from "@emotion/react";

export const SHeader = css`
    display: flex;
    width: 100%;
    background-color: rgb(56,61,64);
    min-height: 50px;
    margin-bottom: 20px;
`;

export const SContainer = css`
    display: flex;
    justify-content: space-between;
    height: 50px;
    width: 1140px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

export const SSiteLogo = css`
    position: relative;
    color: #eee;
    padding: 15px;
    min-height: 50px;
    width: 80px;
    font-size: 22px;
    cursor: pointer;
`;

export const SSiteLargeLogo = css`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
`;


export const SSiteSmallLogo= css`
    position: absolute;
    right: -15%;
    top: 20%;
    font-size: 11px;
    color: #aaa;
`;

export const SDropdownBox = css`
    padding: 0px 0px;
    margin: 0;
    margin-right: -15px;
    cursor: pointer;
`;

export const SDropdownBoxContainer= css`
    display: flex;
    flex-direction: column;
`;