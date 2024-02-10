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
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log(e.target.innerText)
        if (this.state.isError || (this.state.display === '0' && e.target.innerText === '00')) {
            return;
        }

        const targetClass = e.target.className.replace(/ .*/, '');
        const target = e.target

        switch (targetClass) {
            case 'numbers':
                if (this.state.display.length + target.innerText.length > 16) {
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
                if (this.state.display === '0' && target.innerText !== '00') {
                    this.setState({ display: target.innerText });
                    return;
                }
                if (this.state.isEqual) {
                    this.setState({
                        display: target.innerText,
                        formula: '',
                        isEqual: false
                    });
                    return;
                } else {
                    this.setState({ display: this.state.display + target.innerText });
                }
                return;
            case 'operator':
                if (this.state.display === '0' && target.innerText === '-') {
                    this.setState({ display: target.innerText });
                    return;
                }
                if (this.state.isEqual) {
                    this.setState({
                        formula: this.state.display + target.innerText,
                        display: '0',
                        isEqual: false
                    });
                } else {
                    this.setState({
                        formula: this.state.formula + this.state.display + target.innerText,
                        display: '0',
                        isFormula: true,
                        isDecimal: false
                    });
                }
                return;
            case 'decimal':
                if (!this.state.isDecimal) {
                    this.setState({
                        display: this.state.display === '0' ? '0' + target.innerText : this.state.display + target.innerText,
                        isDecimal: true
                    });
                }
                return;
            case 'clear':
                this.setState({
                    formula: '',
                    display: '0',
                    isFormula: false,
                    isDecimal: false,
                    isError: false
                });
                return;
            case 'delete':
                this.setState({
                    display: this.state.display.slice(0, -1)
                });
                return;
            case 'equals':
                const result = this.sum();
                console.log('Result', result);
                this.setState({
                    formula: this.state.formula + this.state.display + target.innerText + result,
                    display: result,
                    isFormula: false,
                    isDecimal: false,
                    isEqual: true
                });
                return;
            default:
                return;
        }
    }

    sum = () => {
        let formula = this.state.formula + this.state.display;
        console.log('Formula', formula);
        console.log('Formula State', this.state.formula, 'Display State', this.state.display);
        console.log('Together', this.state.formula + this.state.display);
        let result = Math.round(Function("return " + formula)() * 100000000) / 100000000;
        return result;
    }

    render() {
        return (
            <div id='calculator-wrapper'>
                <div id='output'>
                    <div id='formula'>{this.state.formula}</div>
                    <div id='display'>{this.state.display}</div>
                </div>
                <div>
                    <Button onClick={this.handleClick} variant="clear" id='clear' className='clear'>AC</Button>
                    <Button onClick={this.handleClick} variant="clear" id='delete' className='delete'>DEL</Button>
                    <Button variant="clear" id='percentage'>%</Button>
                    <Button onClick={this.handleClick} variant="clear" id='divide' className='operator'>/</Button>

                    <Button onClick={this.handleClick} variant="clear" id='seven' className='numbers'>7</Button>
                    <Button onClick={this.handleClick} variant="clear" id='eight' className='numbers'>8</Button>
                    <Button onClick={this.handleClick} variant="clear" id='nine' className='numbers'>9</Button>
                    <Button onClick={this.handleClick} variant="clear" id='multiply' className='operator'>*</Button>


                    <Button onClick={this.handleClick} variant="clear" id='four' className='numbers'>4</Button>
                    <Button onClick={this.handleClick} variant="clear" id='five' className='numbers'>5</Button>
                    <Button onClick={this.handleClick} variant="clear" id='six' className='numbers'>6</Button>
                    <Button onClick={this.handleClick} variant="clear" id='subtract' className='operator'>-</Button>

                    <Button onClick={this.handleClick} variant="clear" id='one' className='numbers'>1</Button>
                    <Button onClick={this.handleClick} variant="clear" id='two' className='numbers'>2</Button>
                    <Button onClick={this.handleClick} variant="clear" id='three' className='numbers'>3</Button>
                    <Button onClick={this.handleClick} variant="clear" id='add' className='operator'>+</Button>

                    <Button onClick={this.handleClick} variant="clear" id='zero' className='numbers'>0</Button>
                    <Button onClick={this.handleClick} variant="clear" id='double-zero' className='numbers'>00</Button>
                    <Button onClick={this.handleClick} variant="clear" id='decimal' className='decimal'>.</Button>
                    <Button onClick={this.handleClick} variant="clear" id='equals' className='equals'>=</Button>
                </div>
            </div >
        );
    }
}

export default Calculator;