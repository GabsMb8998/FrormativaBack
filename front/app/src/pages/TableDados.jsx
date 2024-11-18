import "../index.css"
import iconTemperatura from "../imgs/icon-temperatura.svg"

import NavTable from "../componets/NavTable.jsx"
import { useEffect, useState } from "react"
import Table from "../componets/Table"

// imgs 
import iconBack from "../imgs/imgs-nav/icon-back.svg"


import "../index.css"
import MenuData from "../componets/MenuData.jsx"
import { TituloOficial } from "../componets/TituloOficial.jsx"

function TableDados(){

    const [selected, setSelected] = useState('sensores')

    function mudarSelecionado(selecionado){

        if (selecionado === 'sensores'){
            setSelected('sensores')
        }
        if (selecionado === 'temperatura'){
            setSelected('temperatura')
        }
        if (selecionado === 'luminosidade'){
            setSelected('luminosidade')
        }
        if (selecionado === 'umidade'){
            setSelected('umidade')
        }
        if (selecionado === 'contador'){
            setSelected('contador')
        }


    }


    return(
           <div className="flex overflow-y-hidden">
                <div>
                    <NavTable/>
                </div>

                <main className="px-20 py-20 bg-[#323232] w-full h-screen">

                    <div className="flex items-center gap-x-10 ">
                        <TituloOficial titulo={`Dados ${selected}` }/>
                    </div>

                    <div>
                        <ul  className="flex gap-x-20 my-20">
                        <MenuData label='sensores' selected={selected ==='sensores'}  onClick={()=> mudarSelecionado('sensores')}/>
                        <MenuData label='temperatura' selected={selected ==='temperatura'}  onClick={()=> mudarSelecionado('temperatura')}/>
                        <MenuData label='luminosidade' selected={selected ==='luminosidade'}  onClick={()=> mudarSelecionado('luminosidade')}/>
                        <MenuData label='umidade' selected={selected ==='umidade'}  onClick={()=> mudarSelecionado('umidade')}/>
                        <MenuData label='contador' selected={selected ==='contador'}  onClick={()=> mudarSelecionado('contador')}/>
                        </ul>

                    </div>

                    <div className="overflow-y-auto h-2/3 w-5/6 shadowTable px-20 py-10 overflow-x-auto">
                        <Table tipo={selected} resetar='' resultado=''/>
                    </div>
                </main>
           </div>
    )
}

export default TableDados