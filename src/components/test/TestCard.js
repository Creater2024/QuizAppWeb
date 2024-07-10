import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ScoreIcon from "@mui/icons-material/Score";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./test.css";
export default function TestCard() {
  return (
    <Card sx={{ maxWidth: "450px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="exam.png"
          alt="green iguana"
        />
        <CardContent className="testcard-content">
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={8}>
              <Grid container direction="column">
                <Typography>SSC CGL Previous year paper 2023</Typography>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <div className="icon-container">
                      <IconButton sx={{ color: "grey" }}>
                        <ScoreIcon sx={{ fontSize: "0.8rem" }} />
                      </IconButton>
                      <Typography sx={{ fontSize: "0.8rem" }}>--</Typography>
                      <Typography sx={{ fontSize: "0.8rem" }}>Marks</Typography>
                    </div>
                  </Grid>
                  <Grid item>
                    <div className="icon-container">
                      <IconButton
                        size="small"
                        sx={{ color: "grey", fontSize: "0.5rem" }}
                      >
                        <AccessTimeIcon sx={{ fontSize: "0.8rem" }} />
                      </IconButton>
                      <Typography sx={{ fontSize: "0.8rem" }}>--</Typography>
                      <Typography sx={{ fontSize: "0.8rem" }}>
                        Minutes
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} container justifyContent="end">
              <Button variant="contained" size="large">
                Start
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
