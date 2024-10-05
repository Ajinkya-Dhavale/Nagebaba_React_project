import React from "react";
export default function About_Office() {
    return (
        <>
            <section>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 p-0">
                            <div class="back_img2">
                                <h1 class="mt-5 p-5"> </h1>
                                <h1 class="mt-5 ml-5 font-weight-bold pl-md-5 text-white" style={{ fontSize: "50px" }}>व्यवस्थापना बद्दल</h1>
                                <h3 class="mt-2 pl-md-5 ml-5 font-weight-bold text-white">मुख्यपृष्ठ / संस्थेविषयी</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-12 mt-5 mb-5">
                            <img src="image/a_c/back4.jpg" class="mt-4 img-fluid" style={{ border: "5px solid white", height: "500px", width: "450px" }} />
                            {/* <img src="https://www.nagebabamultistate.in/uploads/163922289022733960.jpg" class="mt-4 img-fluid" style={{ border: "5px solid white" }} /> */}
                        </div>
                        <div class=" about_info col-12 col-md-6 mt-5 font-weight-bold text-info">
                            <h3 class="font-weight-bold mt-4">व्यवस्थापना बद्दल</h3>
                            <h4 class="font-weight-bold mt-5">नागेबाबा मल्टीस्टेट</h4>
                            <p class="font-weight-bold mt-5">आमच्या कर्मचार्‍यांच्या कल्पनांना आमंत्रण देणारे, आमच्या भागधारकांचा आत्मविश्वास वाढवणारे आणि आमच्या ग्राहकांच्या अपेक्षापेक्षा जास्त असणारे व्यावसायिक वातावरण आम्ही तयार करतो
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div class="container-fluid p-3 pt-5">
                <div class="row">
                    <div class="col-12 text-center text-info">
                        <h1 class="text-dark font-weight-bold mt-3">---</h1>
                        <h4 class="text-dark font-weight-bold mt-2">आनंदी ग्राहक</h4>
                        <h1 class="text-dark font-weight-bold mt-4">ग्राहक काय म्हणतात? </h1>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 mt-5 mb-5">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            </ol>
                            <div class="container">
                                <div class="row">
                                    <div col-12>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                {/* <!-- <img src="image/s1.jpg" class="d-none d-md-block" alt="Nagebaba Slider" width="100%" style="max-height:500px"> --> */}
                                                <div class="text-center">
                                                    <img src="image/a_n/user.png" class="img-fluid d-inline-block rounded-circle" style={{ width: "100px", height: "100px" }} />
                                                </div>
                                                <div class="text-center">
                                                    <p class="text-center mt-5">"'आर्थिक, सामाजिक, मानसिक, अध्यात्मिक आरोग्य विषयक कामासाठी राज्यस्तरीय पुरस्कार प्रदान करण्यात आला. श्री. संत नागेबाबा उद्योग समूहाचे कार्य व कर्तुत्व महत्त्वाचे आहे.'"</p>
                                                    <h4>शांतीराज उद्योग समूह</h4>
                                                    <span class="text-primary mt-4">अहमदनगर</span>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                {/* <!-- <img src="image/s2.jpg" class="d-none d-md-block" alt="Nagebaba Slider" width="100%" style="max-height:500px"> --> */}
                                                <div class="text-center ml-5 pl-5" style={{ marginLeft: "400px" }}>
                                                    <img src="image/a_n/user1.jpg" class="img-fluid d-inline-block rounded-circle" style={{ width: "100px", height: "100px" }} />
                                                    {/* <img src="https://www.nagebabamultistate.in/uploads/163922336658773776.jpg" class="img-fluid d-inline-block rounded-circle ml-5" style={{ width: "100px", height: "100px" }} /> */}
                                                </div>
                                                <div class="text-center w-100 ml-5 pl-3 mr-5">
                                                    <p class="text-center mt-5">"अविरत सेवा तीही वर्षाच्या 365 दिवस.नागेबाबाचे सर्वच शाखामधील कर्मचारी हे आलेला खातेदार हा आपलाच माणूस समजून फार उत्कृष्ठ सेवा देतात"</p>
                                                    <h4 class="ml-5">गोरक्षनाथ पाटील पटारे</h4>
                                                    <span class="text-primary mt-4 ml-5" style={{ marginLeft: "150px" }}>सोनई</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}