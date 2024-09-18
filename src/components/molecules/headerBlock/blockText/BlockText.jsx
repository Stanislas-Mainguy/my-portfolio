import React from 'react';
import Button from '../../../atoms/button/generalButton/GeneralButton';

function HeaderTextBox() {
  return (
    <div className="header-textbox">
      <h1 className="h1">Bonjour, je suis Stanislas</h1>
      <p className="header-text">Un Développeur Front-End qui crée des sites riches, accessibles et performants.</p>
      <div className="header-btns">
        <Button
          as="a"
          href="#contact"
          className="btn-cta"
          data-lang="hireText"
        >
          Contactez-moi
        </Button>
        <Button
          as="a"
          href="#work"
          className="btn-secondary"
          data-lang="seeMyWorkText"
        >
          Voir mon travail
        </Button>
      </div>
    </div>
  );
}

export default HeaderTextBox;
