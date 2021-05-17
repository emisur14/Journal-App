import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input 
                   type="text"
                   placeholder="Some awesome title"
                   className="notes__title-input"
                   autoComplete="off"
                />

                <textarea
                  placeholder="What happend today"
                  className="notes__textarea"
                >
                </textarea>

                <div className="notes__image">
                    <img 
                       src="https://www.muycomputer.com/wp-content/uploads/2020/06/fondo_de_pantalla_bloquea_Android.jpg"
                       alt=""
                    
                    />
                </div>



            </div>
            
        </div>
    )
}
