import { ProcessedRelease, ChangelogClassNames } from '@osmn-byhn/changelog-github-core';
import { parseMarkdown } from '../utils/markdown';

export function renderList(releases: ProcessedRelease[], classNames?: ChangelogClassNames): string {
  if (releases.length === 0) return '<div class="gc-empty">No releases found.</div>';

  const itemsHTML = releases.map(release => {
    const date = new Date(release.published_at).toLocaleDateString(undefined, {
      year: 'numeric', month: 'short', day: 'numeric'
    });

    return `
      <div class="gc-list-item ${classNames?.item || ''}">
        <div class="gc-list-item-header ${classNames?.header || ''}">
          <a href="${release.html_url}" target="_blank" class="gc-title ${classNames?.title || ''}">${release.name || release.tag_name}</a>
          <span class="gc-badge ${release.versionGroup} ${classNames?.badge || ''}">${release.versionGroup}</span>
        </div>
        <div class="gc-date ${classNames?.date || ''}">Released on ${date}</div>
        <div class="gc-body-content ${classNames?.body || ''}">
          ${parseMarkdown(release.body)}
        </div>
      </div>
    `;
  }).join('');

  return `<div class="gc-list-container ${classNames?.container || ''}">${itemsHTML}</div>`;
}
