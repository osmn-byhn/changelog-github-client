export const baseStyles = `
/* GitHub Changelog Widget Base Styles */
.gc-widget {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: var(--gc-text);
  background: transparent;
  line-height: 1.6;
  font-size: 15px;
}

.gc-widget * {
  box-sizing: border-box;
}

/* Common Components */
.gc-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25em 0.75em;
  font-size: 11px;
  font-weight: 700;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.2s ease;
}

.gc-badge.major {
  background: var(--gc-danger-bg);
  color: var(--gc-danger-text);
  border: 1px solid var(--gc-danger-border);
  box-shadow: 0 0 10px var(--gc-danger-shadow);
}

.gc-badge.minor {
  background: var(--gc-info-bg);
  color: var(--gc-info-text);
  border: 1px solid var(--gc-info-border);
  box-shadow: 0 0 10px var(--gc-info-shadow);
}

.gc-badge.patch {
  background: var(--gc-success-bg);
  color: var(--gc-success-text);
  border: 1px solid var(--gc-success-border);
  box-shadow: 0 0 10px var(--gc-success-shadow);
}

.gc-badge.initial {
  background: var(--gc-secondary-bg);
  color: var(--gc-secondary-text);
  border: 1px solid var(--gc-secondary-border);
}

.gc-badge.unknown {
  background: var(--gc-neutral-bg);
  color: var(--gc-neutral-text);
  border: 1px solid var(--gc-neutral-border);
}

.gc-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.gc-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
  color: var(--gc-title);
  text-decoration: none;
  transition: color 0.2s;
}

.gc-title:hover {
  color: var(--gc-link);
}

.gc-date {
  color: var(--gc-text-muted);
  font-size: 0.85em;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.gc-body-content {
  margin-top: 1.25rem;
  color: var(--gc-text);
}

.gc-body-content h1, 
.gc-body-content h2, 
.gc-body-content h3 {
  margin-top: 1.5em;
  margin-bottom: 0.75em;
  font-weight: 700;
  color: var(--gc-title);
}

.gc-body-content h1 { font-size: 1.25em; border-bottom: 1px solid var(--gc-border); padding-bottom: 0.5em; }
.gc-body-content h2 { font-size: 1.15em; }
.gc-body-content h3 { font-size: 1.05em; }

.gc-body-content a {
  color: var(--gc-link);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
}

.gc-body-content a:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.gc-body-content code {
  font-family: 'Fira Code', ui-monospace, SFMono-Regular, Consolas, monospace;
  background: var(--gc-code-bg);
  color: var(--gc-code-text);
  padding: 0.2em 0.5em;
  border-radius: 6px;
  font-size: 0.85em;
  border: 1px solid var(--gc-border-subtle);
}

.gc-body-content pre {
  background: var(--gc-code-block-bg);
  padding: 1.25rem;
  border-radius: 8px;
  overflow: auto;
  border: 1px solid var(--gc-border-subtle);
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
}

.gc-body-content pre code {
  background: transparent;
  border: none;
  padding: 0;
  color: var(--gc-code-block-text);
}

.gc-body-content ul {
  padding-left: 1.5em;
  margin-bottom: 1.25em;
}

.gc-body-content li {
  margin-bottom: 0.25em;
}

/* Template: List */
.gc-list-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.gc-list-item {
  border: 1px solid var(--gc-border);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  background: var(--gc-item-bg);
  box-shadow: var(--gc-shadow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.gc-list-item:hover {
  box-shadow: var(--gc-shadow-hover);
  border-color: var(--gc-border-hover);
}

.gc-list-item-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

/* Template: Timeline */
.gc-timeline-container {
  position: relative;
  padding-left: 2.5rem;
}

.gc-timeline-container::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0.75rem;
  width: 2px;
  background: linear-gradient(to bottom, var(--gc-border) 0%, var(--gc-border-subtle) 100%);
  border-radius: 2px;
}

.gc-timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
  background: var(--gc-item-bg);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--gc-border);
  box-shadow: var(--gc-shadow);
}

.gc-timeline-item::before {
  content: '';
  position: absolute;
  top: 2rem;
  left: -2.05rem;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: var(--gc-item-bg);
  border: 2px solid var(--gc-link);
  box-shadow: 0 0 0 4px var(--gc-bg);
  z-index: 2;
}

.gc-timeline-item.major::before { border-color: var(--gc-danger-border); background: var(--gc-danger-bg); }
.gc-timeline-item.minor::before { border-color: var(--gc-info-border); background: var(--gc-info-bg); }
.gc-timeline-item.patch::before { border-color: var(--gc-success-border); background: var(--gc-success-bg); }

/* Template: Modern Card */
.gc-modern-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.gc-modern-card {
  background: var(--gc-item-bg);
  border: 1px solid var(--gc-border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--gc-shadow);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.gc-modern-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--gc-shadow-hover);
  border-color: var(--gc-border-hover);
}

.gc-modern-header {
  padding: 1.5rem;
  background: var(--gc-card-header-bg);
  border-bottom: 1px solid var(--gc-border-subtle);
}

.gc-modern-body {
  padding: 1.5rem;
  flex-grow: 1;
}

/* Template: Compact */
.gc-compact-container {
  display: flex;
  flex-direction: column;
  background: var(--gc-item-bg);
  border: 1px solid var(--gc-border);
  border-radius: 12px;
  overflow: hidden;
}

.gc-compact-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--gc-border-subtle);
  transition: background 0.2s;
}

.gc-compact-item:last-child {
  border-bottom: none;
}

.gc-compact-item:hover {
  background: var(--gc-item-bg-hover);
}

.gc-compact-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Template: Minimal */
.gc-minimal-container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.gc-minimal-item {
  border-bottom: 1px solid var(--gc-border-subtle);
  padding-bottom: 2.5rem;
}

.gc-minimal-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.gc-minimal-header {
  margin-bottom: 1rem;
}

.gc-minimal-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.gc-minimal-date {
  font-size: 0.85rem;
  color: var(--gc-text-muted);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.gc-minimal-title {
  font-size: 1.75rem;
  display: block;
}

/* Template: Glassmorphism */
.gc-glass-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.gc-glass-card {
  background: var(--gc-glass-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--gc-glass-border);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--gc-glass-shadow);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
  position: relative;
}

.gc-glass-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  z-index: 1;
}

.gc-glass-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: var(--gc-glass-shadow-hover);
}

.gc-glass-header {
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid var(--gc-glass-border-subtle);
  position: relative;
  z-index: 2;
}

.gc-glass-header-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.gc-glass-date {
  color: var(--gc-text-muted);
}

.gc-glass-body {
  padding: 1rem 1.5rem 1.5rem;
  flex-grow: 1;
  position: relative;
  z-index: 2;
}

/* Template: Accordion */
.gc-accordion-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.gc-accordion-item {
  background: var(--gc-item-bg);
  border: 1px solid var(--gc-border);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: var(--gc-shadow);
}

.gc-accordion-item:hover {
  box-shadow: var(--gc-shadow-hover);
  border-color: var(--gc-border-hover);
}

.gc-accordion-header {
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  background: var(--gc-card-header-bg);
  transition: background 0.2s ease;
}

.gc-accordion-header:hover {
  background: var(--gc-item-bg-hover);
}

.gc-accordion-title-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.gc-accordion-toggle-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gc-text-muted);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.gc-accordion-active .gc-accordion-toggle-icon {
  transform: rotate(180deg);
  color: var(--gc-link);
}

.gc-accordion-content {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
}

.gc-accordion-active .gc-accordion-content {
  max-height: 2000px; /* reasonably large to fit content */
  opacity: 1;
}

.gc-accordion-body {
  padding: 1.5rem;
  border-top: 1px solid var(--gc-border-subtle);
}

.gc-accordion-footer {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--gc-border-subtle);
}

.gc-accordion-link {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--gc-link);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.gc-accordion-link::after {
  content: '→';
  transition: transform 0.2s;
}
.gc-accordion-link:hover::after {
  transform: translateX(4px);
}

/* Themes */
.gc-theme-light {
  --gc-bg: transparent;
  --gc-title: #111827;
  --gc-text: #374151;
  --gc-text-muted: #6b7280;
  
  --gc-border: #e5e7eb;
  --gc-border-subtle: #f3f4f6;
  --gc-border-hover: #d1d5db;
  
  --gc-item-bg: #ffffff;
  --gc-item-bg-hover: #f9fafb;
  --gc-card-header-bg: #f9fafb;
  
  --gc-link: #2563eb;
  
  --gc-code-bg: #f3f4f6;
  --gc-code-text: #be185d;
  --gc-code-block-bg: #1f2937;
  --gc-code-block-text: #f8fafc;
  
  --gc-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  --gc-shadow-hover: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04);
  
  --gc-danger-bg: #fef2f2;
  --gc-danger-text: #b91c1c;
  --gc-danger-border: #fca5a5;
  --gc-danger-shadow: rgba(239, 68, 68, 0.15);
  
  --gc-info-bg: #eff6ff;
  --gc-info-text: #1d4ed8;
  --gc-info-border: #93c5fd;
  --gc-info-shadow: rgba(59, 130, 246, 0.15);
  
  --gc-success-bg: #f0fdf4;
  --gc-success-text: #15803d;
  --gc-success-border: #86efac;
  --gc-success-shadow: rgba(34, 197, 94, 0.15);

  --gc-secondary-bg: #f3f4f6;
  --gc-secondary-text: #4b5563;
  --gc-secondary-border: #d1d5db;

  --gc-neutral-bg: #f3f4f6;
  --gc-neutral-text: #4b5563;
  --gc-neutral-border: #d1d5db;

  --gc-glass-bg: rgba(255, 255, 255, 0.7);
  --gc-glass-border: rgba(255, 255, 255, 0.5);
  --gc-glass-border-subtle: rgba(0, 0, 0, 0.05);
  --gc-glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
  --gc-glass-shadow-hover: 0 12px 48px rgba(0, 0, 0, 0.1);
}

.gc-theme-dark {
  --gc-bg: transparent;
  --gc-title: #f9fafb;
  --gc-text: #d1d5db;
  --gc-text-muted: #9ca3af;
  
  --gc-border: #374151;
  --gc-border-subtle: #1f2937;
  --gc-border-hover: #4b5563;
  
  --gc-item-bg: #111827;
  --gc-item-bg-hover: #1f2937;
  --gc-card-header-bg: #1f2937;
  
  --gc-link: #60a5fa;
  
  --gc-code-bg: #374151;
  --gc-code-text: #fca5a5;
  --gc-code-block-bg: #030712;
  --gc-code-block-text: #e2e8f0;
  
  --gc-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  --gc-shadow-hover: 0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
  
  --gc-danger-bg: rgba(127, 29, 29, 0.3);
  --gc-danger-text: #fca5a5;
  --gc-danger-border: #991b1b;
  --gc-danger-shadow: rgba(220, 38, 38, 0.15);
  
  --gc-info-bg: rgba(30, 58, 138, 0.3);
  --gc-info-text: #93c5fd;
  --gc-info-border: #1e40af;
  --gc-info-shadow: rgba(37, 99, 235, 0.15);
  
  --gc-success-bg: rgba(20, 83, 45, 0.3);
  --gc-success-text: #86efac;
  --gc-success-border: #166534;
  --gc-success-shadow: rgba(22, 163, 74, 0.15);

  --gc-secondary-bg: rgba(55, 65, 81, 0.3);
  --gc-secondary-text: #d1d5db;
  --gc-secondary-border: #4b5563;

  --gc-neutral-bg: rgba(55, 65, 81, 0.3);
  --gc-neutral-text: #d1d5db;
  --gc-neutral-border: #4b5563;

  --gc-glass-bg: rgba(17, 24, 39, 0.6);
  --gc-glass-border: rgba(255, 255, 255, 0.1);
  --gc-glass-border-subtle: rgba(255, 255, 255, 0.05);
  --gc-glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  --gc-glass-shadow-hover: 0 12px 48px rgba(0, 0, 0, 0.6);
}
`;

export function injectStyles(theme: 'light' | 'dark' | 'auto' = 'auto'): void {
  // Check if styles already exist
  if (document.getElementById('gc-styles')) return;

  const styleEl = document.createElement('style');
  styleEl.id = 'gc-styles';
  styleEl.innerHTML = baseStyles;
  document.head.appendChild(styleEl);
}
