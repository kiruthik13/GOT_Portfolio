import React, { useEffect, useState } from 'react';

const GithubStats = () => {
  const GITHUB_USERNAME = 'kiruthik13';
  const [stats, setStats] = useState({ repos: '—', stars: '—', followers: '—', following: '—' });
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGH = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
        ]);
        if (!userRes.ok) throw new Error('User not found');
        const user = await userRes.json();
        const repoData = await reposRes.json();

        const starsCount = repoData.reduce((s, r) => s + (r.stargazers_count || 0), 0);
        setStats({
          repos: user.public_repos || '—',
          stars: starsCount,
          followers: user.followers || '—',
          following: user.following || '—'
        });
        setRepos(repoData.slice(0, 6));
        setLoading(false);
      } catch (err) {
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
      <div className="github-row reveal" id="github-stats-row">
        <div className="gh-card"><div className="gh-num">{stats.repos}</div><div className="gh-label">Repositories</div></div>
        <div className="gh-card"><div className="gh-num">{stats.stars}</div><div className="gh-label">Stars Earned</div></div>
        <div className="gh-card"><div className="gh-num">{stats.followers}</div><div className="gh-label">Followers</div></div>
        <div className="gh-card"><div className="gh-num">{stats.following}</div><div className="gh-label">Following</div></div>
      </div>
      {loading && <div className="gh-loading reveal">⚔ &nbsp; Consulting the Maesters &nbsp; ⚔</div>}
      {error && !loading && (
        <div className="gh-loading reveal" style={{ color: 'var(--crimson-light)' }}>
          ⚔ Configure GitHub username in the script to display live stats
        </div>
      )}
      {!loading && !error && (
        <div className="gh-repos-grid reveal" style={{ display: 'grid' }}>
          {repos.map((repo) => (
            <div key={repo.id} className="gh-repo-card">
              <div className="gh-repo-name">⚔ {repo.name}</div>
              <div className="gh-repo-desc">{repo.description || 'A conquest of the realm.'}</div>
              <span className="gh-repo-lang">{repo.language || 'Code'}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default GithubStats;
