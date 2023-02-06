import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import AddSheetsModal from './AddSheetsModal';


export default function TrekNavbar() {
    const [addSheets, setAddSheets] = useState(false)

    const [branchs, setBranchs] = useState([
        {
            name: "aaaaaa"
        },
        {
            name: "bbbbbb"
        },
    ])
    return (
        <>
            <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ paddingLeft: "20px" }}>
                {branchs?.length > 0 && branchs.map((item) => {
                    return (
                        <li key={Math.random()} className="nav-item kadr-nav" style={{ display: "flex", alignItems: "center", color: item.main ? "#DC143C !important" : "" }}>
                            <div className="btn-group position-static">
                                <NavLink to={`/trek/${item.name}`} tabIndex={Math.random()} className="nav-link">
                                    {!item.main ? <i className="icon-stack2 mr-2"></i>
                                        : <i class="fa-solid fa-house-user mr-2" style={{ color: "#25B372" }}></i>
                                    }
                                    {item.name}

                                </NavLink>
                                {/* {console.log(activeBranchId)}
                            {(activeBranchId === item.id) && <button onClick={() => { setUpdateBranchModal({ isShow: true, branch: item, check: item.main }) }} type="button" className="btn btn-white" style={{ marginTop: "8px", borderRadius: "0", borderTopRightRadius: "10px" }}>
                                <i className="fa-solid fa-pen"></i>
                            </button>} */}
                            </div>


                        </li>
                    )
                })}

                <li onClick={() => setAddSheets(true)}>
                    <div tabIndex={Math.random()} className="nav-link new-nav">
                        <i className="icon-plus3 mr-1" style={{ fontSize: "18px" }}></i>
                    </div>
                </li>

            </ul>

            {
                addSheets && (
                    <AddSheetsModal
                        setAddSheets={setAddSheets}
                    />
                )
            }

        </>
    )
}
