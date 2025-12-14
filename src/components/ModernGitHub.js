import React, { useState, useEffect, useRef } from 'react';

import SAMPLE_FEED from '../config/sample_gh_feed.json';

const ModernGitHub = ({ username }) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isInFocus, setIsInFocus] = useState(false);
  const [allActivities, setAllActivities] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const dashboardRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/events`);
        const data = await response.json();
        setAllActivities(data.slice(0, 10));
        setActivities(data.slice(0, 5));
      } catch (err) {
        setAllActivities(SAMPLE_FEED.slice(0, 10));
        setActivities(SAMPLE_FEED.slice(0, 5));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  // Intersection Observer for focus detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInFocus(true);
          } else {
            setIsInFocus(false);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: '0px 0px -20% 0px' // Only trigger when scrolled past the hero
      }
    );

    if (dashboardRef.current) {
      observer.observe(dashboardRef.current);
    }

    return () => {
      if (dashboardRef.current) {
        observer.unobserve(dashboardRef.current);
      }
    };
  }, []);

  // Update activities when focus or showMore changes
  useEffect(() => {
    if ((isInFocus || showMore) && allActivities.length > 0) {
      setActivities(allActivities.slice(0, 10));
    } else if (allActivities.length > 0) {
      setActivities(allActivities.slice(0, 5));
    }
  }, [isInFocus, showMore, allActivities]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const getEventText = (event) => {
    const repo = event.repo.name.split('/')[1];
    const action = event.payload?.action;

    switch (event.type) {
      case 'PushEvent':
        const commits = event.payload?.commits?.length || 0;
        return `Pushed ${commits} commit${commits !== 1 ? 's' : ''} to ${repo}`;
      case 'PullRequestEvent':
        return `${action === 'merged' ? 'Merged' : action === 'opened' ? 'Opened' : 'Updated'} PR #${event.payload?.number} in ${repo}`;
      case 'CreateEvent':
        return `Created ${event.payload?.ref_type || 'repository'} ${repo}`;
      case 'ForkEvent':
        return `Forked ${repo}`;
      case 'IssuesEvent':
        return `${action === 'closed' ? 'Closed' : action === 'opened' ? 'Opened' : 'Updated'} issue #${event.payload?.issue?.number} in ${repo}`;
      case 'IssueCommentEvent':
        return `Commented on issue #${event.payload?.issue?.number} in ${repo}`;
      default:
        return `Updated ${repo}`;
    }
  };

  const getEventUrl = (event) => {
    const baseUrl = `https://github.com/${event.repo.name}`;

    switch (event.type) {
      case 'PushEvent':
        return `${baseUrl}/commit/${event.payload?.head}`;
      case 'PullRequestEvent':
        return event.payload?.pull_request?.html_url || `${baseUrl}/pulls`;
      case 'IssuesEvent':
        return event.payload?.issue?.html_url || `${baseUrl}/issues`;
      case 'IssueCommentEvent':
        return event.payload?.comment?.html_url || event.payload?.issue?.html_url || `${baseUrl}/issues`;
      default:
        return baseUrl;
    }
  };

  const getEventIcon = (type) => {
    switch (type) {
      case 'PushEvent': return <i className="fas fa-code-branch"></i>;
      case 'PullRequestEvent': return <i className="fas fa-code-pull-request"></i>;
      case 'CreateEvent': return <i className="fas fa-plus-circle"></i>;
      case 'ForkEvent': return <i className="fas fa-code-fork"></i>;
      case 'IssuesEvent': return <i className="fas fa-exclamation-circle"></i>;
      case 'WatchEvent': return <i className="fas fa-star"></i>;
      default: return <i className="fas fa-code"></i>;
    }
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return 'Just now';
  };

  if (loading) {
    return (
      <div className="modern-github-dashboard">
        <div className="modern-github-header">
          <div className="dashboard-title">
            <span className="dashboard-icon">⚡</span>
            git blame
          </div>
          <div className="dashboard-status loading">Loading...</div>
        </div>
        <div className="activity-loading">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="activity-skeleton" />
          ))}
        </div>
      </div>
    );
  }

  const isExpanded = isInFocus || showMore;

  return (
    <div
      ref={dashboardRef}
      className={`modern-github-dashboard ${isExpanded ? 'expanded' : ''}`}
      style={{
        transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transform: isExpanded ? 'scale(1.02)' : 'scale(1)',
      }}
    >
      {/* Dashboard Header */}
      <div className="modern-github-header">
        <div className="dashboard-title">
          git blame
        </div>
        <div className="dashboard-status">
          <span className="status-dot"></span>
        </div>
      </div>

      {/* Activity Feed */}
      <div
        className="modern-activity-feed"
        style={{
          maxHeight: isInFocus ? '800px' : '400px',
          transition: 'max-height 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          overflow: 'hidden'
        }}
      >
        {activities.map((event, index) => (
          <a
            key={event.id}
            href={getEventUrl(event)}
            target="_blank"
            rel="noopener noreferrer"
            className="modern-activity-item"
            style={{
              animationDelay: `${index * 0.1}s`,
              opacity: index >= 5 && !isInFocus ? 0 : 1,
              transform: index >= 5 && !isInFocus ? 'translateY(-20px)' : 'translateY(0)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
              transitionDelay: index >= 5 ? `${(index - 5) * 0.1}s` : '0s'
            }}
          >
            <div className="activity-icon">
              {getEventIcon(event.type)}
            </div>
            <div className="activity-content">
              <div className="activity-main">
                <div className="activity-text">
                  {getEventText(event)}
                </div>
                <div className="activity-repo">
                  {event.repo.name}
                </div>
                {event.payload?.pull_request?.title && (
                  <div className="activity-title">
                    {event.payload.pull_request.title}
                  </div>
                )}
                {event.payload?.issue?.title && (
                  <div className="activity-title">
                    {event.payload.issue.title}
                  </div>
                )}
              </div>
              <div className="activity-meta">
                <span className="activity-time">{formatTime(event.created_at)}</span>
                <span className="activity-user">@{event.actor.login}</span>
                {event.payload?.commits && (
                  <span className="activity-commits">{event.payload.commits.length} commits</span>
                )}
                {event.payload?.pull_request && (
                  <span className="activity-pr">#{event.payload.pull_request.number}</span>
                )}
                {event.payload?.issue && (
                  <span className="activity-issue">#{event.payload.issue.number}</span>
                )}
                {event.payload?.action && (
                  <span className="activity-action">{event.payload.action}</span>
                )}
              </div>
            </div>
            <div className="activity-pulse-container">
              <div className="activity-pulse" />
            </div>
          </a>
        ))}
      </div>

      {/* Dashboard Footer */}
      <div className="modern-github-footer">
        <a
          href={`https://github.com/${username}`}
          className="dashboard-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all on GitHub →
        </a>
      </div>
    </div>
  );
};

export default ModernGitHub;
