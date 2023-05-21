import { useEffect, useState } from "react"

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