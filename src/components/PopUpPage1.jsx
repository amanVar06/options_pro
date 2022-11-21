import React from "react";

import Popup from "reactjs-popup";

function PopUpPage1(props) {
  return (
    <div className="popup" style={{marginTop: "100px", marginLeft: "25px"}}>
      <Popup
        open={props.popUp}
        closeOnDocumentClick
        onClose={props.closeModal}
        position="left bottom"
      >
        <div className="popupmodel1">
          <p className="closePop" onClick={props.closeModal}>
            ❌
          </p>
          <p>Profit/Loss for month 1 : {props.dataIs.length!==0?props.dataIs['1']:0}</p>
          <p>Profit/Loss for month 2 : {props.dataIs.length!==0?props.dataIs['2']:0}</p>
          <p>Profit/Loss for month 3 : {props.dataIs.length!==0?props.dataIs['3']:0}</p>
        </div>
      </Popup>
    </div>
  );
}

export default PopUpPage1;
