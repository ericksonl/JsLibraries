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
        <div style={bodyStyle}>
            <div id='links-div'>
                <h1>Quick Links</h1>
                <p><a className='link' href="./random-quote-machine/">Random Quote Machine</a></p>
                <p><a className='link' href="./markdown-previewer/">Markdown Previewer</a></p>
                <p><a className='link' href="./drum-machine/">Drum Machine</a></p>
                <p><a className='link' href="./calculator/">Calculator</a></p>
                <p><a className='link' href="./25-5-clock/">25 + 5 Clock</a></p>
            </div>
        </div>;

    return (
        <>
            {navLinks}
        </>
    );
}

export default Home;