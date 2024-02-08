import React from 'react';
import Button from 'react-bootstrap/Button';
// import CalcComps from "../components/CalculatorEditor";
import '../styles/calculator.scss';

document.body.style.cssText = 'background: linear-gradient(180deg, rgb(255, 230, 112) 10.4%, rgb(255, 100, 100) 43.8%, rgb(0, 93, 219) 105.8%); background-repeat: no-repeat; background-attachment: fixed;';

class Calculator extends React.Component {
    render() {
        return (
            <div id='calculator-wrapper'>
                <div id='display'>
                    <div id='formula'></div>
                    <div id='output'></div>
                </div>
                <div>
                    <Button variant="clear" id='clear'>AC</Button>
                    <Button variant="clear" id='delete'>DEL</Button>
                    <Button variant="clear" id='percentage'>%</Button>
                    <Button variant="clear" id='divide'>/</Button>

                    <Button variant="clear" id='seven' className='numbers'>7</Button>
                    <Button variant="clear" id='eight' className='numbers'>8</Button>
                    <Button variant="clear" id='nine' className='numbers'>9</Button>
                    <Button variant="clear" id='multiply'>x</Button>


                    <Button variant="clear" id='four' className='numbers'>4</Button>
                    <Button variant="clear" id='five' className='numbers'>5</Button>
                    <Button variant="clear" id='six' className='numbers'>6</Button>
                    <Button variant="clear" id='subtract'>-</Button>

                    <Button variant="clear" id='one' className='numbers'>1</Button>
                    <Button variant="clear" id='two' className='numbers'>2</Button>
                    <Button variant="clear" id='three' className='numbers'>3</Button>
                    <Button variant="clear" id='add'>+</Button>

                    <Button variant="clear" id='zero' className='numbers'>0</Button>
                    <Button variant="clear" id='double-zero' className='numbers'>00</Button>
                    <Button variant="clear" id='decimal'>.</Button>
                    <Button variant="clear" id='equals'>=</Button>
                </div>
            </div >
        );
    }
}

export default Calculator;