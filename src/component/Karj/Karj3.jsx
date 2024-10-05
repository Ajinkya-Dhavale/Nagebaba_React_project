import React from "react";
import { NavLink } from "react-router-dom";
export default function Karj3() {
    return (
        <>
            <section>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 p-0">
                            <div class="back_img2" style={{ backgroundImage: " url ( " + " image/loan/back.jpg" + ")", height: "350px" }}>
                                <div class="inner_back">
                                    <h1 class="mt-5 p-5"> </h1>
                                    <h2 class="mt-5 ml-5 font-weight-bold pl-md-5 text-white" style={{ fontSize: "40px" }}>कर्ज योजना</h2>
                                    <h5 class="mt-2 pl-md-5 ml-5 font-weight-bold text-white">मुख्यपृष्ठ /  वैयक्तिक कर्ज</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-light pt-5 pb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-12">
                            <div class="shadow-lg sona_div p-5 mt-5 bg-white rounded">
                                <h5 class="font-weight-bold">OUR LOANS</h5>
                                <ul type="circle">
                                    <li class="mt-4"><NavLink to="/karj" class="text-dark">सोनेतारण कर्ज</NavLink></li>
                                    <hr width="100%" class="text-center"></hr>
                                    <li class="mt-4"><NavLink to="/karj1" class="text-dark">तारण कर्ज</NavLink></li>
                                    <hr width="100%" class="text-center"></hr>
                                    <li class="mt-4"><NavLink to="/karj2" class="text-dark">वैयक्तिक कर्ज</NavLink></li>
                                    <hr width="100%" class="text-center" ></hr>
                                    <li class="mt-4"><NavLink to="/karj3" class="text-dark">व्यावसायिक कर्ज</NavLink></li>
                                    <hr width="100%" class="text-center" ></hr>
                                </ul>
                            </div>
                            <div class="shadow-lg sona_div1 p-4 mt-5 bg-white rounded">
                                <h5 class="font-weight-bold mt-4">APPLY वैयक्तिक कर्ज</h5>
                                <form class="form-group">
                                    <input type="text" placeholder="Name *" class="mt-4 form-control border-0 shadow" />
                                    <input type="email" placeholder="Email *" class="mt-4 form-control border-0 shadow" />
                                    <input type="number" placeholder="phone *" class="mt-4 form-control border-0 shadow" />
                                    <textarea class="form-control shadow mt-4 border-0" placeholder="Your Message *" cols="30" rows="3"></textarea>
                                    <button class="btn-lg btn-info color_change_btn rounded-pill border-0 mt-4"> कर्ज लागू करा </button>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-8 col-12 p-4">
                            <h1 class="font-weight-bold mt-4">वैयक्तिक कर्ज</h1>
                            <p class="mt-5">Apply for Home loan with Nagebaba Multistate. Attractive options are offered by us which makes it easier for you to own your dream House.</p>
                            <img src="image/loan/c5.jpg" class="img-fluid rounded" style={{ height: "500px" }} />
                            <h1 class="font-weight-bold mt-4">कर्जाचे फायदे</h1>
                            <p>नागेबाबा मल्टीस्टेटकडे कार कर्जासाठी अर्ज करा. आमच्याकडून आकर्षक पर्याय ऑफर केले जातात ज्यामुळे तुम्हाला तुमच्या ड्रीम कारची मालकी मिळणे सोपे हो</p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}