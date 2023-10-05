import {Link} from 'react-router-dom'

export function NotFound() {
    return(
        <div>
            <h1>Ops!</h1>
            <h2>Essa página não existe.</h2>
            <br />
            <Link to="/"> Voltar para Home</Link>
        </div>
    )
}
