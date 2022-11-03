import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

export const FontAwesomeComponent = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faQuestion} />
            <p>regular component.</p>
        </div>
    );
};