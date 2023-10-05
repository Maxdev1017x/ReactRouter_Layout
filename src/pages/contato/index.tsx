import {Link} from 'react-router-dom'

export function Contato() {
    return(
        <div>
            <h1>Bem vindo a Pagina Contato</h1>
            <br />
            <Link to="/contato">Contato</Link> <br />
            <Link to="/sobre">Sobre</Link> <br />
            <Link to="/">Home</Link>
        </div>
    )
}
