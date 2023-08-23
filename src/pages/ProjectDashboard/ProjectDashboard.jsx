/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import PageHeader from "../../components/MainContainer/PageHeader/PageHeader";
import MainContainer from "../../components/MainContainer/MainContainer";
import DashboardLeftList from "../../components/Dashboard/DashboardLeftList/DashboardLeftList";
import ListItem from "../../components/Dashboard/ListItem/ListItem";
import ProjectItem from "../../components/Dashboard/ProjectItem/ProjectItem";


function ProjectDashboard(props) {


    return (
        <>
            <MainContainer>
            <PageHeader title={"프로젝트 대쉬보드"} />
            <div css={S.SProject}>
                <DashboardLeftList>
                    <ListItem ListItem={"나의 프로젝트"}/>
                    <ListItem ListItem={"나에게 공유된 프로젝트"}/>
                </DashboardLeftList>

                <div css={S.SRigth}>
                    <div css={S.SHeadLine}>
                        <div css={S.SHeadLineLeftBtnBox}>
                            <button css={S.SHeadLineLeftBtn}>모두선택</button>
                        </div>
                        <button css={S.SHeadLineRightBtn}>새로운 프로젝트 만들기</button>
                    </div>
                    <br />
                    <div css={S.SProjectBox}>
                        <div css={S.Projects}>
                            <ProjectItem />
                        </div>
                        <div></div>

                    </div>
                </div>
            </div>
            </MainContainer>
        </>
    );
}

export default ProjectDashboard;