import ForkRightIcon from "@mui/icons-material/ForkRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Box,
  Chip,
  Container,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Octokit } from "@octokit/rest";
import React, { useState, useEffect } from "react";

import { GITHUB_COLORS } from "../config/repositories";

// Utility: Format numbers nicely
const formatNumber = (num) => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}m`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  return num.toString();
};


// Styled components
const StyledCard = styled(Card)({
  position: "relative",
  transition: "all 0.2s ease",
  background: GITHUB_COLORS.background.card,
  border: `1px solid ${GITHUB_COLORS.border}`,
  borderRadius: "6px",
  height: "100%",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    "& .repo-name": {
      color: GITHUB_COLORS.hover,
    },
  },
});

const RepoStats = styled(Box)({
  display: "flex",
  gap: "8px",
  marginTop: "4px",
});

const StatChip = styled(Chip)({
  background: GITHUB_COLORS.background.chip,
  border: `1px solid ${GITHUB_COLORS.border}`,
  borderRadius: "12px",
  color: GITHUB_COLORS.text.secondary,
  height: "20px",
  "& .MuiChip-icon": {
    color: GITHUB_COLORS.text.secondary,
    fontSize: "14px",
  },
  "& .MuiChip-label": {
    padding: "0 8px",
    fontSize: "0.75rem",
  },
});

// Custom hook to fetch repository statistics concurrently
const useRepoStats = (repos = []) => {
  const [repoStats, setRepoStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const octokit = new Octokit({
      auth: process.env.REACT_APP_GITHUB_TOKEN
    });
    const fetchStats = async () => {
      try {
        const statsArray = await Promise.all(
          repos.map(async (repo) => {
            try {
              const { data } = await octokit.rest.repos.get({
                owner: repo.owner,
                repo: repo.name,
              });
              return {
                key: `${repo.owner}/${repo.name}`,
                stats: {
                  stars: data.stargazers_count,
                  forks: data.forks_count,
                },
              };
            } catch (err) {
              console.error(
                `Error fetching stats for ${repo.owner}/${repo.name}:`,
                err
              );
              return {
                key: `${repo.owner}/${repo.name}`,
                stats: { stars: 0, forks: 0 },
              };
            }
          })
        );
        const statsObj = statsArray.reduce((acc, { key, stats }) => {
          acc[key] = stats;
          return acc;
        }, {});
        setRepoStats(statsObj);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [repos]);

  return { repoStats, loading, error };
};

// The RepoCard component renders individual repository information.
const RepoCard = React.memo(({ repo, stats }) => {
  const { Icon } = repo;
  return (
    <StyledCard>
      <CardActionArea
        href={`https://github.com/${repo.owner}/${repo.name}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardContent sx={{ p: 2 }}>
          <Box sx={{ display: "flex", alignItems: "left", mb: 1.5 }}>
            <Icon
              sx={{
                color: GITHUB_COLORS.text.secondary,
                mr: 1,
                fontSize: "1.3rem",
              }}
            />
            <Typography
              className="repo-name"
              sx={{
                color: GITHUB_COLORS.text.primary,
                fontSize: "0.9rem",
                fontWeight: 600,
              }}
            >
              {repo.displayName}
            </Typography>
          </Box>
          <Typography
            sx={{
              color: GITHUB_COLORS.text.secondary,
              fontSize: ".85rem",
              mb: 2,
              minHeight: "40px",
              lineHeight: 1.5,
            }}
          >
            {repo.desc}
          </Typography>
          <RepoStats>
            {stats && (
              <>
                <StatChip
                  icon={<StarOutlineIcon sx={{ fontSize: "14px" }} />}
                  label={formatNumber(stats.stars)}
                  size="small"
                />
                <StatChip
                  icon={<ForkRightIcon sx={{ fontSize: "14px" }} />}
                  label={formatNumber(stats.forks)}
                  size="small"
                />
              </>
            )}
          </RepoStats>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
});

// Header Component for the page
const PageHeader = () => (
  <Box sx={{ mb: 3 }}>
    <Typography
      variant="h4"
      sx={{
        color: GITHUB_COLORS.text.primary,
        fontWeight: 600,
        fontSize: "1.25rem",
        mb: 2,
      }}
    >
      <GitHubIcon sx={{ mr: 1, verticalAlign: "bottom", fontSize: "2rem" }} />
      Open Source Contributions
    </Typography>
    <Typography
      variant="subtitle1"
      sx={{ color: GITHUB_COLORS.text.secondary, fontSize: "0.9rem" }}
    >
      Projects I believe in, support & contribute to
    </Typography>
  </Box>
);

// Repository List Component
const RepositoryList = ({ repos = [] }) => {
  const { repoStats, loading, error } = useRepoStats(repos);

  if (!repos.length) {
    return (
      <Typography color="error" align="left">
        No repositories configured.
      </Typography>
    );
  }

  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "left", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" align="left">
          Failed to load repository statistics.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {repos.map((repo) => (
            <Grid item xs={12} sm={6} md={6} key={`${repo.owner}/${repo.name}`}>
              <RepoCard
                repo={repo}
                stats={repoStats[`${repo.owner}/${repo.name}`]}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

// Main Component
const OpenSource = ({ repos = [], showHeader = true }) => {
  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      {showHeader && <PageHeader />}
      <RepositoryList repos={repos} />
    </Container>
  );
};

export { OpenSource, PageHeader };
