import { useEffect, useState } from "react"

const minhaLista = [
    { key: 1, value: "Carne" },
    { key: 2, value: "Legumes" },
    { key: 3, value: "Alimentos" }
]

export default function FetchData() {
    type Tarefa = any
    const [tarefas, setTarefas] = useState<Tarefa[]>([])

    useEffect(() => {
        async function fetchData() {
            return (await fetch('https://jsonplaceholder.typicode.com/todos')).json()
        }

        fetchData().then(res => setTarefas(res))
    }, [])

    return (
        <div className="container">
            <h1>Buscar dados</h1>
            <ol>
                {
                    tarefas.map((item) => {
                        return (
                            <li key={item.id}>
                                <h4>{item.title}</h4>
                            </li>)
                    })
                }
            </ol>
        </div>
    )
}