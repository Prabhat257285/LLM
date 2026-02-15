import React from 'react';

const Card = ({ children, className = '', ...props }) => {
    return (
        <div
            className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
