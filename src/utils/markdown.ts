/**
 * A very simple and lightweight markdown to HTML converter for release notes.
 * This handles basic formatting, links, and lists.
 */
export function parseMarkdown(md: string): string {
    if (!md) return '';

    let html = md;

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Links
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

    // Code Blocks
    html = html.replace(/```([\s\S]*?)```/gm, '<pre><code>$1</code></pre>');

    // Inline Code
    html = html.replace(/`([^`]+)`/gim, '<code>$1</code>');

    // Unordered Lists
    html = html.replace(/^\s*\*(.*?)$/gim, '<li>$1</li>');
    html = html.replace(/^\s*-(.*?)$/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*?<\/li>)/gim, '<ul>$1</ul>');

    // Clean up duplicate uls
    html = html.replace(/<\/ul>\n?<ul>/gim, '');

    // Paragraphs
    html = html.replace(/^([^<].*)$/gim, '<p>$1</p>');

    // Line Breaks
    html = html.replace(/\n/gim, '<br />');

    // Fix broken p tags after line breaks conversion
    html = html.replace(/<p><br \/><\/p>/gim, '');
    html = html.replace(/<br \/><li>/gim, '<li>');
    html = html.replace(/<\/li><br \/>/gim, '</li>');

    return html;
}
