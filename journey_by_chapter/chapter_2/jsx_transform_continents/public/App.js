const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
const greetings = [];

for (var i = 0; i < continents.length; i++) {
  greetings.push(`Hello ${continents[i]}`);
}

const message = greetings.join(' ');
const element = /*#__PURE__*/React.createElement("div", {
  title: "Outer div"
}, /*#__PURE__*/React.createElement("h1", null, message));
ReactDOM.render(element, document.getElementById('contents'));