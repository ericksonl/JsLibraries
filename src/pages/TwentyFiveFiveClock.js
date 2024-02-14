import React from 'react'
import Button from 'react-bootstrap/Button'
import moment from 'moment'
import '../styles/twentyFiveFiveClock.scss'

const defaultSessionLength = 25000 * 60 //25 minutes in milliseconds
const defaultBreakLength = 5000 * 60 //5 minutes in milliseconds

class TwentyFiveFiveClock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sessionLength: defaultSessionLength,
            sessionDisplay: moment(defaultSessionLength).format('m'),
            breakLength: defaultBreakLength,
            breakDisplay: moment(defaultBreakLength).format('m'),
            timeLeft: defaultSessionLength,
            break: false,
            hasRun: false,
            play: false
        }
        this.changeButton = this.changeButton.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        this.incrementTime = this.incrementTime.bind(this)
        this.decrementTime = this.decrementTime.bind(this)
    }

    componentDidMount() {
        document.body.style.cssText = 'background-color: #1E555C'
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval); // Clear the interval when component unmounts
    }

    changeButton = (e) => {
        this.setState({
            hasRun: true
        })
        this.setState(prevState => ({
            play: !prevState.play // Toggle play state
        }), () => {
            if (this.state.play) {
                e.target.innerHTML = '<i class="fa fa-pause"></i>'
                document.getElementById('loading').style.display = 'block'

                document.getElementById("session-increment").disabled = true;
                document.getElementById("session-decrement").disabled = true;
                document.getElementById("break-increment").disabled = true;
                document.getElementById("break-decrement").disabled = true;


                this.timerInterval = setInterval(() => {
                    let formatDate = moment(this.state.sessionLength).subtract(1, 'second')
                    this.setState(prevState => ({
                        sessionLength: formatDate
                    }))
                    document.getElementById('loading').style.display = 'none'
                }, 1000);


                // if (this.state.sessionLength === '00:00') {
                //     clearInterval(this.timerInterval);
                //     this.setState({
                //         sessionLength: this.state.sessionDisplay
                //     })
                // }

            } else {
                clearInterval(this.timerInterval); // Clear interval if paused
                e.target.innerHTML = '<i class="fa fa-play"></i>'
                document.getElementById("session-increment").disabled = false;
                document.getElementById("session-decrement").disabled = false;
                document.getElementById("break-increment").disabled = false;
                document.getElementById("break-decrement").disabled = false;
            }
        });
    }

    //TODO: Handle 60 minutes converting to hour
    decrementTime = (e) => {
        let id = e.target.id
        let timeType = id.split('-')[0]
        // TODO: If timer has been running, and user clicks on the increment or decrement button, the timer should reset to the new session length

        if (timeType === 'break' && this.state.breakDisplay > 1) {
            this.setState({
                breakLength: moment(this.state.breakLength).subtract(1, 'minutes'),
                breakDisplay: moment(this.state.breakLength).subtract(1, 'minutes').format('m')
            })
        } else if (timeType === 'session' && this.state.sessionDisplay > 1) {
            this.setState({
                sessionLength: moment(this.state.sessionLength).subtract(1, 'minutes'),
                sessionDisplay: moment(this.state.sessionLength).subtract(1, 'minutes').format('m')
            })
        } else {
            return
        }
    }

    incrementTime = (e) => {
        let id = e.target.id
        let timeType = id.split('-')[0]

        // TODO: If timer has been running, and user clicks on the increment or decrement button, the timer should reset to the new session length
        if (timeType === 'break' && this.state.breakDisplay < 60) {
            this.setState({
                breakLength: moment(this.state.breakLength).add(1, 'minutes'),
                breakDisplay: moment(this.state.breakLength).add(1, 'minutes').format('m')
            })
        } else if (timeType === 'session' && this.state.sessionDisplay < 60) {
            this.setState({
                sessionLength: moment(this.state.sessionLength).add(1, 'minutes'),
                sessionDisplay: moment(this.state.sessionLength).add(1, 'minutes').format('m')
            })
        } else {
            return
        }
    }

    resetTimer = () => {
        clearInterval(this.timerInterval); // Clear the interval when component unmounts
        this.setState({
            sessionLength: defaultSessionLength,
            sessionDisplay: moment(defaultSessionLength).format('m'),
            breakLength: defaultBreakLength,
            breakDisplay: moment(defaultBreakLength).format('m'),
            timeLeft: defaultSessionLength,
            break: false,
            hasRun: false,
            play: false
        })
        document.getElementById('start_stop').innerHTML = '<i class="fa fa-play"></i>'
        document.getElementById("session-increment").disabled = false;
        document.getElementById("session-decrement").disabled = false;
        document.getElementById("break-increment").disabled = false;
        document.getElementById("break-decrement").disabled = false;
    }

    render() {
        //TODO: Format time to display in mm:ss AT 60 minutes
        let formatSession = moment(this.state.sessionLength).format('mm:ss')
        let formatBreak = moment(this.state.breakLength).format('mm:ss')
        let sessionDisplay = this.state.sessionDisplay
        let breakDisplay = this.state.breakDisplay

        return (
            <div id='clock-wrapper'>
                <h1>25+5 Clock</h1>
                <div id='timer'>
                    <h2 id="timer-label">Session</h2>
                    <h3 id="loading">loading...</h3>
                    <div id='clock-display'>
                        <Button id="start_stop" variant='clear' onClick={this.changeButton}><i className="fa fa-play"></i></Button>
                        <div id="time-left">{this.state.break ? formatBreak : formatSession}</div>
                        <Button id="reset" variant='clear' onClick={this.resetTimer}><i className="fa fa-refresh"></i></Button>
                    </div>
                </div>
                <div id='controls'>
                    <div id='time-controls'>
                        <div id="break-label">Break Length</div>
                        <Button id="break-increment" variant='clear' onClick={this.incrementTime}><i className="fa fa-arrow-up"></i></Button>
                        <h3 id="break-length">{breakDisplay}</h3>
                        <Button id="break-decrement" variant='clear' onClick={this.decrementTime}><i className="fa fa-arrow-down"></i></Button>
                    </div>
                    <div id='time-controls'>
                        <div id="session-label">Session Length</div>
                        <Button id="session-increment" variant='clear' onClick={this.incrementTime}><i className="fa fa-arrow-up"></i></Button>
                        <h3 id="session-length">{sessionDisplay}</h3>
                        <Button id="session-decrement" variant='clear' onClick={this.decrementTime}><i className="fa fa-arrow-down"></i></Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TwentyFiveFiveClock