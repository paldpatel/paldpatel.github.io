import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkIcon from "@mui/icons-material/Work"; // Job icon
import SchoolIcon from "@mui/icons-material/School"; // Education icon
import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

// Styled component for custom timeline items
const StyledTimelineContent = styled(TimelineContent)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: '8px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const EducationContent = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  color: theme.palette.text.secondary,
}));

export default function TimelineCmpt(props) {
  const jobs = [
    {
      id: 1,
      company: "OPAS Mobile",
      role: "Software Developer",
      duration: "Feb 2023 - Present",
      place: "St. John's, NL",
      description: [
        "Led the transformation of the company's safety SaaS application into a fully functional Progressive Web App (PWA), ensuring offline capability, installability, and robust service worker integration.",
        "Directed the development and maintenance of the application, utilizing Apollo Client and ReactJS for the frontend, and Apollo Server and PostgreSQL for the backend.",
        // ... other descriptions
      ],
    },
    // ... other jobs
  ];

  const schools = [
    {
      id: 1,
      uni: "Memorial University Of Newfoundland",
      edu: "Degree: Bachelor Of Science",
      major: "Major: Computer Science",
      minor: "Minor: Business Administration",
      duration: "Time: Jan 2022 - Dec 2025(expected)",
      grade: "GPA*: 3.5/4",
      place: "St. John's, NL",
    },
    // ... other schools
  ];

  const jobComponents = jobs.map((job) => (
    <TimelineItem key={job.id} position="alternate">
      <TimelineSeparator>
        <TimelineDot color="primary">
          <WorkIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <StyledTimelineContent>
        <Typography variant="h6" gutterBottom>
          {job.role} @ {job.company}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {job.duration} - {job.place}
        </Typography>
        {job.description.map((desc, index) => (
          <Typography key={index} variant="body2" color="text.secondary">
            {desc}
          </Typography>
        ))}
      </StyledTimelineContent>
    </TimelineItem>
  ));

  const schoolComponents = schools.map((school) => (
    <TimelineItem key={school.id} position="alternate">
      <TimelineSeparator>
        <TimelineDot color="secondary">
          <SchoolIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <StyledTimelineContent>
        <Typography variant="h6" gutterBottom>
          {school.uni}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold">
          {school.edu}
        </Typography>
        <EducationContent variant="body2">
          {school.major} | {school.minor}
        </EducationContent>
        <EducationContent variant="body2">
          {school.duration} | {school.grade} | {school.place}
        </EducationContent>
        {school.achievements && (
          <Typography variant="body2" color="text.secondary">
            {school.achievements}
          </Typography>
        )}
      </StyledTimelineContent>
    </TimelineItem>
  ));

  return (
    <Box sx={{ padding: 2 }}>
      <Timeline position="alternate">
        {props.isJob ? jobComponents : schoolComponents}
      </Timeline>
    </Box>
  );
}
