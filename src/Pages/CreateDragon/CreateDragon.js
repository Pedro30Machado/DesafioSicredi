import React, { useContext, useEffect } from 'react'
import { useFormik } from 'formik'
import Context from '../GlobalStates/Context'
import * as dragonsActions from '../GlobalStates/actions'

export default function CreateDragon() {
    const { dragons, dispatchDragons } = useContext(Context)
    useEffect(() => {
        console.log(dragons)
    }, [dragons])
    const formik = useFormik({
        initialValues: {
            name: '',
            type: '',
            createdAt: ''
        },
        onSubmit: (values) => {
            dispatchDragons(dragonsActions.addDragon(values.name))
            dispatchDragons(dragonsActions.addDragon(values.type))
            dispatchDragons(dragonsActions.addDragon(values.createdAt))
        }
    })


    return (
        <form onSubmit={formik.handleSubmit}>
            <input 
            type="text" 
            autocomplete='off' 
            placeholder='Nome do Dragão' 
            {...formik.getFieldProps('name')} 
            />

            <input 
            type="text" 
            autocomplete='off' 
            placeholder='Tipo do Dragão' 
            {...formik.getFieldProps('type')} />

            <input 
            type="text" 
            autocomplete='off' 
            placeholder='Data de Criação'
            {...formik.getFieldProps('createdAt')} />

            <button type="submit"> Criar Dragão </button>
        </form>
    )
}
