import ForkRightIcon from "@mui/icons-material/ForkRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarIcon from "@mui/icons-material/Star";
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

const CACHE_KEY = "ghRepoStatsV1";
const CACHE_TTL_MS = 1000 * 60 * 60 * 6; // 6 hours

const COLORS = {
  bg: '#f7f7f4',
  bgSection: '#f3f2ef',
  bgCard: '#ecebe9',
  text: '#26251e',
  textMuted: '#6f6f6a',
  accent: '#f45a19',
  border: '#e8e7e4',
};

const formatNumber = (num) => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}m`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
  return num.toString();
};

const StyledCard = styled(Card)({
  transition: "all 0.2s ease",
  background: "white",
  border: `1px solid ${COLORS.border}`,
  borderRadius: "16px",
  height: "100%",
  boxShadow: "0 2px 8px rgba(0,0,0,.04)",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 10px 30px rgba(0,0,0,.1)",
    "& .repo-name": { color: COLORS.accent },
  },
});

const RepoStats = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginTop: "12px",
});

const StatChip = styled(Chip)({
  background: COLORS.bgSection,
  border: `1px solid ${COLORS.border}`,
  borderRadius: "9999px",
  color: COLORS.textMuted,
  height: "26px",
  "& .MuiChip-icon": { fontSize: "14px", marginLeft: "8px", marginRight: "-2px" },
  "& .MuiChip-label": { padding: "0 10px", fontSize: "0.8rem" },
});

const repoKey = (repo) => `${repo.owner}/${repo.name}`;

const readCache = () => {
  if (typeof window === "undefined") return null;
  try {
    const cached = window.localStorage.getItem(CACHE_KEY);
    return cached ? JSON.parse(cached) : null;
  } catch {
    return null;
  }
};

const writeCache = (data) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ data, expiresAt: Date.now() + CACHE_TTL_MS })
    );
  } catch {
    // Swallow cache write errors (private mode, quota, etc.)
  }
};

const cacheIsFresh = (cache, repos) => {
  if (!cache?.data || cache.expiresAt < Date.now()) return false;
  return repos.every((repo) => cache.data[repoKey(repo)]);
};

const fetchRepoStats = async (octokit, repo) => {
  const key = repoKey(repo);
  try {
    const { data } = await octokit.rest.repos.get({
      owner: repo.owner,
      repo: repo.name,
    });
    return { key, stats: { stars: data.stargazers_count, forks: data.forks_count } };
  } catch (primaryError) {
    try {
      const response = await fetch(`https://ungh.cc/repos/${repo.owner}/${repo.name}`);
      if (!response.ok) throw new Error(`ungh.cc response ${response.status}`);
      const fallback = await response.json();
      return {
        key,
        stats: {
          stars: fallback?.repo?.stars ?? 0,
          forks: fallback?.repo?.forks ?? 0,
        },
      };
    } catch (fallbackError) {
      console.warn(`Failed to load stats for ${key}`, { primaryError, fallbackError });
      return { key, stats: { stars: 0, forks: 0 } };
    }
  }
};

const useRepoStats = (repos = []) => {
  const [repoStats, setRepoStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!repos.length) {
      setLoading(false);
      return;
    }

    const cached = readCache();
    if (cacheIsFresh(cached, repos)) {
      setRepoStats(cached.data);
      setLoading(false);
      return;
    }

    if (cached?.data) {
      setRepoStats(cached.data);
    }

    const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN });
    const fetchStats = async () => {
      try {
        const statsArray = await Promise.all(
          repos.map((repo) => fetchRepoStats(octokit, repo))
        );
        const nextStats = statsArray.reduce(
          (acc, { key, stats }) => ({ ...acc, [key]: stats }),
          {}
        );
        setRepoStats(nextStats);
        writeCache(nextStats);
        setError(null);
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

const RepoCard = React.memo(({ repo, stats }) => {
  const { Icon } = repo;
  return (
    <StyledCard>
      <CardActionArea href={`https://github.com/${repo.owner}/${repo.name}`} target="_blank" rel="noopener noreferrer">
        <CardContent sx={{ p: 2.5 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <Icon sx={{ color: COLORS.textMuted, mr: 1, fontSize: "1.2rem" }} />
            <Typography className="repo-name" sx={{ color: COLORS.text, fontSize: "0.95rem", fontWeight: 600, transition: "color 0.2s ease", textTransform: "lowercase" }}>
              {repo.displayName.toLowerCase()}
            </Typography>
          </Box>
          <Typography sx={{ color: COLORS.textMuted, fontSize: ".85rem", mb: 2, minHeight: "40px", lineHeight: 1.5, textTransform: "lowercase" }}>
            {repo.desc.toLowerCase()}
          </Typography>
          <RepoStats>
            {stats && (
              <>
                <StatChip icon={<StarIcon sx={{ color: "#FFD700" }} />} label={formatNumber(stats.stars)} size="small" />
                <StatChip icon={<ForkRightIcon sx={{ color: COLORS.textMuted }} />} label={formatNumber(stats.forks)} size="small" />
              </>
            )}
          </RepoStats>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
});

const PageHeader = () => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h4" sx={{ color: COLORS.text, fontWeight: 600, fontSize: "1.25rem", mb: 1, textTransform: "lowercase" }}>
      <GitHubIcon sx={{ mr: 1, verticalAlign: "bottom", color: COLORS.textMuted }} />
      open source contributions
    </Typography>
    <Typography variant="subtitle1" sx={{ color: COLORS.textMuted, fontSize: "0.9rem", textTransform: "lowercase" }}>
      my projects + a few i believe in, support & contribute to
    </Typography>
  </Box>
);

const RepositoryList = ({ repos = [] }) => {
  const { repoStats, loading, error } = useRepoStats(repos);

  if (!repos.length) return <Typography color="error">no repositories configured.</Typography>;
  if (loading) return <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}><CircularProgress sx={{ color: COLORS.accent }} /></Box>;
  if (error) return <Typography color="error">failed to load repository statistics.</Typography>;

  return (
    <Grid container spacing={2}>
      {repos.map((repo) => (
        <Grid item xs={12} sm={6} key={`${repo.owner}/${repo.name}`}>
          <RepoCard repo={repo} stats={repoStats[`${repo.owner}/${repo.name}`]} />
        </Grid>
      ))}
    </Grid>
  );
};

const OpenSource = ({ repos = [], showHeader = true }) => (
  <Container maxWidth="lg" sx={{ py: 2 }}>
    {showHeader && <PageHeader />}
    <RepositoryList repos={repos} />
  </Container>
);

export { OpenSource, PageHeader };
