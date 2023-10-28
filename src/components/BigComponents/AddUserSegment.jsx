import React from "react";
import { useState, useEffect } from 'react';

const AddUserSegment = ({ components, setCurrentComponent }) => {
    const [menuActive, setMenuActive] = useState(false);
    const [menuRowActive, setMenuRowActive] = useState(false);

    const [likeActive, setLikeActive] = useState([false, false, false, false, false, false, false, false, false, false,]);
    const handleLikeClick = (index) => {
        const newActiveItems = likeActive.map((item, i) =>
            i === index ? !item : item // Змінюємо значення на протилежне для вибраного індексу
        );
        setLikeActive(newActiveItems);
    };


    const [filtersDropActive, setFiltersDropActive] = useState([false, false, false, false, false, false, false, false]);
    const handleFiltersDropClick = (index) => {
        const newActiveItems = filtersDropActive.map((item, i) =>
            i === index ? !item : false // Змінюємо значення на протилежне для вибраного індексу
        );
        setFiltersDropActive(newActiveItems);
    };


    const [segments, setSegments] = useState({
        active: [false, false, false],
    });

    const [mail, setMail] = useState({
        active: [false, false, false],
    });


    const [firstName, setFirstName] = useState({
        active: [false, false, false],
    });

    const [role, setRole] = useState({
        active: [false, false, false],
    });




    const handleSegmentsClick = (index) => {
        const newActiveItems = segments.active.map((item, i) =>
            i === index ? !item : item
        );
        setSegments({ ...segments, active: newActiveItems });
    };

    const handleMailClick = (index) => {
        const newActiveItems = mail.active.map((item, i) =>
            i === index ? !item : item
        );
        setMail({ ...mail, active: newActiveItems });
    };

    const handleFirstNameClick = (index) => {
        const newActiveItems = firstName.active.map((item, i) =>
            i === index ? !item : item
        );
        setFirstName({ ...firstName, active: newActiveItems });
    };

    // const handleRoleClick = (index) => {
    //     const newActiveItems = role.active.map((item, i) =>
    //         i === index ? !item : item
    //     );
    //     setRole({ ...role, active: newActiveItems });
    // };


    // Підрахунок активних елементів для кожного компонента
    const activeSegmentsCount = segments.active.filter((item) => item).length;
    // const activeRoleCount = role.active.filter((item) => item).length;
    const activeMailCount = mail.active.filter((item) => item).length;
    const activeFirstNameCount = firstName.active.filter((item) => item).length;

    // const [navActive, setNavActive] = useState(true);

    return (
        <>
            <div className="page-content">
                <div className="history-path"  >
                    <button className="history-path__button" onClick={() => { setCurrentComponent(0) }}>
                        Dashboard  /
                    </button>
                    <button className="history-path__button" onClick={() => { setCurrentComponent(15) }}>
                        User  /
                    </button>
                    <button className="history-path__button" onClick={() => { setCurrentComponent(18) }}>
                        User segments  /
                    </button>
                    Add user segment
                </div>

                <div className="boards__head">

                    <div className="component-title">
                        Add user segment
                    </div>

                </div>

                <div className="add-seg">
                    <div className="add-seg__heading">Name</div>
                    <input type="text" className="add-seg__input" placeholder="Enter user segment name" />
                    <div className="add-seg__drops-row">
                        <div className="add-seg__filter company">
                            <div className="add-seg__preview company" onClick={() => { handleFiltersDropClick(0) }}>

                                <div className={activeSegmentsCount != 0 ? " add-seg__chosen active" : "add-seg__chosen"}>
                                    {activeSegmentsCount}
                                </div>

                                <div className="add-seg__filter-name">Company</div>

                                <img src="./img/dropdown-small-arrow.svg" alt="" className={filtersDropActive[0] === true ? " add-seg__filter-arrow active" : "add-seg__filter-arrow"} />

                            </div>

                            <div className={filtersDropActive[0] === true ? " add-seg__dropdown active" : "add-seg__dropdown"}>

                                <div className="add-seg__title">Company</div>

                                <div className="add-seg__dropdown-content">
                                    <div className="add-seg__row" onClick={() => { handleSegmentsClick(0) }}>

                                        <div className={segments.active[0] === true ? " add-seg__check-box active" : "add-seg__check-box"}>
                                            <img src="./img/filters-check-icon.svg" alt="" className="add-seg__check-icon a" />
                                        </div>

                                        <div className="add-seg__row-name">Company1</div>
                                    </div>
                                    <div className="add-seg__row" onClick={() => { handleSegmentsClick(1) }}>

                                        <div className={segments.active[1] === true ? " add-seg__check-box active" : "add-seg__check-box"}>
                                            <img src="./img/filters-check-icon.svg" alt="" className="add-seg__check-icon a" />
                                        </div>

                                        <div className="add-seg__row-name">Company2</div>
                                    </div>
                                    <div className="add-seg__row" onClick={() => { handleSegmentsClick(2) }}>

                                        <div className={segments.active[2] === true ? " add-seg__check-box active" : "add-seg__check-box"}>
                                            <img src="./img/filters-check-icon.svg" alt="" className="add-seg__check-icon a" />
                                        </div>

                                        <div className="add-seg__row-name">Company3</div>

                                    </div>
                                </div>

                                <div className="add-seg__dropdown-buttons">
                                    <button className="add-seg__dropdown-button">Apply</button>
                                    <button className="add-seg__dropdown-button cancel" onClick={() => { handleFiltersDropClick(0) }}>Cancel</button>
                                </div>

                            </div>
                        </div>
                        <div className="add-seg__filter action">
                            <div className="add-seg__preview action" onClick={() => { handleFiltersDropClick(1) }}>

                                <div className={activeMailCount != 0 ? " add-seg__chosen active" : "add-seg__chosen"}>
                                    {activeMailCount}
                                </div>

                                <div className="add-seg__filter-name">action</div>

                                <img src="./img/dropdown-small-arrow.svg" alt="" className={filtersDropActive[1] === true ? " add-seg__filter-arrow active" : "add-seg__filter-arrow"} />

                            </div>

                            <div className={filtersDropActive[1] === true ? " add-seg__dropdown active" : "add-seg__dropdown"}>

                                <div className="add-seg__title">action</div>

                                <div className="add-seg__dropdown-content">
                                    <div className="add-seg__row" onClick={() => { handleMailClick(0) }}>

                                        <div className={mail.active[0] === true ? " add-seg__check-box active" : "add-seg__check-box"}>
                                            <img src="./img/filters-check-icon.svg" alt="" className="add-seg__check-icon a" />
                                        </div>

                                        <div className="add-seg__row-name">is</div>
                                    </div>

                                    <div className="add-seg__row" onClick={() => { handleMailClick(1) }}>

                                        <div className={mail.active[1] === true ? " add-seg__check-box active" : "add-seg__check-box"}>
                                            <img src="./img/filters-check-icon.svg" alt="" className="add-seg__check-icon a" />
                                        </div>

                                        <div className="add-seg__row-name">send</div>
                                    </div>

                                    <div className="add-seg__row" onClick={() => { handleMailClick(2) }}>

                                        <div className={mail.active[2] === true ? " add-seg__check-box active" : "add-seg__check-box"}>
                                            <img src="./img/filters-check-icon.svg" alt="" className="add-seg__check-icon a" />
                                        </div>

                                        <div className="add-seg__row-name">get</div>
                                    </div>
                                </div>

                                <div className="add-seg__dropdown-buttons">
                                    <button className="add-seg__dropdown-button">Apply</button>
                                    <button className="add-seg__dropdown-button cancel" onClick={() => { handleFiltersDropClick(1) }}>Cancel</button>
                                </div>

                            </div>
                        </div>
                        <input type="text" className="add-seg__value-input" placeholder="value" />
                        <img src="./img/user-segments-delete-icon.svg" alt="" className="add-seg__cancel-icon" />
                    </div>
                    <div className="add-seg__filter company">
                        <div className="add-seg__preview attribute" onClick={() => { handleFiltersDropClick(2) }}>

                            <div className={activeFirstNameCount != 0 ? " add-seg__chosen active" : "add-seg__chosen"}>
                                {activeFirstNameCount}
                            </div>

                            <div className="add-seg__filter-name">Select attribute</div>

                            <img src="./img/dropdown-small-arrow.svg" alt="" className={filtersDropActive[2] === true ? " add-seg__filter-arrow active" : "add-seg__filter-arrow"} />

                        </div>

                        <div className={filtersDropActive[2] === true ? " add-seg__dropdown active" : "add-seg__dropdown"}>

                            <div className="add-seg__title">Select attribute</div>

                            <div className="add-seg__dropdown-content">
                                <div className="add-seg__row" onClick={() => { handleFirstNameClick(0) }}>

                                    <div className={firstName.active[0] === true ? " add-seg__check-box active" : "add-seg__check-box"}>
                                        <img src="./img/filters-check-icon.svg" alt="" className="add-seg__check-icon a" />
                                    </div>

                                    <div className="add-seg__row-name">Attribute 1</div>
                                </div>

                                <div className="add-seg__row" onClick={() => { handleFirstNameClick(1) }}>

                                    <div className={firstName.active[1] === true ? " add-seg__check-box active" : "add-seg__check-box"}>
                                        <img src="./img/filters-check-icon.svg" alt="" className="add-seg__check-icon a" />
                                    </div>

                                    <div className="add-seg__row-name">Attribute 2</div>
                                </div>

                                <div className="add-seg__row" onClick={() => { handleFirstNameClick(2) }}>

                                    <div className={firstName.active[2] === true ? " add-seg__check-box active" : "add-seg__check-box"}>
                                        <img src="./img/filters-check-icon.svg" alt="" className="add-seg__check-icon a" />
                                    </div>

                                    <div className="add-seg__row-name">Attribute 3</div>
                                </div>
                            </div>

                            <div className="add-seg__dropdown-buttons">
                                <button className="add-seg__dropdown-button">Apply</button>
                                <button className="add-seg__dropdown-button cancel" onClick={() => { handleFiltersDropClick(2) }}>Cancel</button>
                            </div>

                        </div>
                    </div>
                    <div className="add-seg__buttons">
                        <button className="add-seg__button cancel">Cancel</button>
                        <button className="add-seg__button">Submit</button>
                    </div>
                </div>

            </div>
        </>
    );
}
export default AddUserSegment;