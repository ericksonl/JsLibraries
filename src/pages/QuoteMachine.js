import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/quoteMachine.scss';

class QuoteMachine extends React.Component {
    constructor(props) {
        super(props);
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
        // call api or anything
        this.changeColor()
    }

    getQuotes() {
        fetch(`https://api.quotable.io/random`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    quote: data.content,
                    author: data.author
                })
            }
            )
        this.changeColor();
    }

    changeColor() {
        const randomColor = this.state.colors[Math.floor(Math.random() * this.state.colors.length)];
        document.getElementById('new-quote').style.backgroundColor = randomColor;
        document.getElementById('tweet').style.backgroundColor = randomColor;
        document.body.style.backgroundColor = randomColor;
        document.getElementById('text').style.color = randomColor;
        document.getElementById('author').style.color = randomColor;
    }

    render() {
        return (
            <div id="wrapper">
                <div className="container" id="container">
                    <div id="quote-box">
                        <div id="inner-text">
                            <h2 id="text">{this.state.quote}</h2>
                            <h3 id="author">- {this.state.author}</h3>
                        </div>
                        <div id="quote-buttons">
                            <Button id="tweet" variant='primary' size="lg">
                                <a id="tweet-quote" href='https://twitter.com/intent/tweet?'><i className="fa fa-twitter"></i></a>
                            </Button>
                            <Button id="new-quote" variant='primary' size="lg" onClick={this.getQuotes}>
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