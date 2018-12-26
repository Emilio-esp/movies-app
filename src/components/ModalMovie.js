import React from "react";
import Iframe from 'react-iframe'

import '../styles/ModalDisplay.css';

const ModalMovie = (props)=>{
    return(
        <div className="overley">
            <div className="btn-close-container">
                <button
                    className="bnt-close"
                    onClick={props.onPressCloseModal}
                >
                    <i className="fa fa-times"></i>

                </button>
            </div>
            <div className="modal-video-container">
                <div >
                    <Iframe url={props.url}
                        width="60vw"
                        height="70vh"
                        id="myId"
                        className="iframe-box"
                        display="initial"
                        position="relative"
                        allowFullScreen />
                </div>
            </div>
        </div>
    )
}

export default ModalMovie