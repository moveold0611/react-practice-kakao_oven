import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1140px;
    height: 8%;
    border-bottom: 1px solid rgb(238,238,238);
    padding: 0px 0px 9px 0px;
    margin-bottom: 20px;
`;

export const SHeaderLeft = css`
    max-width: 320px;
    font-size: 36px;
    font-weight: 400;
    margin-top: 20px;   
    margin-bottom: 10px;
`;

export const SHeaderRight = css`
position: relative;
    display: flex;
    width: 325px;
    height: 34px;
    margin-top: 25px;

`;

export const SInputBox= css`
    position: relative;
    justify-content: space-between;
    width: 226.5px;
    height: 34px;
`;

export const SInput = css`
    position: absolute;
    padding: 6px 42.5px 6px 12px;
    width: 100%;
    height: 100%;
`;

export const SSearchIcon= css`
`;

export const SListTypeToggleBtnBox = css`
position: absolute;
height: 100%;
right: 0%;
`;

export const SListTypeToggleBtn= css`
width: 40px;
height: 34px;
`;
