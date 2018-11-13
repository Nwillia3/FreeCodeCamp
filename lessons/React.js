All tags in JSX can be self closing tags
Examples:
<br /> , <h1 /> ....etc


// Create a Stateless Functional Component
Component name must start with a capital letter
const Example = () => {
    return (
        <div>
            Example of a stateless component
        </div>
    )
}

// Create a React Component
class MyComponent extends React.Component {
    constructor(props) {

        super(props);
    }
    render() {
        // change code below this line
        return (
            <div>
                <h1> Hello React </h1>
            </div>
        )
        // change code above this line
    }
};

// Create a Component with Composition
Add a component within a component using the JSX self closing tag

// You can nest a component and nest that component into another component
// React Component from Scratch   YAyyyyyyyyy ********
// change code below this line
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="challenge-node">

                <h1>My First React Component!</h1>
            </div>
        );
    }
};

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))

// Pass Props to a Stateless Functional Component ****

const CurrentDate = (props) => {
    return (
        <div>
            { /* change code below this line */}
            <p>The current date is: {props.date} </p>
            {/* passing the value of props */}
            { /* change code above this line */}
        </div>
    );
};


class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>What date is it?</h3>
                { /* change code below this line */}
                <CurrentDate date={Date()} />
                {/* instance of the date which is being used in the CurrentDate component */}
                { /* change code above this line */}
            </div>
        );
    }
};

// Pass an array in a prop ******
// In the child element set the following
return <p>{props.tasks.join(', ')}</p>

    // In the parent element initialize the property with a value
    < List tasks={["green", "blue", "red"]} />