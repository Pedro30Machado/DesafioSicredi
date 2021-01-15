import React from 'react'

export default function DragonTableList(createdAt, name, type) {
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
                <td> {name} </td>
                <td> {type} </td>
                <td> {createdAt} </td>
            </tbody> 
        </table>
    )
}
