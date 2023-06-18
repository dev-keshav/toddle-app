import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../../App.css";

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
                  <p className="board-text-para">Earch Changes and journeys</p>
                  <div className="three-dot">
                    <MoreVertIcon />
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
