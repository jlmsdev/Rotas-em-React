import { Link } from 'react-router-dom';

export function Erro() {
    return(
        <div>
            ops algo deu errado esta pagina nao existe
            <Link to='/'>
                Home
            </Link>
        </div>
    );
}