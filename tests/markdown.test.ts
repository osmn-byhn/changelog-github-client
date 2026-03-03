import { describe, it, expect } from 'vitest';
import { parseMarkdown } from '../src/utils/markdown';

describe('Markdown Utility', () => {
    it('should parse headers correctly', () => {
        expect(parseMarkdown('# Header 1')).toContain('<h1>Header 1</h1>');
        expect(parseMarkdown('## Header 2')).toContain('<h2>Header 2</h2>');
        expect(parseMarkdown('### Header 3')).toContain('<h3>Header 3</h3>');
    });

    it('should parse bold and italic', () => {
        expect(parseMarkdown('**bold**')).toContain('<strong>bold</strong>');
        expect(parseMarkdown('*italic*')).toContain('<em>italic</em>');
    });

    it('should parse links', () => {
        expect(parseMarkdown('[Link](https://test.com)')).toContain('<a href="https://test.com"');
        expect(parseMarkdown('[Link](https://test.com)')).toContain('Link</a>');
    });

    it('should parse code blocks', () => {
        expect(parseMarkdown('```js\nconst x = 1;\n```')).toContain('<pre><code>');
    });

    it('should parse inline code', () => {
        expect(parseMarkdown('`code`')).toContain('<code>code</code>');
    });

    it('should parse unordered lists', () => {
        const result = parseMarkdown('* Item 1\n* Item 2');
        expect(result).toContain('<ul>');
        expect(result).toContain('<li> Item 1</li>');
        expect(result).toContain('<li> Item 2</li>');
    });
});
