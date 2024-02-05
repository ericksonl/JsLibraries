import React from 'react';
import { marked } from 'marked';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: ''
        };
    }

    //Asycn method to fetch initial markdown text
    componentDidMount() {
        fetch('https://raw.githubusercontent.com/ericksonl/ericksonl/main/README.md')
            .then(response => response.text())
            .then(text => {
                this.setState({
                    markdown: text
                });
                console.log("what", text);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }


    handleEditorChange = (event) => {

        this.setState({
            markdown: marked.parse(event.target.value)
        });
    }

    render() {
        return (
            <>
                <textarea id="editor" rows="4" cols="50" value={this.state.markdown} onChange={this.handleEditorChange}>
                </textarea>
                <div id="preview">{this.state.markdown}</div>
            </>
        )
    }
}

export default Editor;