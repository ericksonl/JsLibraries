import React from 'react'
import Button from 'react-bootstrap/Button'
import moment from 'moment'
import '../styles/twentyFiveFiveClock.scss'

class TwentyFiveFiveClock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sessionLength: '25',
            sessionDisplay: '25',
            breakLength: '5',
            breakDisplay: '5',
            play: false
        }
        this.changeButton = this.changeButton.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

    componentDidMount() {
        document.body.style.cssText = 'background-color: #1E555C'
    }


    componentWillUnmount() {
        clearInterval(this.timerInterval); // Clear the interval when component unmounts
    }

    changeButton = (e) => {
        this.setState(prevState => ({
            play: !prevState.play // Toggle play state
        }), () => {
            if (this.state.play) {
                e.target.innerHTML = '<i class="fa fa-pause"></i>'
                document.getElementById('loading').style.display = 'block'
                this.timerInterval = setInterval(() => {
                    this.setState(prevState => ({
                        sessionLength: prevState.sessionLength - 1 // Decrement session time every second
                    }));
                    document.getElementById('loading').style.display = 'none'
                }, 1000);
            } else {
                e.target.innerHTML = '<i class="fa fa-play"></i>'
                clearInterval(this.timerInterval); // Clear interval if paused
            }
        });
    }



    changeTime = (e) => {
        let id = e.target.id
        console.log(id)
        let changeType = id.split('-')[1]
        let timeType = id.split('-')[0]
        console.log(changeType, timeType)
        

        let time = changeType === 'increment' ? 1 : -1

        if (timeType === 'break' && (parseInt(this.state.breakLength) + time) >= 1 && (parseInt(this.state.breakLength) + time) <= 60) {
            this.setState(prevState => ({
                breakLength: parseInt(prevState.breakLength) + time,
                breakDisplay: parseInt(prevState.breakDisplay) + time
            }))
        } else if (timeType === 'session' && (parseInt(this.state.sessionLength) + time) >= 1 && (parseInt(this.state.sessionLength) + time) <= 60) {
            this.setState(prevState => ({
                sessionLength: parseInt(prevState.sessionLength) + time,
                sessionDisplay: parseInt(prevState.sessionDisplay) + time
            }))
        } else {
            return
        }

        console.log(time)
    }

    resetTimer = () => {
        clearInterval(this.timerInterval); // Clear the interval when component unmounts
        this.setState({
            sessionLength: '25',
            sessionDisplay: '25',
            breakLength: '5',
            breakDisplay: '5',
            play: false
        })
    }

    render() {
        return (
            <div id='clock-wrapper'>
                <h1>25+5 Clock</h1>
                <div id='timer'>
                    <h2 id="timer-label">Session</h2>
                    <h3 id="loading">loading...</h3>
                    <div id='clock-display'>
                        <Button id="start_stop" variant='clear' onClick={this.changeButton}><i className="fa fa-play"></i></Button>
                        <div id="time-left">{this.state.sessionLength}</div>
                        <Button id="reset" variant='clear' onClick={this.resetTimer}><i className="fa fa-refresh"></i></Button>
                    </div>
                </div>
                <div id='controls'>
                    <div id='time-controls'>
                        <div id="break-label">Break Length</div>
                        <Button id="break-increment" variant='clear' onClick={this.changeTime}><i className="fa fa-arrow-up"></i></Button>
                        <h3 id="break-length">{this.state.breakDisplay}</h3>
                        <Button id="break-decrement" variant='clear' onClick={this.changeTime}><i className="fa fa-arrow-down"></i></Button>
                    </div>
                    <div id='time-controls'>
                        <div id="session-label">Session Length</div>
                        <Button id="session-increment" variant='clear' onClick={this.changeTime}><i className="fa fa-arrow-up"></i></Button>
                        <h3 id="session-length">{this.state.sessionDisplay}</h3>
                        <Button id="session-decrement" variant='clear' onClick={this.changeTime}><i className="fa fa-arrow-down"></i></Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TwentyFiveFiveClock