import React from 'react';
import KeyComponents from './DMKeyComponents.js';

class DMBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: 'drum-pad'
        };
    }

    handleClick = (url, name) => {
        let audio = new Audio(url)
        audio.play();
        document.getElementById('display').innerHTML = name.replace(/-/g, ' ');
    }

    render() {
        return (
            <>
                <div id='contents'>
                    <p id='display'></p>
                </div>
                <div id='buttons'>
                    {Object.keys(KeyComponents).map((key, index) => (
                        <button key={index} id={KeyComponents[key].id} className={this.state.class} onClick={(event) => this.handleClick(KeyComponents[key].url, KeyComponents[key].id)}>
                            {KeyComponents[key].keyTrigger}
                            <audio id={KeyComponents[key].keyTrigger} className='clip' ref={this.audioRef} src={KeyComponents[key].url}></audio>
                        </button>
                    ))}
                </div>
            </>
        )
    }
}

export default DMBuilder;