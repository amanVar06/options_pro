import React from "react";
import Rating from '@mui/material/Rating';

import Popup from 'reactjs-popup';
import TextField from '@mui/material/TextField';
import { ImageUpload } from "./ImageUploading";

function PopUp(props){
    return (
        <div className="popup">
            <Popup open={props.popUp}  closeOnDocumentClick onClose={props.closeModal} position="left bottom">
        <div className="popupmodel">
            <a className="closePop" onClick={props.closeModal}>
            ❌
          </a>
          <h1 className="PopUpHeading">Your Rating Matters!!</h1>
          <div className="modal">
          <TextField
          id="PopUp_Issue"
          label="Any Issue ❓"
          placeholder="Start typing here"
          multiline
        />
          </div>

          <div>
          <ImageUpload/>
        </div>

          <Rating name="size-medium" defaultValue={2} className="PopUpRating" />
          
        </div>

        
      </Popup> 
        </div>    
    )
}

export default PopUp;