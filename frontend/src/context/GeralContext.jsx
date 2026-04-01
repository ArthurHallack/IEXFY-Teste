import { createContext, useState, useContext, useEffect } from 'react';
import * as ApiFunctions from '../functions';

const MyContext = createContext();

export function MyProvider({ children }) {
    const [arrayData, setArrayData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [dataFicha, setDataFicha] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const req = await ApiFunctions.Listar();
                console.log(req)
                setArrayData(req);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [])

    const filtrarOportunidades = async (status, cliente) => {
        setIsLoading(true);
        
        const dados = await ApiFunctions.Listar({ status, cliente });
        setArrayData(dados);
        setIsLoading(false);
    };

    return (
        <MyContext.Provider value={{ arrayData, setArrayData, dataFicha, setDataFicha, filtrarOportunidades}}>
            {children}
        </MyContext.Provider>
    );
}

export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error("useMyContext deve ser usado dentro de um MyProvider");
    }
    return context;
};