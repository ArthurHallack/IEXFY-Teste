import React from "react";
import { useMyContext } from "../context/GeralContext";

import * as ApiFunctions from "../functions"

import '../assets/css/modal.css'

function ModalDasBoard ({ setIsModalDashBoard }) {
    const { resumo } = useMyContext()

    function fechar () {
        setIsModalDashBoard(false)
    }

    return (
        <div className="modal-overlay" onClick={fechar}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <header className="topArea">
                    <h2>Resumo de Oportunidades</h2>
                </header>
                <div className="centerArea">
                    <div className="dash-card total">
                        <span>Valor Total Agregado: </span>
                        <strong>{resumo.totalValorAgregado || 0}</strong>
                    </div>

                    <div className="dash-stats">
                        <div className="dash-card ganha">
                            <span>Ganhas: </span>
                            <strong>{resumo.totaisPorStatus?.ganha || 0}</strong>
                        </div>

                        <div className="dash-card perdida">
                            <span>Perdidas: </span>
                            <strong>{resumo.totaisPorStatus?.perdida || 0}</strong>
                        </div>

                        <div className="dash-card aberta">
                            <span>Abertas: </span>
                            <strong>{resumo.totaisPorStatus?.aberta || 0}</strong>
                        </div>
                    </div>
                </div>
                <section className="bottomArea"></section>
            </div>
        </div>
    )
}

export default ModalDasBoard