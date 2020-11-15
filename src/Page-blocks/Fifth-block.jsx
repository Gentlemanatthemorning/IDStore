import React from 'react';

import imgArmchair from '../Assets/img/img-armchair.jpg';
import imgPlants from '../Assets/img/img-plants.jpg';
import imgBed from '../Assets/img/img-bed.jpg';

class FifthBlock extends React.Component {
    render() {
        return (
            <div className="fifth-block">
                <div className="fifth-container">
                    <div className="fifth-content">
                        <div className="card">
                            <h3>Autumn collection</h3>
                            <p>New cozy and warm autumn collection by Jhonathan Gorges in IDstore.</p>
                            <img src={imgArmchair}></img>
                            <button className="button-read">Read</button>
                        </div>
                        <div className="card">
                            <h3>Plants in interior design</h3>
                            <p>IDstore make a big interview with Italian designers about plants' role in the decor.</p>
                            <img src={imgPlants}></img>
                            <button className="button-read">Read</button>
                        </div>
                        <div className="card">
                            <h3>Make a perfect bedroom</h3>
                            <p>Make your bedroom a perfect place to have a good sleep with bedroom collection.</p>
                            <img src={imgBed}></img>
                            <button className="button-read">Read</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FifthBlock