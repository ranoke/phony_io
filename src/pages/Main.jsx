import SideBar from "../components/BigComponents/SideBar.jsx";
import Head from "../components/BigComponents/Head.jsx";

import Dashboard from "../components/BigComponents/Dashboard.jsx";
import BoardList from "../components/BigComponents/BoardList.jsx";
import CreateBoard from "../components/BigComponents/CreateBoard.jsx";
import EditBoard from "../components/BigComponents/EditBoard.jsx";
import DeleteBoard from "../components/BigComponents/DeleteBoard.jsx";
import PostList from "../components/BigComponents/PostList.jsx";
import PostVoters from "../components/BigComponents/PostVoters.jsx";
import ImportPost from "../components/BigComponents/ImportPost.jsx";
import EditPost from "../components/BigComponents/EditPost.jsx";
import AddPost from "../components/BigComponents/AddPost.jsx";
import PostView from "../components/BigComponents/PostView.jsx";
import Tags from "../components/BigComponents/Tags.jsx";
import EditTag from "../components/BigComponents/EditTag.jsx";
import AddTag from "../components/BigComponents/AddTag.jsx";
import ReplaceTag from "../components/BigComponents/ReplaceTag.jsx";
import UserList from "../components/BigComponents/UserList.jsx";
import UserDetails from "../components/BigComponents/UserDetails.jsx";
import Activities from "../components/BigComponents/Activities.jsx";
import UserSegments from "../components/BigComponents/UserSegments.jsx";
import AddUserSegment from "../components/BigComponents/AddUserSegment.jsx";
import EditUserSegment from "../components/BigComponents/EditUserSegment.jsx";
import Statuses from "../components/BigComponents/StatusList.jsx";
import AddStatus from "../components/BigComponents/AddStatus.jsx";
import EditStatus from "../components/BigComponents/EditStatus.jsx";
import ChangeLogList from "../components/BigComponents/ChangeLogList.jsx";
import AddRecord from "../components/BigComponents/AddRecord.jsx";
import EditRecord from "../components/BigComponents/EditRecord.jsx";
import ChangeLogLabels from "../components/BigComponents/ChangeLogLabels.jsx";
import AddChangeLogLabel from "../components/BigComponents/AddChangeLogLabel.jsx";
import EditChangeLogLabel from "../components/BigComponents/EditChangeLogLabel.jsx";
import ChangeLogSettings from "../components/BigComponents/ChangeLogSettings.jsx";
import GeneralSettings from "../components/BigComponents/GeneralSettings.jsx";
import AppearanceSettings from "../components/BigComponents/SettingsAppearance.jsx";
import SettingsEmail from "../components/BigComponents/SettingsEmail.jsx";
import SettingsSSO from "../components/BigComponents/SettingsSSO.jsx";
import SettingsDomain from "../components/BigComponents/SettingsDomain.jsx";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// const BigComponents = [Dashboard+, BoardList+, CreateBoard+, EditBoard+, DeleteBoard+, PostList+, PostView+, PostVoters+, ImportPost+, AddPost+, EditPost+, Tags+, EditTag+, AddTag+, ReplaceTag+, UserList+, UserDetails+, Activities+, UserSegments+, AddUserSegment+, EditUserSegment+,        ];
const BigComponents = [Dashboard, BoardList, CreateBoard,
    EditBoard, DeleteBoard, PostList,
    PostView, PostVoters, ImportPost,
    AddPost, EditPost, Tags,
    EditTag, AddTag, ReplaceTag,
    UserList, UserDetails, Activities,
    UserSegments, AddUserSegment, EditUserSegment,
    Statuses, AddStatus, EditStatus, ChangeLogList,
    AddRecord, EditRecord, ChangeLogLabels,
    AddChangeLogLabel, EditChangeLogLabel, ChangeLogSettings,
    GeneralSettings, AppearanceSettings, SettingsEmail,
    SettingsDomain, SettingsSSO,];
const Main = () => {

    const [currentComponent, setCurrentComponent] = useState(0);


    return (
        <>
            <div className="page">
                <SideBar
                    components={currentComponent}
                    setCurrentComponent={setCurrentComponent}
                ></SideBar>
                <div className="page__vertical-container">
                    <Head></Head>

                    {React.createElement(BigComponents[currentComponent], {
                        components: currentComponent,
                        setCurrentComponent: setCurrentComponent,
                    })}

                </div>
            </div>
        </>
    );
};

export default Main;
