import React from 'react'
import Button from 'react-bootstrap/Button'
import CalcBtnComponents from '../components/CalcBtnComponents'
import '../styles/calculator.scss'

document.body.style.cssText = 'background: linear-gradient(180deg, rgb(255, 230, 112) 10.4%, rgb(255, 100, 100) 43.8%, rgb(0, 93, 219) 105.8%); background-repeat: no-repeat; background-attachment: fixed'

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formula: '',
            display: '0'
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        const targetClass = e.target.className.replace(/ .*/, '')
        const target = e.target
        console.log('Target', target)

        if (targetClass === 'clear') {
            this.setState({
                formula: '',
                display: '0'
            })
        } else if (targetClass === 'delete') {
            this.setState({
                display: this.state.display.length === 1 ? '0' : this.state.display.slice(0, -1)
            })
        } else if (targetClass === 'decimal') {
            if (!this.state.display.includes('.')) {
                this.setState({
                    display: this.state.display + target.innerText
                })
            }
        } else if (targetClass === 'equals') {
            if (this.state.showResult || ['+', '*', '/', '-', '%'].includes(this.state.display)) {
                return
            }
            let formula = this.state.formula + this.state.display
            let result = Math.round(Function("return " + formula)() * 100000000) / 100000000
            if (result === Infinity || result === -Infinity || isNaN(result)) {
                this.setState({
                    formula: '',
                    display: 'ERROR',
                    showResult: true
                })
                return;
            }
            this.setState({
                formula: formula + '=' + result,
                display: result,
                showResult: true
            })
        } else if (targetClass === 'numbers') {
            if (target.innerText === '00' && (this.state.display === '0' || this.state.display === 'ERROR')) {
                return
            } else if (this.state.display.length + target.innerText.length > 16) {
                return
            } else if (this.state.showResult === true) {
                this.setState({
                    formula: '',
                    display: target.innerText,
                    showResult: false
                })
                return
            } else {
                this.setState({
                    display: ['+', '*', '/', '-', '%', '0'].includes(this.state.display) ? target.innerText : this.state.display + target.innerText
                })
                return
            }
        } else if (targetClass === 'operator') {
            if (this.state.display === Infinity || this.state.display === -Infinity) {
                return;
            }
            if (this.state.showResult === true) {
                this.setState({
                    formula: this.state.display + target.innerText,
                    display: target.innerText,
                    showResult: false
                })
                return
            }
            // if (['+', '*', '/', '-'].includes(this.state.display)) {
            //     return
            // }
            this.setState({
                formula: this.state.formula + this.state.display + target.innerText,
                display: target.innerText
            })
        } else {
            this.setState({
                display: 'ERROR'
            })
        }
    }

    // sum = () => {
    //     let formula = this.state.formula + this.state.display
    //     console.log('Formula', formula)
    //     console.log('Formula State', this.state.formula, 'Display State', this.state.display)
    //     console.log('Together', this.state.formula + this.state.display)
    //     let result = Math.round(Function("return " + formula)() * 100000000) / 100000000
    //     return result
    // }

    render() {
        return (
            <div id='calculator-wrapper'>
                <div id='output'>
                    <div id='formula'>{this.state.formula}</div>
                    <div id='display'>{this.state.display}</div>
                </div>
                <div>
                    {CalcBtnComponents.map((btn, index) => (
                        <Button
                            key={index}
                            onClick={this.handleClick}
                            variant="clear" id={btn.id}
                            className={btn.className}
                        >
                            {btn.innerText}
                        </Button>
                    ))}
                </div>
            </div >
        )
    }
}

export default Calculator