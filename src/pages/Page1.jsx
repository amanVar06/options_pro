import React from "react";

const Page1 = () => {
  return <div>Page1</div>;
};

export default Page1;
import React from "react";
import { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import PopUpPage1 from "../components/PopUpPage1";

const Page1 = () => {
    const [radio, setRadio] = useState("shortstraddle");
    const [selPut, setSelPut] = useState("");
    const [selCall, setSelCall] = useState("");
    const [buyPut, setBuyPut] = useState("");
    const [buyCall, setBuyCall] = useState("");
    const [entry, setentry] = useState("");
    const [exit, setexit] = useState("");
    const [lotSize, setlotsize] = useState("");
    const [popUp, savePopUp] = useState(false);
    const closeModal = () => savePopUp(false);
    const [data, setData] = useState("");

    const submitFun = async () => {
      const date = await axios({
        method: "GET",
        url: "https://optionbacktesting.herokuapp.com/"+radio+"/?sellPut="+selPut+"&sellCall="+selCall+"&buyCall="+buyCall+"&buyPut="+buyPut+"&entry="+entry+"&exit="+exit+"&lotSize="+lotSize,
      });
      const val = await date.data;
      setData(val);
      savePopUp(true);
    };

    return(
      <div className="page1" style={{marginLeft: "25px", marginTop: "60px"}}>
        <div className="col-lg-6 col-md-12 col-sm-12">
        <h1 style={{display: "inline-block", fontSize: "1.2rem", marginTop: "20px", marginRight: "40px",color: "#0000ff"}}>Sell Put</h1>
        <TextField
          required
          id="outlined-required"
          label="Required"
          style={{ width: 100, marginTop: 10 }}
          onChange={(e) => {
            setSelPut(e.target.value);
          }}
        />
        </div>

        <div style={{marginTop: "25px"}} className="col-lg-6 col-md-12 col-sm-12">
        <h1 style={{display: "inline-block", fontSize: "1.2rem", marginTop: "20px", marginRight: "40px", color: "#0000ff"}}>Sell Call</h1>
        <TextField
          required
          id="outlined-required"
          label="Required"
          style={{ width: 100, marginTop: 10 }}
          onChange={(e) => {
            setSelCall(e.target.value);
          }}
        />
        </div>

        <div style={{marginTop: "25px"}} className="col-lg-6 col-md-12 col-sm-12">
        <h1 style={{display: "inline-block", fontSize: "1.2rem", marginTop: "20px", marginRight: "42px", color: "#0000ff"}}>Buy Put</h1>
        <TextField
          required
          id="outlined-required"
          label="Required"
          style={{ width: 100, marginTop: 10 }}
          onChange={(e) => {
            setBuyPut(e.target.value);
          }}
        />
        </div>

        <div style={{marginTop: "25px"}} className="col-lg-6 col-md-12 col-sm-12">
        <h1 style={{display: "inline-block", fontSize: "1.2rem", marginTop: "20px", marginRight: "40px",color: "#0000ff"}}>Buy Call</h1>
        <TextField
          required
          id="outlined-required"
          label="Required"
          style={{ width: 100, marginTop: 10 }}
          onChange={(e) => {
            setBuyCall(e.target.value);
          }}
        />
        </div>

        <div style={{marginTop: "25px"}} className="col-lg-6 col-md-12 col-sm-12">
        <h1 style={{display: "inline-block", fontSize: "1.2rem", marginTop: "20px", marginRight: "65px", color: "#0000ff"}}>Entry</h1>
        <TextField
          required
          id="outlined-required"
          label="Required"
          style={{ width: 100, marginTop: 10 }}
          onChange={(e) => {
            setentry(e.target.value);
          }}
        />
        </div>

        <div style={{marginTop: "25px"}} className="col-lg-6 col-md-12 col-sm-12">
        <h1 style={{display: "inline-block", fontSize: "1.2rem", marginTop: "20px", marginRight: "80px", color: "#0000ff"}}>Exit</h1>
        <TextField
          required
          id="outlined-required"
          label="Required"
          style={{ width: 100, marginTop: 10 }}
          onChange={(e) => {
            setexit(e.target.value);
          }}
        />
        </div>

        <div style={{marginTop: "25px"}} className="col-lg-6 col-md-12 col-sm-12">
        <h1 style={{display: "inline-block", fontSize: "1.2rem", marginTop: "20px", marginRight: "40px", color: "#0000ff"}}>Lot Size</h1>
        <TextField
          required
          id="outlined-required"
          label="Required"
          style={{ width: 100, marginTop: 10 }}
          onChange={(e) => {
            setlotsize(e.target.value);
          }}
        />
        </div>

        
          <div style={{marginTop: "20px"}}>

          <FormControl component="fieldset">
      <RadioGroup aria-label="output" name="output" defaultValue="Index" value={radio} onChange={(e)=>{setRadio(e.target.value)}} row>
        <FormControlLabel value="shortstraddle" control={<Radio style={{color: "#0000ff"}}/>} label="Short Straddle" />
        <FormControlLabel value="ironcondor" control={<Radio style={{color: "#00f"}}/>} label="Iron Condor" />
        <FormControlLabel value="shortstrangle" control={<Radio style={{color: "#00f"}}/>} label="Short Strangle" />
      </RadioGroup>
    </FormControl>

          </div>

          <div style={{marginBottom: "20px"}}>
          <Button
          style={{
            backgroundColor: "#0000ff",
            marginTop: "1.8rem",
            marginLeft: "1%",
          }}
          type="submit"
          onClick={submitFun}
        >
          <span className="mainComponentSubmitText" style={{color: "white"}}>Submit</span>
        </Button>
          </div>

          <div>
            <PopUpPage1 dataIs={data} popUp = {popUp} closeModal={closeModal}/>
          </div>
        
        
        </div>
    )
};

export default Page1;
