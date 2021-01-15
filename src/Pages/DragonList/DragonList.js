import React, { useEffect, useState } from 'react'
import DragonTableList from './DragonTableList'

export default function DragonList() {
    const [dragon, setDragon] = useState({})
    async function fetchDragons() {
        await fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon")
        .then(
            res => { return res.json() }
        )
        .then( 
            res => { setDragon(res) }  
        )
    }
    useEffect( () => {
        fetchDragons()
    }, [] )
    return (
        <DragonTableList {...dragon} />
    )
}
