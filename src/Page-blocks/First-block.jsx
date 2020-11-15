import React from "react";

import imgFirst from "@/Assets/img/img-first.jpg";

class FirstBlock extends React.Component {
    render() {
      return (
          <div className="first-block">
            <div className="first-block-container">
              <div className="first-content">
                <img src={imgFirst}/>
                <div className="content">
                  <h1>Ricardo<br></br>Bellioni</h1>
                  <h2>Lobby collection</h2>
                  <button className="button-black">View</button>
                </div>
              </div>
              <div className="buttons">
                <button className="click-button">O</button>
              </div>
              <div className="first-text">
                <p>Inspired by the sunrise light on Bali, Ocean breeze of Maldives, fabulous views of Philippines’s Palawan island and a little bit of his own home backyard in countryside where he go with his family every year.</p>
                <p>His new collection for home include bedroom decor, main hall decor such as large floor lamps and medium size armchairs, also small bathroom and kitchen decor elements. </p>
                <p>World famous interior designer <span>Ricardo Bellioni</span> developed this summer collection exclusive for IDstore.</p>
              </div>
            </div>
          </div>
      )
    }
}

export default FirstBlock