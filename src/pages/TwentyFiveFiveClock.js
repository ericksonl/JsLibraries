import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/twentyFiveFiveClock.scss';

class TwentyFiveFiveClock extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.body.style.cssText = 'background-color: #1E555C'
    }

    render() {
        return (
            <div id='clock-wrapper'>
                <h1>25+5 Clock</h1>
                <div id='timer'>
                    <h2 id="timer-label">Session</h2>
                    <div id='clock-display'>
                        <Button id="start_stop" variant='clear'><i class="fa fa-play"></i></Button>
                        {/* <i class="fa fa-pause"></i> */}
                        <div id="time-left">23:00</div>
                        <Button id="reset" variant='clear'><i class="fa fa-refresh"></i></Button>
                    </div>
                </div>
                <div id='controls'>
                    <div id='time-controls'>
                        <div id="break-label">Break Length</div>
                        <Button id="break-decrement" variant='clear'><i class="fa fa-arrow-up"></i></Button>
                        <h3 id="break-length">5</h3>
                        <Button id="break-increment" variant='clear'><i class="fa fa-arrow-down"></i></Button>
                    </div>
                    <div id='time-controls'>
                        <div id="session-label">Session Length</div>
                        <Button id="session-increment" variant='clear'><i class="fa fa-arrow-up"></i></Button>
                        <h3 id="session-length">25</h3>
                        <Button id="session-decrement" variant='clear'><i class="fa fa-arrow-down"></i></Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TwentyFiveFiveClock;