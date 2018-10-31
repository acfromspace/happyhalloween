import React, { Component } from 'react'
import ReactPlayer from 'react-player'

import spooky from '../images/spooky.gif'
import '../components/style.css'

class index extends Component {
  render() {
    return (
      <div>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            config={{
              youtube: {
                playerVars: {
                  showinfo: 0,
                  modestbranding: 1,
                },
              },
            }}
            url="https://www.youtube.com/watch?v=XQBwrsElVog"
            width="100%"
            height="100%"
            loop={true}
            playing={true}
          />
        </div>
        <img className="gastly" src={spooky} alt="spooky" />
        <img className="haunter" src={spooky} alt="spooky" />
        <img className="gengar" src={spooky} alt="spooky" />
      </div>
    )
  }
}

export default index
