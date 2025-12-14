import { formatDistanceToNow } from "date-fns";
import React, { useState, useEffect, useCallback, useMemo } from "react";

import SAMPLE_FEED from "../config/sample_gh_feed.json";

const ICONS = {
  PushEvent: '→',
  PullRequestEvent: '⤴',
  IssuesEvent: '○',
  ForkEvent: '⑂',
  CreateEvent: '+',
  ReleaseEvent: '◆',
  PullRequestReviewEvent: '✓',
};

const VERBS = {
  PushEvent: "pushed to",
  PullRequestEvent: "opened pr in",
  IssuesEvent: "opened issue in",
  ForkEvent: "forked",
  CreateEvent: "created",
  ReleaseEvent: "released",
  PullRequestReviewEvent: "reviewed",
};

const getPRDetails = (event) => {
  if (event.type !== "PullRequestEvent" || !event.payload?.pull_request) return null;
  const pr = event.payload.pull_request;
  return { title: pr.title, number: pr.number, additions: pr.additions, deletions: pr.deletions };
};

const GitHubActivityLog = ({ username }) => {
  const [activityLog, setActivityLog] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchActivityLog = useCallback(async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/events`);
      if (!response.ok) throw new Error("Failed to fetch");
      setActivityLog(await response.json());
    } catch {
      setActivityLog(SAMPLE_FEED);
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => { fetchActivityLog(); }, [fetchActivityLog]);

  const events = useMemo(() => {
    const filtered = activityLog.filter(e => 
      !["IssueCommentEvent", "DeleteEvent", "WatchEvent"].includes(e.type)
    );
    const grouped = [];
    let current = null;
    filtered.forEach(event => {
      if (current?.type === event.type && current?.repo.name === event.repo.name && event.type !== "PullRequestEvent") {
        current.count++;
      } else {
        if (current) grouped.push(current);
        current = { ...event, count: 1 };
      }
    });
    if (current) grouped.push(current);
    return grouped.slice(0, 6);
  }, [activityLog]);

  if (loading) {
    return (
      <div className="gh-dashboard">
        <div className="gh-header">
          <span className="gh-title">⚡ recent activity</span>
          <span className="gh-status gh-status--loading">loading...</span>
        </div>
        <div className="gh-loading">
          {[...Array(3)].map((_, i) => <div key={i} className="gh-skeleton" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="gh-dashboard">
      <div className="gh-header">
        <span className="gh-title">⚡ recent activity</span>
        <span className="gh-status"><span className="gh-dot" /> live</span>
      </div>
      
      <div className="gh-feed">
        {events.map((event, i) => {
          const pr = getPRDetails(event);
          return (
            <a
              key={event.id}
              href={`https://github.com/${event.repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-item"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="gh-icon">{ICONS[event.type] || '•'}</span>
              <span className="gh-body">
                <span className="gh-action">
                  <span className="gh-verb">{VERBS[event.type]}</span>
                  <span className="gh-repo">{event.repo.name.split('/')[1]}</span>
                  {event.count > 1 && <span className="gh-count">{event.count}×</span>}
                </span>
                {pr && (
                  <span className="gh-pr">
                    <span className="gh-pr-title">{pr.title}</span>
                    <span className="gh-pr-stats">
                      #{pr.number}
                      {pr.additions > 0 && <span className="gh-add">+{pr.additions}</span>}
                      {pr.deletions > 0 && <span className="gh-del">−{pr.deletions}</span>}
                    </span>
                  </span>
                )}
                <span className="gh-time">{formatDistanceToNow(new Date(event.created_at), { addSuffix: true })}</span>
              </span>
            </a>
          );
        })}
      </div>

      <div className="gh-footer">
        <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="gh-link">
          view all on github →
        </a>
      </div>
    </div>
  );
};

export default GitHubActivityLog;
