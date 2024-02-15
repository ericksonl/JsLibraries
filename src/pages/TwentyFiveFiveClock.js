import React from 'react'
import Button from 'react-bootstrap/Button'
import '../styles/twentyFiveFiveClock.scss'

const defaultSessionLength = 25000 * 60; // 60 minutes in milliseconds
const defaultBreakLength = 5000 * 60 //5 minutes in milliseconds

class TwentyFiveFiveClock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sessionLength: defaultSessionLength,
            breakLength: defaultBreakLength,
            formatSessionDisplay: 25,
            formatBreakDisplay: 5,
            hasRun: false,
            break: false,
            play: false
        }
    }

    componentDidMount() {
        document.body.style.cssText = 'background-color: #1E555C'
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval);
    }

    changeButton = (e) => {
        console.log(e.target.id)
        this.setState({
            hasRun: true
        })
        this.setState(prevState => ({
            play: !prevState.play // Toggle play state
        }), () => {
            if (this.state.play) {
                document.getElementById('loading').style.display = 'block'
                this.timerInterval = setInterval(() => {
                    this.state.break ? this.setState(prevState => ({
                        breakLength: prevState.breakLength - 1000
                    })) : this.setState(prevState => ({
                        sessionLength: prevState.sessionLength - 1000
                    }))
                    document.getElementById('loading').style.display = 'none'
                    if (this.state.breakLength === 0 || this.state.sessionLength === 0) {
                        clearInterval(this.timerInterval);
                        this.changeIntervalType()
                    }
                }, 1000);
            } else {
                clearInterval(this.timerInterval);
            }
        });
    }

    changeTime = (e) => {
        console.log(e.target.id)
        let id = e.target.id
        let timeType = id.split('-')[0]
        let timeAction = id.split('-')[1]
        if (this.state.hasRun) {
            clearInterval(this.timerInterval)
            this.setState({
                sessionLength: this.state.formatSessionDisplay * 60 * 1000,
                breakLength: this.state.formatBreakDisplay * 60 * 1000,
            })
        }

        if (timeType === 'break') {
            if (timeAction === 'increment' && this.state.breakLength < 60 * 1000 * 60) {
                this.setState(prevState => ({
                    breakLength: prevState.breakLength + 1000 * 60,
                    formatBreakDisplay: prevState.formatBreakDisplay + 1
                }))
                return
            } else if (timeAction === 'decrement' && this.state.breakLength > 1000 * 60) {
                this.setState(prevState => ({
                    breakLength: prevState.breakLength - 1000 * 60,
                    formatBreakDisplay: prevState.formatBreakDisplay - 1
                }))
                return
            }
        } else if (timeType === 'session') {
            if (timeAction === 'increment' && this.state.sessionLength < 60 * 1000 * 60) {
                this.setState(prevState => ({
                    sessionLength: prevState.sessionLength + 1000 * 60,
                    formatSessionDisplay: prevState.formatSessionDisplay + 1
                }))
                return
            } else if (timeAction === 'decrement' && this.state.sessionLength > 1000 * 60) {
                this.setState(prevState => ({
                    sessionLength: prevState.sessionLength - 1000 * 60,
                    formatSessionDisplay: prevState.formatSessionDisplay - 1
                }))
                return
            }
        }
    }

    changeIntervalType = () => {
        clearInterval(this.timerInterval);
        this.setState(prevState => ({
            sessionLength: prevState.formatSessionDisplay * 60 * 1000,
            breakLength: prevState.formatBreakDisplay * 60 * 1000,
            break: !prevState.break,
            play: false
        }), () => {
            document.getElementById('timer-label').innerHTML = this.state.break ? 'Break' : 'Session';
        });
    }

    resetTimer = () => {

        clearInterval(this.timerInterval);
        document.getElementById('timer-label').innerHTML = 'Session'
        this.setState({
            sessionLength: defaultSessionLength,
            breakLength: defaultBreakLength,
            formatSessionDisplay: 25,
            formatBreakDisplay: 5,
            hasRun: false,
            break: false,
            play: false
        })
    }

    render() {
        //TODO: Format time to display in mm:ss AT 60 minutes
        let minutes = Math.floor((this.state.break ? this.state.breakLength : this.state.sessionLength) / 1000 / 60)
        let seconds = Math.floor((this.state.break ? this.state.breakLength : this.state.sessionLength) / 1000 % 60)
        seconds = seconds < 10 ? '0' + seconds : seconds

        let timeLeft = minutes + ':' + seconds
        return (
            <div id='clock-wrapper'>
                <h1>25+5 Clock</h1>
                <div id='timer'>
                    <h2 id="timer-label">Session</h2>
                    <h3 id="loading">loading...</h3>
                    <div id='clock-display'>
                        <Button id="start_stop" variant='clear' onClick={this.changeButton}>{this.state.play ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i>}</Button>
                        <div id="time-left">
                            {timeLeft}
                            {/* <audio id="beep" src="https://www.soundjay.com/button/beep-07.wav" type="audio/wav"></audio> */}
                        </div>
                        <Button id="reset" variant='clear' onClick={this.resetTimer}><i className="fa fa-refresh"></i></Button>
                    </div>
                </div>
                <div id='controls'>
                    <div id='time-controls'>
                        <div id="break-label">Break Length</div>
                        <Button id="break-increment" variant='clear' onClick={this.changeTime} disabled={this.state.play ? true : false}><i className="fa fa-arrow-up"></i></Button>
                        <h3 id="break-length">{this.state.formatBreakDisplay}</h3>
                        <Button id="break-decrement" variant='clear' onClick={this.changeTime} disabled={this.state.play ? true : false}><i className="fa fa-arrow-down"></i></Button>
                    </div>
                    <div id='time-controls'>
                        <div id="session-label">Session Length</div>
                        <Button id="session-increment" variant='clear' onClick={this.changeTime} disabled={this.state.play ? true : false}><i className="fa fa-arrow-up"></i></Button>
                        <h3 id="session-length">{this.state.formatSessionDisplay}</h3>
                        <Button id="session-decrement" variant='clear' onClick={this.changeTime} disabled={this.state.play ? true : false}><i className="fa fa-arrow-down"></i></Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TwentyFiveFiveClock