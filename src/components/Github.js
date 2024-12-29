import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Avatar,
  Link,
  CircularProgress,
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { formatDistanceToNow } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCodeBranch, 
  faCodePullRequest, 
  faCircleExclamation, 
  faCodeFork, 
  faComment, 
  faPlus 
} from '@fortawesome/free-solid-svg-icons';

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
  PushEvent: 'pushed to',
  PullRequestEvent: 'opened a pull request in',
  IssuesEvent: 'opened an issue in',
  ForkEvent: 'forked',
  IssueCommentEvent: 'commented on an issue in',
  CommentEvent: 'commented on',
  CreateEvent: 'created',
};

const ICON_STYLE = { width: 20, height: 20, marginRight: 8 };

const GitHubActivityLog = ({ username }) => {
  const [activityLog, setActivityLog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const fetchActivityLog = useCallback(async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/events`);
      if (!response.ok) {
        throw new Error('Failed to fetch activity log');
      }
      const data = await response.json();
      setActivityLog(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchActivityLog();
  }, [fetchActivityLog]);

  const getEventIcon = useCallback((type) => {
    const icon = EVENT_ICONS[type];
    return icon ? <FontAwesomeIcon icon={icon} style={ICON_STYLE} /> : null;
  }, []);

  const formatEventType = useCallback((type) => EVENT_TYPES[type] || type, []);

  const displayedEvents = useMemo(() => 
    showAll ? activityLog : activityLog.slice(0, 5),
  [showAll, activityLog]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  return (
    <Card variant="outlined" sx={{ maxWidth: 800, margin: 'auto', mt: 4 }}>
      <CardContent>
        <Typography variant="body1" gutterBottom>
          git log
        </Typography>
        <List>
          {displayedEvents.map((event) => (
            <ListItem key={event.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={event.actor.avatar_url} alt={event.actor.login} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box display="flex" alignItems="center">
                    {getEventIcon(event.type)}
                    <Link
                      href={`https://github.com/${event.actor.login}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                      underline="hover"
                    >
                      {event.actor.login}
                    </Link>
                    <Chip
                      label={event.type}
                      size="xsmall"
                      sx={{ ml: 1 }}
                    />
                  </Box>
                }
                secondary={
                  <Typography variant="body2" color="text.secondary">
                    {formatEventType(event.type)}{' '}
                    <Link
                      href={`https://github.com/${event.repo.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                      underline="hover"
                    >
                      {event.repo.name}
                    </Link>
                    {' '}
                    — {formatDistanceToNow(new Date(event.created_at), { addSuffix: true })}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        {activityLog.length > 5 && (
          <Box display="flex" justifyContent="center" mt={2}>
            <Button
              variant="outlined"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default GitHubActivityLog;
