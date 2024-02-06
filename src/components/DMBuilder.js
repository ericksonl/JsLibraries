import React from 'react';
import KeyComponents from './DMKeyComponents.js';

class DMBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: 'drum-pad',
            keyCode: ''
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
                <div id='buttons'>
                    {Object.keys(KeyComponents).map((key, index) => (
                        <button
                            key={index}
                            id={KeyComponents[key].id}
                            className={this.state.class}
                            onClick={() => this.handleClick(KeyComponents[key].url, KeyComponents[key].id)}
                        >
                            <span class="front">
                                {KeyComponents[key].keyTrigger}
                            </span>
                            <audio
                                id={KeyComponents[key].keyTrigger}
                                className='clip' ref={this.audioRef}
                                src={KeyComponents[key].url}
                            ></audio>
                        </button>
                    ))}
                </div >
                <div id='contents'>
                    <p id='display'></p>
                </div>
            </>
        )
    }
}

export default DMBuilder;