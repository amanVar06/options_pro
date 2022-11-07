import React from "react";
import Rating from "@mui/material/Rating";

import Popup from "reactjs-popup";
import TextField from "@mui/material/TextField";
// import { ImageUpload } from "./ImageUploading";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

function PopUp(props) {
  return (
    <div className="popup">
      <Popup
        open={props.popUp}
        closeOnDocumentClick
        onClose={props.closeModal}
        position="left bottom"
      >
        <div className="popupmodel">
          <p className="closePop" onClick={props.closeModal}>
            ❌
          </p>
          <h1 className="PopUpHeading">Your Feedback matters!!</h1>
          <div className="modal">
            <TextField
              id="PopUp_Issue"
              label="Any Issue ❓"
              placeholder="Start typing here"
              multiline
            />
          </div>

          <div></div>

          <Rating name="size-medium" defaultValue={2} className="PopUpRating" />

          <div>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              className="sendButton"
            >
              {" "}
              Send
            </Button>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default PopUp;
