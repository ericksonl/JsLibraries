import React from 'react';
import Editor from "../components/MarkdownEditor";

class MarkdownPreviewer extends React.Component {
    render() {
        return (
            <div>
                <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
                <h1>Markdown Previewer</h1>
                <Editor />
            </div >
        );
    }
}

export default MarkdownPreviewer;