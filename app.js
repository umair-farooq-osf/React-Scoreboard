const desc = 'I just learned how to create a React Node and render it into the DOM';
const titleId = 'main-title';
const name = 'Guil';

const header = (
    <header>
        <h1 id={titleId} title="This is a title.">{name}'s First React Element</h1>
        <p className="main-desc">{desc}</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);