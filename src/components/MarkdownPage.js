import React, { useState, useEffect } from 'react';
import MarkdownRenderer from './MarkdownRenderer';

const MarkdownPage = ({ filename }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const response = await fetch(require(`../assets/markdown/${filename}.md`));
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
