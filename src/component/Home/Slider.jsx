import React, { useEffect, useState } from "react";
// import axios from 'axios';
export default function Slider() {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="image/s1.jpg" class="d-none d-md-block" alt="Nagebaba Slider" width="100%" style={{ maxHeight: "500px" }} />

                                    <img src="image/s1.jpg" class="d-block d-md-none" alt="Nagebaba Slider" width="100%" style={{ maxHeight: "300px" }} />
                                </div>
                                <div class="carousel-item">
                                    <img src="image/s2.jpg" class="d-none d-md-block" alt="Nagebaba Slider" width="100%" style={{ maxHeight: "500px" }} />
                                    <img src="image/s2.jpg" class="d-block d-md-none" alt="Nagebaba Slider" width="100%" style={{ maxHeight: "300px" }} />
                                </div>
                                <div class="carousel-item">
                                    <img src="image/s3.jpg" class="d-none d-md-block" alt="Nagebaba Slider" width="100%" style={{ maxHeight: "500px" }} />
                                    <img src="image/s3.jpg" class="d-block d-md-none" alt="Nagebaba Slider" width="100%" style={{ maxHeight: "300px" }} />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                                <div class="" style={{width: "50px", height: "50px", borderRadius: "50%",backgroundColor: "black"}}>
                                    <i class="fa-sharp fa-solid fa-arrow-left" style={{marginTop: "12px",fontSize: "25px"}}></i>
                                </div>
                                {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                                <span class="sr-only">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                                <div class="" style={{width: "50px", height: "50px", borderRadius: "50%",backgroundColor: "black"}}>
                                    <i class="fa-solid fa-arrow-right" style={{marginTop: "12px",fontSize: "25px"}}></i>
                                </div>
                                {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                                <span class="sr-only">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



// cond && <div class="carousel-item active"><img src={`https://a2zithub.org/nweb/uploads/${item.slider_img}`} class="d-block w-100" alt="..." />
// </div>}
// {
//     cond && <div class="carousel-item"><img src={`https://a2zithub.org/nweb/uploads/${item.slider_img}`} class="d-block w-100" alt="..." />
//     </div>

// import React from "react"
// export default function Slider() {
//     return (
//         <>
//             {/* <h1>Welcome in slider</h1> */}
//             <section>
//                 <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
//                     <ol class="carousel-indicators">
//                         <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
//                         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//                         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//                     </ol>
//                     <div class="carousel-inner">
//                         <div class="carousel-item active">
//                             <img src="/public/image/s1.jpg" class="d-none d-md-block" alt="Nagebaba Slider" width="100%" style={{maxHeight:"500px"}} />

//                                 <img src="/public/image/s1.jpg" class="d-block d-md-none" alt="Nagebaba Slider" width="100%"  style={{maxHeight:"300px"}} />
//                                 </div>
//                                 <div class="carousel-item">
//                                     <img src="/public/image/s2.jpg" class="d-none d-md-block" alt="Nagebaba Slider" width="100%"  style={{maxHeight:"500px"}} />
//                                         <img src="/public/image/s2.jpg" class="d-block d-md-none" alt="Nagebaba Slider" width="100%"  style={{maxHeight:"300px"}} />
//                                         </div>
//                                         <div class="carousel-item">
//                                             <img src="/public/image/s3.jpg" class="d-none d-md-block" alt="Nagebaba Slider" width="100%"  style={{maxHeight:"500px"}} />
//                                                 <img src="/public/image/s3.jpg" class="d-block d-md-none" alt="Nagebaba Slider" width="100%"  style={{maxHeight:"300px"}} />
//                                                 </div>
//                                         </div>
//                                         <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
//                                             <div class="" style={{width: "50px", height: "50px", borderRadius: "50%",backgroundColor: "black"}}>
//                                                 <i class="fa-sharp fa-solid fa-arrow-left" style={{marginTop: "12px",fontSize: "25px"}}></i>
//                                             </div>
//                                             {/* <!--  <span class="carousel-control-prev-icon" aria-hidden="true"></span> --> */}
//                                             <span class="sr-only">Previous</span>
//                                         </button>
//                                         <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
//                                             <div class="" style={{width: "50px", height: "50px", borderRadius: "50%",backgroundColor: "black"}}>
//                                                 <i class="fa-solid fa-arrow-right" style={{marginTop: "12px",fontSize: "25px"}}></i>
//                                             </div>
//                                             {/* <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> --> */}
//                                             <span class="sr-only">Next</span>
//                                         </button>
//                                 </div>
//                             </section>

//                         </>
//                         )
// }