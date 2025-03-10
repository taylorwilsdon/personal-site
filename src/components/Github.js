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
  CHIP_COLORS,
  REPO_CHIP_STYLE,
  GITHUB_STYLES,
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
  PullRequestReviewEvent: "reviewed pr",
  ReleaseEvent: "released",
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
  ReleaseEvent: "Release",
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
      console.warn(
        "Failed to fetch GitHub activity, using sample data:",
        err.message
      );
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

      if (
        currentGroup &&
        currentGroup.type === event.type &&
        currentGroup.repo.name === event.repo.name
      ) {
        currentGroup.count++;
        // Keep the most recent timestamp
        currentGroup.created_at = event.created_at;
      } else {
        if (currentGroup) {
          grouped.push(currentGroup);
        }
        currentGroup = {
          ...event,
          count: 1,
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
      (event) =>
        event.type !== "IssueCommentEvent" &&
        event.type !== "DeleteEvent" &&
        event.type !== "WatchEvent"
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
        ...GITHUB_STYLES.paper.surface,
        mt: 4,
      }}
    >
      <GitHubText
        variant="header"
        colors={GITHUB_STYLES}
        sx={{
          mb: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIcon icon={faCodeBranch} colors={GITHUB_STYLES} />
        {" "} {" "}git blame
      </GitHubText>

      <Divider sx={{ mb: 2 }} />

      <Stack spacing={0.5}>
        {displayedEvents.map((event) => (
          <Box
            key={event.id}
            sx={{ display: "flex", gap: 1, alignItems: "stretch" }}
          >
            <GitHubCard
              colors={GITHUB_STYLES}
              sx={{
                flex: 1,
                transition: "all 0.2s ease-in-out",
              }}
            >
              <CardContent
                sx={{
                  p: 1,
                  "&:last-child": { pb: 1 },
                }}
              >
                <ActivityContent>
                  <ActivityAvatar
                    src={event.actor.avatar_url}
                    alt={event.actor.login}
                    colors={GITHUB_STYLES}
                  />
                  <ActivityDetails>
                    <Stack spacing={0.5}>
                      <FlexBox
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          minWidth: 0,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            minWidth: 0,
                            flex: 1,
                          }}
                        >
                          <GitHubLink
                            href={`https://github.com/${event.actor.login}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            colors={GITHUB_STYLES}
                            sx={{
                              fontWeight: 600,
                              marginRight: "4px",
                              flexShrink: 0,
                            }}
                          >
                            {event.actor.login}
                          </GitHubLink>
                          <GitHubLink
                            href={`https://github.com/${event.repo.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            colors={GITHUB_STYLES}
                            sx={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              minWidth: 0,
                            }}
                          >
                          {formatEventType(event.type)} {event.repo.name.split('/')[1]}
                          </GitHubLink>
                        </Box>
                        {event.count > 1 && (
                          <GitHubCounter
                            colors={GITHUB_STYLES}
                            sx={{
                              marginLeft: "4px",
                              marginRight: "8px",
                              flexShrink: 0,
                            }}
                          >
                            {event.count}×
                          </GitHubCounter>
                        )}
                      </FlexBox>
                      <FlexBox
                        sx={{
                          flexWrap: "nowrap",
                          minWidth: 0,
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        {/* Timestamp */}
                        <GitHubText
                          variant="small"
                          colors={GITHUB_STYLES}
                          component={FlexBox}
                          sx={{
                            whiteSpace: "nowrap",
                            color: GITHUB_STYLES.text.muted,
                            alignItems: "left",
                            flexShrink: 0,
                          }}
                        >
                          <TimeIcon icon={faClock} colors={GITHUB_STYLES} />
                          {formatDistanceToNow(new Date(event.created_at), {
                            addSuffix: true,
                          })}
                        </GitHubText>

                        {/* Event Type Chip */}
                        <Chip
                          label={CHIP_EVENT_TYPES[event.type] || event.type}
                          size="small"
                          icon={
                            <FontAwesomeIcon
                              icon={EVENT_ICONS[event.type]}
                              style={{
                                fontSize: "0.65rem",
                                color:
                                  CHIP_COLORS[event.type]?.text ||
                                  GITHUB_STYLES.text.secondary,
                              }}
                            />
                          }
                          sx={{
                            height: "22px",
                            fontSize: "10px",
                            backgroundColor:
                              CHIP_COLORS[event.type]?.bg ||
                              GITHUB_STYLES.background.hover,
                            color:
                              CHIP_COLORS[event.type]?.text ||
                              GITHUB_STYLES.text.secondary,
                            border: `1px solid ${
                              CHIP_COLORS[event.type]?.border ||
                              GITHUB_STYLES.border
                            }`,
                            borderRadius: "4px",
                            fontWeight: 500,
                            "& .MuiChip-label": {
                              padding: "0 8px 0 4px",
                              lineHeight: "20px",
                            },
                            "& .MuiChip-icon": {
                              marginLeft: "6px",
                              marginRight: "2px",
                            },
                            transition: "transform 0.2s ease-in-out",
                            "&:hover": {
                              transform: "scale(1.05)",
                            },
                            flexShrink: 0,
                          }}
                        />

                        {/* Repository Chip */}
                        <GitHubLink
                          href={`https://github.com/${event.repo.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            textDecoration: "none",
                            display: "inline-block",
                            flexShrink: 0,
                          }}
                        >
                          <Chip
                            label={event.repo.name.split("/")[1]}
                            size="small"
                            icon={
                              <FontAwesomeIcon
                                icon={faCodeBranch}
                                style={{
                                  fontSize: "0.65rem",
                                  color: REPO_CHIP_STYLE.text,
                                }}
                              />
                            }
                            sx={{
                              height: "22px",
                              fontSize: "10px",
                              backgroundColor: REPO_CHIP_STYLE.bg,
                              color: REPO_CHIP_STYLE.text,
                              border: `1px solid ${REPO_CHIP_STYLE.border}`,
                              borderRadius: "4px",
                              fontWeight: 500,
                              "& .MuiChip-label": {
                                padding: "0 8px 0 4px",
                                lineHeight: "20px",
                                maxWidth: "160px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              },
                              "& .MuiChip-icon": {
                                marginLeft: "6px",
                                marginRight: "2px",
                              },
                              transition: "all 0.2s ease-in-out",
                              "&:hover": {
                                backgroundColor: REPO_CHIP_STYLE.hoverBg,
                                transform: "scale(1.05)",
                              },
                            }}
                          />
                        </GitHubLink>
                      </FlexBox>
                    </Stack>
                  </ActivityDetails>
                </ActivityContent>
              </CardContent>
            </GitHubCard>
            <GitHubCard
              colors={GITHUB_STYLES}
              sx={{
                minHeight: "100%",
                width: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 0,
                transition: "all 0.2s ease-in-out",
                border: "none",
              }}
            >
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  backgroundColor: GITHUB_STYLES.background.hover,
                }}
              >
                <ActivityIcon
                  icon={EVENT_ICONS[event.type]}
                  style={{
                    fontSize: "1rem",
                    color: GITHUB_STYLES.text.muted,
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
            startIcon={
              showAll ? null : (
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{ fontSize: "0.75rem" }}
                />
              )
            }
            onClick={() => setShowAll((prev) => !prev)}
            sx={{
              ...GITHUB_STYLES.button.primary,
              textTransform: "uppercase",
              fontWeight: 400,
              "& .MuiButton-startIcon": {
                marginRight: "4px",
                "& svg": {
                  fontSize: "0.65rem"
                }
              },
              "&:hover": {
                borderColor: GITHUB_STYLES.hover,
                background: GITHUB_STYLES.button.primary.hoverBackground,
                boxShadow: GITHUB_STYLES.button.primary.hoverShadow,
                transform: "translateY(-1px)",
              },
              "&:active": {
                background: GITHUB_STYLES.button.primary.activeBackground,
                boxShadow: GITHUB_STYLES.button.primary.activeShadow,
                transform: "translateY(0)",
              },
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
