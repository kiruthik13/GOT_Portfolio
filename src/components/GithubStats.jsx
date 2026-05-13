import React, { useEffect, useState } from 'react';

// GITHUB_USERNAME reads from env var with fallback — set VITE_GITHUB_USERNAME in .env
const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'kiruthik13';
const CACHE_KEY = `gh_stats_${GITHUB_USERNAME}`;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

const GithubStats = () => {
  const [stats, setStats] = useState({ repos: '—', stars: '—', followers: '—', following: '—' });
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGH = async () => {
      // Check sessionStorage cache to avoid hitting 60 req/hr rate limit
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_TTL) {
            setStats(data.stats);
            setRepos(data.repos);
            setLoading(false);
            return;
          }
        }
      } catch (_) { /* ignore parse errors */ }

      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
        ]);

        // Handle rate limiting (403) and not found (404)
        if (userRes.status === 403) throw new Error('Rate limited');
        if (!userRes.ok) throw new Error('User not found');

        const user = await userRes.json();
        const repoData = await reposRes.json();
        const repoList = Array.isArray(repoData) ? repoData : [];

        const starsCount = repoList.reduce((s, r) => s + (r.stargazers_count || 0), 0);
        const statsData = {
          repos: user.public_repos ?? '—',
          stars: starsCount,
          followers: user.followers ?? '—',
          following: user.following ?? '—'
        };
        const repoSlice = repoList.slice(0, 6);

        // Cache in sessionStorage
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({
            data: { stats: statsData, repos: repoSlice },
            timestamp: Date.now()
          }));
        } catch (_) { /* storage full — ignore */ }

        setStats(statsData);
        setRepos(repoSlice);
        setLoading(false);
      } catch (err) {
        console.warn('[GithubStats] Fetch failed:', err.message);
        setError(true);
        setLoading(false);
      }
    };
    fetchGH();
  }, []);

  return (
    <>
      <div className="section-head reveal">
        <div className="section-label">— The Citadel's Records —</div>
        <h2 className="section-title">GitHub Chronicles</h2>
        <div className="divider"><div className="div-line"></div><div className="div-gem"></div><div className="div-line r"></div></div>
      </div>

      {/* Error fallback — styled card */}
      {error && !loading && (
        <div className="gh-error-fallback reveal">
          <div className="gh-error-icon">⚔</div>
          <div className="gh-error-title">The Maester's Records are Sealed</div>
          <div className="gh-error-sub">GitHub API is unreachable or rate-limited at this moment.</div>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="gh-error-link"
          >
            ⚔ Visit github.com/{GITHUB_USERNAME} to view repositories
          </a>
        </div>
      )}

      {!error && (
        <>
          <div className="github-row reveal" id="github-stats-row">
            <div className="gh-card"><div className="gh-num">{stats.repos}</div><div className="gh-label">Repositories</div></div>
            <div className="gh-card"><div className="gh-num">{stats.stars}</div><div className="gh-label">Stars Earned</div></div>
            <div className="gh-card"><div className="gh-num">{stats.followers}</div><div className="gh-label">Followers</div></div>
            <div className="gh-card"><div className="gh-num">{stats.following}</div><div className="gh-label">Following</div></div>
          </div>
          {loading && <div className="gh-loading reveal">⚔ &nbsp; Consulting the Maesters &nbsp; ⚔</div>}
          {!loading && (
            <div className="gh-repos-grid reveal" style={{ display: 'grid' }}>
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  className="gh-repo-card"
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="gh-repo-name">⚔ {repo.name}</div>
                  <div className="gh-repo-desc">{repo.description || 'A conquest of the realm.'}</div>
                  <span className="gh-repo-lang">{repo.language || 'Code'}</span>
                </a>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default GithubStats;
