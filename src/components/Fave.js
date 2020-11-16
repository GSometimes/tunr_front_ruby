import React from 'react'

export const Fave = (props) => {

    let addedFaves = ""

    if (props.favorites) {
        addedFaves = props.favorites.map((favorites, index) => {
            return (
                <>
                    <div className ="favContainer"key={index}>
                        <p className='title'>{favorites.name}</p>
                        <p className='artist'>{favorites.artist}</p>
                        <p className='time'>{favorites.length}</p>
                    </div>
                </>
            )
        })
    }

    return (
        <div> 
        <h2>FAVORITES</h2>
        {addedFaves}
        </div>
    )
}

export default Fave;