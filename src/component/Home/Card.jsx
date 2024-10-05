import axios from "axios";
import React, { useEffect, useState } from "react";

// export default function Card() {
//     var [loanapi, setLoanApi] = useState();
//     var [mediaapi, setMediaApi] = useState();
//     var [awardapi, setAwardApi] = useState();

//     useEffect(() => {
//         loadapi();
//     }, [])

//     var loadapi = async () => {
//         var res1 = await axios.get('https://a2zithub.org/nweb/api/future_api');
//         setLoanApi(res1.data);

//         var res2 = await axios.get('https://a2zithub.org/nweb/api/news_api');
//         setMediaApi(res2.data);

//         var res3 = await axios.get('https://a2zithub.org/nweb/api/awards_api');
//         setAwardApi(res3.data);
//         // console.log(res3.data);
//     }
//     return (
//         <>
//             <div class="container-fluid p-3 pt-5">
//                 <div class="row">
//                     <div class="col-12 text-center text-info">
//                         <h4>---</h4>
//                         <h4>SAVE A LOT FOR A SECURE FUTURE!ATISFIED AND SAFE SERVICE</h4>
//                     </div>
//                 </div>
//             </div>

//             <section class="pb-5">
//                 <div class="container-fluid">

//                     <div className="row">
//                         {
//                             loanapi?.map((item) => {
//                                 return (
//                                     <>
//                                         <div class="col-md-4 mt-4 col-12">
//                                             <div class="card mr-2 ml-5 ml-md-0">
//                                                 <div class="card-header p-0">
//                                                     <img src={`https://a2zithub.org/nweb/uploads/${item['image']}`} class="img-fluid" />
//                                                 </div>
//                                                 <div class="card-body why_choose_us3 transform_scale1">
//                                                     <h4 class="mt-4">{item['title']}</h4>
//                                                     <p class="mt-4">{item['description']}</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </>
//                                 )
//                             })
//                         }
//                     </div>
//                 </div>
//             </section>



//             <div class="container-fluid p-3 pt-5">
//                 <div class="row">
//                     <div class="col-12 text-center text-info">
//                         <h4>---</h4>
//                         <h4>MEDIA</h4>
//                     </div>
//                 </div>
//             </div>

//             <section class="pb-5">
//                 <div class="container-fluid">
//                     <div className="row">
//                         {
//                             mediaapi?.map((item) => {
//                                 return (
//                                     <>
//                                         <div class="col-md-4 mt-4 col-12">
//                                             <div class="card ml-md-4">
//                                                 <div class="p-0 card-header">
//                                                     <img src={`https://a2zithub.org/nweb/uploads/${item['news_image']}`} class="w-100 img-fluid" style={{ height: "250px" }} />
//                                                 </div>
//                                                 <div class="card-body text-info">
//                                                     <i class="fa fa-clock"></i>
//                                                     <h5>05-Jan-2022</h5>
//                                                     <h6>{item['news_title']}</h6>
//                                                     <button class="btn mt-3 pl-4 pr-4 btn-info rounded-pill color_change_btn ">पहा</button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </>
//                                 )
//                             })
//                         }
//                     </div>
//                 </div>
//             </section>


//             <div class="container-fluid p-3 pt-5">
//                 <div class="row">
//                     <div class="col-12 text-center text-info">
//                         <h4>---</h4>
//                         <h4>आपल्या सेवेतून मिळालेले सर्व पुरस्कार</h4>
//                     </div>
//                 </div>
//             </div>



//             <section class="pb-5">
//                 <div class="container-fluid">
//                     <div class="row">
//                         {
//                             awardapi?.map((item) => {
//                                 return (
//                                     <>
//                                         <div class="col-md-4 mt-4 col-12">
//                                             <div class="card ml-md-4">
//                                                 <div class="p-0 card-header">
//                                                     <i class="fa-solid fa-award Award_logo"></i>
//                                                     <img src={`https://a2zithub.org/nweb/uploads/${item['image']}`} class="w-100 img-fluid" style={{ height: "250px" }} />
//                                                 </div>
//                                                 <div class="card-body text-info">
//                                                     <h5>{item['title']}</h5>
//                                                     <h2 class="mt-0">---</h2>
//                                                     <h6>{item['description']}</h6>
//                                                     <button class="btn mt-3 pl-4 pr-4 btn-info rounded-pill color_change_btn">पहा</button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </>
//                                 )
//                             })
//                         }
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

export default function Card() {
    return (
        <>
            <div class="container-fluid p-3 pt-5">
                <div class="row">
                    <div class="col-12 text-center text-info">
                        <h4>---</h4>
                        <h4>SAVE A LOT FOR A SECURE FUTURE!ATISFIED AND SAFE SERVICE</h4>
                    </div>
                </div>
            </div>

            <section class="pb-5">
                <div class="container-fluid">
                    <div className="row">
                        <div class="col-md-4 mt-4 col-12">
                            <div class="card mr-2 ml-5 ml-md-0">
                                <div class="card-header p-0">
                                    <img src="image/c1.jpg" class="img-fluid" />
                                </div>
                                <div class="card-body why_choose_us3 transform_scale1">
                                    <h4 class="mt-4">LOAN</h4>
                                    <p class="mt-4">Nagebaba Multistate offers loans with competitive interest rates, flexible tenure and minimal suit your every personal or business need.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mt-4 col-12">
                            <div class="card mr-2 ml-5 ml-md-0">
                                <div class="card-header p-0">
                                    <img src="image/c2.jpg" class="img-fluid" />
                                </div>
                                <div class="card-body why_choose_us3 transform_scale1">
                                    <h4 class="mt-4">FIXED DEPOSITS</h4>
                                    <p class="mt-4">Fixed deposit schemes are convenient for both individuals as well as senior citizens. A great way to secure and save your money</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mt-4 col-12">
                            <div class="card mr-2 ml-5 ml-md-0">
                                <div class="card-header p-0">
                                    <img src="image/c3.jpg" class="img-fluid" />
                                </div>
                                <div class="card-body why_choose_us3 transform_scale1">
                                    <h4 class="mt-4">MOBILE BANKING</h4>
                                    <p class="mt-4">Nagebaba Multistate provides a safe and secure mobile banking application. Which has many features and only cater to the banking needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <div class="container-fluid p-3 pt-5">
                <div class="row">
                    <div class="col-12 text-center text-info">
                        <h4>---</h4>
                        <h4>MEDIA</h4>
                    </div>
                </div>
            </div>

            <section class="pb-5">
                <div class="container-fluid">
                    <div className="row">
                        <div class="col-md-4 mt-4 col-12">
                            <div class="card ml-md-4">
                                <div class="p-0 card-header">
                                    <img src="image/c4.jpg" class="w-100 img-fluid" style={{ height: "250px" }} />
                                </div>
                                <div class="card-body text-info">
                                    <i class="fa fa-clock"></i>
                                    <h5>05-Jan-2022</h5>
                                    <h6>राज्यस्तरीय पुरस्कार</h6>
                                    <button class="btn mt-3 pl-4 pr-4 btn-info rounded-pill color_change_btn ">पहा</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mt-4 col-12">
                            <div class="card ml-md-4">
                                <div class="p-0 card-header">
                                    <img src="image/c5.jpg" class="w-100 img-fluid" style={{ height: "250px" }} />
                                </div>
                                <div class="card-body text-info">
                                    <i class="fa fa-clock"></i>
                                    <h5>05-Jan-2022</h5>
                                    <h6>० पासून ते २००० पेक्षा जास्त करोडचा प्रेरणादायी प्रवास</h6>
                                    <button class="btn mt-3 pl-4 pr-4 btn-info rounded-pill color_change_btn ">पहा</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mt-4 col-12">
                            <div class="card ml-md-4">
                                <div class="p-0 card-header">
                                    <img src="image/c6.jpg" class="w-100 img-fluid" style={{ height: "250px" }} />
                                </div>
                                <div class="card-body text-info">
                                    <i class="fa fa-clock"></i>
                                    <h5>05-Jan-2022</h5>
                                    <h6>झी २४ तास पुरस्कार सोहळा</h6>
                                    <button class="btn mt-3 pl-4 pr-4 btn-info rounded-pill color_change_btn ">पहा</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="container-fluid p-3 pt-5">
                <div class="row">
                    <div class="col-12 text-center text-info">
                        <h4>---</h4>
                        <h4>आपल्या सेवेतून मिळालेले सर्व पुरस्कार</h4>
                    </div>
                </div>
            </div>



            <section class="pb-5">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4 mt-4 col-12">
                            <div class="card ml-md-4">
                                <div class="p-0 card-header">
                                    <i class="fa-solid fa-award Award_logo"></i>
                                    <img src="image/c7.jpg" class="w-100 img-fluid" style={{ height: "250px" }} />
                                </div>
                                <div class="card-body text-info">
                                    <h5>सह्याद्री कोंदण पुरस्कार</h5>
                                    <h2 class="mt-0">---</h2>
                                    <h6>दैनिक नगर सह्याद्रीच्या वतीने व खासदार डॉ.सुजयजी विखे पाटील यांच्या शुभहस्ते पुरस्कार</h6>
                                    <button class="btn mt-3 pl-4 pr-4 btn-info rounded-pill color_change_btn">पहा</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mt-4 col-12">
                            <div class="card ml-md-4">
                                <div class="p-0 card-header">
                                    <i class="fa-solid fa-award Award_logo"></i>
                                    <img src="image/c7.jpg" class="w-100 img-fluid" style={{ height: "250px" }} />
                                </div>
                                <div class="card-body text-info">
                                    <h5>सर्वोत्कृष्ट वित्तीय संस्था पुरस्कार</h5>
                                    <h2 class="mt-0">---</h2>
                                    <h6>नवराष्ट्र आणि नवभारत या माध्यम समूहातर्फे महाराष्ट्र राज्याचा प्रतिष्ठित 'सर्वोत्कृष्ट वित्तीय संस्था पुरस्कार'</h6>
                                    <button class="btn mt-3 pl-4 pr-4 btn-info rounded-pill color_change_btn">पहा</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mt-4 col-12">
                            <div class="card ml-md-4">
                                <div class="p-0 card-header">
                                    <i class="fa-solid fa-award Award_logo"></i>
                                    <img src="image/c7.jpg" class="w-100 img-fluid" style={{ height: "250px" }} />
                                </div>
                                <div class="card-body text-info">
                                    <h5>जाणीव पुरस्कार</h5>
                                    <h2 class="mt-0">---</h2>
                                    <h6>कोरोना योद्धा सन्मान आणि राज्यस्तरीय "जागरूकता पुरस्कार" सोहळा 2019-20</h6>
                                    <button class="btn mt-3 pl-4 pr-4 btn-info rounded-pill color_change_btn">पहा</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}