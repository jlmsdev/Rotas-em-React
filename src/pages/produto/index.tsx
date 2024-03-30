import { useParams } from "react-router-dom";

export function Produto() {

    const { id } = useParams();

    return(
        <div>
            Bem vindo ao Produto: { id }
        </div>
    );
}