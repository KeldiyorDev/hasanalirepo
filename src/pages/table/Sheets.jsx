import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../utils/config'
import AddTableModal from './AddTableModal'
import NavbarSheets from './NavbarSheets'
import Table from './Table'

export default function Sheets() {
    const [addTable, setAddTable] = useState(false)
    const [tableData, setTableData] = useState([1])
    console.log(tableData);

    useEffect(() => {
        axiosInstance.post(`api/login`, {
            username: "admin",
            password: "admin"
        }).then(res => {
            console.log(res.data);
            setTableData(res.data.content)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div className="card card-body p-3" style={{ minHeight: "100vh" }}>
            <NavbarSheets />

            <div className="my-2" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2 style={{ fontWeight: "bold", textTransform: "upperCase" }}>Asosiy Jadval</h2>

                <div className="d-flex" style={{ gap: "1rem" }}>
                    <button
                        onClick={() => setAddTable(true)}
                        type="submit" title="Qo'shish" className="btn btn-success p-2" style={{ padding: "4px 8px" }}>
                        <i className="icon-plus3 mr-1" style={{ fontSize: "18px" }}></i> Yangi qo'shish
                    </button>

                    <button
                        // onClick={() => setAddModal(true)} 
                        type="submit" title="Qo'shish" className="btn btn-danger p-2" style={{ padding: "4px 8px" }}>
                        <i className="icon-enter3 mr-1" style={{ fontSize: "18px" }}></i> Tugatish
                    </button>
                </div>
            </div>


            <Table
                tableData={tableData}
            />

            {/* add table */}
            {
                addTable && (
                    <AddTableModal
                        setAddTable={setAddTable}
                    />
                )
            }

        </div>
    )
}
