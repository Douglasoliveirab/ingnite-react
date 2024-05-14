export function Post(props) {
    return (
        <div className="container_app">
            <h1>{props.author}</h1>
            <p>{props.content}</p>
        </div>
    )
}