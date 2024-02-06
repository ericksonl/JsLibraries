import React from 'react';

class DMPadBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.audioRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
    }

    handleKeyPress = (e) => {
        if (e.keyCode === this.props.keyCode) {
            this.playSound();
        }
    }

    handleClick = () => {
        this.playSound();
    }

    playSound = () => {
        const audioElement = this.audioRef.current;
        audioElement.currentTime = 0;
        audioElement.play();
        document.getElementById('display').innerText = this.props.id.replace(/-/g, ' ');
    }

    render() {
        return (
            <button
                className="drum-pad"
                id={this.props.id}
                onClick={this.handleClick}
            >
                <span className="front">
                    {this.props.keyTrigger}
                </span>
                <audio
                    className="clip"
                    id={this.props.keyTrigger}
                    ref={this.audioRef}
                    src={this.props.url}
                ></audio>
            </button>
        );
    }
}

export default DMPadBuilder;