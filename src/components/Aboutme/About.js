import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <div className="about">
      <div class="left">
        <h2 class="title">EXPERIENCE</h2>
      </div>
      <div className="right">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Eat</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Code</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineDot />
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Eat
              </Typography>
              <Typography>Because you need strength</Typography>
            </TimelineContent>
          </TimelineItem>
          {/* <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Repeat</TimelineContent>
          </TimelineItem> */}
        </Timeline>
      </div>
    </div>
  );
};

export default About;
