import { useEffect, useState } from "react"

const minhaLista = [
    { key: 1, value: "Carne" },
    { key: 2, value: "Legumes" },
    { key: 3, value: "Alimentos" }
]

export default function MinhaLista() {

    const [produtos, setProdutos] = useState(minhaLista);
    const [pesquisa, setPesquisa] = useState('')

    useEffect(
        () => {
            if (pesquisa) {
                const novaLista = minhaLista.filter((item) => {
                    return item.value.toLowerCase().includes(pesquisa.toLowerCase())
                })
                setProdutos(novaLista)
            } else {
                setProdutos(minhaLista)
            }
        },
        [pesquisa]
    )
    return (
        <div>
            <h1>Efeitos Colaterais</h1>
            <input
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                placeholder="Pesquise">
            </input>

            {produtos.map((item) => {
                return (
                    <div key={item.key}>
                        <h4>{item.value}</h4>
                    </div>
                )
            })}
        </div>
    )
}
