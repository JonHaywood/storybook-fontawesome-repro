import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

var RegularComponent = function RegularComponent() {
  return /*#__PURE__*/React.createElement("div", null, "regular component.");
};

var FontAwesomeComponent = function FontAwesomeComponent() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faQuestion
  }), /*#__PURE__*/React.createElement("p", null, "regular component."));
};

export { FontAwesomeComponent, RegularComponent };
