import React from "react";
import { useState, useEffect } from 'react';

const CreateBoard = ({ components, setCurrentComponent }) => {

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
                    Create board
                </div>

                <div className="boards__head">

                    <div className="component-title">
                        Create board
                    </div>

                </div>



                <div className="create-form">

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

                    <div className="create-form__buttons">
                        <button className="create-form__button cancel">Cancel</button>
                        <button className="create-form__button">Submit</button>
                    </div>

                </div>


            </div>
        </>
    );
}
export default CreateBoard;