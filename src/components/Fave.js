import React from 'react'

export const Fave = (props) => {

    let addedFaves = ""

    if (props.favorites) {
        addedFaves = props.favorites.map((favorites, index) => {
            return (
                <>
                    <div className ="favContainer"key={index}>
                        <p>{favorites.name}, {favorites.artist}, {favorites.length}</p>
                    </div>
                </>
            )
        })
    }

    return (
        <div> 
        <h2>FAVORITES</h2>
        <div className="favoriteSong">
        {addedFaves}
        </div>
        </div>
    )
}

export default Fave;