import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Option from "./Option";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./Question.css";
import { ElevatorSharp } from "@mui/icons-material";

export default function Question({ question, index }) {
  const [selectedOption, setSelectedOption] = useState();
  const handleOptionChange = (id) => (event) => {
    // if (event.target.checked) {
    //   if (!selectedOption.includes(id)) {
    //     setSelectedOption((prev) => [...prev, id]);
    //   }
    // } else {
    //   setSelectedOption((prev) => prev.filter((value) => value != id));
    // }
    setSelectedOption(id);
  };
  const isOptionChecked = (id) => {
    // return selectedOption.includes(id);
    if (selectedOption == id) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Card>
      <CardActionArea>
        <div className="question-header">
          <CardContent>
            <Typography gutterBottom variant="h5" component="span">
              Question :
            </Typography>
            <Typography gutterBottom variant="h5" component="span">
              {index}
            </Typography>
          </CardContent>
        </div>
        <Divider></Divider>
        <CardContent>
          <Typography gutterBottom component="span" sx={{ fontSize: "1.2rem" }}>
            {question.description}
          </Typography>
        </CardContent>
        <CardContent>
          <Grid container spacing={2}>
            {question?.optionsList.map((option) => (
              <Grid item xs={6}>
                <Option
                  handleChange={handleOptionChange}
                  option={option}
                  isOptionChecked={isOptionChecked}
                />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </CardActionArea>
      <Divider></Divider>
      <CardActions>
        <IconButton size="small" sx={{ color: "grey" }}>
          <CommentIcon />
        </IconButton>
        <IconButton size="small" sx={{ color: "grey" }}>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton size="small" sx={{ color: "grey" }}>
          <VisibilityIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
