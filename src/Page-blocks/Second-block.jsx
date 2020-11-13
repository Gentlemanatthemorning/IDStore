import React from "react";

import imgGray from "@/Assets/img/img-gray.jpg";

class SecondBlock extends React.Component {
    render() {
      return (
        <div className="second-block">
            <div className="second-block-container">
              <img src={imgGray}/>
              <div className="second-text">
                <h2>Kitchen collection</h2>
                <p>With this collection he saying to us a message to “Wake UP” from everyday routine, reunite with nature for some time.</p>
                <button className="button-white">View</button>
              </div>
            </div>
        </div>
      )
    }
}

export default SecondBlock