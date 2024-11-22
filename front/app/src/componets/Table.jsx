import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../index.css"

import iconEdit from "../imgs/icon-edit.svg"

function Table({tipo}){

    const [token, setToken] = useState('')
    const [tableName, setTableName]= useState([])
    const [resultado, setResutado] = useState([])

    const [valor, setValor] = useState('')
    const [valores, setValores] = useState([])
    const [timestamps, setTimestamps] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
        const guardarToken = localStorage.getItem('token')
        console.log(guardarToken, 'gardar')
        setToken(guardarToken)
        })
        
    
        
    useEffect(()=>{
        setResutado([])
        setTableName([])
    },[tipo])


    useEffect(()=>{

        const buscarDados = ()=>{
            console.log(token, 'testeee')
            if (tipo === 'temperatura'){
                fetch('http://127.0.0.1:8000/api/temperatura/',{
                    headers: {
                        Authorization: `Bearer ${token}`,
                      },
                }).then(response => {
                    if(response.ok!=true){
                        console.error()
                    }
                    return response.json()
                }).then(data =>{
                    const firstItem  = data[0]
                    const columnNames  = Object.keys(firstItem)
                    setTableName(columnNames)
                    setResutado(data)
                });   
            } else if(tipo === 'luminosidade'){
                fetch('http://127.0.0.1:8000/api/luminosidade/',{
                    headers: {
                        Authorization: `Bearer ${token}`,
                      },
                }).then(response => {
                    if(response.ok!=true){
                        console.error()
                    }
                    return response.json()
                }).then(data =>{
                    const firstItem  = data[0]
                    const columnNames  = Object.keys(firstItem)
                    setTableName(columnNames)
                    setResutado(data)
                }); 
            } else if (tipo === 'umidade'){
                fetch('http://127.0.0.1:8000/api/umidade/',{
                    headers: {
                        Authorization: `Bearer ${token}`,
                      },
                }).then(response => {
                    if(response.ok!=true){
                        console.error()
                    }
                    return response.json()
                }).then(data =>{
                    const firstItem  = data[0]
                    const columnNames  = Object.keys(firstItem)
                    setTableName(columnNames)
                    setResutado(data)
                }); 
            }else if (tipo === 'contador'){
                fetch('http://127.0.0.1:8000/api/contador/',{
                    headers: {
                        Authorization: `Bearer ${token}`,
                      },
                }).then(response => {
                    if(response.ok!=true){
                        console.error()
                    }
                    return response.json()
                }).then(data =>{
                    const firstItem  = data[0]
                    const columnNames  = Object.keys(firstItem)
                    setTableName(columnNames)
                    console.log(tableName, 'teste')
                    setResutado(data)
                }); 
            }else if (tipo === 'sensores'){
                fetch('http://127.0.0.1:8000/api/sensores/',{
                    headers: {
                        Authorization: `Bearer ${token}`,
                      },
                }).then(response => {
                    if(response.ok!=true){
                        console.error()
                    }
                    return response.json()
                }).then(data =>{
                    const firstItem  = data[0]
                    const columnNames  = Object.keys(firstItem)
                    setTableName(columnNames)
                    console.log(tableName, 'teste')
                    setResutado(data)
                }); 
            }
        }
        buscarDados()

    }, [tipo, token])

    // useEffect(() => {
    //     if (resultado.length > 0) {
    //         setIds(resultado.map(item => item.id));
    //         setValores(resultado.map(item => item.valor));
    //         setTimestamps(resultado.map(item => item.timestamp));
    //         // {console.log(String(valores[0].length), 'tamanho')}
    //     }
    // }, [resultado]);

    function editar(parametros,){
        console.log(parametros)
        navigate(`/update/`, {state:{ parametros:parametros, tipo:tipo}})
    }

    return(
        <table className=" bg-[#333333]  table-auto w-full h-3/5 p-20 ">


            <thead>
                <tr className="text-[#C5C5C5] font-medium mb-5 py-10 ">
                    {tableName.map((columnName, index) => (
                        <th key={index} className="text-center px-16 py-10 font-medium text-lg">{columnName}</th>
                    ))}

                    <th className="text-center px-16 py-10 font-medium text-lg">edit</th>
                </tr>
            </thead>

            <tbody>

                {resultado.map((row, rowIndex)=>(

                    <tr key={rowIndex} className=" text-[#878787] border-table  text-center">
                        <td className="px-4 py-5">{row.id}</td>

                        {tableName.includes('valor')&&
                        <td className="px-2 py-3">{row.valor}</td>
                        }
                        {tableName.includes('timestamp')&&
                        <td className="px-2 py-3">{row.timestamp}</td>
                        }
                        {tableName.includes('sensor')&&
                        <td className="px-2 py-3">{row.sensor}</td>
                        }
                        {/* {console.log(tableName)} */}

                        {tableName.includes('mac_address')&&
                        <td className="px-2 py-3">{row.mac_address }</td>
                        }
                        {tableName.includes('latitude')&&
                        <td className="px-2 py-3">{row.latitude}</td>
                        }
                        {tableName.includes('longitude')&&
                        <td className="px-2 py-3">{row.longitude}</td>
                        }
                        {tableName.includes('localizacao')&&
                        <td className="px-2 py-3">{row.localizacao}</td>
                        }
                        {tableName.includes('responsavel')&&
                        <td className="px-2 py-3">{row.localizacao}</td>
                        }
                        {tableName.includes('unidade_medida')&&
                        <td className="px-2 py-3">{row.unidade_medida}</td>
                        }
                        {tableName.includes('status_operacional')&&
                        <td className="px-2 py-3">{row.status_operacional}</td>
                        }
                        {tableName.includes('observacao')&&
                        <td className="px-2 py-3">{row.observacao}</td>
                        }
                        {tableName.includes('tipo')&&
                        <td className="px-2 py-3">{row.tipo}</td>
                        }
                        <td className="" onClick={()=>editar(row)}>
                            <img className="scale-50 ml-7" src={iconEdit} alt="" />
                        </td>
                    </tr>

                ))}
            
            </tbody>
        </table>
    )
}

export default Table