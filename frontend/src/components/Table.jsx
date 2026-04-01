import React, { useState, useEffect, useRef } from "react";

import { useMyContext } from "../context/GeralContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile} from "@fortawesome/free-solid-svg-icons"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { faTrash, faStapler } from "@fortawesome/free-solid-svg-icons"

import * as Apifunctions from '../functions'

import '../assets/css/table.css'

// variaveis com style css
const cor1 = {
    color: '#3F80EA'
}

const cor2 = {
    color: '#565a5c'
}

const cor3 = {
    color: 'rgb(255, 87, 87)'
}

export function Table ({
    pagina, 
    setIsConfirmVisible, 
    setIsFormAddVisible, 
    setIsTableVisible, 
    setIsModalVisible, 
    setElementFocus,
    setElementMat,
    setTypeRequest
}) {

    const {arrayData, setArrayData, setDataFicha} = useMyContext()

    async function Ficha (element) {
        const data = await Apifunctions.Ficha(element.id)
        setDataFicha(data)
        setIsModalVisible(true)
    }

    function confirmDelete (element) {
        setIsConfirmVisible(true)
        setElementFocus(element)
    }

    function edit (element) {
        setIsFormAddVisible(true)
        setIsTableVisible(false)
        setElementFocus(element)
        setTypeRequest("Edit")
    }
    
    return(
        <div className="Table">
            <ul className="Hud"> 
                <li className="Hud-id">ID</li>
                <li className="Hud-name">NOME</li>
                <li className="Hud-type">STATUS</li>
                <li className="Hud-price">VALOR</li> 
                <li className="Hud-stock">DATA</li>
                <li className="Hud-balance"></li>
            </ul>
            <div className="List">
                {arrayData && arrayData.length > 0 ? (
                    arrayData.map((obj)=>(
                        <ul key={obj.id} className="registration"> 
                            <li className="List-Item id-list-item">{obj.id}</li>
                            <li className="List-Item name-list-item">{obj.cliente}</li>
                            <li className="List-Item type-list-item">{obj.status}</li>
                            <li className="List-Item price-list-item">{obj.valor}</li>
                            <li className="List-Item stock-list-item">{obj.data}</li>
                            <li className="List-Item stock-list-item">
                                <div className="btnsList">
                                    <FontAwesomeIcon
                                        icon={faFile}
                                        className="icon"
                                        style={cor2}
                                        onClick={()=>{Ficha(obj)}}
                                    />
                                    <FontAwesomeIcon
                                        icon={faPenToSquare}
                                        className="icon"
                                        style={cor1}
                                        onClick={() => {edit(obj)}}
                                    />
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        className="icon"
                                        style={cor3}
                                        onClick={() => {confirmDelete(obj)}}
                                    />
                                </div>
                            </li>
                        </ul>
                    ))
                ) : (
                    <p style={{ textAlign: 'center', marginTop: '1rem', color: '#888' }}>Carregando ou nenhuma oportunidade encontrada...</p>
                )}
            </div>
        </div>
    )
}