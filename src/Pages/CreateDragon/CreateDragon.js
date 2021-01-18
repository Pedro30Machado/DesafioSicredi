import React from 'react'
import { useFormik } from 'formik'

export default function CreateDragon() {
    const formik = useFormik({
        initialValues: {
            name: '',
            type: '',
            createdAt: ''
        }
    })


    return (
        <form>
            
        </form>
    )
}
