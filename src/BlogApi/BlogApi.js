const BlogApi = [
    {
        id: 1,
        title: 'Introduction to Hooks',
        content: "Hooks are a new addition in React 16.8 They let you use state and other React features without writing a class.",
        code: '',

        footer : 'This new function useState is the first “Hook” we’ll learn about, but this example is just a teaser. Don’t worry if it doesn’t make sense yet!'

    },

    {
        id: 2,
        title: 'UseEffect',
        content: "The Effect Hook lets you perform side effects in function components:",
        code : '',
        footer : 'Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you’re used to calling these operations “side effects” (or just “effects”), you’ve likely performed them in your components before.'

    },

    {
        id: 3,
        title: 'useReducer',
        content: "The useReducer Hook is similar to the useState Hook. It allows for custom state logic. If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.",
        code : '',
        footer : 'The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object. The useReducer Hook returns the current stateand a dispatchmethod. Here is an example of useReducer in a counter app:'
    }

]

export default BlogApi