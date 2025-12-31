import AboutClient from "./about";
import { getMarkdownData, parseSection } from "@/lib/markdown";

export default async function About() {
  const markdownData = await getMarkdownData();

  const aboutSection = markdownData.sections.find(
    (s) => s.id === "about"
  );

  const aboutContent = aboutSection
    ? await parseSection(aboutSection.content)
    : null;

  return (
    <AboutClient
      title={aboutSection?.title ?? "About Us"}
      content={aboutContent}
    />
  );
}
