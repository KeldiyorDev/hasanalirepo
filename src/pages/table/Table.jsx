import React, { useState } from 'react'
import EditTableModal from './EditTableModal'

export default function Table({tableData}) {
    console.log(tableData);
    // const [data, setData] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
    const [editTable, setEditTable] = useState({ isShow: false, data: {} })

    return (
        <div style={{ overflowY: "auto", height: "100vh", paddingTop: "0" }}>

            <table className="table my-1 table-bordered table-striped table-hover Tab" id="myTable" >
                <thead>
                    <tr className="bg-dark text-white NavLink text-center">
                        <th style={{ width: "5%" }}>№</th>
                        <th style={{ width: "15%" }}>Kodi</th>
                        <th style={{ width: "15%" }}>Kilo</th>
                        <th style={{ width: "15%" }}>Kargo narxi</th>
                        <th style={{ width: "15%" }}>Karobka narxi</th>
                        <th style={{ width: "15%" }}>Jami</th>
                        <td style={{ width: "20%" }}>Harakatlar</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData?.map((item, index) => {
                            return (
                                <tr key={Math.random()} className="text-center">
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>A110</td>
                                    <td>10</td>
                                    <td>11,5</td>
                                    <td>1,7</td>
                                    <td>116,7</td>
                                    <td>
                                        <div className="amallar" style={{ display: "flex", gap: "8px", justifyContent: "center" }}>

                                            <button className="btn btn-primary"
                                                onClick={() => setEditTable({ isShow: true, data: {} })}
                                            >
                                                <i className="icon-pencil5" title="Tahrirlash" data-animation="false"></i>
                                            </button>

                                            <button className="btn btn-danger"
                                            // onClick={() => setDeleteModal({ isShow: true, id: kadr.id })}
                                            >
                                                <i className="icon-bin" title="O'chirish" data-animation="false"></i>
                                            </button>

                                            <button className="btn btn-success"
                                            // onClick={() => setDeleteModal({ isShow: true, id: kadr.id })}
                                            >
                                                <i className="icon-checkmark4" title="To'landi" data-animation="false"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>


            {/* edit table */}
            {
                editTable.isShow && (
                    <EditTableModal
                        setEditTable={setEditTable}
                    />
                )
            }
        </div>
    )
}
