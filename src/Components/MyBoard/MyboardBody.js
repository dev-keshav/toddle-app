import {
  Box,
  Card,
  Grid,
} from "@mui/material";
import "../../App.css";
import ThreeDot from "./ThreeDot";

function MyboardBody() {


  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <div className="board-div">
                <div className="board-color"></div>
                <div className="board-text">
                  <p className="board-text-para">Earth Changes and journeys</p>
                  <div className="three-dot">
                    <ThreeDot />
                  </div>
                </div>
              </div>
            </Box>
          </Card>
          
        </Grid>
      </Grid>
      
    </div>
  );
}

export default MyboardBody;
