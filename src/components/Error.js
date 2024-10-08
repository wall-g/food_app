
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <>
            <h1>Opps!!!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </>
    )
}

export default Error