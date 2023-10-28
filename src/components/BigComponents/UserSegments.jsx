import React from "react";
import { useState, useEffect } from 'react';

const UserSegments = ({ components, setCurrentComponent }) => {
    const [menuActive, setMenuActive] = useState(false);
    const [menuRowActive, setMenuRowActive] = useState(false);

    const [likeActive, setLikeActive] = useState([false, false, false, false, false, false, false, false, false, false,]);
    const handleLikeClick = (index) => {
        const newActiveItems = likeActive.map((item, i) =>
            i === index ? !item : item // Змінюємо значення на протилежне для вибраного індексу
        );
        setLikeActive(newActiveItems);
    };


    const [navActive, setNavActive] = useState(true);

    return (
        <>
            <div class="page-content">
                <div class="history-path"  >
                    <button class="history-path__button" onClick={() => { setCurrentComponent(0) }}>
                        Dashboard  /
                    </button>
                    <button class="history-path__button" onClick={() => { setCurrentComponent(15) }}>
                        User  /
                    </button>
                    User Segments
                </div>

                <div class="boards__head">

                    <div class="component-title">
                        User Segments
                    </div>

                    <button class="boards__create-button segment" onClick={() => { setCurrentComponent(2) }}>Add new segment</button>
                </div>

                <div class="user-segments">
                    <div class="user-segments__head">
                        <div class="user-segments__heading one">Name</div>
                        <div class="user-segments__heading">String representation</div>
                    </div>
                    <div class="user-segments__line"></div>
                    <div class="user-segments__rows">
                        <div class="user-segments__row">
                            <img src="./img/board-list-drag-icon.svg" alt="" class="user-segments__drag-icon" />
                            <div class="user-segments__name">Segment Name 1</div>
                            <div class="user-segments__string">company is “value”</div>
                            <div class="user-segments__buttons">
                                <img src="./img/user-segments-edit-icon.svg" alt="" class="user-segments__button" />
                                <img src="./img/user-segments-delete-icon.svg" alt="" class="user-segments__button" />
                            </div>
                        </div>
                        <div class="user-segments__row even">
                            <img src="./img/board-list-drag-icon.svg" alt="" class="user-segments__drag-icon" />
                            <div class="user-segments__name">Segment Name 1</div>
                            <div class="user-segments__string">company is “value”</div>
                            <div class="user-segments__buttons">
                                <img src="./img/user-segments-edit-icon.svg" alt="" class="user-segments__button" />
                                <img src="./img/user-segments-delete-icon.svg" alt="" class="user-segments__button" />
                            </div>
                        </div>
                        <div class="user-segments__row">
                            <img src="./img/board-list-drag-icon.svg" alt="" class="user-segments__drag-icon" />
                            <div class="user-segments__name">Segment Name 1</div>
                            <div class="user-segments__string">company is “value”</div>
                            <div class="user-segments__buttons">
                                <img src="./img/user-segments-edit-icon.svg" alt="" class="user-segments__button" />
                                <img src="./img/user-segments-delete-icon.svg" alt="" class="user-segments__button" />
                            </div>
                        </div>
                        <div class="user-segments__row even">
                            <img src="./img/board-list-drag-icon.svg" alt="" class="user-segments__drag-icon" />
                            <div class="user-segments__name">Segment Name 1</div>
                            <div class="user-segments__string">company is “value”</div>
                            <div class="user-segments__buttons">
                                <img src="./img/user-segments-edit-icon.svg" alt="" class="user-segments__button" />
                                <img src="./img/user-segments-delete-icon.svg" alt="" class="user-segments__button" />
                            </div>
                        </div>
                        <div class="user-segments__row">
                            <img src="./img/board-list-drag-icon.svg" alt="" class="user-segments__drag-icon" />
                            <div class="user-segments__name">Segment Name 1</div>
                            <div class="user-segments__string">company is “value”</div>
                            <div class="user-segments__buttons">
                                <img src="./img/user-segments-edit-icon.svg" alt="" class="user-segments__button" />
                                <img src="./img/user-segments-delete-icon.svg" alt="" class="user-segments__button" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}
export default UserSegments;