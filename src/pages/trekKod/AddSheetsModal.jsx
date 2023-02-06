import React from 'react'

export default function AddSheetsModal({ setAddSheets }) {
    return (
        <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
            <div className="modal-dialog modal-lg" style={{ width: "100%" }}>
                <div className="modal-content">
                    <div className="modal-header bg-primary text-white">
                        <h5 className="modal-title">Yangi guruh yaratish</h5>
                        <button
                            onClick={() => setAddSheets(false)}
                            type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
                            &times;
                        </button>
                    </div>
                    <div className="modal-body pb-0 px-3">
                        <div className="row form-group form-group-floating">
                            <div className="col-lg-9">
                                <div className="position-relative">
                                    <input
                                        type="text"
                                        className="form-control form-control-outline InputCard"
                                        placeholder="Placeholder"
                                    // ref={branchRef}
                                    />
                                    <label
                                        className="label-floating kadrInp">Guruh nomi:</label>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <button
                                    // onClick={() => addClassNav()} 
                                    type="button" className="btn btn-primary w-100 h-100">
                                    <i class="icon-plus3 mr-1"></i> Qo'shish</button>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}
