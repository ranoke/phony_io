import React from "react";
import { useState, useEffect } from 'react';

const SettingsDomain = ({ components, setCurrentComponent }) => {


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
                    Custom domain
                </div>

                <div class="boards__head">

                    <div class="component-title">
                        Custom domain
                    </div>


                </div>

                
                <div class="settings-domain">
                    <div class="settings-domain__text first">We've created prony.canny.io for you. Instead, you can use your own website (feedback.yoursite.com). Just add the domain below then follow <span>these instructions</span>.</div>
                    <div class="settings-domain__text second">Set your primary domain to update the links we use in our product/emails.</div>
                    <div class="settings-domain__info-box">You have not set up any custom domains</div>
                    <div class="settings-domain__input-heading">Domain</div>
                    <div class="settings-domain__input"></div>
                    <div class="settings-domain__warning">
                        <img src="../../img/domain-warning-icon.svg" alt="" class="settings-domain__warning-icon" />
                        <div class="settings-domain__warning-text">Make sure you point to cname.prony.io in your DNS settings</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SettingsDomain;