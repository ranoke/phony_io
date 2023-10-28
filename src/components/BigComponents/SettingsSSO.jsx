import React from "react";
import { useState, useEffect } from 'react';

const SettingsSSO = ({ components, setCurrentComponent }) => {


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
                    SSO
                </div>

                <div class="boards__head">

                    <div class="component-title">
                        SSO
                    </div>


                </div>

                <div class="settings-sso">
                    <div class="settings-sso__head">
                        <div class="settings-sso__heading">Setup SSO</div>
                        <div class="settings-sso__heading second">Setup SSO redirect</div>
                    </div>
                    <div class="settings-sso__line"></div>
                    <div class="settings-sso__body">
                        <div class="settings-sso__container">
                            <div class="settings-sso__box">
                                <div class="settings-sso__number">1</div>
                                <div class="settings-sso__content">
                                    <div class="settings-sso__title">Your secret single sign on key</div>
                                    <div class="settings-sso__input-like-box">
                                        <div className="settings-sso__key">asjdqh-grde28-75wjhebf-3646erhyhj</div>
                                        <img src="./img/copy-icon.svg" alt="" class="settings-sso__copy-icon" />
                                        <button class="settings-sso__generate-button">Generate</button>
                                    </div>
                                </div>
                            </div>
                            <div class="settings-sso__box">
                                <div class="settings-sso__number">2</div>
                                <div class="settings-sso__content">
                                    <div class="settings-sso__title">Setup <div>single sign on</div></div>
                                </div>
                            </div>
                        </div>
                        <div class="settings-sso__container">
                            <div class="settings-sso__box">
                                <div class="settings-sso__number">1</div>
                                <div class="settings-sso__content">
                                    <div class="settings-sso__title">Remote login URL (optional)</div>
                                    <div class="settings-sso__text">
                                        By default, Prony uses its own authentication. If a user is not logged in, we'll ask them to create a Prony account. If you want to disable this, and only use accounts from your app, set your SSO remote login URL here.
                                    </div>
                                </div>
                            </div>
                            <div class="settings-sso__box">
                                <div class="settings-sso__number">2</div>
                                <div class="settings-sso__content">
                                    <div class="settings-sso__title">Remote logout URL (optional)</div>
                                    <div class="settings-sso__text">
                                        Redirect SSO users to a specific URL after they log out.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="settings-sso__buttons">
                        <button class="settings-sso__button">Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SettingsSSO;