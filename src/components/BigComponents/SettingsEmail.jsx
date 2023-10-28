import React from "react";
import { useState, useEffect } from 'react';

const SettingsEmail = ({ components, setCurrentComponent }) => {


    const [emails, setEmails] = useState({
        active: [false, false, false, false, false, false],
    });

    const handleEmailsClick = (index) => {
        const newActiveItems = emails.active.map((item, i) =>
            i === index ? !item : item
        );
        setEmails({ ...emails, active: newActiveItems });
    };


    const [dropOwnerActive, setDropOwnerActive] = useState(false);
    const [dropOwner, setDropOwner] = useState("Daily");

    return (
        <>
            <div class="page-content">
                <div class="history-path"  >
                    <button class="history-path__button" onClick={() => { setCurrentComponent(0) }}>
                        Dashboard  /
                    </button>
                    <button class="history-path__button" onClick={() => { setCurrentComponent(31) }}>
                        Settings  /
                    </button>
                    Email settings
                </div>

                <div class="boards__head">

                    <div class="component-title">
                        Email settings
                    </div>


                </div>

                <div class="settings-email">
                    <div class="settings-email__head">
                        <div class="settings-email__heading">User email settings</div>
                        <div class="settings-email__heading second">Admin email settings</div>
                    </div>
                    <div class="settings-email__line"></div>
                    <div class="settings-email__body">
                        <div class="settings-email__checkboxes">
                            <div class="settings-email__row" onClick={() => { handleEmailsClick(0) }}>
                                <div class={emails.active[0] === true ? " settings-email__check-box active" : "settings-email__check-box"}>
                                    <img src="./img/filters-check-icon.svg" alt="" class="settings-email__check-icon a" />
                                </div>

                                <div class="settings-email__text-container">
                                    <div class="settings-email__check-box-text-1">Status Change Email</div>
                                    <div class="settings-email__check-box-text-2">We'll email voters when your team changes the status of a Post. When you <br />update the status of a Post, you'll see this option to "Notify all voters"</div>
                                </div>
                            </div>
                            <div class="settings-email__row" onClick={() => { handleEmailsClick(1) }}>
                                <div class={emails.active[1] === true ? " settings-email__check-box active" : "settings-email__check-box"}>
                                    <img src="./img/filters-check-icon.svg" alt="" class="settings-email__check-icon a" />
                                </div>

                                <div class="settings-email__text-container">
                                    <div class="settings-email__check-box-text-1">Admin Responses in Post Comments</div>
                                    <div class="settings-email__check-box-text-2">We'll email voters when your team responds to a Post</div>
                                </div>
                            </div>
                            <div class="settings-email__row" onClick={() => { handleEmailsClick(2) }}>
                                <div class={emails.active[2] === true ? " settings-email__check-box active" : "settings-email__check-box"}>
                                    <img src="./img/filters-check-icon.svg" alt="" class="settings-email__check-icon a" />
                                </div>

                                <div class="settings-email__text-container">
                                    <div class="settings-email__check-box-text-1">Mention Email</div>
                                    <div class="settings-email__check-box-text-2">Emails we send when anyone gets @mentioned in a Post</div>
                                </div>
                            </div>
                            <div class="settings-email__row" onClick={() => { handleEmailsClick(3) }}>
                                <div class={emails.active[3] === true ? " settings-email__check-box active" : "settings-email__check-box"}>
                                    <img src="./img/filters-check-icon.svg" alt="" class="settings-email__check-icon a" />
                                </div>

                                <div class="settings-email__text-container">
                                    <div class="settings-email__check-box-text-1">Weekly User Report</div>
                                    <div class="settings-email__check-box-text-2">Prony regular user updates regarding new Posts.</div>
                                </div>
                            </div>
                        </div>

                        <div class="settings-email__right">
                            <div class="settings-email__row" onClick={() => { handleEmailsClick(4) }}>
                                <div class={emails.active[4] === true ? " settings-email__check-box admin active" : "settings-email__check-box admin"}>
                                    <img src="./img/filters-check-icon.svg" alt="" class="settings-email__check-icon a" />
                                </div>

                                <div class="settings-email__text-container">
                                    <div class="settings-email__check-box-text-1">Admin Report email</div>
                                </div>
                            </div>

                            <div className="settings-email__board-choose">
                                <div className="settings-email__preview" onClick={() => { if (dropOwnerActive === true) { setDropOwnerActive(false) } else { setDropOwnerActive(true) } }}>{dropOwner} <img src="./img/dropdown-small-arrow.svg" alt="" className={dropOwnerActive === true ? "settings-email__drop-arrow active" : "settings-email__drop-arrow"} /></div>
                                <div className={dropOwnerActive === true ? "settings-email__dropdown active" : "settings-email__dropdown"}>
                                    <div className="settings-email__row" onClick={() => { setDropOwner("Daily"); setDropOwnerActive(false) }}>
                                        Daily
                                    </div>
                                    <div className="settings-email__row" onClick={() => { setDropOwner("Weekly"); setDropOwnerActive(false) }}>
                                        Weekly
                                    </div>
                                    <div className="settings-email__row" onClick={() => { setDropOwner("Monthly"); setDropOwnerActive(false) }}>
                                        Monthly
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="settings-email__buttons">
                        <button class="settings-email__button">Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SettingsEmail;