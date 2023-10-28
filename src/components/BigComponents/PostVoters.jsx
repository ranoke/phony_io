import React from "react";
import { useState, useEffect } from 'react';

const PostVoters = ({ components, setCurrentComponent }) => {
    const [menuActive, setMenuActive] = useState(false);


    const [pagination, setPagination] = useState(1);
    const handlePagination = (type) => {
        if (type === '-') {
            if (pagination > 1) {
                let pagIndex = pagination - 1;
                setPagination(pagIndex)
            }
        } else if (type === '+') {
            if (pagination < 5) {
                let pagIndex = pagination + 1;
                setPagination(pagIndex)
            }
        }
    }

    return (
        <>
            <div className="page-content">
                <div className="history-path"  >
                    <button className="history-path__button" onClick={() => { setCurrentComponent(0) }}>
                        Dashboard  /
                    </button>
                    <button className="history-path__button" onClick={() => { setCurrentComponent(5) }}>
                        Posts  /
                    </button>                        
                    Post voters
                </div>

                <div className="boards__head">

                    <div className="component-title">
                        Voters for <div>“Send status updates back through Intercom” </div>
                    </div>

                    <div className="posts-buttons">
                        <div className="posts-buttons__export-import">
                            <button className="posts-buttons__button voters">
                                <img src="./img/post-export-icon.svg" alt="" className="posts-buttons__icon" />
                                Export
                            </button>
                        </div>
                    </div>

                </div>

                <div className="post-voters">
                    <div className={pagination === 1 ? "post-voters__rows active" : "post-voters__rows"}>
                        <div className="post-voters__row even">
                            <img src="./img/post-voters-avatar-1.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Sophia-Rose Nava</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                        <div className="post-voters__row">
                            <img src="./img/post-voters-avatar-2.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Yuvaan Whittington</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                        <div className="post-voters__row even">
                            <img src="./img/post-voters-avatar-3.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Kristopher Winter</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                        <div className="post-voters__row">
                            <img src="./img/post-voters-avatar-4.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Amal Gamble</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                        <div className="post-voters__row even">
                            <img src="./img/post-voters-avatar-5.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Amanah Mcneill</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                        <div className="post-voters__row">
                            <img src="./img/post-voters-avatar-6.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Anna Walley</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                        <div className="post-voters__row even">
                            <img src="./img/post-voters-avatar-7.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Ashraf Ryder</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                        <div className="post-voters__row">
                            <img src="./img/post-voters-avatar-8.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Clarke Wickens</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                    </div>
                    <div className={pagination === 2 ? "post-voters__rows active" : "post-voters__rows"}>
                        <div className="post-voters__row even">
                            <img src="./img/post-voters-avatar-1.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Sophia-Rose Nava</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                        <div className="post-voters__row">
                            <img src="./img/post-voters-avatar-2.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Yuvaan Whittington</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                        <div className="post-voters__row even">
                            <img src="./img/post-voters-avatar-3.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Kristopher Winter</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                        <div className="post-voters__row">
                            <img src="./img/post-voters-avatar-4.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Amal Gamble</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                        <div className="post-voters__row even">
                            <img src="./img/post-voters-avatar-5.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Amanah Mcneill</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                        <div className="post-voters__row">
                            <img src="./img/post-voters-avatar-6.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Anna Walley</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                        <div className="post-voters__row even">
                            <img src="./img/post-voters-avatar-7.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Ashraf Ryder</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                        <div className="post-voters__row">
                            <img src="./img/post-voters-avatar-8.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Clarke Wickens</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                    </div>
                    <div className={pagination === 3 ? "post-voters__rows active" : "post-voters__rows"}>
                        <div className="post-voters__row even">
                            <img src="./img/post-voters-avatar-1.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Sophia-Rose Nava</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                        <div className="post-voters__row">
                            <img src="./img/post-voters-avatar-2.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Yuvaan Whittington</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                        <div className="post-voters__row even">
                            <img src="./img/post-voters-avatar-3.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Kristopher Winter</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                        <div className="post-voters__row">
                            <img src="./img/post-voters-avatar-4.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Amal Gamble</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                        <div className="post-voters__row even">
                            <img src="./img/post-voters-avatar-5.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Amanah Mcneill</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                        <div className="post-voters__row">
                            <img src="./img/post-voters-avatar-6.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Anna Walley</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                        <div className="post-voters__row even">
                            <img src="./img/post-voters-avatar-7.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Ashraf Ryder</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                        <div className="post-voters__row">
                            <img src="./img/post-voters-avatar-8.svg" alt="" className="post-voters__avatar" />
                            <div className="post-voters__name">Clarke Wickens</div>
                            <div className="post-voters__time">6 days ago</div>
                            <img src="./img/cross-icon.svg" alt="" className="post-voters__cross" onClick={()=>{setMenuActive(true)}}/>
                        </div>
                    </div>

                    <div className="post-voters__line"></div>
                    <div className="post-voters__pagination">
                        <div className="post-foot__pagination">
                            <div className="post-foot__pag-box" onClick={() => { setPagination(1) }}>
                                <img src="./img/double-arrow-pag.svg" alt="" className="post-foot__double-arrow" />
                            </div>
                            <div className="post-foot__pag-box" onClick={() => { handlePagination('-') }}>
                                <img src="./img/arrow-pag.svg" alt="" className="post-foot__arrow" />
                            </div>

                            <div className={pagination === 1 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(1) }}>
                                1
                            </div>
                            <div className={pagination === 2 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(2) }}>
                                2
                            </div>
                            <div className={pagination === 3 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(3) }}>
                                3
                            </div>
                            <div className={pagination === 4 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(4) }}>
                                4
                            </div>
                            <div className={pagination === 5 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(5) }}>
                                5
                            </div>

                            <div className="post-foot__pag-box" onClick={() => { handlePagination('+') }}>
                                <img src="./img/arrow-pag.svg" alt="" className="post-foot__arrow right" />
                            </div>
                            <div className="post-foot__pag-box" onClick={() => { setPagination(5) }}>
                                <img src="./img/double-arrow-pag.svg" alt="" className="post-foot__double-arrow right" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={menuActive === true ? "voter-menu active" : "voter-menu"}>
                    <div className="voter-menu__box posts">
                        <img src="./img/boards-menu-cross.svg" onClick={() => { setMenuActive(false) }} alt="" className="voter-menu__cross" />
                        <div className="voter-menu__text">
                            Are you sure you would like to delete this vote?
                        </div>
                        <div className="voter-menu__buttons">
                            <button className="voter-menu__button cancel">Cancel</button>
                            <button className="voter-menu__button">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PostVoters;