import React from "react";
import symbols from "../data/symbols";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import Button from '@mui/material/Button';
import InformationAlert from "../different alert messages/information.tsx";
import ReactApexChart from "react-apexcharts";
import { ExpandLess } from "@mui/icons-material";
import ReactLoading from 'react-loading';

const Page6 = (props) => {
  const [symbol, setSymbol] = useState(symbols[0].value);
  const [loading, setLoading] = useState(true);
  const [url, seturl] = useState("http://localhost:8000/getexpirydate/");
  const [dates, setDates] = useState([]);
  const [dateSelected, setDate] = useState("");
  const [nothing, setnothing] = useState(false);
  const [graph, setGraph] = useState(false);
  const [series, setSeries] = useState([{name:'PE',data: []},{name:'CE',data:[]}]);
  const [changed, madeChanged] = useState(true);



  const options = {
    chart: {
      type: 'area',
      height: 350,
      widht: '50%',
      zoom: {
        enabled: true
      },
      style: {
        color:props.currentMode==="Dark"?"white":"black"
      }
    },
    dataLabels: {
      enabled: false,
      style: {
        color:props.currentMode==="Dark"?"white":"black"
      }
    },
    stroke: {
      curve: 'straight'
    },
    
    title: {
      text: 'Options Open Interest',
      align: 'left',
      style:{
        color:props.currentMode==="Dark"?"white":"black"
      }
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      opposite: true
    },
    legend: {
      horizontalAlign: 'left'
    }
  }

  const getDates = async () => {
    const date = await axios({
      method: "GET",
      url: url,
    });
    const val = await date.data;
    setLoading(false);
    val.map((items) => dates.push({ value: items.date, label: items.date }));
    setDate(dates[0].value);
  };



  const getDataandPlot = async () => {
    if(changed === false){
      madeChanged(false);
    }
    else{
      setLoading(true);
      const data = await axios({
        method: "GET",
        url: "http://localhost:8000/getoi/"+symbol+"/"+dateSelected,
      })
      const val = await data.data;
      const PE = val.PE;
      const CE = val.CE;
      console.log(PE);
      console.log(CE);
      if(val.length === 0){
        setnothing(true);
        setGraph(false);
      }
      else{
        setnothing(false);
        PE.map((items) => (
          series[0]['data'].push({x: new Date(items.Date.slice(0,10)).getTime(), y: items['Open Interest']})
        ))
        CE.map((items)=>(
            series[1]['data'].push({x: new Date(items.Date.slice(0,10)).getTime(), y: items['Open Interest']})
          ))
        setGraph(true);
      }
      setLoading(false);
      madeChanged(false); 
    }
     
  }

  if (loading && dates.length === 0) {
    getDates();
  }

  return (
    <div>
    <div style={{marginLeft: loading?"48%":0, marginTop: loading?"150px":0}}>
      {loading && <ReactLoading type="spin" color={props.currentMode==="Dark"?"white":"#0000ff"} height="50px"  width="50px"/>}
    </div>
    <div
      className="page6"
      style={{
        marginLeft: "25px",
        marginTop: "75px",
        opacity: loading ? 0.25 : 1,
      }}
    >
      
      
      <div className="page6div1">
        <h1 style={{ marginBottom: "15px", fontSize: "1.2rem", color:props.currentMode==="Dark"?"white":"black" }}>
          Select Symbol
        </h1>
        <TextField
          id="outlined-select-issue"
          select
          value={symbol}
          
          sx={{
            width: 200,
            bgcolor: props.currentMode==="Dark"?"white":""
          }}
          
          onChange={function (e) {
            setSymbol(e.target.value);
            if(graph){
              setSeries([{data: []}])
              setGraph(false);
            }
            madeChanged(true);
          }}
        >
          {symbols.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <div className="page6div2">
        <h1 style={{ marginBottom: "15px", fontSize: "1.2rem", color:props.currentMode==="Dark"?"white":"black" }}>
          Select Date
        </h1>
        <TextField
          id="outlined-select-issue"
          select
          value={dateSelected}
          sx={{
            width: 200,
            bgcolor: props.currentMode==="Dark"?"white":""
           
          }}
         
          onChange={function (e) {
            setDate(e.target.value);
            if(graph){
              setSeries([{data: []}])
              setGraph(false);
            }
            madeChanged(true);
          }}
        >
          {dates.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>

       <Button style={{display: "block", marginTop: "25px", color: "white", background:"#0000ff"}} variant="contained" onClick={
          getDataandPlot
      }>Get Futures OI</Button>     

      {nothing && <InformationAlert name="Options OI"/>}
      {graph && <ReactApexChart style={{display: "block", marginLeft: "20%", marginTop: "30px"}} options={options} width="75%" series={series} type="area" height={350} />}

    </div>
    </div>
  );
};

export default Page6;
