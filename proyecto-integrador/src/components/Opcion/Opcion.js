import React from 'react'
import { Link } from 'react-router-dom'

export default function Opcion(props) {
    return (
        <li className='nav-li'>
            <Link className='li-a' to={props.data.ruta}>
                {props.data.nombre}
            </Link>
        </li>
    )
}