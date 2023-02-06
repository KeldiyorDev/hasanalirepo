import React from 'react'

export default function EditTableModal({ setEditTable }) {
    return (
        <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
            <div className="modal-dialog modal-lg" style={{ width: "100%" }}>
                <div className="modal-content">
                    <div className="modal-header bg-primary text-white">
                        <h5 className="modal-title">Tahrirlash</h5>
                        <button
                            onClick={() => setEditTable({ isShow: false, data: {} })}
                            type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
                            &times;
                        </button>
                    </div>
                    <div className="modal-body pb-0 px-3">
                        <div className="row form-group form-group-floating">
                            <div className="col-lg-6">
                                <div className="position-relative">
                                    <input
                                        type="text"
                                        className="form-control form-control-outline InputCard"
                                        placeholder="Placeholder"
                                        defaultValue={`A110`}
                                    // ref={branchRef}
                                    />
                                    <label
                                        className="label-floating kadrInp">Kodi:</label>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="position-relative">
                                    <input
                                        type="text"
                                        className="form-control form-control-outline InputCard"
                                        placeholder="Placeholder"
                                        defaultValue={`10`}
                                    // ref={branchRef}
                                    />
                                    <label
                                        className="label-floating kadrInp">Kilo(kg):</label>
                                </div>
                            </div>
                        </div>

                        <div className="row form-group form-group-floating">
                            <div className="col-lg-6">
                                <div className="position-relative">
                                    <input
                                        type="text"
                                        className="form-control form-control-outline InputCard"
                                        placeholder="Placeholder"
                                        defaultValue={`11.5`}
                                    // ref={branchRef}
                                    />
                                    <label
                                        className="label-floating kadrInp">Kargo narxi($):</label>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="position-relative">
                                    <input
                                        type="text"
                                        className="form-control form-control-outline InputCard"
                                        placeholder="Placeholder"
                                        defaultValue={`1.7`}
                                    // ref={branchRef}
                                    />
                                    <label
                                        className="label-floating kadrInp">Karobka narxi($):</label>
                                </div>
                            </div>
                        </div>

                        <div className="px-0 mb-3">
                            <button
                                // onClick={() => addClassNav()} 
                                type="button" className="btn btn-success w-100" style={{ height: "48px" }}>
                                <i className="icon-pencil5 mr-1" title="Tahrirlash" data-animation="false"></i>
                                tahrirlash </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
