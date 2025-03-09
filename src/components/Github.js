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
  PullRequestEvent: "opened a pr in",
  IssuesEvent: "opened an issue in",
  ForkEvent: "forked",
  IssueCommentEvent: "commented on an issue in",
  CommentEvent: "commented on",
  CreateEvent: "created",
  PullRequestReviewEvent: "reviewed pr"
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
        <ActivityIcon icon={faCodeBranch} style={{ marginRight: '8px' }} colors={GITHUB_STYLES} />
        git blame
      </GitHubText>
      
      <Divider sx={{ mb: 2 }} />
      
      <Stack spacing={1}>
        {displayedEvents.map((event) => (
          <GitHubCard key={event.id} colors={GITHUB_STYLES}>
            <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
              <ActivityContent>
                <ActivityAvatar src={event.actor.avatar_url} alt={event.actor.login} colors={GITHUB_STYLES} />
                
                <ActivityDetails>
                  <Stack spacing={1}>
                    <FlexBox sx={{ flexWrap: 'wrap', minWidth: 0, gap: 1 }}>
                      <GitHubLink
                        href={`https://github.com/${event.actor.login}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        colors={GITHUB_STYLES}
                        sx={{ marginRight: '8px', fontWeight: 600 }}
                      >
                        {event.actor.login}
                      </GitHubLink>
                      <GitHubLink
                        href={`https://github.com/${event.repo.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        colors={GITHUB_STYLES}
                        sx={{ wordBreak: 'break-word' }}
                      >
                        {formatEventType(event.type)} {event.repo.name}
                      </GitHubLink>
                      {event.count > 1 && (
                        <GitHubCounter colors={GITHUB_STYLES}>
                          {event.count}×
                        </GitHubCounter>
                      )}
                    </FlexBox>
                    <FlexBox sx={{ flexWrap: 'nowrap', minWidth: 0, alignItems: 'center' }}>
                      <Chip
                        label={formatEventType(event.type)}
                        size="small"
                        sx={{
                          height: '24px',
                          marginRight: '8px',
                          fontSize: '12px',
                          backgroundColor: GITHUB_STYLES.background.hover,
                          color: GITHUB_STYLES.text.secondary,
                          border: `1px solid ${GITHUB_STYLES.border}`,
                          borderRadius: '12px',
                          '& .MuiChip-label': {
                            padding: '0 10px',
                            lineHeight: '22px'
                          }
                        }}
                      />
                      <GitHubText
                        variant="small"
                        colors={GITHUB_STYLES}
                        component={FlexBox}
                        sx={{
                          whiteSpace: 'nowrap',
                          color: GITHUB_STYLES.text.muted,
                          alignItems: 'center'
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
                
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: GITHUB_STYLES.background.hover,
                    marginLeft: '16px',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: GITHUB_STYLES.background.active,
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <ActivityIcon
                    icon={EVENT_ICONS[event.type]}
                    style={{
                      fontSize: '1.1rem',
                      color: GITHUB_STYLES.text.muted
                    }}
                    colors={GITHUB_STYLES}
                  />
                </Box>
              </ActivityContent>
            </CardContent>
          </GitHubCard>
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
