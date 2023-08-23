/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';

function ListItem({ ListItem }) {
    
    return (
        <li css={S.SList}>
            <a css={S.SListText}>{ListItem}</a>
        </li>
    );
}

export default ListItem;