import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthorizeView from '../Authentication/AuthorizeView';
import './PageList.css'; // Create and import this CSS file for custom styles

const PageList = () => {
    const [pages, setPages] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchPages = async () => {
            try {
                const response = await axios.get(process.env.REACT_APP_API_URL +'/api/Markdown/pages'); // Update to your API URL
                setPages(response.data);
            } catch (error) {
                console.error('Error fetching pages:', error);
            }
        };

        fetchPages();
    }, []);

    const filteredPages = pages.filter(page =>
        page.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
                <h1>Vrijdagpreken van Moskee Arrahman</h1>
                <b>Hier vindt u de vertaling van de preek die de imam iedere vrijdag geeft.</b>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Zoek bij datum of titel"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <br/>
            <br/>
            <br/>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Link naar het document</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPages.map((page, index) => (
                        <tr key={index}>
                            <td>
                                <Link to={`/preview/${page}`} className="text-decoration-none page-link">
                                    {page.split('.md')}
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <br/>
            <br/>
            <AuthorizeView>
            <div className="text-center mt-3">
                <Link to="/pagina/edit" className="btn btn-primary">Create New Page</Link>
            </div>
            </AuthorizeView>
        </div>
    );
};

export default PageList;
