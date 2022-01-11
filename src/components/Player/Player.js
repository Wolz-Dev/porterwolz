import React, { useState, useRef, useEffect } from 'react'
import Controls from './Controls';
import Details from './Details';

function Player({ currentSongIndex, setCurrentSongIndex, nextSongIndex, songs }) {
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
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp++;

                if (temp > songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = songs.length - 1;
                }

                return temp;
            });
        }
    }

    return (
        <div className="c-player" style={{
            backgroundImage: `url(${songs[currentSongIndex].img_src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderImage: 'url("https://c.tenor.com/tvy7-DsfRQEAAAAd/look-at-the-sky-porter-robinson.gif")',
        }}>
            <audio src={songs[currentSongIndex].src} ref={audioEl}></audio>
            <div className="margt"></div>
            <div className="container2">
                <Details song={songs[currentSongIndex]} />
                <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
                <p className="ctm">Next up: <span>{songs[nextSongIndex].title} by {songs[nextSongIndex].artist}</span></p>
            </div>
        </div>
    )
}

export default Player;