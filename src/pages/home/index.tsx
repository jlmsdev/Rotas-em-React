import { Link } from 'react-router-dom';

export function Home() {
    return(
        <div>
            Pagina Home
            <br></br>

            <Link to='/sobre'>
                Sobre
            </Link>
            <br></br>

            <Link to='/contato'>
                Contato
            </Link>
        </div>
    );
}