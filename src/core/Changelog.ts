import { ProcessedRelease, GithubFetcher } from '@osmn-byhn/changelog-github-core';
import { ChangelogOptions } from '../types';
import { injectStyles } from '../styles/themes';
import { renderList } from '../templates/list';
import { renderTimeline } from '../templates/timeline';
import { renderModernCard } from '../templates/modern';
import { renderCompact } from '../templates/compact';
import { renderMinimal } from '../templates/minimal';
import { renderGlassmorphism } from '../templates/glassmorphism';
import { renderAccordion } from '../templates/accordion';

export class GithubChangelog {
    private options: ChangelogOptions;
    private fetcher: GithubFetcher;
    private releases: ProcessedRelease[] = [];

    constructor(options: ChangelogOptions) {
        this.options = {
            owner: options.owner,
            repo: options.repo,
            theme: options.theme || 'auto',
            template: options.template || 'list',
            maxReleases: options.maxReleases || 10,
            githubToken: options.githubToken || '',
            containerId: options.containerId || 'changelog-container',
            disableStyles: options.disableStyles || false,
            classNames: options.classNames || {},
            renderCustom: options.renderCustom
        };

        if (!this.options.owner || !this.options.repo) {
            throw new Error('GithubChangelog: owner and repo must be provided in options.');
        }

        this.fetcher = new GithubFetcher(
            this.options.owner,
            this.options.repo,
            this.options.githubToken !== '' ? this.options.githubToken : undefined
        );
    }

    /**
     * Initializes the widget, fetches releases, and renders them.
     */
    async init(): Promise<void> {
        const cId = this.options.containerId || 'changelog-container';
        const container = document.getElementById(cId);
        if (!container) {
            console.error(`GithubChangelog: Container with id '${cId}' not found.`);
            return;
        }

        // Set theme class
        container.classList.add('gc-widget');
        if (this.options.theme === 'light') {
            container.classList.add('gc-theme-light');
        } else if (this.options.theme === 'dark') {
            container.classList.add('gc-theme-dark');
        } else {
            // Auto detect
            const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            container.classList.add(isDark ? 'gc-theme-dark' : 'gc-theme-light');
        }

        // Inject base css
        if (!this.options.disableStyles) {
            injectStyles(this.options.theme);
        }

        try {
            container.innerHTML = '<div class="gc-loading">Fetching releases...</div>';

            this.releases = await this.fetcher.fetchAndProcessReleases(this.options.maxReleases);

            this.render(container);
        } catch (error) {
            console.error('GithubChangelog: Error fetching releases', error);
            container.innerHTML = '<div class="gc-error">Failed to load changelog.</div>';
        }
    }

    /**
     * Manually fetch data without rendering directly
     */
    async getReleases(): Promise<ProcessedRelease[]> {
        this.releases = await this.fetcher.fetchAndProcessReleases(this.options.maxReleases);
        return this.releases;
    }

    /**
     * Manually render data if already fetched
     */
    render(containerElement?: HTMLElement): void {
        const cId = this.options.containerId || 'changelog-container';
        const container = containerElement || document.getElementById(cId);
        if (!container) return;

        if (this.options.renderCustom && typeof this.options.renderCustom === 'function') {
            container.innerHTML = this.options.renderCustom(this.releases);
            return;
        }

        if (this.options.template === 'timeline') {
            container.innerHTML = renderTimeline(this.releases, this.options.classNames);
        } else if (this.options.template === 'modern') {
            container.innerHTML = renderModernCard(this.releases, this.options.classNames);
        } else if (this.options.template === 'compact') {
            container.innerHTML = renderCompact(this.releases, this.options.classNames);
        } else if (this.options.template === 'minimal') {
            container.innerHTML = renderMinimal(this.releases, this.options.classNames);
        } else if (this.options.template === 'glassmorphism') {
            container.innerHTML = renderGlassmorphism(this.releases, this.options.classNames);
        } else if (this.options.template === 'accordion') {
            container.innerHTML = renderAccordion(this.releases, this.options.classNames);
        } else {
            container.innerHTML = renderList(this.releases, this.options.classNames);
        }
    }
}
