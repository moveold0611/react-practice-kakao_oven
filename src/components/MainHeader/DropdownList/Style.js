import { css } from "@emotion/react";

export const SLayout =  (isShow) => css`
    position: absolute;
    background-color: white;
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    border: 1px solid rgba(0,0,0,.15);
    list-style: none;   
    padding: 5px 0px;
    top: ${isShow ? "50px" : "-123456789px"};
    z-index: 1000;
`;

export const SContent = css`
    padding: 6px 24px;
    &:hover {
        background-color: rgb(237,237,237);
    }
`;

export const SLiner = css`
    height: 1px;
    margin: 9px 0;
    overflow: hidden;
    background-color: #e5e5e5;
`;