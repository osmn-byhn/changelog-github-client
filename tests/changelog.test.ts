import { describe, it, expect, beforeEach, vi } from 'vitest';
import { GithubChangelog } from '../src/core/Changelog';

vi.mock('@osmn-byhn/changelog-github-core', () => {
    return {
        GithubFetcher: vi.fn().mockImplementation(function () {
            return {
                fetchAndProcessReleases: vi.fn().mockResolvedValue([
                    { id: 1, tag_name: 'v1.0.0', published_at: '2023-01-01T00:00:00Z', body: 'Test', versionGroup: 'initial', html_url: '' }
                ])
            };
        })
    };
});

describe('GithubChangelog Integration', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="changelog"></div>';
    });

    it('should initialize and render to the container', async () => {
        const changelog = new GithubChangelog({
            owner: 'owner',
            repo: 'repo',
            containerId: 'changelog'
        });

        await changelog.init();

        const container = document.getElementById('changelog');
        expect(container?.innerHTML).toContain('gc-list-container');
    });
});
