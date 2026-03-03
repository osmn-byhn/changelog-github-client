import React, { useEffect, useRef } from 'react';
import { GithubChangelog } from './core/Changelog';
import { ChangelogOptions } from './types';

export const ReactChangelogLoader = ({
    owner,
    repo,
    template,
    theme,
    maxReleases,
    disableStyles,
    classNames,
    renderCustom
}: Partial<ChangelogOptions>) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        if (!containerRef.current.id) {
            containerRef.current.id = `react-changelog-${Math.random().toString(36).substr(2, 9)}`;
        }

        const widget = new GithubChangelog({
            owner: owner || 'facebook',
            repo: repo || 'react',
            template: template || 'modern',
            theme: theme || 'auto',
            maxReleases: maxReleases || 5,
            containerId: containerRef.current.id,
            disableStyles,
            classNames,
            renderCustom
        });

        widget.init();

        // Cleanup if needed when unmounted
        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, [owner, repo, template, theme, maxReleases, disableStyles, classNames, renderCustom]);

    return <div ref={containerRef} style={{ width: '100%', minWidth: '600px' }}></div>;
};
