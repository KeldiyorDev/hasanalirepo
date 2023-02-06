import React, { useState } from 'react'

export default function TrekTable() {
    const [data, setData] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1,1,1,1,1,1,1,1,1])

    return (
        <div style={{ overflowY: "auto", height: "100vh", paddingTop: "0" }}>

            <table className="table my-1 table-bordered table-striped table-hover Tab" id="myTable" >
                <thead>
                    <tr className="bg-dark text-white NavLink text-center">
                        <th style={{ width: "10%" }}>№</th>
                        <th style={{ width: "90%" }}>Trek kodi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key={Math.random()} className="text-center">
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>aa11bb22cc33</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}
