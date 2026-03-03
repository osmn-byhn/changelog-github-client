import { ProcessedRelease, ChangelogClassNames } from '@osmn-byhn/changelog-github-core';

export function renderCompact(releases: ProcessedRelease[], classNames?: ChangelogClassNames): string {
  if (releases.length === 0) return '<div class="gc-empty">No releases found.</div>';

  const itemsHTML = releases.map(release => {
    const date = new Date(release.published_at).toLocaleDateString(undefined, {
      year: 'numeric', month: 'short', day: 'numeric'
    });

    return `
      <div class="gc-compact-item ${classNames?.item || ''}">
        <div class="gc-compact-left">
          <span class="gc-badge ${release.versionGroup} ${classNames?.badge || ''}" style="padding: 0.15em 0.5em; font-size: 10px;">${release.versionGroup}</span>
          <a href="${release.html_url}" target="_blank" class="gc-title ${classNames?.title || ''}" style="font-size: 1rem;">${release.name || release.tag_name}</a>
        </div>
        <div class="gc-date ${classNames?.date || ''}">${date}</div>
      </div>
    `;
  }).join('');

  return `<div class="gc-compact-container ${classNames?.container || ''}">${itemsHTML}</div>`;
}
