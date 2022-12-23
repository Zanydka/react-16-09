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

// function
// function App() {
//     return (
//         <div>
//             <h1>Hello React</h1>
//             <p>lorem ipsum</p>
//         </div>
//     )
// }

const Title = () => {
    return <h1>Hello React</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consectetur architecto ab ea cupiditate corrupti nulla aliquam
                aliquid tempora dignissimos, impedit, aut aspernatur natus optio
                nostrum nesciunt officiis ipsum? Quibusdam, dicta.
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consectetur architecto ab ea cupiditate corrupti nulla aliquam
                aliquid tempora dignissimos, impedit, aut aspernatur natus optio
                nostrum nesciunt officiis ipsum? Quibusdam, dicta.
            </p>
        </React.Fragment>
    )
}
const App = () => {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
