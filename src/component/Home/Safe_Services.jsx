import React from "react";
export default function Safe_Services() {
    return (
        <>

            <div class="container-fluid p-3 pt-5">
                <div class="row">
                    <div class="col-12 text-center text-info">
                        <h4>---</h4>
                        <h4>SATISFIED AND SAFE SERVICE</h4>
                    </div>
                </div>
            </div>

            <section>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6 col-12 col-xl-3 mt-4 p-4">
                            <div class="card transform_scale why_choose_us text-info">
                                <div class="body-header why_choose_us1 d-flex justify-content-center bh-white border-0">
                                    <div class="mt-5 why_choose_us1_icon">
                                        <i class="fa fa-lock"></i>
                                    </div>
                                </div>
                                <div class="card-body text-center">
                                    <h3 class="mt-4">DEPOSIT SCHEME</h3>
                                    <p class="mt-4">The safest way to save and store your money is through a deposit scheme</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-12 col-xl-3 mt-1 p-4">
                            <div class="card transform_scale why_choose_us text-info" style={{ height: "420px" }}>
                                <div class="body-header why_choose_us1 d-flex justify-content-center bh-white border-0">
                                    <div class="mt-5 why_choose_us1_icon">
                                        <i class="fa fa-money"></i>
                                    </div>
                                </div>
                                <div class="card-body text-center">
                                    <h3 class="mt-4">INSURANCE PLAN</h3>
                                    <p class="mt-4">Only Rs. 700/- for 1 year accident insurance policy</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-12 col-xl-3 mt-4 p-4">
                            <div class="card transform_scale why_choose_us text-info">
                                <div class="body-header why_choose_us1 d-flex justify-content-center bh-white border-0">
                                    <div class="mt-5 why_choose_us1_icon">
                                        <i class="fa fa-heart"></i>
                                    </div>
                                </div>
                                <div class="card-body why_choose_us2 text-center">
                                    <h3 class="mt-4  ">LOAN SCHEME</h3>
                                    <p class="mt-4  ">Financial assistance in less documents for business growth, financial needs</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-12 col-xl-3 mt-1 p-4">
                            <div class="card transform_scale why_choose_us text-info" style={{ height: "420px" }}>
                                <div class="body-header why_choose_us1 d-flex justify-content-center bh-white border-0">
                                    <div class="mt-5 why_choose_us1_icon">
                                        <i class="fa fa-bank"></i>
                                    </div>
                                </div>
                                <div class="card-body text-center">
                                    <h3 class="mt-4">LOCKER FACILITY</h3>
                                    <p class="mt-4">Best and very cheap locker service in your near area</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// export default function Safe_Services() {
//     // var [safe, setSafe] = useState();
//     // useEffect(() => {
//     //     loadapi();
//     // },[])
//     // var loadapi = async () => {
//     //     var res = await axios.get('https://a2zithub.org/nweb/api/service_api');
//     //     // console.log(res.data);
//     //     setSafe(res.data);
//     // }
//     return (
//         <>
//             <div class="container-fluid p-3 pt-5">
//                 <div class="row">
//                     <div class="col-12 text-center text-info">
//                         <h4>---</h4>
//                         <h4>SATISFIED AND SAFE SERVICE</h4>
//                     </div>
//                 </div>
//             </div>

//             <section>
//                 <div class="container-fluid">
//                     {/* <div class="row">
//                         {
//                             safe?.map((item) => {
//                                 return (
//                                     <>
//                                         <div class="col-md-6 col-12 col-xl-3 mt-4 p-4">
//                                             <div class="card transform_scale why_choose_us text-info">
//                                                 <div class="body-header why_choose_us1 d-flex justify-content-center bh-white border-0">
//                                                     <div class="mt-5 why_choose_us1_icon">
//                                                         <i className={item.icon}></i>
//                                                     </div>
//                                                 </div>
//                                                 <div class="card-body text-center">
//                                                     <h3 class="mt-4">{item.title}</h3>
//                                                     <p class="mt-4">{item.service_description}</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </>
//                                 )
//                             })
//                         }
//                     </div> */}
//                 </div>
//             </section>
//         </>
//     )
// }