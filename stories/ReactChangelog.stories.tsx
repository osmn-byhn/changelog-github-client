import type { Meta, StoryObj } from '@storybook/react';
import { ReactChangelogLoader } from '../src/index';

const meta = {
    title: 'Frameworks/React',
    component: ReactChangelogLoader,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        template: {
            control: 'select',
            options: ['list', 'timeline', 'modern', 'compact', 'minimal', 'glassmorphism', 'accordion'],
        },
        theme: {
            control: 'select',
            options: ['light', 'dark', 'auto'],
        },
        maxReleases: { control: 'number' },
    },
} satisfies Meta<typeof ReactChangelogLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModernTemplate: Story = {
    args: {
        owner: 'facebook',
        repo: 'react',
        template: 'modern',
        theme: 'light',
        maxReleases: 3,
    },
};

export const TimelineTemplate: Story = {
    args: {
        owner: 'facebook',
        repo: 'react',
        template: 'timeline',
        theme: 'dark',
        maxReleases: 5,
    },
};

export const CompactTemplate: Story = {
    args: {
        owner: 'vuejs',
        repo: 'core',
        template: 'compact',
        theme: 'auto',
        maxReleases: 4,
    },
};

export const MinimalTemplate: Story = {
    args: {
        owner: 'vitejs',
        repo: 'vite',
        template: 'minimal',
        theme: 'light',
        maxReleases: 4,
    },
};

export const GlassmorphismTemplate: Story = {
    args: {
        owner: 'facebook',
        repo: 'react',
        template: 'glassmorphism',
        theme: 'dark',
        maxReleases: 5,
    },
};

export const AccordionTemplate: Story = {
    args: {
        owner: 'vuejs',
        repo: 'core',
        template: 'accordion',
        theme: 'auto',
        maxReleases: 4,
    },
};

export const CustomRenderTemplate: Story = {
    args: {
        owner: 'facebook',
        repo: 'react',
        maxReleases: 3,
        disableStyles: true,
        renderCustom: (releases) => {
            return `
        <div style="font-family: monospace; border: 2px dashed #ff0055; padding: 20px; border-radius: 8px;">
          <h2 style="color: #ff0055; margin-top: 0">🔥 Custom Hacker Template 🔥</h2>
          ${releases.map(r => `
            <div style="margin-bottom: 20px; padding: 10px; background: #111; color: #0f0;">
              <strong>[${r.versionGroup.toUpperCase()}]</strong>
              <a href="${r.html_url}" style="color: #0f0; text-decoration: none;">${r.name || r.tag_name}</a>
              <div style="font-size: 12px; margin-top: 5px; opacity: 0.8">${new Date(r.published_at).toLocaleString()}</div>
            </div>
          `).join('')}
        </div>
      `;
        }
    }
};
