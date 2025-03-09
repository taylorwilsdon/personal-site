import {
  faCodeBranch,
  faCodePullRequest,
  faCircleExclamation,
  faCodeFork,
  faComment,
  faPlus,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CardContent,
  Chip,
  CircularProgress,
  Box,
  Button,
  Divider,
  Stack,
  Paper,
} from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import React, { useState, useEffect, useCallback, useMemo } from "react";

import { GITHUB_COLORS } from "../config/repositories";
import SAMPLE_FEED from "../config/sample_gh_feed.json";

import {
  GitHubCard,
  GitHubLink,
  GitHubText,
  FlexBox,
  GitHubCounter,
  ActivityContent,
  ActivityAvatar,
  ActivityIcon,
  TimeIcon,
  ActivityDetails,
} from "./Layout";

const EVENT_ICONS = {
  PushEvent: faCodeBranch,
  PullRequestEvent: faCodePullRequest,
  IssuesEvent: faCircleExclamation,
  ForkEvent: faCodeFork,
  IssueCommentEvent: faComment,
  CommentEvent: faComment,
  CreateEvent: faPlus,
};

const EVENT_TYPES = {
  PushEvent: "pushed to",
  PullRequestEvent: "opened pr in",
  IssuesEvent: "opened an issue in",
  ForkEvent: "forked",
  IssueCommentEvent: "commented on an issue in",
  CommentEvent: "commented on",
  CreateEvent: "created",
  PullRequestReviewEvent: "reviewed pr",
  ReleaseEvent: "released"
};

// More concise, visually appealing labels for chips
const CHIP_EVENT_TYPES = {
  PushEvent: "Push",
  PullRequestEvent: "PR",
  IssuesEvent: "Issue",
  ForkEvent: "Fork",
  IssueCommentEvent: "Comment",
  CommentEvent: "Comment",
  CreateEvent: "New",
  PullRequestReviewEvent: "Review",
  ReleaseEvent: "Release"
};

// Color variations for different event types - blue-centric theme
const CHIP_COLORS = {
  PushEvent: {
    bg: "#e1f5fe",
    text: "#0277bd",
    border: "#b3e5fc"
  },
  PullRequestEvent: {
    bg: "#e3f2fd",
    text: "#1565c0",
    border: "#bbdefb"
  },
  IssuesEvent: {
    bg: "#e8eaf6",
    text: "#3949ab",
    border: "#c5cae9"
  },
  ForkEvent: {
    bg: "#e0f7fa",
    text: "#00838f",
    border: "#b2ebf2"
  },
  IssueCommentEvent: {
    bg: "#e1f5fe",
    text: "#0288d1",
    border: "#b3e5fc"
  },
  CommentEvent: {
    bg: "#e1f5fe",
    text: "#0288d1",
    border: "#b3e5fc"
  },
  CreateEvent: {
    bg: "#e8f5e9",
    text: "#2e7d32",
    border: "#c8e6c9"
  },
  PullRequestReviewEvent: {
    bg: "#e3f2fd",
    text: "#1565c0",
    border: "#bbdefb"
  },
  ReleaseEvent: {
    bg: "#eceff1",
    text: "#455a64",
    border: "#cfd8dc"
  }
};

// Repository chip styling - more subdued but complementary to event chips
const REPO_CHIP_STYLE = {
  bg: "#f1f8e9",
  text: "#558b2f",
  border: "#dcedc8",
  hoverBg: "#e8f5e9"
};

// Organization/owner chip styling
const ORG_CHIP_STYLE = {
  bg: "#e8eaf6",
  text: "#3949ab",
  border: "#c5cae9",
  hoverBg: "#e3f2fd"
};

// Update GitHub colors with additional styles
const GITHUB_STYLES = {
  ...GITHUB_COLORS,
  background: {
    ...GITHUB_COLORS.background,
    hover: "#f6f8fa",
    active: "#f1f2f4"
  },
  text: {
    ...GITHUB_COLORS.text,
    link: "#0366d6",
    muted: "#6a737d"
  }
};

const GitHubActivityLog = ({ username }) => {
  const [activityLog, setActivityLog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const fetchActivityLog = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/events`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch activity log");
      }
      const data = await response.json();
      setActivityLog(data);
    } catch (err) {
      console.warn("Failed to fetch GitHub activity, using sample data:", err.message);
      setActivityLog(SAMPLE_FEED);
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchActivityLog();
  }, [fetchActivityLog]);

  const formatEventType = useCallback((type) => EVENT_TYPES[type] || type, []);

  const groupConsecutiveEvents = useCallback((events) => {
    const grouped = [];
    let currentGroup = null;

    events.forEach((event) => {
      if (event.type === "IssueCommentEvent") return;

      if (currentGroup &&
          currentGroup.type === event.type &&
          currentGroup.repo.name === event.repo.name) {
        currentGroup.count++;
        // Keep the most recent timestamp
        currentGroup.created_at = event.created_at;
      } else {
        if (currentGroup) {
          grouped.push(currentGroup);
        }
        currentGroup = {
          ...event,
          count: 1
        };
      }
    });

    if (currentGroup) {
      grouped.push(currentGroup);
    }

    return grouped;
  }, []);

  const displayedEvents = useMemo(() => {
    const filteredEvents = activityLog.filter(
      (event) => event.type !== "IssueCommentEvent" && event.type !== "DeleteEvent" && event.type !== "WatchEvent"
    );
    const groupedEvents = groupConsecutiveEvents(filteredEvents);
    return showAll ? groupedEvents : groupedEvents.slice(0, 8);
  }, [showAll, activityLog, groupConsecutiveEvents]);

  if (loading) {
    return (
      <FlexBox justifyContent="center" mt={4}>
        <CircularProgress />
      </FlexBox>
    );
  }
return (
  <Paper
    elevation={1}
    sx={{
      width: "100%",
      margin: "auto",
      mt: 4,
      p: 3,
      backgroundColor: '#ffffff',
      borderRadius: 2,
      border: `1px solid ${GITHUB_STYLES.border}`
    }}
  >
      <GitHubText
        variant="header"
        colors={GITHUB_STYLES}
        sx={{
          mb: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ActivityIcon icon={faCodeBranch} colors={GITHUB_STYLES} /> 
        {'  '} git blame
      </GitHubText>
      
      <Divider sx={{ mb: 2 }} />
      
       <Stack spacing={0.5}>
         {displayedEvents.map((event) => (
           <Box key={event.id} sx={{ display: 'flex', gap: 1, alignItems: 'stretch' }}>
             <GitHubCard
               colors={GITHUB_STYLES}
               sx={{
                 flex: 1,
                 transition: 'all 0.2s ease-in-out',
               }}
             >
               <CardContent
                 sx={{
                   p: 1,
                   '&:last-child': { pb: 1 }
                 }}
               >
                 <ActivityContent>
                   <ActivityAvatar src={event.actor.avatar_url} alt={event.actor.login} colors={GITHUB_STYLES} />
                   <ActivityDetails>
                     <Stack spacing={0.5}>
                       <FlexBox sx={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
                         <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 0, flex: 1 }}>
                           <GitHubLink
                             href={`https://github.com/${event.actor.login}`}
                             target="_blank"
                             rel="noopener noreferrer"
                             colors={GITHUB_STYLES}
                             sx={{ fontWeight: 600, marginRight: '4px', flexShrink: 0 }}
                           >
                             {event.actor.login}
                           </GitHubLink>
                           <GitHubLink
                             href={`https://github.com/${event.repo.name}`}
                             target="_blank"
                             rel="noopener noreferrer"
                             colors={GITHUB_STYLES}
                             sx={{
                               overflow: 'hidden',
                               textOverflow: 'ellipsis',
                               whiteSpace: 'nowrap',
                               minWidth: 0,
                               flex: 1
                             }}
                           >
                             {formatEventType(event.type)} {event.repo.name}
                           </GitHubLink>
                         </Box>
                         {event.count > 1 && (
                           <GitHubCounter colors={GITHUB_STYLES} sx={{ marginLeft: '4px', marginRight: '8px', flexShrink: 0 }}>
                             {event.count}×
                           </GitHubCounter>
                         )}
                       </FlexBox>
                       <FlexBox sx={{ flexWrap: 'nowrap', minWidth: 0, alignItems: 'center', gap: '8px' }}>
                         {/* Event Type Chip */}
                         <Chip
                           label={CHIP_EVENT_TYPES[event.type] || event.type}
                           size="small"
                           icon={
                             <FontAwesomeIcon
                               icon={EVENT_ICONS[event.type]}
                               style={{
                                 fontSize: '0.65rem',
                                 color: CHIP_COLORS[event.type]?.text || GITHUB_STYLES.text.secondary
                               }}
                             />
                           }
                           sx={{
                             height: '22px',
                             fontSize: '10px',
                             backgroundColor: CHIP_COLORS[event.type]?.bg || GITHUB_STYLES.background.hover,
                             color: CHIP_COLORS[event.type]?.text || GITHUB_STYLES.text.secondary,
                             border: `1px solid ${CHIP_COLORS[event.type]?.border || GITHUB_STYLES.border}`,
                             borderRadius: '11px',
                             fontWeight: 500,
                             '& .MuiChip-label': {
                               padding: '0 8px 0 4px',
                               lineHeight: '20px'
                             },
                             '& .MuiChip-icon': {
                               marginLeft: '6px',
                               marginRight: '2px'
                             },
                             transition: 'transform 0.2s ease-in-out',
                             '&:hover': {
                               transform: 'scale(1.05)'
                             },
                             flexShrink: 0
                           }}
                         />
                         
                         {/* Organization/Owner Chip */}
                         <GitHubLink
                           href={`https://github.com/${event.repo.name.split('/')[0]}`}
                           target="_blank"
                           rel="noopener noreferrer"
                           sx={{
                             textDecoration: 'none',
                             display: 'inline-block',
                             flexShrink: 0
                           }}
                         >
                           <Chip
                             label={event.repo.name.split('/')[0]}
                             size="small"
                             icon={
                               <FontAwesomeIcon
                                 icon={faPlus}
                                 style={{
                                   fontSize: '0.65rem',
                                   color: ORG_CHIP_STYLE.text
                                 }}
                               />
                             }
                             sx={{
                               height: '22px',
                               fontSize: '10px',
                               backgroundColor: ORG_CHIP_STYLE.bg,
                               color: ORG_CHIP_STYLE.text,
                               border: `1px solid ${ORG_CHIP_STYLE.border}`,
                               borderRadius: '11px',
                               fontWeight: 500,
                               '& .MuiChip-label': {
                                 padding: '0 8px 0 4px',
                                 lineHeight: '20px',
                                 maxWidth: '120px',
                                 overflow: 'hidden',
                                 textOverflow: 'ellipsis'
                               },
                               '& .MuiChip-icon': {
                                 marginLeft: '6px',
                                 marginRight: '2px'
                               },
                               transition: 'all 0.2s ease-in-out',
                               '&:hover': {
                                 backgroundColor: ORG_CHIP_STYLE.hoverBg,
                                 transform: 'scale(1.05)'
                               }
                             }}
                           />
                         </GitHubLink>
                         
                         {/* Repository Chip */}
                         <GitHubLink
                           href={`https://github.com/${event.repo.name}`}
                           target="_blank"
                           rel="noopener noreferrer"
                           sx={{
                             textDecoration: 'none',
                             display: 'inline-block',
                             flexShrink: 0
                           }}
                         >
                           <Chip
                             label={event.repo.name.split('/')[1]}
                             size="small"
                             icon={
                               <FontAwesomeIcon
                                 icon={faCodeBranch}
                                 style={{
                                   fontSize: '0.65rem',
                                   color: REPO_CHIP_STYLE.text
                                 }}
                               />
                             }
                             sx={{
                               height: '22px',
                               fontSize: '10px',
                               backgroundColor: REPO_CHIP_STYLE.bg,
                               color: REPO_CHIP_STYLE.text,
                               border: `1px solid ${REPO_CHIP_STYLE.border}`,
                               borderRadius: '11px',
                               fontWeight: 500,
                               '& .MuiChip-label': {
                                 padding: '0 8px 0 4px',
                                 lineHeight: '20px',
                                 maxWidth: '120px',
                                 overflow: 'hidden',
                                 textOverflow: 'ellipsis'
                               },
                               '& .MuiChip-icon': {
                                 marginLeft: '6px',
                                 marginRight: '2px'
                               },
                               transition: 'all 0.2s ease-in-out',
                               '&:hover': {
                                 backgroundColor: REPO_CHIP_STYLE.hoverBg,
                                 transform: 'scale(1.05)'
                               }
                             }}
                           />
                         </GitHubLink>
                         
                         {/* Timestamp */}
                         <GitHubText
                           variant="small"
                           colors={GITHUB_STYLES}
                           component={FlexBox}
                           sx={{
                             whiteSpace: 'nowrap',
                             color: GITHUB_STYLES.text.muted,
                             alignItems: 'center',
                             marginLeft: 'auto',
                             flexShrink: 0
                           }}
                         >
                           <TimeIcon icon={faClock} colors={GITHUB_STYLES} />
                           {formatDistanceToNow(new Date(event.created_at), {
                             addSuffix: true,
                           })}
                         </GitHubText>
                       </FlexBox>
                     </Stack>
                   </ActivityDetails>
                 </ActivityContent>
               </CardContent>
             </GitHubCard>
             <GitHubCard
               colors={GITHUB_STYLES}
               sx={{
                 minHeight: '100%',
                 width: '40px',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 p: 0,
                 transition: 'all 0.2s ease-in-out',
                 border: 'none',
               }}
             >
               <Box
                 sx={{
                   width: '32px',
                   height: '32px',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   borderRadius: '50%',
                   backgroundColor: GITHUB_STYLES.background.hover
                 }}
               >
                 <ActivityIcon
                   icon={EVENT_ICONS[event.type]}
                   style={{
                     fontSize: '1rem',
                     color: GITHUB_STYLES.text.muted
                   }}
                   colors={GITHUB_STYLES}
                 />
               </Box>
             </GitHubCard>
           </Box>
         ))}
       </Stack>
         
       {activityLog.length > 8 && (
         <FlexBox justifyContent="center" mt={2} mb={1}>
           <Button
             variant="outlined"
             size="small"
             startIcon={showAll ? null : <FontAwesomeIcon icon={faPlus} style={{ fontSize: '0.75rem' }} />}
             onClick={() => setShowAll((prev) => !prev)}
             sx={{
               borderColor: GITHUB_STYLES.border,
               color: GITHUB_STYLES.text.link,
               fontSize: '0.875rem',
               textTransform: 'none',
               padding: '4px 12px',
               borderRadius: '6px',
               fontWeight: 500,
               boxShadow: '0 1px 0 rgba(27,31,35,0.04)',
               background: 'linear-gradient(180deg, #fafbfc, #eff3f6 90%)',
               '&:hover': {
                 borderColor: GITHUB_STYLES.hover,
                 backgroundColor: GITHUB_STYLES.background.hover,
                 background: 'linear-gradient(180deg, #f3f4f6, #e1e4e8 90%)'
               }
             }}
           >
             {showAll ? "Show fewer activities" : "Show more activities"}
           </Button>
         </FlexBox>
       )}
   </Paper>
 );
};

export default GitHubActivityLog;
