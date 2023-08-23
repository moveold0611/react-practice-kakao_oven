import { css } from "@emotion/react";

export const SDropdownUserInfo = (isShow) => css`
    display: flex;
    width: 182px;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    padding: 15px 15px;
    cursor: pointer;
    color: white;
    background-color: ${isShow ? "rgb(50,55,57)" : "transparent"}
`;

export const SUserImg = css`
    height: 30px;
    width: 30px;
    border-radius: 100%;
    border: 1px solid white;
`;

export const SUsername = css`
    margin-left: 5px;
`;

export const SDropdownUserInfoToggleIcon = css`
    margin-left: 5px;
    font-size: 10px;
`;  