import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { ProjectWork } from "../../data";
import GitHubIcon from "@mui/icons-material/GitHub";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

const Projects = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="projects" id="projects">
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
                  height="200"
                  image={project.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="overline" component="div">
                    {project.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <SmartphoneIcon
                  onClick={() => openInNewTab(project.link)}
                  style={{ cursor: "pointer" }}
                />
                <GitHubIcon
                  onClick={() => openInNewTab(project.code)}
                  style={{ cursor: "pointer" }}
                />
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
