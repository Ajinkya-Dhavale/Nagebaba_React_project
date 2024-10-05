import React, { useEffect, useState } from "react";
export default function Finance_ac() {

    return (
        <>
            {/* <!-- marquee part --> */}
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 bg-info">
                        <marquee class="mt-1"><i class="fa fa-bullhorn text-white ml-4 mr-1"></i>
                            ODE & UPI Facility |
                            <i class="fa fa-bullhorn text-white ml-4 mr-1"></i>
                            Nagebaba Smart Card Coming Soon |
                            <i class="fa fa-bullhorn text-white ml-4 mr-1"></i>
                            Nagebaba Security Cover 365 days security for Rs.700
                        </marquee>
                    </div>
                </div>
            </div>

            {/* <!-- तुमची आर्थिक लवचिकता सुधारा part --> */}
            <div class="container-fluid text-center">
                <div class="row text-center">

                    <div class="col-12 p-0">
                        <span class="section-title-border border-center text-info" style={{ fontSize: "50px" }}>---</span>
                    </div>

                    <div class="col-12">
                        <h4 className="text-info"><b>तुमची आर्थिक लवचिकता सुधारा</b></h4>
                    </div>
                </div>
            </div>

            {/* card */}
            <div className="container">
                <div className="row">
                    <div class="col-lg-3 mt-4 col-6 text-center">
                        <div class="card shadow-lg text-center ">
                            <div class="card-body p-0 text-center bg-white pb-3">
                                <i class="fa fa-user text-white text-center rounded-circle Finance_ac_card_user mt-4 pt-2"></i>
                                <h6 class="p-0 mt-3">OPEN AN ACCOUNT</h6>
                                <button class="btn-sm btn-info border-0 rounded-pill text-white color_change_btn mt-2">APPLY NOW</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 mt-4 col-6 text-center">
                        <div class="card shadow-lg text-center ">
                            <div class="card-body p-0 text-center bg-white pb-3">
                                <i class="fa fa-coins text-white text-center rounded-circle Finance_ac_card_user mt-4 pt-2"></i>
                                <h6 class="p-0 mt-3">FIXED DEPOSITS</h6>
                                <button class="btn-sm btn-info border-0 rounded-pill text-white color_change_btn mt-2">APPLY NOW</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 mt-4 col-6 text-center">
                        <div class="card shadow-lg text-center ">
                            <div class="card-body p-0 text-center bg-white pb-3">
                                <i class="fa-solid fa-indian-rupee-sign text-white text-center rounded-circle Finance_ac_card_user mt-4 pt-2"></i>
                                <h6 class="p-0 mt-3">RECURRING DEPOSITS</h6>
                                <button class="btn-sm btn-info border-0 rounded-pill text-white color_change_btn mt-2">APPLY NOW</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 mt-4 col-6 text-center">
                        <div class="card shadow-lg text-center ">
                            <div class="card-body p-0 text-center bg-white pb-3">
                                <i class="fa fa-hand-holding-usd text-white text-center rounded-circle Finance_ac_card_user mt-4 pt-2"></i>
                                <h6 class="p-0 mt-3">TAKE A LOAN</h6>
                                <button class="btn-sm btn-info border-0 rounded-pill text-white color_change_btn mt-2">APPLY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}