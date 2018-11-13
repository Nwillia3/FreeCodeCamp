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
