import { useState } from 'react'
import { Title } from './components/Title'
import { Table } from './components/Table'
import { FormAdd, FormFilter } from './components/Form'

import Confirm from './components/Confirm'
import  Modal  from './components/Modal'

import * as Apifunctions from '../src/functions'
import { useMyContext } from './context/GeralContext'

import './App.css'

function App() {
  const [elementFocus, setElementFocus] = useState()
  const [elementMat, setElementMat] = useState()
  const [typeRequest, setTypeRequest] = useState("")
  //area of ​​visibility-------------------------------------------
  const [isTableVisible, setIsTableVisible] = useState(true)
  const [isConfirmVisible, setIsConfirmVisible] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isFormAddVisible, setIsFormAddVisible] = useState(false)
  const [isFormFilterVisible, setIsFormFilterVisible] = useState(false)
  //context------------------------------------------------------
  const {ArrayData, AttArrayData} = useMyContext()
  //-------------------------------------------------------------
  const [refreshData, setRefreshData] = useState(false)

  return (
    <>
      <Title 
      TitleTop={"Inicio"} 
      isTableVisible={isTableVisible}
      setIsTableVisible={setIsTableVisible}
      setIsFormAddVisible={setIsFormAddVisible}
      setIsFormFilterVisible={setIsFormFilterVisible}
      setTypeRequest={setTypeRequest}/>

      {isFormAddVisible &&
        <FormAdd 
        pagina={"Inicio"} 
        setIsFormAddVisible={setIsFormAddVisible}
        setIsTableVisible={setIsTableVisible}
        typeRequest={typeRequest}
        elementFocus={elementFocus}/>
      }

      {isFormFilterVisible &&
        <FormFilter 
        name={"Inicio"} 
        setIsFormFilterVisible={setIsFormFilterVisible}
        setIsTableVisible={setIsTableVisible}/>
      }

      {isConfirmVisible &&
        <Confirm 
        name={"Inicio"} 
        element={elementFocus} 
        setIsConfirmVisible={setIsConfirmVisible}/>
      }


      {isModalVisible &&
        <Modal 
        setIsModalVisible={setIsModalVisible}/>
      }

      {isTableVisible && 
        <Table 
          pagina={"Inicio"} 
          setIsConfirmVisible={setIsConfirmVisible}
          setIsFormAddVisible={setIsFormAddVisible}
          setIsTableVisible={setIsTableVisible} 
          setIsModalVisible={setIsModalVisible}
          setElementFocus={setElementFocus}
          setElementMat={setElementMat}
          setTypeRequest={setTypeRequest}
        />
      }
    </>
  )
}

export default App
