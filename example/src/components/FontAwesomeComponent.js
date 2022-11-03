import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const FontAwesomeComponent = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faStar} />
            <p>font awesome component.</p>
        </div>
    );
};