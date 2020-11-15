import React from 'react';

import imgSecond from '../Assets/img/img-second.jpg'

class ForthBlock extends React.Component {
    render() {
        return (
            <div className="forth-block">
                <div className="forth-block-container">
                    <div className="forth-content">
                        <h2>Bedroom Collection</h2>
                        <p>This season exclusive in IDstore, summer home decorative elements for true relaxation, restoration powers, and mindfulness.
                        <br/>Full of sunlight and warm energy they can bring a brand new look as well as a new place of power to every home.</p>
                        <button className="button-white">View</button>
                    </div>
                    <img src={imgSecond}></img>
                </div>
            </div>
        )
    }
}
export default ForthBlock