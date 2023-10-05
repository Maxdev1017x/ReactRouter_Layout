import {useParams} from 'react-router-dom'

export function Produto() {
    const {id} = useParams()
    
    return(
        <div>
            <h1>Produto 001 {id}</h1>
            <br />
        </div>
    )
}
