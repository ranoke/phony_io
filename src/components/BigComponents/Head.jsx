import React from "react";
import { useState, useEffect } from 'react';
const Head = () => {
    const [themeActive, setThemeActive] = useState(true);

    return (
        <>
            <div className="head">
                <div className="head__themes">
                    <div className="head__theme" onClick={() => { setThemeActive(true) }}>
                        <div className={themeActive === true ? "head__radio active" : "head__radio"} >
                            <div className={themeActive === true ? "head__radio-circle active" : "head__radio-circle"}></div>
                        </div>
                        <div className={themeActive === true ? "head__theme-text active" : "head__theme-text"}>Day theme</div>                        
                    </div>
                    <div className="head__theme" onClick={() => { setThemeActive(false) }}>
                        <div className={themeActive === false ? "head__radio active" : "head__radio"} >
                            <div className={themeActive === false ? "head__radio-circle active" : "head__radio-circle"}></div>
                        </div>
                        <div className={themeActive === false ? "head__theme-text active" : "head__theme-text"}>Night theme</div>
                    </div>
                </div>
                <div className="head__account">
                    <img src="./img/head-avatar.svg" alt="" className="head__avatar" />
                    <div className="head__box">
                        <div className="head__name">Lucy Lavender</div>
                        <div className="head__tag">
                            <div className="head__green-dot"></div>
                            Online
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Head;