// File: MarkdownRenderer.jsx
import React from 'react';
import ReactMarkdown from 'react-markdown';// Optional: for GitHub-like styling

const MarkdownRenderer = ({ content }) => {
    return (
        <div className="markdown-body">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;
