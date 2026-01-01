// lib/markdown.ts
"use server";

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface FrontMatter {
    title?: string;
    sidebar: Array<{ label: string; id: string }>;
}

interface MarkdownData {
    frontmatter: FrontMatter;
    content: string;
}

// Keep this as Server Action for client-side calls
export async function getMarkdownData(): Promise<MarkdownData> {
    return getMarkdownDataInternal();
}

// New internal function without "use server" for Server Components
function getMarkdownDataInternal(): MarkdownData {
    try {
        const filePath = path.join(process.cwd(), 'lib', 'site-content.md');
        console.log("filePath:", filePath);

        if (!fs.existsSync(filePath)) {
            throw new Error(`Markdown file not found at ${filePath}`);
        }

        const fileContent = fs.readFileSync(filePath, 'utf8');
        console.log("fileContent loaded, length:", fileContent.length);

        const { data, content } = matter(fileContent);

        return {
            frontmatter: {
                title: data.title,
                sidebar: data.sidebar || []
            },
            content
        };
    } catch (error) {
        console.error('Error reading markdown file:', error);
        return {
            frontmatter: { sidebar: [] },
            content: ''
        };
    }
}

// Export this for Server Components
export { getMarkdownDataInternal };