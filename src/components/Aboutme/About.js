import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import { TimelineOppositeContent } from "@mui/lab";

const About = () => {
  return (
    <div className="about" id="about">
      <div class="left">
        <h2 class="title">EXPERIENCE</h2>
      </div>
      <div className="right">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent className="timeline">
              Nov 2021 - Present
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h5" component="span" className="companyText">
                Frontend Developer
              </Typography>
              <Typography>Cars24</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent className="timeline">
              Oct 2020 - Oct 2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h5" component="span" className="companyText">
                UI Developer
              </Typography>
              <Typography>Standard Chartered bank</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent className="timeline">
              Jun 2019 - Oct 2020
            </TimelineOppositeContent>
            <TimelineDot />
            <TimelineContent>
              <Typography variant="h5" component="span" className="companyText">
                Trainee
              </Typography>
              <Typography>Standard Chartered bank</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default About;
