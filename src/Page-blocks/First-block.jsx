import React from "react";
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

import ButtonCount from './Button'

import imgFirst from "@/Assets/img/img-first.jpg";
import chair from "@/Assets/img/Chair.png"

ReactModal.setAppElement('#root');

class FirstBlock extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
    render() {
      return (
          <div className="first-block">
            <div className="first-block-container">
              <div className="first-content">
                <img src={imgFirst}/>
                <div className="modal">
                  <button onClick={this.handleOpenModal}>Trigger Modal</button>
                  <ReactModal
                  isOpen={this.state.showModal}
                  contentLabel="onRequestClose Example"
                  onRequestClose={this.handleCloseModal}
                  className="Modal"
                  overlayClassName="Overlay">
                    <div className="head">
                      <h3>Wooden Chair</h3>
                      <button className="close-button" onClick={this.handleCloseModal}>Close Modal</button>
                    </div>
                    <img src={chair}></img>
                    <ButtonCount></ButtonCount>
                  </ReactModal>
                </div>
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