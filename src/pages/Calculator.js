import React from 'react';
import Button from 'react-bootstrap/Button';
// import CalcComps from "../components/CalculatorEditor";
import '../styles/calculator.scss';

document.body.style.cssText = 'background: linear-gradient(180deg, rgb(255, 230, 112) 10.4%, rgb(255, 100, 100) 43.8%, rgb(0, 93, 219) 105.8%); background-repeat: no-repeat; background-attachment: fixed;';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '',
            isError: false
        }
        this.handleNumberClick = this.handleNumberClick.bind(this);
    }

    handleNumberClick(e) {
        if (this.state.isError) {
            return;
        } else if (this.state.display.length === 16) {
            let displayHolder = this.state.display;
            this.setState({
                display: 'Digit limit met!',
                isError: true
            })
            setTimeout(() => {
                this.setState({
                    display: displayHolder,
                    isError: false
                });
            }, 1500);
            return;
        }
        this.setState({ display: this.state.display + e.target.innerText });
    }

    handleOperatorClick(e) {
        this.setState({ display: this.state.display + e.target.innerText });
    }

    render() {
        return (
            <div id='calculator-wrapper'>
                <div id='display'>
                    <div id='formula'></div>
                    <div id='output'>{this.state.display}</div>
                </div>
                <div>
                    <Button variant="clear" id='clear'>AC</Button>
                    <Button variant="clear" id='delete'>DEL</Button>
                    <Button variant="clear" id='percentage'>%</Button>
                    <Button variant="clear" id='divide'>/</Button>

                    <Button onClick={this.handleNumberClick} variant="clear" id='seven' className='numbers'>7</Button>
                    <Button onClick={this.handleNumberClick} variant="clear" id='eight' className='numbers'>8</Button>
                    <Button onClick={this.handleNumberClick} variant="clear" id='nine' className='numbers'>9</Button>
                    <Button variant="clear" id='multiply'>x</Button>


                    <Button onClick={this.handleNumberClick} variant="clear" id='four' className='numbers'>4</Button>
                    <Button onClick={this.handleNumberClick} variant="clear" id='five' className='numbers'>5</Button>
                    <Button onClick={this.handleNumberClick} variant="clear" id='six' className='numbers'>6</Button>
                    <Button variant="clear" id='subtract'>-</Button>

                    <Button onClick={this.handleNumberClick} variant="clear" id='one' className='numbers'>1</Button>
                    <Button onClick={this.handleNumberClick} variant="clear" id='two' className='numbers'>2</Button>
                    <Button onClick={this.handleNumberClick} variant="clear" id='three' className='numbers'>3</Button>
                    <Button variant="clear" id='add'>+</Button>

                    <Button onClick={this.handleNumberClick} variant="clear" id='zero' className='numbers'>0</Button>
                    <Button onClick={this.handleNumberClick} variant="clear" id='double-zero' className='numbers'>00</Button>
                    <Button variant="clear" id='decimal'>.</Button>
                    <Button variant="clear" id='equals'>=</Button>
                </div>
            </div >
        );
    }
}

export default Calculator;