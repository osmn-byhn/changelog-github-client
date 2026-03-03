import { ProcessedRelease, ChangelogClassNames } from '@osmn-byhn/changelog-github-core';
import { parseMarkdown } from '../utils/markdown';

export function renderMinimal(releases: ProcessedRelease[], classNames?: ChangelogClassNames): string {
  if (releases.length === 0) return '<div class="gc-empty">No releases found.</div>';

  const itemsHTML = releases.map(release => {
    const date = new Date(release.published_at).toLocaleDateString(undefined, {
      year: 'numeric', month: 'short', day: 'numeric'
    });

    return `
      <div class="gc-minimal-item ${classNames?.item || ''}">
        <div class="gc-minimal-header ${classNames?.header || ''}">
          <div class="gc-minimal-meta">
            <span class="gc-minimal-date ${classNames?.date || ''}">${date}</span>
            <span class="gc-badge ${release.versionGroup} ${classNames?.badge || ''}">${release.versionGroup}</span>
          </div>
          <a href="${release.html_url}" target="_blank" class="gc-title gc-minimal-title ${classNames?.title || ''}">${release.name || release.tag_name}</a>
        </div>
        <div class="gc-body-content gc-minimal-body ${classNames?.body || ''}">
          ${parseMarkdown(release.body)}
        </div>
      </div>
    `;
  }).join('');

  return `<div class="gc-minimal-container ${classNames?.container || ''}">${itemsHTML}</div>`;
}
