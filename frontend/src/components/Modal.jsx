import React from "react";
import { useMyContext } from "../context/GeralContext";

import * as ApiFunctions from "../functions"

import '../assets/css/modal.css'

function Modal ({ setIsModalVisible }) {
    const { dataFicha } = useMyContext()

    function fechar () {
        setIsModalVisible(false)
    }

    return (
        <div 
        className="modal-overlay" 
        onClick={fechar}
        >
            <div 
                className="modal-content" 
                onClick={(e) => e.stopPropagation()}
            >
                <section className="topArea">
                    <h2>Ficha</h2>
                </section>
                <div className="centerArea">
                    <section className="ListProdMat">
                        <section className="internSection">
                            <div style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                <label >ID:</label>
                                <label >Nome:</label>
                                <label >Status:</label>
                                <label >Valor:</label>
                                <label >Data:</label>
                            </div>
                            <div style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                <span>{dataFicha.id}</span>
                                <span>{dataFicha.cliente}</span>
                                <span>{dataFicha.status}</span>
                                <span>{dataFicha.valor}</span>
                                <span>{dataFicha.data}</span>
                            </div>
                        </section>
                    </section>
                </div>
                <section className="bottomArea"></section>
            </div>
        </div>
    )
}

export default Modal