// lib/markdown.ts
"use server";

import fs from 'fs';
import path from 'path';

interface FrontMatter {
    title?: string;
    mainTitle?: string;
    subtitle?: string;
    header: string[];
    sidebar: Array<{ label: string; id: string }>;
}

interface Section {
    title: string;
    id: string;
    content: string;
}

interface ParsedMarkdown {
    frontmatter: FrontMatter;
    sections: Section[];
    rawContent: string;
}

export async function getMarkdownData(): ParsedMarkdown {
    const filePath = path.join(process.cwd(), 'lib', 'site-content.md');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return parseMarkdown(fileContent);
}

function parseMarkdown(markdown: string): ParsedMarkdown {
    const lines = markdown.split('\n');
    const frontmatter: FrontMatter = {
        header: [],
        sidebar: []
    };
    let inFrontmatter = false;
    let content: string[] = [];
    const frontmatterLines: string[] = [];

    // Parse frontmatter
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() === '---') {
            if (!inFrontmatter) {
                inFrontmatter = true;
            } else {
                content = lines.slice(i + 1);
                break;
            }
        } else if (inFrontmatter) {
            frontmatterLines.push(lines[i]);
        }
    }

    // Parse frontmatter data
    const titleMatch = frontmatterLines.find(l => l.includes('title:'));
    if (titleMatch) {
        frontmatter.title = titleMatch.replace('title:', '').trim().replace(/"/g, '');
    }

    // Parse sidebar from frontmatter
    let inSidebar = false;

    for (let i = 0; i < frontmatterLines.length; i++) {
        const line = frontmatterLines[i];

        if (line.includes('sidebar:')) {
            inSidebar = true;
            continue;
        }

        if (inSidebar) {
            if (line.includes('- label:')) {
                const label = line.match(/label:\s*"(.+?)"/)?.[1];
                const nextLine = frontmatterLines[i + 1];
                const id = nextLine?.match(/id:\s*(.+)/)?.[1]?.trim();

                if (label && id) {
                    frontmatter.sidebar.push({ label, id });
                }
            }
        }
    }

    // Parse main content
    const contentText = content.join('\n');
    const sections: Section[] = [];

    // Extract title from content
    const mainTitleMatch = contentText.match(/^#\s+(.+)$/m);
    if (mainTitleMatch) {
        frontmatter.mainTitle = mainTitleMatch[1];
    }

    // Extract subtitle (bold text after main title)
    const subtitleMatch = contentText.match(/\*\*(.+?)\*\*/);
    if (subtitleMatch) {
        frontmatter.subtitle = subtitleMatch[1];
    }

    // Extract header info (lines before first section)
    const headerSection = contentText.split(/^##\s+/m)[0];
    const headerLines = headerSection
        .split('\n')
        .filter(l => l.trim() && !l.startsWith('#') && !l.includes('**'))
        .map(l => l.trim());

    frontmatter.header = headerLines;

    // Parse sections with IDs
    const sectionRegex = /##\s+(.+?)\s+\{#(.+?)\}([\s\S]*?)(?=##\s+|$)/g;
    let match;

    while ((match = sectionRegex.exec(contentText)) !== null) {
        sections.push({
            title: match[1].trim(),
            id: match[2].trim(),
            content: match[3].trim()
        });
    }

    return {
        frontmatter,
        sections,
        rawContent: contentText
    };
}

// Helper function to parse section content into structured data
export interface ParsedSection {
    paragraphs: string[];
    lists: string[][];
    orderedLists: string[][];
    blockquotes: string[];
    headings: Array<{ level: number; text: string }>;
}

export async function parseSection(content: string): ParsedSection {
    const lines = content.split('\n');
    const parsed: ParsedSection = {
        paragraphs: [],
        lists: [],
        orderedLists: [],
        blockquotes: [],
        headings: []
    };

    let i = 0;
    while (i < lines.length) {
        const line = lines[i].trim();

        if (!line || line === '---') {
            i++;
            continue;
        }

        // H3 Headings
        if (line.startsWith('### ')) {
            parsed.headings.push({
                level: 3,
                text: line.slice(4)
            });
        }
        // Ordered lists
        else if (/^\d+\./.test(line)) {
            const items: string[] = [];
            while (i < lines.length && /^\d+\./.test(lines[i].trim())) {
                const text = lines[i].trim().replace(/^\d+\.\s*/, '');
                items.push(text);
                i++;
                // Include continuation lines
                while (i < lines.length && lines[i].trim() &&
                    !lines[i].trim().startsWith('#') &&
                    !/^\d+\./.test(lines[i].trim()) &&
                    !lines[i].trim().startsWith('-') &&
                    !lines[i].trim().startsWith('>')) {
                    items[items.length - 1] += ' ' + lines[i].trim();
                    i++;
                }
            }
            parsed.orderedLists.push(items);
            continue;
        }
        // Unordered lists
        else if (line.startsWith('- ')) {
            const items: string[] = [];
            while (i < lines.length && lines[i].trim().startsWith('- ')) {
                items.push(lines[i].trim().slice(2));
                i++;
            }
            parsed.lists.push(items);
            continue;
        }
        // Blockquotes
        else if (line.startsWith('> ')) {
            const quoteLines: string[] = [];
            while (i < lines.length && lines[i].trim().startsWith('> ')) {
                quoteLines.push(lines[i].trim().slice(2));
                i++;
            }
            parsed.blockquotes.push(quoteLines.join(' '));
            continue;
        }
        // Regular paragraphs
        else {
            parsed.paragraphs.push(line);
        }

        i++;
    }

    return parsed;
}

// Helper to format text (bold, italic)
export async function formatText(text: string): string {
    return text
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>');
}