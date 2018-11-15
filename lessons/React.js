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


// How to set defaultProps *****
// under your component create the prop name and attach the defaultProps property to it, like so
Items.defaultProps = {
    quantity: 0
}

    // Override Default Props *****
    // When you render your chuild component reassign the value of the key 
    < Items quantity = { 100} />

        // The above is how to pass props in a stateless component, the below is how to pass in a es6 class component *****
        use this.props.variable name
In the child element  Example: <p>Your temporary password is: <strong> {this.props.tempPassword}</strong></p>
In the parent element Example: <ReturnTempPassword tempPassword='yuibb1823' />
// The rendering is the same, only the child component is changed



// Create a Stateful Component ******
// The state most be set to a javascript object
// It is also declare inside the constructor 
// You can also render it, update it and pass it to child components else it is local (scope) to that component
// You must create a class component with extends React.Component in order use state
this.state = {}

// You can use access the state in two ways: *******
1) in the return
return (
    <div>
        { /* change code below this line */}
        <h1>{this.state.name}</h1>
        { /* change code above this line */}
    </div>

// 2) in the render before the return 
render() {
    // assign my state data to a variable
    const name = this.state.name

    return (
        <div>
            { /* Call that variable here in the return  */}
            <h1>{name}</h1>
        </div>
    );
}

// Set State with this.setState ******
// Method for updating component state    setState()
this.setState()
Example if you want to store username:
this.setState({ username: 'Mike' })


// Bind 'this' to a Class Method *******
// define methods for your component class
explicitly bind this to the class method
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemCount: 0
        };
        // 'this' now belongs to the obj which is the constructor
        this.addItem = this.addItem.bind(this)      // MAJOR Alert

    }
    addItem() {
        this.setState({
            // if line 158 was not added ('this' wasn't bind to addItem) then 'this' in line 164 would refer to the object addItem and return undefined
            itemCount: this.state.itemCount + 1
        });
    }
    render() {
        return (
            <div>
                { /* change code below this line */}
                <button onClick={this.addItem}>Click Me</button>
                <h1>Current Item Count: {this.state.itemCount}</h1>
            </div>
        );
    }
};


How to use State to toggle an Element
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        // change code below this line
        this.toggleVisibility = this.toggleVisibility.bind(this)
        // change code above this line
    }
    // change code below this line
    toggleVisibility() {
        if (this.state.visibility) {
            this.setState({
                visibility: false
            })
        } else {
            this.setState({
                visibility: true
            })
        }
    }
    // change code above this line
    render() {
        if (this.state.visibility) {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                    <h1>Now you see me!</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                </div>
            );
        }
    }
};



// Create a controll input  ******

class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        // change code below this line
        //   this.handleChange = this.handleChange.bind(this) //  this is not actually needed here bind it in the render
    }
    // set the value of the state of input to whatever is typed into the form input field
    // event.target.value retrives the value of target that is triggered 
    handleChange(event) {
        this.setState({
            input: event.target.value
        })

    }
    // change code above this line
    render() {
        return (
            <div>
                { /* Set the state input to the value of the input field */}
                {/* Add a onChange handler so everytime something is added to the input field it will update the state */}
                <input value={this.state.input} onChange={this.handleChange.bind(this)} />
                <h4>Controlled Input:</h4>
                <p>{this.state.input}</p>
            </div>
        );
    }
};

// Create a controlled form ******
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    handleSubmit(event) {
        // change code below this line

        // change code above this line
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    { /* change code below this line */}

                    { /* change code above this line */}
                    <button type='submit'>Submit!</button>
                </form>
                { /* change code below this line */}

                { /* change code above this line */}
            </div>
        );
    }
};


//   Unidirectional data flow && Pass State as Props to Child Components ******
// State flows in one direction down from the tree of the application from the parent component to the children component
// the child compinent only receive the state date they need

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'CamperBot'
        }
    }
    render() {
        return (
            <div>
                // Here we will call this.state.name in order to pass the value of CamperBot
                // to the NavBar component
                <Navbar name={this.state.name} />
            </div>
        );
    }
};

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                // Since we passed in the CamperBot state value into the the NavBar component above
                // the h1 element below will render the value passed from state
                <h1>Hello, my name is: {this.props.name}</h1>
            </div>
        );
    }
};