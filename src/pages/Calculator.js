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
        if (targetClass === 'clear') {
            this.setState({
                formula: '',
                display: '0'
            })
        } else if (targetClass === 'delete') {
            if (this.state.display === '0' || this.state.display === 'ERROR' || this.state.showResult) {
                return
            }
            this.setState({
                formula: this.state.formula.length === 1 ? '' : this.state.formula.slice(0, -1),
                display: this.state.display.length === 1 ? '0' : this.state.display.slice(0, -1)
            })
        } else if (targetClass === 'decimal') {
            if (!this.state.display.includes('.')) {
                this.setState({
                    display: this.state.display + target.innerText,
                    formula: this.state.formula + target.innerText
                })
            }
        } else if (targetClass === 'equals') {
            if (this.state.showResult || ['+', '*', '/', '-', '%'].includes(this.state.display)) {
                return
            }
            let formula = this.state.formula
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
            if (target.innerText === '00' && (this.state.display === '0' || this.state.display === 'ERROR' || this.state.showResult)) {
                return
            } else if (this.state.display.length + target.innerText.length > 15) {
                return
            } else if (this.state.showResult) {
                this.setState({
                    formula: target.innerText,
                    display: target.innerText,
                    showResult: false
                })
                return
            } else {
                this.setState({
                    display: ['+', '*', '/', '-', '%', '0'].includes(this.state.display) ? target.innerText : this.state.display + target.innerText,
                    formula: ['0'].includes(this.state.display) ? target.innerText : this.state.formula + target.innerText
                })
                return
            }
        } else if (targetClass === 'operator' && this.state.display !== 'ERROR') {
            if (this.state.showResult) {
                this.setState({
                    formula: this.state.display + target.innerText,
                    display: target.innerText,
                    showResult: false
                })
                return
            }
            const lastChar = this.state.formula.slice(-1)
            if (['+', '*', '/', '-', '%'].includes(lastChar)) {
                if (lastChar !== '-' && this.state.setOp && target.innerText === '-') {
                    this.setState({
                        formula: this.state.formula + target.innerText,
                        display: target.innerText,
                        setNeg: true,
                        setOp: false
                    })
                    return
                } else if (lastChar === '-' && this.state.setNeg && target.innerText !== '-') {
                    this.setState({
                        formula: this.state.formula.slice(0, -2) + target.innerText,
                        display: target.innerText,
                        setNeg: false,
                        setOp: true
                    })
                    return
                } else if (lastChar === '-' && this.state.setNeg && target.innerText === '-') {
                    return
                } else {
                    this.setState({
                        formula: this.state.formula.slice(0, -1) + target.innerText,
                        display: target.innerText
                    })
                }
            } else {
                this.setState({
                    formula: this.state.formula + target.innerText,
                    display: target.innerText,
                    setOp: true
                })
                return
            }
        } else {
            this.setState({
                display: 'ERROR'
            })
        }
    }

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