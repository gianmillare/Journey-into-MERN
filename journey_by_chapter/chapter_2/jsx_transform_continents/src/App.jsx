const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
const greetings = [];

for (var i = 0; i < continents.length; i++) {
    greetings.push(`Hello ${continents[i]}`)
}

const message = greetings.join(' ');

const element = (
    <div title='Outer div'>
        <h1>{message}</h1>
    </div>
);

ReactDOM.render(element, document.getElementById('contents'));