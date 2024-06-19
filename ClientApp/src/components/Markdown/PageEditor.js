import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import TurndownService from 'turndown';
import 'react-quill/dist/quill.snow.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PageEditor.css'; // Make sure this CSS file is created and imported

const PageEditor = () => {
    const [fileName, setFileName] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const turndownService = new TurndownService();

    // Custom Turndown rules for converting HTML to Markdown
    turndownService.addRule('header', {
        filter: ['h1', 'h2', 'h3'],
        replacement: function (content, node) {
            const level = node.nodeName === 'H1' ? '#' : node.nodeName === 'H2' ? '##' :'###';
            return `\n${level} ${content}\n`;
        }
    });

    turndownService.addRule('bold', {
        filter: ['strong', 'b'],
        replacement: function (content) {
            return `**${content}**`;
        }
    });

    turndownService.addRule('italic', {
        filter: ['em', 'i'],
        replacement: function (content) {
            return `*${content}*`;
        }
    });

    turndownService.addRule('underline', {
        filter: 'u',
        replacement: function (content) {
            return `<u>${content}</u>`; // Markdown doesn't support underline, so use HTML tags
        }
    });

    turndownService.addRule('strike', {
        filter: 's',
        replacement: function (content) {
            return `~~${content}~~`;
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Convert HTML to markdown
        const markdownContent = turndownService.turndown(content);
        const newPage = {
            fileName: `${fileName}.md`,
            content: markdownContent,
        };

        try {
            await axios.post(process.env.REACT_APP_API_URL + '/api/Markdown/pages', newPage); // Update to your API URL
            navigate('/');
        } catch (error) {
            console.error('There was an error creating the page!', error);
        }
    };

    return (
        <div className="container-fluid mt-5"> 
            <div className="row mb-3">
                <div className="col-12 text-center">
                    <h1>Maak een nieuwe pagina</h1>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row align-items-center mb-3">
                    <div className="col-md-8">
                        <label htmlFor="fileName" className="form-label">Bestand</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fileName"
                            value={fileName}
                            onChange={(e) => setFileName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-4 text-md-start mt-2 mt-md-0">
                        <button type="submit" className="btn btn-primary">Create Page</button>
                    </div>
                </div>
                <div className="row editor-preview mt-4">
                    <div className="col-md-6 editor-pane">
                        <ReactQuill
                            value={content}
                            onChange={setContent}
                            modules={PageEditor.modules}
                            formats={PageEditor.formats}
                            theme="snow"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

// Configure ReactQuill modules and formats
PageEditor.modules = {
    toolbar: [
        [{ 'header': '1'}, {'header': '2'}],
        ['bold', 'italic'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
    ],
};

PageEditor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];

export default PageEditor;
