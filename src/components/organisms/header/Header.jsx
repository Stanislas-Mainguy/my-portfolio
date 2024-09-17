import React from "react";
import GeneralButton from "../../atoms/button/generalButton/GeneralButton";
import ThemeSwitchButton from "../../atoms/button/ThemeSwitchButton/ThemeSwitchButton";
import LanguageSwitchButton from "../../atoms/button/languageSwitchButton/LanguageSwitchButton";
import Navigation from "../../molecules/navigation/Navigation";

function Header () {
    return (
        <header className="header">
            <div className="menu-btn-container">
                <GeneralButton />
                <ThemeSwitchButton />
                <LanguageSwitchButton />
            </div>
            <Navigation />
            <div className="header-text">
                {/* voir pour le contenu plus tard */}
            </div>
            <picture>

            </picture>
        </header>
    );
}

export default Header;