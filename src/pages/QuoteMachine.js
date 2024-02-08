import React from 'react';
import Button from 'react-bootstrap/Button';
import $ from 'jquery';
import '../styles/quoteMachine.scss';

class QuoteMachine extends React.Component {
    constructor(props) {
        super(props);
        document.body.style.transition = 'background-color 2s ease';
        this.state = {
            quote: `Understanding someone's suffering is the best gift you can give another person. Understanding is love's other name. If you don't understand, you can't love.`,
            author: `Thích Nhất Hạnh`,
            colors: [
                '#E0AED0',
                '#AC87C5',
                '#756AB6',
                '#92C7CF',
                '#AAD7D9',
                '#92C7CF',
                '#FF90BC',
                '#FFC0D9',
                '#8ACDD7',
                '#16a085',
                '#27ae60',
                '#2c3e50',
                '#f39c12',
                '#e74c3c',
                '#9b59b6',
                '#FB6964',
                '#342224',
                '#472E32',
                '#BDBB99',
                '#77B1A9',
                '#73A857'
            ]
        }
        this.getQuotes = this.getQuotes.bind(this);
    }

    componentDidMount() {
        this.changeColor()
    }

    getQuotes() {
        this.changeColor();
        let self = this
        $('#text, #author').animate({ opacity: 0 }, 500, function () {
            fetch(`https://api.quotable.io/random`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    self.setState({
                        quote: data.content,
                        author: data.author
                    })
                })
                .then(() => {
                    $('#text, #author').animate({ opacity: 1 }, 500);

                    document.body.animate({
                        backgroundColor: self.state.backgroundColor
                    });
                })
        })
    }

    changeColor() {
        const randomColor = this.state.colors[Math.floor(Math.random() * this.state.colors.length)];
        this.setState({
            backgroundColor: randomColor
        });

        document.body.style.backgroundColor = randomColor;
    }

    render() {
        const stateColor = this.state.backgroundColor;
        return (
            <div id="wrapper">
                <div className="container" id="container">
                    <div id="quote-box">
                        <div id="inner-text">
                            <h2 id="text" style={{ color: stateColor }}><i class="fa fa-quote-left"></i> {this.state.quote} <i class="fa fa-quote-right"></i></h2>
                            <h3 id="author" style={{ color: stateColor }}>- {this.state.author}</h3>
                        </div>
                        <div id="quote-buttons">
                            <Button id="tweet" variant='none' size="lg" style={{ backgroundColor: stateColor }}>
                                <a id="tweet-quote" href='https://twitter.com/intent/tweet?'><i className="fa fa-twitter"></i></a>
                            </Button>
                            <Button id="new-quote" variant='none' size="lg" onClick={this.getQuotes} style={{ backgroundColor: stateColor }}>
                                New Quote
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuoteMachine;