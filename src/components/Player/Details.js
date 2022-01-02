import React from 'react'

function Details(props) {
    return (
        <div className="c-player--details">
            {/* <div className="details-img">
                <img src={props.song.img_src} alt="-" />
            </div> */}
            <div className="fit-title">
                <h3 className="details-title">{props.song.title}</h3>
            </div>
            <h4 className="details-artist">{props.song.artist}</h4>
        </div>
    )
}

export default Details