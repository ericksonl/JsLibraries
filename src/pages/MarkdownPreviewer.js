import React from 'react';
import Editor from "../components/MarkdownEditor";
import '../styles/markdown.scss';

class MarkdownPreviewer extends React.Component {
    render() {
        return (
            <div id='markdown-wrapper'>
                <Editor />
            </div >
        );
    }
}

export default MarkdownPreviewer;