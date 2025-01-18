import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MarkdownRenderer from './MarkdownRenderer';

const MarkdownPage = () => {
  const { filename } = useParams();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        // Use dynamic import to handle markdown files
        const markdownModule = await import(`../assets/markdown/${filename}.md`);
        const response = await fetch(markdownModule.default);
        const text = await response.text();
        setMarkdown(text);
      } catch (error) {
        console.error(`Error loading markdown: ${error}`);
        setMarkdown('# Error\nUnable to load the requested markdown file.');
      }
    };

    loadMarkdown();
  }, [filename]);

  return (
    <div>
      <section id="main">
        <MarkdownRenderer content={markdown} />
        <br />
      </section>
    </div>
  );
};

export default MarkdownPage;
