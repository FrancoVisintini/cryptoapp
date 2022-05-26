import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notFound">
            <img className="notFound__img" src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i6USY9ZGtYAQ/v0/-999x-999.gif" alt=""/>
            <h1 className="notFound__title">404</h1>
            <p className="notFound__text">
                Sorry, page not found
            </p>
        </div>
    );
    
}

export default NotFound;