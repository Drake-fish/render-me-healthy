import React from 'react';

const Card = ({name, link}) => {

    return (
        <a href={link}><div className="card">
            <h3 className="card-title">
                {name}
            </h3>
        </div></a>
    )
}

export default Card;