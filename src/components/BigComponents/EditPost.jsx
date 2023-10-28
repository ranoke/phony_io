import React from "react";
import { useState, useEffect } from 'react';

const EditPost = ({ components, setCurrentComponent }) => {
    const [dropNameActive, setDropNameActive] = useState(false);
    const [dropName, setDropName] = useState("1 board");

    const [dropOwnerActive, setDropOwnerActive] = useState(false);
    const [dropOwner, setDropOwner] = useState("no selection");

    const [dropStatusActive, setDropStatusActive] = useState(false);
    const [dropStatus, setDropStatus] = useState("first status");
    


    const [file, setFile] = useState([]);

    const onInputChangeFile = (e) => {
        const filesArray = Array.from(e.target.files);
        setFile((prevFiles) => [...prevFiles, ...filesArray]);
    };

    const onDeleteFile = (index) => {
        setFile((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const renderImagePreview = (fileItem, index) => {
        const imageUrl = URL.createObjectURL(fileItem);
        return (
            <div key={index} className="edit-post__imported-file">
                <img src={imageUrl} alt={`Preview ${index}`} className="edit-post__image-preview" />
                <img
                    src="./img/cross-icon.svg"
                    alt=""
                    className="edit-post__cancel-icon"
                    onClick={() => onDeleteFile(index)}
                />
            </div>
        );
    };

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
                    Edit post
                </div>

                <div className="boards__head">

                    <div className="component-title">
                        Edit post
                    </div>


                </div>

                <div className="edit-post">
                    <div className="edit-post__box">
                        <div className="edit-post__heading">Board name <span>*</span></div>
                        <div className="edit-post__board-choose">
                            <div className="edit-post__preview" onClick={() => { if (dropNameActive === true) { setDropNameActive(false) } else { setDropNameActive(true) } }}>{dropName} <img src="./img/dropdown-small-arrow.svg" alt="" className={dropNameActive === true ? "edit-post__drop-arrow active" : "edit-post__drop-arrow"} /></div>
                            <div className={dropNameActive === true ? "edit-post__dropdown active" : "edit-post__dropdown"}>
                                <div className="edit-post__row" onClick={() => { setDropName("1 board"); setDropNameActive(false) }}>
                                    1 board
                                </div>
                                <div className="edit-post__row" onClick={() => { setDropName("2 board"); setDropNameActive(false) }}>
                                    2 board
                                </div>
                                <div className="edit-post__row" onClick={() => { setDropName("3 board"); setDropNameActive(false) }}>
                                    3 board
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="edit-post__box">
                        <div className="edit-post__heading">Title <span>*</span></div>
                        <input type="text" className="edit-post__input" placeholder="Enter post title" />
                    </div>

                    <div className="edit-post__box">
                        <div className="edit-post__heading">Detailes</div>
                        <textarea type="text" name="description" className="edit-post__input textarea" placeholder="Enter detailes" />
                    </div>

                    <div className="edit-post__box">
                        <div className="edit-post__heading">Image </div>
                        <div className="edit-post__file-container" >
                            <img src="./img/clip-icon.svg" alt="" className="edit-post__clip-icon" />
                            <div className="edit-post__file-text"><label htmlFor="file">Add file</label> or drop files here</div>
                            <input id="file" type="file" className="edit-post__file-input" onChange={onInputChangeFile} />
                        </div>
                    </div>
                    <div className="edit-post__imported">
                        {file.map((fileItem, index) => renderImagePreview(fileItem, index))}
                    </div>

                    <div className="edit-post__box">
                        <div className="edit-post__heading">Owner</div>
                        <div className="edit-post__board-choose">
                            <div className="edit-post__preview" onClick={() => { if (dropOwnerActive === true) { setDropOwnerActive(false) } else { setDropOwnerActive(true) } }}>{dropOwner} <img src="./img/dropdown-small-arrow.svg" alt="" className={dropOwnerActive === true ? "edit-post__drop-arrow active" : "edit-post__drop-arrow"} /></div>
                            <div className={dropOwnerActive === true ? "edit-post__dropdown active" : "edit-post__dropdown"}>
                                <div className="edit-post__row" onClick={() => { setDropOwner("no selection"); setDropOwnerActive(false) }}>
                                    no selection
                                </div>
                                <div className="edit-post__row" onClick={() => { setDropOwner("second owner"); setDropOwnerActive(false) }}>
                                    second owner
                                </div>
                                <div className="edit-post__row" onClick={() => { setDropOwner("third owner"); setDropOwnerActive(false) }}>
                                    third owner
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="edit-post__box">
                        <div className="edit-post__heading">Status <span>*</span></div>
                        <div className="edit-post__board-choose">
                            <div className="edit-post__preview" onClick={() => { if (dropStatusActive === true) { setDropStatusActive(false) } else { setDropStatusActive(true) } }}>{dropStatus} <img src="./img/dropdown-small-arrow.svg" alt="" className={dropStatusActive === true ? "edit-post__drop-arrow active" : "edit-post__drop-arrow"} /></div>
                            <div className={dropStatusActive === true ? "edit-post__dropdown active" : "edit-post__dropdown"}>
                                <div className="edit-post__row" onClick={() => { setDropStatus("first status"); setDropStatusActive(false) }}>
                                    first status
                                </div>
                                <div className="edit-post__row" onClick={() => { setDropStatus("second status"); setDropStatusActive(false) }}>
                                    second status
                                </div>
                                <div className="edit-post__row" onClick={() => { setDropStatus("third status"); setDropStatusActive(false) }}>
                                    third status
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="edit-post__buttons">
                        <button className="edit-post__button cancel">Cancel</button>
                        <button className="edit-post__button">Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default EditPost;