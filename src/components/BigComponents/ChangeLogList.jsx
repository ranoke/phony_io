import React from "react";
import { useState, useEffect } from 'react';

const ChangeLogList = ({ components, setCurrentComponent }) => {

    const [likeActive, setLikeActive] = useState([false, false, false, false, false, false, false, false, false, false,]);
    const handleLikeClick = (index) => {
        const newActiveItems = likeActive.map((item, i) =>
            i === index ? !item : item // Змінюємо значення на протилежне для вибраного індексу
        );
        setLikeActive(newActiveItems);
    };


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

    const [quantityActive, setQuantityActive] = useState(false);
    const [quantity, setQuantity] = useState([10, 5]);
    const handleQuantityClick = () => {
        const newActiveItems = [];
        newActiveItems[0] = quantity[1];
        newActiveItems[1] = quantity[0];
        setQuantity(newActiveItems);
    };

    const [sortActive, setSortActive] = useState(false);
    const [sort, setSort] = useState(["Last activity", "Oldest"]);
    const handleSortClick = () => {
        const newActiveItems = [];
        newActiveItems[0] = sort[1];
        newActiveItems[1] = sort[0];
        setSort(newActiveItems);
    };






    const [filtersDropActive, setFiltersDropActive] = useState([false, false]);
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


    // Підрахунок активних елементів для кожного компонента
    const activeSegmentsCount = segments.active.filter((item) => item).length;
    const activeMailCount = mail.active.filter((item) => item).length;

    return (
        <>
            <div class="page-content">
                <div class="history-path"  >
                    <button class="history-path__button" onClick={() => { setCurrentComponent(0) }}>
                        Dashboard  /
                    </button>
                    Changelog
                </div>

                <div class="boards__head">

                    <div class="component-title">
                        Changelog records
                    </div>

                    <button class="boards__create-button record" onClick={() => { setCurrentComponent(25) }}>Add record</button>
                </div>

                <div class="post-component">

                    <div class="post-head users">

                        <div class="post-head__wrapper users">


                            <div class="post-head__filter labels-changelog">
                                <div class="post-head__preview labels-changelog" onClick={() => { handleFiltersDropClick(0) }}>

                                    <div class={activeSegmentsCount != 0 ? " post-head__chosen active" : "post-head__chosen"}>
                                        {activeSegmentsCount}
                                    </div>

                                    <div class="post-head__filter-name">Labels</div>

                                    <img src="./img/dropdown-small-arrow.svg" alt="" class={filtersDropActive[0] === true ? " post-head__filter-arrow active" : "post-head__filter-arrow"} />

                                </div>

                                <div class={filtersDropActive[0] === true ? " post-head__dropdown active" : "post-head__dropdown"}>

                                    <div class="post-head__title">Labels</div>

                                    <div class="post-head__dropdown-content">
                                        <div class="post-head__row" onClick={() => { handleSegmentsClick(0) }}>

                                            <div class={segments.active[0] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" class="post-head__check-icon a" />
                                            </div>

                                            <div class="post-head__row-name">Label1</div>
                                        </div>
                                        <div class="post-head__row" onClick={() => { handleSegmentsClick(1) }}>

                                            <div class={segments.active[1] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" class="post-head__check-icon a" />
                                            </div>

                                            <div class="post-head__row-name">Label2</div>
                                        </div>
                                        <div class="post-head__row" onClick={() => { handleSegmentsClick(2) }}>

                                            <div class={segments.active[2] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" class="post-head__check-icon a" />
                                            </div>

                                            <div class="post-head__row-name">Label3</div>

                                        </div>
                                    </div>

                                    <div class="post-head__dropdown-buttons">
                                        <button class="post-head__dropdown-button">Apply filters</button>
                                        <button class="post-head__dropdown-button cancel" onClick={() => { handleFiltersDropClick(0) }}>Cancel</button>
                                    </div>

                                </div>
                            </div>

                            <div class="post-head__filter publish-time">
                                <div class="post-head__preview approved" onClick={() => { handleFiltersDropClick(1) }}>

                                    <div class={activeMailCount != 0 ? " post-head__chosen active" : "post-head__chosen"}>
                                        {activeMailCount}
                                    </div>

                                    <div class="post-head__filter-name">Publish time</div>

                                    <img src="./img/dropdown-small-arrow.svg" alt="" class={filtersDropActive[1] === true ? " post-head__filter-arrow active" : "post-head__filter-arrow"} />

                                </div>

                                <div class={filtersDropActive[1] === true ? " post-head__dropdown active" : "post-head__dropdown"}>

                                    <div class="post-head__title">Publish time</div>

                                    <div class="post-head__dropdown-content">
                                        <div class="post-head__row" onClick={() => { handleMailClick(0) }}>

                                            <div class={mail.active[0] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" class="post-head__check-icon a" />
                                            </div>

                                            <div class="post-head__row-name">Yesterday</div>
                                        </div>

                                        <div class="post-head__row" onClick={() => { handleMailClick(1) }}>

                                            <div class={mail.active[1] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" class="post-head__check-icon a" />
                                            </div>

                                            <div class="post-head__row-name">1 Week Ago</div>
                                        </div>

                                        <div class="post-head__row" onClick={() => { handleMailClick(2) }}>

                                            <div class={mail.active[2] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" class="post-head__check-icon a" />
                                            </div>

                                            <div class="post-head__row-name">1 Month Ago</div>
                                        </div>
                                    </div>

                                    <div class="post-head__dropdown-buttons">
                                        <button class="post-head__dropdown-button">Apply filters</button>
                                        <button class="post-head__dropdown-button cancel" onClick={() => { handleFiltersDropClick(1) }}>Cancel</button>
                                    </div>

                                </div>
                            </div>


                        </div>

                        <div class="changelog-controls">
                            <div class="changelog-controls__heading one">Title</div>
                            <div class="changelog-controls__heading two">Publish time</div>
                            <div class="changelog-controls__heading three">Labels</div>


                            <div class="post-foot__show head-sort-lower users" >
                                <div class="post-foot__show-text">Show:</div>
                                <div class="post-foot__quantity">
                                    <div class="post-foot__quantity-preview" onClick={() => {
                                        if (quantityActive === true) {
                                            setQuantityActive(false)
                                        } else {
                                            setQuantityActive(true)
                                        }
                                    }}>
                                        {quantity[0]}
                                        <img src="./img/dropdown-small-arrow.svg" alt="" class="post-foot__qauntity-arrow" />
                                    </div>
                                    <div onClick={() => { handleQuantityClick(); setQuantityActive(false) }} class={quantityActive === true ? "post-foot__quantity-dropdown  active" : "post-foot__quantity-dropdown "}>
                                        {quantity[1]}
                                    </div>
                                </div>
                                <div class="post-foot__show-text small">per page</div>
                            </div>
                        </div>

                    </div>

                    <div class="post-line"></div>

                    <div class={pagination === 1 ? "changelog-list active" : "changelog-list"}>
                        <div class="changelog-list__row">
                            <div class="changelog-list__row-name">Send status updates back through Intercom</div>
                            <div class="changelog-list__time">32 min ago</div>
                            <div class="changelog-list__tags">
                                <div class="changelog-list__tag admin" onClick={()=>{setCurrentComponent(27)}}>Admin</div>
                                <div class="changelog-list__tag feedback">Feedback</div>
                            </div>
                            <div class="changelog-list__buttons">
                                <img src="./img/tags-edit-icon.svg" alt="" class="changelog-list__edit-button" onClick={()=>{setCurrentComponent(26)}}/>
                                <img src="./img/tags-delete-icon.svg" alt="" class="changelog-list__edit-button" />
                            </div>
                        </div>
                        <div class="changelog-list__row even">
                            <div class="changelog-list__row-name">Send status updates back through Intercom</div>
                            <div class="changelog-list__time">yesterday</div>
                            <div class="changelog-list__tags">
                                <div class="changelog-list__tag admin" onClick={()=>{setCurrentComponent(27)}}>Admin</div>
                            </div>
                            <div class="changelog-list__buttons">
                                <img src="./img/tags-edit-icon.svg" alt="" class="changelog-list__edit-button" onClick={()=>{setCurrentComponent(26)}}/>
                                <img src="./img/tags-delete-icon.svg" alt="" class="changelog-list__edit-button" />
                            </div>
                        </div>
                        <div class="changelog-list__row">
                            <div class="changelog-list__row-name">Send status updates back through Intercom</div>
                            <div class="changelog-list__time">2 weeks ago</div>
                            <div class="changelog-list__tags">
                                <div class="changelog-list__tag admin" onClick={()=>{setCurrentComponent(27)}}>Admin</div>
                            </div>
                            <div class="changelog-list__buttons">
                                <img src="./img/tags-edit-icon.svg" alt="" class="changelog-list__edit-button" onClick={()=>{setCurrentComponent(26)}}/>
                                <img src="./img/tags-delete-icon.svg" alt="" class="changelog-list__edit-button" />
                            </div>
                        </div>
                        <div class="changelog-list__row even">
                            <div class="changelog-list__row-name">Send status updates back through Intercom</div>
                            <div class="changelog-list__time">last week</div>
                            <div class="changelog-list__tags">
                                <div class="changelog-list__tag admin" onClick={()=>{setCurrentComponent(27)}}>Admin</div>
                            </div>
                            <div class="changelog-list__buttons">
                                <img src="./img/tags-edit-icon.svg" alt="" class="changelog-list__edit-button" onClick={()=>{setCurrentComponent(26)}}/>
                                <img src="./img/tags-delete-icon.svg" alt="" class="changelog-list__edit-button" />
                            </div>
                        </div>
                        <div class="changelog-list__row">
                            <div class="changelog-list__row-name">Send status updates back through Intercom</div>
                            <div class="changelog-list__time">32 min ago</div>
                            <div class="changelog-list__tags">
                                <div class="changelog-list__tag admin" onClick={()=>{setCurrentComponent(27)}}>Admin</div>
                            </div>
                            <div class="changelog-list__buttons">
                                <img src="./img/tags-edit-icon.svg" alt="" class="changelog-list__edit-button" onClick={()=>{setCurrentComponent(26)}}/>
                                <img src="./img/tags-delete-icon.svg" alt="" class="changelog-list__edit-button" />
                            </div>
                        </div>
                        <div class="changelog-list__row even">
                            <div class="changelog-list__row-name">Send status updates back through Intercom</div>
                            <div class="changelog-list__time">yesterday</div>
                            <div class="changelog-list__tags">
                                <div class="changelog-list__tag changelog">Changelog</div>
                                <div class="changelog-list__tag admin" onClick={()=>{setCurrentComponent(27)}}>Admin</div>
                            </div>
                            <div class="changelog-list__buttons">
                                <img src="./img/tags-edit-icon.svg" alt="" class="changelog-list__edit-button" onClick={()=>{setCurrentComponent(26)}}/>
                                <img src="./img/tags-delete-icon.svg" alt="" class="changelog-list__edit-button" />
                            </div>
                        </div>
                        <div class="changelog-list__row">
                            <div class="changelog-list__row-name">Send status updates back through Intercom</div>
                            <div class="changelog-list__time">2 weeks ago</div>
                            <div class="changelog-list__tags">
                                <div class="changelog-list__tag admin" onClick={()=>{setCurrentComponent(27)}}>Admin</div>
                            </div>
                            <div class="changelog-list__buttons">
                                <img src="./img/tags-edit-icon.svg" alt="" class="changelog-list__edit-button" onClick={()=>{setCurrentComponent(26)}}/>
                                <img src="./img/tags-delete-icon.svg" alt="" class="changelog-list__edit-button" />
                            </div>
                        </div>
                        <div class="changelog-list__row even">
                            <div class="changelog-list__row-name">Send status updates back through Intercom</div>
                            <div class="changelog-list__time">last week</div>
                            <div class="changelog-list__tags">
                                <div class="changelog-list__tag admin" onClick={()=>{setCurrentComponent(27)}}>Admin</div>
                            </div>
                            <div class="changelog-list__buttons">
                                <img src="./img/tags-edit-icon.svg" alt="" class="changelog-list__edit-button" onClick={()=>{setCurrentComponent(26)}}/>
                                <img src="./img/tags-delete-icon.svg" alt="" class="changelog-list__edit-button" />
                            </div>
                        </div>
                        <div class="changelog-list__row">
                            <div class="changelog-list__row-name">Send status updates back through Intercom</div>
                            <div class="changelog-list__time">2 weeks ago</div>
                            <div class="changelog-list__tags">
                                <div class="changelog-list__tag admin" onClick={()=>{setCurrentComponent(27)}}>Admin</div>
                            </div>
                            <div class="changelog-list__buttons">
                                <img src="./img/tags-edit-icon.svg" alt="" class="changelog-list__edit-button" onClick={()=>{setCurrentComponent(26)}}/>
                                <img src="./img/tags-delete-icon.svg" alt="" class="changelog-list__edit-button" />
                            </div>
                        </div>
                        <div class="changelog-list__row even">
                            <div class="changelog-list__row-name">Send status updates back through Intercom</div>
                            <div class="changelog-list__time">last week</div>
                            <div class="changelog-list__tags">
                                <div class="changelog-list__tag admin" onClick={()=>{setCurrentComponent(27)}}>Admin</div>
                            </div>
                            <div class="changelog-list__buttons">
                                <img src="./img/tags-edit-icon.svg" alt="" class="changelog-list__edit-button" onClick={()=>{setCurrentComponent(26)}}/>
                                <img src="./img/tags-delete-icon.svg" alt="" class="changelog-list__edit-button" />
                            </div>
                        </div>
                    </div>




                    <div class="post-line"></div>

                    <div class="post-foot">
                        <div class="post-foot__pagination">
                            <div class="post-foot__pag-box" onClick={() => { setPagination(1) }}>
                                <img src="./img/double-arrow-pag.svg" alt="" class="post-foot__double-arrow" />
                            </div>
                            <div class="post-foot__pag-box" onClick={() => { handlePagination('-') }}>
                                <img src="./img/arrow-pag.svg" alt="" class="post-foot__arrow" />
                            </div>

                            <div class={pagination === 1 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(1) }}>
                                1
                            </div>
                            <div class={pagination === 2 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(2) }}>
                                2
                            </div>
                            <div class={pagination === 3 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(3) }}>
                                3
                            </div>
                            <div class={pagination === 4 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(4) }}>
                                4
                            </div>
                            <div class={pagination === 5 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(5) }}>
                                5
                            </div>

                            <div class="post-foot__pag-box" onClick={() => { handlePagination('+') }}>
                                <img src="./img/arrow-pag.svg" alt="" class="post-foot__arrow right" />
                            </div>
                            <div class="post-foot__pag-box" onClick={() => { setPagination(5) }}>
                                <img src="./img/double-arrow-pag.svg" alt="" class="post-foot__double-arrow right" />
                            </div>
                        </div>
                        <div class="post-foot__show" >
                            <div class="post-foot__show-text">Show:</div>
                            <div class="post-foot__quantity">
                                <div class="post-foot__quantity-preview" onClick={() => {
                                    if (quantityActive === true) {
                                        setQuantityActive(false)
                                    } else {
                                        setQuantityActive(true)
                                    }
                                }}>
                                    {quantity[0]}
                                    <img src="./img/dropdown-small-arrow.svg" alt="" class="post-foot__qauntity-arrow" />
                                </div>
                                <div onClick={() => { handleQuantityClick(); setQuantityActive(false) }} class={quantityActive === true ? "post-foot__quantity-dropdown active" : "post-foot__quantity-dropdown"}>
                                    {quantity[1]}
                                </div>
                            </div>
                            <div class="post-foot__show-text small">per page</div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}
export default ChangeLogList;