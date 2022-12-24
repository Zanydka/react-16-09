// import React from `react`

type TitleProps = {
    title?: string | number
}

export const Title = (props: TitleProps) => {
    console.log(props)
    return <h1>Hello {props.title}</h1>
}

export const test = 10

// default export
// export default Title
