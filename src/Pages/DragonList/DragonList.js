import React, { useState } from 'react'

export default function DragonList() {
    const [dragon, setDragon] = useState([
        { id: "15", name:"South", type:"Fisico", createdAt:"Jan 17 2021" },
        { id: "17", name:"Pokedex", type:"Black", createdAt:"Jan 17 2021" },
        { id: "18", name:"Pringles", type:"Red", createdAt:"Jan 17 2021" },
        { id: "20", name:"Soft", type:"white", createdAt:"Jan 17 2021" }
    ])
    return (
        <table>
            <thead>
                <tr>
                    <th> Nome </th>
                    <th> Tipo </th>
                    <th> Data de Criação </th>
                </tr>
            </thead>
            <tbody>
                {dragon.map((cur) => {
                        return (
                            <tr key={cur.id}>
                                <td> {cur.name} </td>
                                <td> {cur.type} </td>
                                <td> {cur.createdAt} </td>
                            </tr>
                        )
                    }
                )}
            </tbody> 
    </table>
    )
}
