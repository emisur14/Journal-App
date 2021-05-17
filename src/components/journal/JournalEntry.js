import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style ={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://www.recreoviral.com/wp-content/uploads/2019/03/Fondos-de-pantalla-estilo-Tumblr7.jpg)'
                }} 
            >
            </div> 
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                     Un nuevo día
                </p>
                <p className="journal__entry-content">
                     Ipsum sint eiusmod veniam aute elit.
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
