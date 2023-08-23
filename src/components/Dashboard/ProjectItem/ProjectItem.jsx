/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';

function ProjectItem(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SProjectBox}>
                <div>
                    <input type="checkbox" />
                </div>
                <div>
                    <button></button>
                </div>
                <a href="">
                    <img src="" alt="" />
                </a>
                <div>
                    <h3>
                        <a href=""></a>
                    </h3>
                    <p></p>
                    <hr />
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );  
}

export default ProjectItem;