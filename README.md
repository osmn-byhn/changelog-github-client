# @osmn-byhn/changelog-github-client

> A beautiful, customizable, and lightweight GitHub Changelog widget for your website.

This package provides a high-level UI component (React & Vanilla JS) to display your GitHub project's release history in style. It uses [@osmn-byhn/changelog-github-core](https://github.com/osmn-byhn/changelog-github-core) for data processing.

## Features

- ✨ **Stunning Themes:** Built-in support for Light, Dark, and Auto modes.
- 🎨 **Multiple Templates:** Choose from `modern`, `timeline`, `compact`, `minimal`, `glassmorphism`, `accordion`, and more.
- ⚛️ **React Ready:** Native React component for seamless integration.
- 🍦 **Vanilla JS Support:** Easy-to-use class for non-React projects.
- 🛠️ **Fully Customizable:** Overridable styles and custom HTML renderers.
- 📖 **Storybook:** Interactive environment to preview and configure your widget.

## Installation

```bash
npm install @osmn-byhn/changelog-github-client @osmn-byhn/changelog-github-core
# or
pnpm add @osmn-byhn/changelog-github-client @osmn-byhn/changelog-github-core
```

## Usage

### React

```tsx
import { ReactChangelogLoader } from '@osmn-byhn/changelog-github-client';

function App() {
  return (
    <div style={{ width: '800px' }}>
      <ReactChangelogLoader 
        owner="facebook" 
        repo="react" 
        template="modern" 
        theme="auto"
        maxReleases={5}
      />
    </div>
  );
}
```

### Vanilla JS

```html
<div id="changelog"></div>

<script type="module">
  import { GithubChangelog } from '@osmn-byhn/changelog-github-client';

  const changelog = new GithubChangelog({
    owner: 'facebook',
    repo: 'react',
    containerId: 'changelog',
    template: 'timeline'
  });

  changelog.init();
</script>
```

## Storybook

We provide a comprehensive Storybook setup to help you explore different configurations and styles.

### Running Storybook

1. Clone the main repository (monorepo).
2. Install dependencies: `pnpm install`
3. Run storybook: `pnpm storybook`

This will launch an interactive UI where you can play with templates (`list`, `timeline`, `modern`, etc.) and themes in real-time.

## Configuration Options

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `owner` | `string` | - | GitHub repository owner/organization. |
| `repo` | `string` | - | GitHub repository name. |
| `template` | `string` | `modern` | UI template (`list`, `timeline`, `modern`, `compact`, `minimal`, `glassmorphism`, `accordion`). |
| `theme` | `string` | `auto` | Color theme (`light`, `dark`, `auto`). |
| `maxReleases`| `number` | `5` | Number of releases to display. |
| `containerId`| `string` | - | ID of the target container (Vanilla JS only). |
| `renderCustom`| `function`| - | Custom HTML renderer for absolute control. |

## Related Packages

- [@osmn-byhn/changelog-github-core](https://github.com/osmn-byhn/changelog-github-core): The logic engine powering this client.

## License

MIT © [osmn-byhn](https://github.com/osmn-byhn)
