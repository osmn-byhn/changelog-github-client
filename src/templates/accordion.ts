import { ProcessedRelease, ChangelogClassNames } from '@osmn-byhn/changelog-github-core';
import { parseMarkdown } from '../utils/markdown';

export function renderAccordion(releases: ProcessedRelease[], classNames?: ChangelogClassNames): string {
  if (releases.length === 0) return '<div class="gc-empty">No releases found.</div>';

  const itemsHTML = releases.map((release, index) => {
    const date = new Date(release.published_at).toLocaleDateString(undefined, {
      year: 'numeric', month: 'short', day: 'numeric'
    });
    const isFirst = index === 0;

    return `
      <div class="gc-accordion-item ${isFirst ? 'gc-accordion-active' : ''} ${classNames?.item || ''}">
        <div class="gc-accordion-header ${classNames?.header || ''}" onclick="this.parentElement.classList.toggle('gc-accordion-active')">
          <div class="gc-accordion-title-row">
            <span class="gc-accordion-toggle-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </span>
            <span class="gc-title ${classNames?.title || ''}">${release.name || release.tag_name}</span>
            <span class="gc-badge ${release.versionGroup} ${classNames?.badge || ''}">${release.versionGroup}</span>
          </div>
          <div class="gc-date gc-accordion-date ${classNames?.date || ''}">${date}</div>
        </div>
        <div class="gc-accordion-content">
          <div class="gc-accordion-body gc-body-content ${classNames?.body || ''}">
            ${parseMarkdown(release.body)}
            <div class="gc-accordion-footer">
              <a href="${release.html_url}" target="_blank" class="gc-accordion-link">View Release on GitHub</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `<div class="gc-accordion-container ${classNames?.container || ''}">${itemsHTML}</div>`;
}
