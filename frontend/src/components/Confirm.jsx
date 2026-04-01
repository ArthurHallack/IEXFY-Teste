import React from "react";
import { useMyContext } from "../context/GeralContext";

import * as ApiFunctions from "../functions"

import '../assets/css/confirm.css'

function Confirm({ setIsConfirmVisible, element, name }) {
    const { DeletarOportunidade } = useMyContext()
    
    const stylo = {
        textDecoration: 'none'
    }

    const estiloHeader = {
        border: 'none'
    }

    const estiloBody = {
        display: 'flex',
        gap: '1rem'
    }

    //funções
    
    async function excluir () {
        switch (name) {
            case "Inicio":
                await DeletarOportunidade(element.id)
                setIsConfirmVisible(false)
                break;
        }
    }

    function fechar () {
        setIsConfirmVisible(false)
    }


    return (
        <div id= "confirmContainer">
            <div style={estiloHeader}>
                <p>Deseja realmente excluir este registro ?</p>
            </div>
            <div style={estiloBody}>
                <button variant="primary" onClick={excluir}>Sim</button>
                <button variant="link" style={stylo} onClick={fechar}>Não</button>
            </div>
        </div>
    )
}

export default Confirm