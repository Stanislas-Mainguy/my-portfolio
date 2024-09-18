import React from 'react';

/**
 * Composant Button générique.
 *
 * @param {string} [as='button'] - Le type d'élément à rendre ('button' ou 'a').
 * @param {string} [type='button'] - Le type du bouton (si as='button').
 * @param {string} [href] - Lien vers lequel rediriger (si as='a').
 * @param {function} [onClick] - Fonction appelée au clic.
 * @param {string} [className] - Classes CSS supplémentaires.
 * @param {React.ReactNode} children - Contenu du bouton.
 * @param {object} props - Autres props éventuels.
 */

function Button({ as = 'button', type = 'button', href, onClick, className = '', children, ...props }) {
  const Component = as;

  return (
    <Component
      type={as === 'button' ? type : undefined}
      href={as === 'a' ? href : undefined}
      className={`btn ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
