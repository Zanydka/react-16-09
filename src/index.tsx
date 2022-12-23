import React from 'react'
import ReactDOM from 'react-dom/client'

// without jsx
// const title = React.createElement(
//     'h1',
//     {
//         id: `title`,
//     },
//     'Hello React'
// )

// with jsx
// const title = <h1 id="title">Hello React</h1>
// console.log(title)

// const content = (
//     <div>
//         <ul>
//             <li>List item 1</li>
//             <li>List item 2</li>
//         </ul>
//         <p>Hello world</p>
//     </div>
// )

// function component
function App() {
    return (
        <div>
            <h1>Hello React</h1>
            <p>lorem ipsum</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
