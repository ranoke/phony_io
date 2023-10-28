import React from "react";
import { useState, useEffect } from 'react';

const AddRecord = ({ components, setCurrentComponent }) => {

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




    const [dateInput, setDateInput] = useState("");
    const [timeInput, setTimeInput] = useState("");

    const handleDateChange = (e) => {
        setDateInput(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTimeInput(e.target.value);
    };

    return (
        <>
            <div className="page-content">
                <div className="history-path"  >
                    <button className="history-path__button" onClick={() => { setCurrentComponent(0) }}>
                        Dashboard  /
                    </button>
                    <button className="history-path__button" onClick={() => { setCurrentComponent(24) }}>
                        Changelog /
                    </button>
                    Add record
                </div>

                <div className="boards__head">

                    <div className="component-title">
                        Add record
                    </div>


                </div>

                <div className="edit-post record">

                    <div className="edit-post__box">
                        <div className="edit-post__heading">Title</div>
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
                    <div className="edit-post__imported record">
                        {file.map((fileItem, index) => renderImagePreview(fileItem, index))}
                    </div>

                    <div className="edit-post__box record">
                        <div className="edit-post__heading">Publish time</div>
                        <div className="edit-post__datetime-input">
                            <input
                                type="text"
                                className="edit-post__date-input"
                                placeholder="2020/09/10"
                                value={dateInput}
                                onChange={handleDateChange}
                            />
                            <input
                                type="text"
                                className="edit-post__time-input"
                                placeholder="02:00"
                                value={timeInput}
                                onChange={handleTimeChange}
                            />
                            <img src="./img/date-icon.svg" alt="" className="edit-post__date-icon" />
                        </div>
                    </div>

                    <div className="edit-post__box">
                        <div className="edit-post__heading">Labels</div>
                        <div className="edit-post__board-choose label">
                            <div className="edit-post__preview" onClick={() => { if (dropStatusActive === true) { setDropStatusActive(false) } else { setDropStatusActive(true) } }}>{dropStatus} <img src="./img/dropdown-small-arrow.svg" alt="" className={dropStatusActive === true ? "edit-post__drop-arrow active" : "edit-post__drop-arrow"} /></div>
                            <div className={dropStatusActive === true ? "edit-post__dropdown active" : "edit-post__dropdown"}>
                                <div className="edit-post__row" onClick={() => { setDropStatus("label 1"); setDropStatusActive(false) }}>
                                    label 1
                                </div>
                                <div className="edit-post__row" onClick={() => { setDropStatus("label 2"); setDropStatusActive(false) }}>
                                    label 2
                                </div>
                                <div className="edit-post__row" onClick={() => { setDropStatus("label 3"); setDropStatusActive(false) }}>
                                    label 3
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="edit-post__buttons record">
                        <button className="edit-post__button cancel">Cancel</button>
                        <button className="edit-post__button">Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AddRecord;