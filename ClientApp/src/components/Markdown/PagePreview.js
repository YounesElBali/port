import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const PagePreview = () => {
    const { pageName } = useParams();
    const [pages, setPages] = useState([]);
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchPages = async () => {
            try {
                const response = await axios.get(process.env.REACT_APP_API_URL +'/api/Markdown/pages'); // Endpoint to fetch list of pages with metadata
                const pagesWithDates = response.data.map(page => {
                    // Extract date and title from the page name
                    const [dateStr, ...titleParts] = page.name.split(' ');
                    const date = new Date(dateStr.split('-').reverse().join('-')); // Convert to YYYY-MM-DD format
                    const title = titleParts.join(' ');
                    return { ...page, date, title };
                });
                const sortedPages = pagesWithDates.sort((a, b) => b.date - a.date);
                setPages(sortedPages);
            } catch (error) {
                console.error('Error fetching pages:', error);
            }
        };

        fetchPages();
    }, []);

    useEffect(() => {
        const fetchPageContent = async () => {
            if (pageName) {
                try {
                    console.log('the name it is going to look for '+ pageName)
                    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Markdown/pages/${pageName}`);
                    setContent(response.data);
                } catch (error) {
                    console.error('Error fetching page content:', error);
                }
            }
        };

        fetchPageContent();
    }, [pageName]);

    return (
        <div className="container mt-5">
            <h1>{pageName ? pageName.split(".md") : "Page"}</h1>
            <br/>
            <div>
                <ReactMarkdown>
                    {content}
                </ReactMarkdown>
            </div>
            <div className="mt-5">
                <h2>Link naar het document</h2>
                <ul>
                    {pages.map(page => (
                        <li key={page.name}>
                            <a href={`/api/Markdown/pages/${page.name}`}>
                                {page.date.toLocaleDateString()} {page.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PagePreview;
