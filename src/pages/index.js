import React, { Component } from 'react'
import ReactPlayer from 'react-player'

// Images
// import metatron from '../images/metatron.gif'
import doggo from '../images/doggo.gif'
import napstablook from '../images/napstablook.png'
import undertale from '../images/undertaleWHYSOCIRRUS.png'

// Styling
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
            url="https://www.youtube.com/watch?v=kXF3VYYa5TI"
            width="100%"
            height="100%"
            loop={true}
            playing={true}
          />
        </div>
        <img
          className="doggo"
          src={doggo}
          alt="doggo"
          height="100px"
          width="100px"
        />
        <img className="napstablook" src={napstablook} alt="napstablook" />
        <img
          className="undertale"
          src={undertale}
          alt="Art by (why so cirrus)"
        />
      </div>
    )
  }
}

export default index
