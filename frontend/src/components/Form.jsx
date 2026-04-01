import React, { useState, useEffect } from "react";
import { useMyContext } from "../context/GeralContext";

import * as ApiFunctions from '../functions'

import '../assets/css/form.css'

export function FormAdd({
    name, 
    setIsFormAddVisible, 
    setIsTableVisible, 
    typeRequest,
    elementFocus
}) {
    const [formData, setFormdata] = useState({
      cliente: "",
      valor: 0,
      status: ""
    });
    const [readOnly, setReadOnly] = useState(false)

    const { CriarNova, EditarOportunidade } = useMyContext()

    useEffect(()=>{
        if (typeRequest == "Edit" && elementFocus){
            setFormdata(prev => ({
                ...prev,
                cliente: elementFocus.cliente,
                valor: elementFocus.valor,
                status: elementFocus.status,
            }))
            setReadOnly(true)
        }
    },[])

    const fechar = () => {
        setIsFormAddVisible(false)
        setIsTableVisible(true)
    }
    console.log("focus",elementFocus)
    console.log("formdata",formData)
 
    //handlechange area-----------------------------------------
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormdata((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
    //----------------------------------------------------------
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(typeRequest == "Add") {
            await CriarNova(formData)
            fechar()
            return
        }
        await EditarOportunidade(elementFocus.id, formData)
        fechar()
        return
        
    }

    return (
      <form onSubmit={handleSubmit} className="formAdd">
        <div>
            <h3>Formulário de adição</h3>
            <p>Adicione um registro a tabela</p>
        </div>
    
        <div className="formAddContainer">
                <fieldset>
                    <label>Nome do Cliente:</label>
                    <input
                    type="text"
                    name="cliente"
                    placeholder="Nome do Cliente"
                    value={formData.cliente}
                    onChange={handleChange}
                    readOnly={readOnly}
                    />
                </fieldset>
                <fieldset>
                    <label>Status:</label>
                    <select 
                    name="status" 
                    value={formData.status} 
                    onChange={handleChange}
                    style={{
                        width: '8rem',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        outline: 'none',
                        borderColor: formData.status ? '#3F80EA' : '#ccc', 
                        fontWeight: formData.status ? 'bold' : 'normal'
                    }}
                >
                        <option value="">Todos os Status</option>
                        <option value="aberta">Aberta</option>
                        <option value="ganha">Ganha</option>
                        <option value="perdida">Perdida</option>
                    </select>
                </fieldset>
                <fieldset>
                    <label>Valor:</label>
                    <input
                    type="number"
                    name="valor"
                    style={{
                        width: '8rem'
                    }}
                    value={formData.valor}
                    onChange={handleChange}
                    />
                </fieldset>
        </div>

        <section style={{
                marginTop: '2rem'
            }}>
            <button type="submit">Salvar</button>
            <button type="button" onClick={fechar}>Fechar</button>
        </section>
      </form>
    );
}

export function FormFilter({
        name, 
        setIsFormFilterVisible, 
        setIsTableVisible, 
    }) {
    
    const { filtrarOportunidades } = useMyContext();
    const [formData, setFormdata] = useState({
        cliente: "",
        status: ""
    });

    const fechar = () => {
        setIsFormFilterVisible(false);
        setIsTableVisible(true);
    };

    const limpar = async () => {
        setFormdata({ cliente: "", status: "" })
        await ApiFunctions.Filtro()
        fechar()
    };
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (name === "Inicio") {
            await filtrarOportunidades(formData.status, formData.cliente)
            fechar()
        }
    };

    return (
      <form onSubmit={handleSubmit} className="formAdd">
        <div>
            <h3>Formulário de filtragem</h3>
            <p>Adicione um filtro a tabela</p>
        </div>
        
        <div className="formAddContainer">
            <fieldset>
                <label>Cliente:</label>
                <input
                    type="text"
                    name="cliente"
                    placeholder="Nome do cliente"
                    value={formData.cliente}
                    onChange={handleChange}
                />
            </fieldset>
            <fieldset>
                <label>Status:</label>
                <select 
                    name="status" 
                    value={formData.status} 
                    onChange={handleChange}
                    style={{
                        width: '8rem',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                    }}
                >
                    <option value="">Todos os Status</option>
                    <option value="aberta">Aberta</option>
                    <option value="ganha">Ganha</option>
                    <option value="perdida">Perdida</option>
                </select>
            </fieldset>
        </div>

        <section style={{ marginTop: '2rem' }}>
            <button type="submit">Aplicar</button>
            <button type="button" onClick={limpar}>Remover</button>
        </section>
      </form>
    );
}