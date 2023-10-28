import React from "react";
import { useState, useEffect } from 'react';

const EditBoard = ({ components, setCurrentComponent }) => {

    const [inputActive, setInputActive] = useState(0);


    const [radioOneActive, setRadioOneActive] = useState(false);
    const [radioTwoActive, setRadioTwoActive] = useState(false);


    const [slideRadioActive, setSlideRadioActive] = useState([false, false]);
    const handleSlideRadioClick = (index) => {
        const newActiveItems = slideRadioActive.map((item, i) =>
            i === index ? !item : item // Змінюємо значення на протилежне для вибраного індексу
        );
        setSlideRadioActive(newActiveItems);
    };
    const [checkEditActive, setCheckEditActive] = useState([false, false]);
    const handleCheckEditClick = (index) => {
        const newActiveItems = checkEditActive.map((item, i) =>
            i === index ? !item : item // Змінюємо значення на протилежне для вибраного індексу
        );
        setCheckEditActive(newActiveItems);
    };


    return (
        <>
            <div className="page-content">
                <div className="history-path"  >
                    <button className="history-path__button" onClick={() => { setCurrentComponent(0) }}>
                        Dashboard  /
                    </button>
                    <button className="history-path__button" onClick={() => { setCurrentComponent(1) }}>
                        Boards  /
                    </button>
                    Edit Board
                </div>

                <div className="boards__head">

                    <div className="component-title">
                        Edit Board
                    </div>

                </div>



                <div className="create-form edit">
                    <div className="create-form__content">
                        <div className="create-form__inputs-container">
                            <div className="create-form__input-container" onClick={() => { setInputActive(1) }}>
                                <label htmlFor="boardname" className={inputActive === 1 ? "create-form__input-label active" : "create-form__input-label"}>Board name</label>
                                <div className={inputActive === 1 ? "create-form__input-box active" : "create-form__input-box"}>
                                    <input type="text" name="boardname" className="create-form__input" />
                                </div>
                            </div>
                            <div className="create-form__input-container" onClick={() => { setInputActive(2) }}>
                                <label htmlFor="URL" className={inputActive === 2 ? "create-form__input-label active" : "create-form__input-label"}>URL</label>
                                <div className={inputActive === 2 ? "create-form__input-box active" : "create-form__input-box"}>
                                    <input type="url" name="URL" className="create-form__input" />
                                </div>
                            </div>
                            <div className="create-form__input-container" onClick={() => { setInputActive(3) }}>
                                <label htmlFor="description" className={inputActive === 3 ? "create-form__input-label active" : "create-form__input-label"}>Description</label>
                                <div className={inputActive === 3 ? "create-form__input-box desc active" : "create-form__input-box desc"}>
                                    <textarea type="text" name="description" className="create-form__input desc" />
                                </div>
                            </div>
                        </div>

                        <div className="board-settings">
                            <div className="board-settings__row">

                                <div className="board-settings__part">
                                    <div className="board-settings__heading">Privacy</div>
                                    <div className="board-settings__content-box">
                                        <div className="board-settings__clickable-row" onClick={() => { setRadioOneActive(false) }}>
                                            <div className={radioOneActive === false ? "board-settings__radio active" : "board-settings__radio"}>
                                                <div className={radioOneActive === false ? "board-settings__radio-circle active" : "board-settings__radio-circle"}></div>
                                            </div>
                                            <div className="board-settings__text-box">
                                                <div className="board-settings__text-1">Public</div>
                                                <div className="board-settings__text-2">The board is visible to anyone. Search engines like Google will index it.</div>
                                            </div>
                                        </div>
                                        <div className="board-settings__clickable-row" onClick={() => { setRadioOneActive(true) }}>
                                            <div className={radioOneActive === true ? "board-settings__radio active" : "board-settings__radio"}>
                                                <div className={radioOneActive === true ? "board-settings__radio-circle active" : "board-settings__radio-circle"}></div>
                                            </div>
                                            <div className="board-settings__text-box">
                                                <div className="board-settings__text-1">Private</div>
                                                <div className="board-settings__text-2">Only people added to the board can access it</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="board-settings__part">
                                    <div className="board-settings__heading">Status</div>
                                    <div className="board-settings__content-box">
                                        <div className="board-settings__clickable-row" onClick={() => { setRadioTwoActive(false) }}>
                                            <div className={radioTwoActive === false ? "board-settings__radio active" : "board-settings__radio"}>
                                                <div className={radioTwoActive === false ? "board-settings__radio-circle active" : "board-settings__radio-circle"}></div>
                                            </div>
                                            <div className="board-settings__text-box">
                                                <div className="board-settings__text-1">Locked</div>
                                                <div className="board-settings__text-2">Only Board Moderators can create new posts</div>
                                            </div>
                                        </div>
                                        <div className="board-settings__clickable-row" onClick={() => { setRadioTwoActive(true) }}>
                                            <div className={radioTwoActive === true ? "board-settings__radio active" : "board-settings__radio"}>
                                                <div className={radioTwoActive === true ? "board-settings__radio-circle active" : "board-settings__radio-circle"}></div>
                                            </div>
                                            <div className="board-settings__text-box">
                                                <div className="board-settings__text-1">Unlocked</div>
                                                <div className="board-settings__text-2">Anybody can post</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="board-settings__row">

                                <div className="board-settings__part">
                                    <div className="board-settings__content-box slide">
                                        <div className="board-settings__clickable-row slide" onClick={() => { handleSlideRadioClick(0) }}>
                                            <div className={slideRadioActive[0] === true ? "board-settings__radio sliding active" : "board-settings__radio sliding"}>
                                                <div className={slideRadioActive[0] === true ? "board-settings__radio-circle sliding active" : "board-settings__radio-circle sliding"}></div>
                                            </div>
                                            <div className="board-settings__text-box">
                                                <div className="board-settings__text-1">Board on roadmap</div>
                                                <div className="board-settings__text-2">By default, your board is visible on your roadmap. Turn it off if you don’t want your board and its posts to be shown there.</div>
                                            </div>
                                        </div>
                                        <div className="board-settings__clickable-row" onClick={() => { handleSlideRadioClick(1) }}>
                                            <div className={slideRadioActive[1] === true ? "board-settings__radio sliding active" : "board-settings__radio sliding"}>
                                                <div className={slideRadioActive[1] === true ? "board-settings__radio-circle sliding active" : "board-settings__radio-circle sliding"}></div>
                                            </div>
                                            <div className="board-settings__text-box">
                                                <div className="board-settings__text-1">Indexed</div>
                                                <div className="board-settings__text-2">By default, your board will be indexed by search engines like Google. Turn it off if you don’t want that</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="board-settings__part ">
                                    <div className="board-settings__content-box">
                                        <div className="board-settings__clickable-row" onClick={() => { handleCheckEditClick(0) }}>
                                            <div className={checkEditActive[0] === true ? "board-settings__radio check active" : "board-settings__radio check"}>
                                                <img src="./img/check-icon.svg" className={checkEditActive[0] === true ? "board-settings__check-icon active" : "board-settings__check-icon"}/>
                                            </div>
                                            <div className="board-settings__text-box">
                                                <div className="board-settings__text-1">Board on roadmap</div>
                                                <div className="board-settings__text-2">Only Board Moderators can create new posts</div>
                                            </div>
                                        </div>
                                        <div className="board-settings__clickable-row" onClick={() => { handleCheckEditClick(1) }}>
                                            <div className={checkEditActive[1] === true ? "board-settings__radio check active" : "board-settings__radio check"}>
                                                <img src="./img/check-icon.svg" className={checkEditActive[1] === true ? "board-settings__check-icon active" : "board-settings__check-icon"}/>
                                            </div>
                                            <div className="board-settings__text-box">
                                                <div className="board-settings__text-1">Unlocked</div>
                                                <div className="board-settings__text-2">Anybody can post</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="create-form__buttons">
                        <button className="create-form__button cancel">Cancel</button>
                        <button className="create-form__button">Submit</button>
                    </div>

                </div>


            </div>
        </>
    );
}
export default EditBoard;