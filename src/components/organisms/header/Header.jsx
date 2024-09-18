import React from "react";
import GeneralButton from "../../atoms/button/generalButton/GeneralButton";

function Header() {
    return (
        <header className="header">
            <div className="menu-btn-container">
                <GeneralButton />
            </div>
            <div className="header-text">
                {/* voir pour le contenu plus tard */}
            </div>
            <picture>

            </picture>
        </header>
    );
}

export default Header;