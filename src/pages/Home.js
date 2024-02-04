import '../styles/home.scss';

const bodyStyle = {
    backgroundColor: 'whitesmoke',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
}

const Home = () => {
    const navLinks =
        <body style={bodyStyle}>
            <div id='links-div'>
                <h1>Quick Links</h1>
                <p><a class='link' href="./quote-machine/">Random Quote Machine</a></p>
                <p><a class='link' href="./markdown-previewer/">Markdown Previewer</a></p>
                <p><a class='link' href="./drum-machine/">Drum Machine</a></p>
                <p><a class='link' href="./calculator/">Calculator</a></p>
                <p><a class='link' href="./25-5-clock/">25 + 5 Clock</a></p>
            </div>
        </body>;

    return (
        <>
            {navLinks}
        </>
    );
}

export default Home;