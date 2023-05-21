import { useState } from "react"
import style from '../button.module.css'
export default function MeuContador() {

    const [contador, setContador] = useState(0);

    function incrementar() {
        setContador(contador + 1);
    }
    function decrementar() {
        setContador(contador - 1)
    }

    return (
        <div className="container">
            <h2>Meu contador</h2>
            <h3>{contador}</h3>

            {(contador == 0 && contador < 10) ? <MeuBotao text="Incrementar" func={incrementar} /> :
                <MeuBotao text="Decrementar" func={decrementar} />}

        </div>
    )

    function MeuBotao(props: any) {
        return (
            <button className={style.myButton} onClick={props.func}>{props.text}</button>
        )
    }

}