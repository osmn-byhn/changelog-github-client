import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ReactChangelogLoader } from '../src/ReactChangelogLoader';

vi.mock('../src/core/Changelog', () => {
    return {
        GithubChangelog: vi.fn().mockImplementation(function () {
            return {
                init: vi.fn().mockResolvedValue(undefined)
            };
        })
    };
});

describe('ReactChangelogLoader', () => {
    it('should render a container div', () => {
        const { container } = render(<ReactChangelogLoader owner="owner" repo="repo" />);
        expect(container.firstChild).toBeDefined();
    });
});
