import { ProcessedRelease, ChangelogClassNames } from '@osmn-byhn/changelog-github-core';
import { parseMarkdown } from '../utils/markdown';

export function renderGlassmorphism(releases: ProcessedRelease[], classNames?: ChangelogClassNames): string {
  if (releases.length === 0) return '<div class="gc-empty">No releases found.</div>';

  const itemsHTML = releases.map(release => {
    const date = new Date(release.published_at).toLocaleDateString(undefined, {
      year: 'numeric', month: 'short', day: 'numeric'
    });

    return `
      <div class="gc-glass-card ${classNames?.item || ''}">
        <div class="gc-glass-header ${classNames?.header || ''}">
          <div class="gc-glass-header-top">
            <a href="${release.html_url}" target="_blank" class="gc-title ${classNames?.title || ''}">${release.name || release.tag_name}</a>
            <span class="gc-badge ${release.versionGroup} ${classNames?.badge || ''}">${release.versionGroup}</span>
          </div>
          <div class="gc-date gc-glass-date ${classNames?.date || ''}">
            <svg style="width:14px;height:14px;fill:currentColor" viewBox="0 0 16 16"><path d="M4.75 0a.75.75 0 01.75.75V2h5V.75a.75.75 0 011.5 0V2h1.25c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0113.25 16H2.75A1.75 1.75 0 011 14.25V3.75C1 2.784 1.784 2 2.75 2H4V.75A.75.75 0 014.75 0zm0 3.5h8.5V3.75a.25.25 0 00-.25-.25H2.75a.25.25 0 00-.25.25V3.5h2.25zM14.5 5H1.5v9.25c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25V5z"></path></svg>
            ${date}
          </div>
        </div>
        <div class="gc-glass-body gc-body-content ${classNames?.body || ''}">
          ${parseMarkdown(release.body)}
        </div>
      </div>
    `;
  }).join('');

  return `<div class="gc-glass-container ${classNames?.container || ''}">${itemsHTML}</div>`;
}
