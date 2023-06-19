import {
  Box,
  Button,
  Card,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import "../../App.css";

function MyboardBody() {

    const [edit, setEdit] = useState(false);

    const Mymodal = () => {
        return (
            <>
                <p>daskjfhkjshfs csdjc </p>
            </>
        )
    }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <div className="board-div">
                <div className="board-color"></div>
                <div className="board-text">
                  <p className="board-text-para">Earch Changes and journeys</p>
                  <div className="three-dot">
                    <Button onClock={ () => setEdit(true)}>Click</Button>
                    {/* <MoreVertIcon  /> */}
                  </div>
                </div>
              </div>
            </Box>
          </Card>
          
        </Grid>
      </Grid>
      {edit && <Mymodal />}
      
    </div>
  );
}

export default MyboardBody;
