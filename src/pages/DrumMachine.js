import DMPadBuilder from "../components/DMPadBuilder.js";
import KeyComponents from '../components/DMKeyComponents.js';
import React from 'react';
import '../styles/drumMachine.scss';

class DMBuilder extends React.Component {
    render() {
        const KeyProps = this.props.KeyComponents;
        return (
            <>
                <div id='buttons'>
                    {Object.keys(KeyProps).map((key, index) => (
                        <DMPadBuilder
                            key={index}
                            id={KeyProps[key].id}
                            keyTrigger={KeyProps[key].keyTrigger}
                            keyCode={KeyProps[key].keyCode}
                            url={KeyProps[key].url}
                        />
                    ))}
                </div >
                <div id='contents'>
                    <p id='display'>Drums.io</p>
                </div>
            </>
        )
    }
}

const DrumMachine = () => {
    return (
        <div id='drum-machine'>
            <DMBuilder KeyComponents={KeyComponents} />
        </div>
    );
}

export default DrumMachine;