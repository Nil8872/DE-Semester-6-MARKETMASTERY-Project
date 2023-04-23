import React,{useState} from "react";
import OneShare from "./forWatchList/OneShare";
// import SearchBox from "./forWatchList/SearchBox";
import data from '../services/RealTimeData.js'
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton"; 
import SearchIcon from "@mui/icons-material/Search";  
import Tooltip from "@mui/material/Tooltip";

function WatchList() {
  const [searchShare, setSearchShare] = useState(""); 
  const handleSearch = (event)=>{
    setSearchShare((event.target.value) )
  }
  
  const search = searchShare.toUpperCase();

  console.log()
   
  return (
    <>
      {/* <SearchBox /> */}
      <div className="searchInputField" style={{margin: '10px 0 '}}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              background: "rgba(255,255,255,0.3)",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Tooltip title="Search">
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search"   >
                <SearchIcon />
              </IconButton>
            </Tooltip>

            <InputBase
              sx={{ ml: 1, flex: 1, color: "white" }}
              placeholder="Search Stock like RELIENCE, SBIN"
              onChange={handleSearch}
              value={searchShare}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          </Paper>
        </div>

<div className="mainWatchList" >
{
 data.filter((share)=> share.sharename.includes(search)).map((share)=>{
    return (
      <OneShare key={share.sharename} sharename={share.sharename} absoluteprice={share.absoluteprice} percentegeprice={share.percentegeprice} lastprice={share.lastprice} />
      
    )
  })
}
</div>
    </>
  )
}

export default WatchList
