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
  padding: theme.spacing(3),
  borderRadius: '16px',
  background: 'rgba(30, 41, 59, 0.4)', // Dark slate translucent
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  color: '#f8fafc',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(30, 41, 59, 0.7)',
    transform: 'translateX(5px)',
    border: '1px solid rgba(59, 130, 246, 0.3)',
  },
}));

const EducationContent = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  color: '#cbd5e1', // Slate 300
}));

export default function TimelineCmpt(props) {
  const jobs = [
    {
      id: 2,
      company: "Braya Renewable Fuels",
      role: "Information Technology Analyst Intern",
      duration: "Jan 2025 - Aug 2025",
      place: "Come By Chance, NL",
      description: [
        "Managed user access controls, Citrix environments, and VMware-based virtual machines.",
        "Set up and configured Cisco switches, routed and terminated network cables, and resolved wireless connectivity issues with Cisco APs.",
        "Provided end-user support for Windows laptops, desk phones, Motorola radios, and mobile devices.",
        "Deployed new IT systems, including kiosks, desk workstations, and mobile hardware.",
        "Supported operating system upgrades, exploring deployment strategies.",
        "Performed and monitored system backups, managing physical storage space, clearing old snapshots, and verifying Azure-based backups.",
        "Resolved helpdesk tickets efficiently, documenting solutions and following escalation.",
        "Created and maintained technical documentation for outage procedures, hardware setups, and system configurations."
      ],
    },
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
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          {job.role} @ {job.company}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: '#3b82f6', mb: 1 }}>
          {job.duration} - {job.place}
        </Typography>
        {job.description.map((desc, index) => (
          <Typography key={index} variant="body2" sx={{ color: '#94a3b8', mb: 0.5 }}>
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
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          {school.uni}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ color: '#3b82f6' }}>
          {school.edu}
        </Typography>
        <EducationContent variant="body2">
          {school.major} | {school.minor}
        </EducationContent>
        <EducationContent variant="body2">
          {school.duration} | {school.grade} | {school.place}
        </EducationContent>
        {school.achievements && (
          <Typography variant="body2" sx={{ color: '#94a3b8' }}>
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
