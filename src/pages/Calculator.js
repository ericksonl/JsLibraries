import React from 'react';
import Button from 'react-bootstrap/Button';
// import CalcComps from "../components/CalculatorEditor";
import '../styles/calculator.scss';

document.body.style.cssText = 'background: linear-gradient(180deg, rgb(255, 230, 112) 10.4%, rgb(255, 100, 100) 43.8%, rgb(0, 93, 219) 105.8%); background-repeat: no-repeat; background-attachment: fixed;';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formula: '',
            display: '0',
            isFormula: false,
            isDecimal: false,
            isError: false
        }
        this.handleNumberClick = this.handleNumberClick.bind(this);
        this.handleOperatorClick = this.handleOperatorClick.bind(this);

    }

    handleNumberClick(e) {
        if (this.state.isError) {
            return;
        } else if (this.state.display.length + e.target.innerText.length > 16) {
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
        if (this.state.display === '0' && e.target.innerText !== '00') {
            this.setState({ display: e.target.innerText });
            return;
        }
        if (this.state.display === '0' && e.target.innerText === '00') {
            return;
        }
        this.setState({ display: this.state.display + e.target.innerText });
    }

    handleOperatorClick(e) {
        if (this.state.isError) {
            return;
        }

        if (this.state.isFormula) {
            const result = eval(this.state.formula + this.state.display);
            console.log(result);
            this.setState({
                formula: result + e.target.innerText,
                display: '0'
            });
            return;
        }

        this.setState({
            formula: this.state.formula + this.state.display + e.target.innerText,
            display: '0',
            isFormula: true,
            isDecimal: false
        });
    }

    handleClear = () => {
        this.setState({
            formula: '',
            display: '0'
        });
    }

    handleDel = () => {
        if (this.state.isError) {
            return;
        }
        this.setState({
            display: this.state.display.slice(0, -1)
        });
    }

    handleDecimal = (e) => {
        if (this.state.isError) {
            return;
        }
        if (this.state.isDecimal) {
            return;
        }
        if (this.state.display === '0') {
            this.setState({
                display: '0' + e.target.innerText,
                isDecimal: true
            });
            return;
        }
        this.setState({
            display: this.state.display + e.target.innerText,
            isDecimal: true
        });
    }

    render() {
        return (
            <div id='calculator-wrapper'>
                <div id='display'>
                    <div id='formula'>{this.state.formula}</div>
                    <div id='output'>{this.state.display}</div>
                </div>
                <div>
                    <Button onClick={this.handleClear} variant="clear" id='clear'>AC</Button>
                    <Button onClick={this.handleDel} variant="clear" id='delete'>DEL</Button>
                    <Button variant="clear" id='percentage'>%</Button>
                    <Button onClick={this.handleOperatorClick} variant="clear" id='divide'>/</Button>

                    <Button onClick={this.handleNumberClick} variant="clear" id='seven' className='numbers'>7</Button>
                    <Button onClick={this.handleNumberClick} variant="clear" id='eight' className='numbers'>8</Button>
                    <Button onClick={this.handleNumberClick} variant="clear" id='nine' className='numbers'>9</Button>
                    <Button onClick={this.handleOperatorClick} variant="clear" id='multiply'>*</Button>


                    <Button onClick={this.handleNumberClick} variant="clear" id='four' className='numbers'>4</Button>
                    <Button onClick={this.handleNumberClick} variant="clear" id='five' className='numbers'>5</Button>
                    <Button onClick={this.handleNumberClick} variant="clear" id='six' className='numbers'>6</Button>
                    <Button onClick={this.handleOperatorClick} variant="clear" id='subtract'>-</Button>

                    <Button onClick={this.handleNumberClick} variant="clear" id='one' className='numbers'>1</Button>
                    <Button onClick={this.handleNumberClick} variant="clear" id='two' className='numbers'>2</Button>
                    <Button onClick={this.handleNumberClick} variant="clear" id='three' className='numbers'>3</Button>
                    <Button onClick={this.handleOperatorClick} variant="clear" id='add'>+</Button>

                    <Button onClick={this.handleNumberClick} variant="clear" id='zero' className='numbers'>0</Button>
                    <Button onClick={this.handleNumberClick} variant="clear" id='double-zero' className='numbers'>00</Button>
                    <Button onClick={this.handleDecimal} variant="clear" id='decimal'>.</Button>
                    <Button variant="clear" id='equals'>=</Button>
                </div>
            </div >
        );
    }
}

export default Calculator;