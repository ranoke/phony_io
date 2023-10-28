import React from "react";
import { useState, useEffect } from 'react';

const Statuses = ({ components, setCurrentComponent }) => {
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
                    Statuses
                </div>

                <div class="boards__head">

                    <div class="component-title">
                        Statuses
                    </div>

                    <div class="buttons-statuses">
                        <button class="buttons-statuses__button">
                            <img src="./img/back-icon.svg" alt="" class="buttons-statuses__back-icon" />
                            Reset to default
                        </button>
                        <button class="boards__create-button statuses-button" onClick={() => { setCurrentComponent(22) }}>Add status</button>
                    </div>
                </div>

                <div class="statuses">

                    <div class="statuses__head">
                        <div class="statuses__heading one">Name</div>
                        <div class="statuses__heading two">Votable <img src="./img/statuses-info-icon.svg" alt="" class="statuses__info-icon" /></div>
                        <div class="statuses__heading three">Show on roadmap</div>
                        <div class="statuses__heading four">Privacy</div>
                        <div class="statuses__heading ">Color</div>
                    </div>

                    <div class="statuses__line"></div>

                    <div class="statuses__rows">
                        <div class="statuses__row">
                            <img src="./img/board-list-drag-icon.svg" alt="" class="statuses__drag-icon" />
                            <div class="statuses__name">
                                <div class="statuses__small-dot green"></div>
                                Segment Name 1
                            </div>
                            <div class="statuses__votable yes">yes</div>
                            <div class="statuses__show no">no</div>
                            <div class="statuses__privacy public">public</div>
                            <div class="statuses__color">
                                <div class="statuses__color-ball green"></div>
                            </div>
                            <div class="statuses__buttons">
                                <img src="./img/user-segments-edit-icon.svg" alt="" class="statuses__button" onClick={()=>{setCurrentComponent(23)}}/>
                                <img src="./img/user-segments-delete-icon.svg" alt="" class="statuses__button" />
                            </div>
                        </div>
                        <div class="statuses__row even">
                            <img src="./img/board-list-drag-icon.svg" alt="" class="statuses__drag-icon" />
                            <div class="statuses__name">
                                <div class="statuses__small-dot grey"></div>
                                Archived
                            </div>
                            <div class="statuses__votable no">no</div>
                            <div class="statuses__show yes">yes</div>
                            <div class="statuses__privacy private">private</div>
                            <div class="statuses__color">
                                <div class="statuses__color-ball grey"></div>
                            </div>
                            <div class="statuses__buttons">
                                <img src="./img/user-segments-edit-icon.svg" alt="" class="statuses__button" onClick={()=>{setCurrentComponent(23)}}/>
                                <img src="./img/user-segments-delete-icon.svg" alt="" class="statuses__button" />
                            </div>
                        </div>
                        <div class="statuses__row">
                            <img src="./img/board-list-drag-icon.svg" alt="" class="statuses__drag-icon" />
                            <div class="statuses__name">
                                <div class="statuses__small-dot red"></div>
                                Segment Name 1
                            </div>
                            <div class="statuses__votable yes">yes</div>
                            <div class="statuses__show no">no</div>
                            <div class="statuses__privacy public">public</div>
                            <div class="statuses__color">
                                <div class="statuses__color-ball red"></div>
                            </div>
                            <div class="statuses__buttons">
                                <img src="./img/user-segments-edit-icon.svg" alt="" class="statuses__button" onClick={()=>{setCurrentComponent(23)}}/>
                                <img src="./img/user-segments-delete-icon.svg" alt="" class="statuses__button" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Statuses;