import React, { useState } from 'react'
import AddTableModal from './AddTableModal'
import TrekNavbar from './TrekNavbar'
import TrekTable from './TrekTable'

export default function TrekSheets() {
    const [addTable, setAddTable] = useState(false)

    return (
        <div className="card card-body p-3" style={{ minHeight: "100vh" }}>
            <TrekNavbar />

            <div className="my-2" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2 style={{ fontWeight: "bold", textTransform: "upperCase" }}>Trek kodlar Jadval</h2>

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

            <TrekTable />

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
