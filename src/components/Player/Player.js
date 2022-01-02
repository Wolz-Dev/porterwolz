import React, { useState, useRef, useEffect } from 'react'
import Controls from './Controls';
import Details from './Details';

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    return (
        <div className="c-player" style={{
            backgroundImage: `url(${props.songs[props.currentSongIndex].img_src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderImage: 'url("https://c.tenor.com/tvy7-DsfRQEAAAAd/look-at-the-sky-porter-robinson.gif")',
        }}>
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <div className="margt"></div>
            <div className="container2">
                <Details song={props.songs[props.currentSongIndex]} />
                <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
                <p className="ctm">Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
            </div>
        </div>
    )
}

export default Player;