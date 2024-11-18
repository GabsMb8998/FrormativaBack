import "../index.css"
import iconTemperatura from "../imgs/icon-temperatura.svg"

import { useEffect, useState } from "react"
import Table from "../componets/Table"

// imgs 
import iconOpenSideBar from "../imgs/imgs-nav/open-side-bar.svg"
import iconHome from "../imgs/imgs-nav/icon-home.svg"
import iconDash from "../imgs/imgs-nav/icon-dashboard.svg"
import iconData from "../imgs/imgs-nav/icon-data.svg"
import iconSettings from "../imgs/imgs-nav/icon-settings.svg"
import iconLogOut from "../imgs/imgs-nav/icon-log-out.svg"

import "../index.css"

function NavTable(){

    const [open, setOpen] = useState(false)

    function openSideBar(){
        if (!open){
            setOpen(true)
        }else {
            setOpen(false)
        }
    }
    return(
                <aside className={` ${open ? 'w-80 items-start px-8 ' : 'w-24  items-center'} bg-[#242424] h-screen duration-200  flex flex-col relative`}>
                    <div onClick={openSideBar} className="mt-20 flex gap-x-7">
                        <img src={iconOpenSideBar} alt="" className={` ${open && 'rotate-180'}`} />
                        <p className={` ${open ? 'block': 'hidden'} text-font-nav font-medium text-xl`}>Voltar</p>
                    </div>

                    <div className={`${open ? 'items-start' : 'items-center'} flex flex-col gap-y-14 mt-32 w-full`}>

                        <div className={ ` ${open ? 'justify-start w-full' : 'justify-center'}  flex items-center gap-x-7 hover:bg-hover-nav rounded-lg  p-3`}>
                            <img src={iconHome} alt="" />
                            <p className={` ${open ? 'block': 'hidden'} text-font-nav font-medium text-xl`}>Home</p>

                        </div>

                        <div className={`${open ? 'justify-start  w-full' : 'justify-center'}  flex items-center gap-x-7 hover:bg-hover-nav rounded-lg p-3 cursor-pointer`}>
                            <img src={iconDash} alt="" />
                            <p className={` ${open ? 'block': 'hidden'} text-font-nav font-medium text-xl`}>Dashboard</p>

                        </div>

                        <div className={` ${open ? 'justify-start w-full ' : 'justify-center'}  flex items-center gap-x-7 hover:bg-hover-nav rounded-lg p-3 cursor-pointer`}>
                            <img src={iconData} alt="" />
                            <p className={` ${open ? 'block': 'hidden'} text-font-nav font-medium text-xl`}>Data</p>
                        </div>
                    </div>

                    <div className={`mt-36 gap-y-7 flex flex-col w-full ${open ? 'items-start' : 'items-center'} `}>

                        <div className={`${open ? 'justify-start w-full' : 'justify-center'}   flex items-center gap-x-7 hover:bg-hover-nav rounded-lg  p-3 cursor-pointer`}>
                            <img src={iconSettings} alt="" />
                            <p className={` ${open ? 'block': 'hidden'} text-font-nav font-medium text-xl`}>Settings</p>
                        </div>

                        <div className={`${open ? 'justify-start w-full' : 'justify-center'}   flex items-center gap-x-7 hover:bg-hover-nav rounded-lg  p-3 cursor-pointer`}>
                            <img src={iconLogOut} alt="" />
                            <p className={` ${open ? 'block': 'hidden'} text-font-nav font-medium text-xl`}>Log-out</p>
                        </div>
                    </div>

                </aside>
    )
}

export default NavTable