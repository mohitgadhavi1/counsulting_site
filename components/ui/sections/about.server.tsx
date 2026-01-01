

import AboutClient from "./about";
import { getMarkdownDataInternal } from "@/lib/markdown";

export default async function About() {
  const { frontmatter, content } =  getMarkdownDataInternal();

 
  // Extract the About section from markdown
  // Assuming your markdown has an "## About Us {#about}" section
  const aboutMatch = content.match(/##\s+About Us\s+\{#about\}([\s\S]*?)(?=##\s+|$)/);
  const aboutContent = aboutMatch ? aboutMatch[1].trim() : "";

  

  // Parse the content manually for the stats list
  const lines = aboutContent.split('\n');
  const paragraphs: string[] = [];
  const lists: string[][] = [];
  
  let currentList: string[] = [];
  
  for (const line of lines) {
    const trimmed = line.trim();
    
    if (trimmed.startsWith('- ')) {
      currentList.push(trimmed.slice(2));
    } else if (trimmed && !trimmed.startsWith('#')) {
      if (currentList.length > 0) {
        lists.push(currentList);
        currentList = [];
      }
      paragraphs.push(trimmed);
    }
  }
  
  if (currentList.length > 0) {
    lists.push(currentList);
  }

  const parsedContent = {
    paragraphs,
    lists,
  };

  return (
    <AboutClient
      title="About Us"
      content={parsedContent}
    />
  );
}
