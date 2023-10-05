import {Link} from 'react-router-dom'

export function Sobre() {
    return(
        <div>
            <h1>Bem vindo a Pagina Sobre</h1>
            <br />
            <Link to="/">Home</Link> <br />
            <Link to="/contato">Contato</Link> <br />
        </div>
    )
}
