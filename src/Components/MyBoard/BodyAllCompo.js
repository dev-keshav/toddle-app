import { Stack, Typography } from "@mui/material";
import React from "react";
import MyboardNav from "./MyboardNav";
import MyboardBody from "./MyboardBody";

function BodyAllCompo() {
  return (
    <div>
      <Stack>
        <MyboardNav />
        <Stack sx={{ px: "80px" }}>
          <Typography
            sx={{ fontWeight: "bold", textAlign: "start", py: 4 }}
            variant="h4"
            component="div"
          >
            My boards
          </Typography>
          <Stack>
            <MyboardBody />
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}

export default BodyAllCompo;
