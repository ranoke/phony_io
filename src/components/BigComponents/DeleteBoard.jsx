import React from "react";
import { useState, useEffect } from 'react';

const DeleteBoard = ({ components, setCurrentComponent }) => {

    const [inputActive, setInputActive] = useState(0);

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
                    Delete board
                </div>

                <div className="boards__head">

                    <div className="component-title">
                        Delete board
                    </div>

                </div>



                <div className="create-form delete">

                    <div className="create-form__delete-text">This action will permanently delete the board and its content and cannot be undone.
                        Please enter the board name to confirm.</div>

                    <div className="create-form__input-container" onClick={() => { setInputActive(1) }}>
                        <label htmlFor="boardname" className={inputActive === 1 ? "create-form__input-label active" : "create-form__input-label"}>Board name</label>
                        <div className={inputActive === 1 ? "create-form__input-box active" : "create-form__input-box"}>
                            <input type="text" name="boardname" className="create-form__input" />
                        </div>
                    </div>
                    

                    <div className="create-form__buttons delete">
                        <button className="create-form__button cancel">Cancel</button>
                        <button className="create-form__button delete">Delete</button>
                    </div>

                </div>


            </div>
        </>
    );
}
export default DeleteBoard;