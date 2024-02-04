$(document).ready(function () {
    $(`#inner-text`).append(
        `<h2 id='text'></h2>`,
        `<h3 id='author'></h3>`
    );

    $(`#buttons`).append(
        `<button id="tweet" class='btn btn-block'><a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank"><i class="fa fa-twitter"></i></a></button> `,
        `<button id="new-quote" class='btn btn-block'>New Quote</button>`
    )

    $(`#new-quote`).click(function () {
        getQuotes();
    });
    buildPage()
});

const buildPage = () => {
    let firstQuote = {
        content: `Understanding someone's suffering is the best gift you can give another person. Understanding is love's other name. If you don't understand, you can't love.`,
        author: `Tich Nhat Hanh`
    }
    $(`#text`).append(`<i class="fa fa-quote-left"></i> ${firstQuote.content}<i class="fa fa-quote-right"></i>`)
    $(`#author`).text(`- ${firstQuote.author}`);
    $(`#tweet-quote`).attr(`href`, `https://twitter.com/intent/tweet?text=${firstQuote.content} - ${firstQuote.author}`);
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    $(`#new-quote, #tweet, body`).css({ backgroundColor: randomColor });
    $(`#text, #author`).css({ color: randomColor });
}

function getQuotes() {
    $.ajax({
        url: `https://api.quotable.io/random`,
        success: function (result) {
            $(`#text, #author`).animate({ opacity: 0 }, 600, function () {
                if ($(text).css(`opacity`) == 0) {
                    $(`#text`).empty();
                    $(`#author`).empty();
                    $(`#tweet-quote`).attr(`href`, `https://twitter.com/intent/tweet?text=${result.content} - ${result.author}`);
                    $(`#text`).append(`<i class="fa fa-quote-left"></i> ${result.content}<i class="fa fa-quote-right"></i>`)
                    $(`#text, #author`).animate({ opacity: 1 }, 500);
                    $(`#author`).text(`- ${result.author}`);
                }
            })
        }
    });
    changeColor();
}

const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    $(`#new-quote, #tweet, body`).animate({ backgroundColor: randomColor }, {
        duration: 800,
        queue: false
    });
    $(`#text, #author`).animate({ color: randomColor }, {
        duration: 800,
        queue: false
    });
}

const colors = [
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