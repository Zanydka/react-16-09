import React from 'react'
import ReactDOM from 'react-dom/client'
// import Title from './Title'
import { Title } from './Title'

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

type ContentProps = {
    p1: string
    p2: string
}

const Content = (props: ContentProps) => {
    return (
        <React.Fragment>
            <p>{props.p1}</p>
            <p>{props.p2}</p>
        </React.Fragment>
    )
}
const App = () => {
    return (
        <>
            <Title title="React" />
            <Title title="TS" />
            <Title title="JS" />
            <Title title={10} />
            <Content p1="hello world bla bla" p2="Hello 22" />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
