import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { ProjectWork } from "../../data";

const Projects = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="projects">
      <div className="left">
        <h2 className=" project-title">MY PROJECTS</h2>
      </div>
      <div className="right">
        {ProjectWork.map((project) => {
          return (
            <Card sx={{ maxWidth: 350 }} className="project-container">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="overline" component="div">
                    {project.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => openInNewTab(project.link)}
                >
                  <i class="fa-solid fa-link"></i> See Demo
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => openInNewTab(project.code)}
                >
                  <i class="fa-solid fa-laptop-code"></i> See Code
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
