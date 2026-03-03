import { ProcessedRelease } from '@osmn-byhn/changelog-github-core';

export interface ChangelogClassNames {
    container?: string;
    item?: string;
    header?: string;
    title?: string;
    badge?: string;
    date?: string;
    body?: string;
}

export interface ChangelogOptions {
    owner: string;
    repo: string;
    theme?: 'light' | 'dark' | 'auto';
    template?: 'list' | 'timeline' | 'modern' | 'compact' | 'minimal' | 'glassmorphism' | 'accordion';
    maxReleases?: number;
    githubToken?: string;
    containerId?: string;
    disableStyles?: boolean;
    classNames?: ChangelogClassNames;
    renderCustom?: (releases: ProcessedRelease[]) => string;
}
