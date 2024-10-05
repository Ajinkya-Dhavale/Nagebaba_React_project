import React from "react";
import About_Card, { About_Award ,About_Award1} from "./About_Card.jsx";
export default function Card() {
    return (
        <>
            {/* <h1>welcom</h1> */}
            <section class="bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-12 mt-5 mb-5">
                            <img src="image/about_us.jpg" class="mt-4 img-fluid" style={{ border: "5px solid white" }} />
                            {/* <img src="https://www.nagebabamultistate.in/uploads/163922289022733960.jpg" class="mt-4 img-fluid" style={{ border: "5px solid white" }} /> */}
                        </div>
                        <div class=" about_info col-12 col-md-6 mt-5 font-weight-bold text-info">
                            <h3 class="font-weight-bold mt-4">संस्थेविषयी</h3>
                            <h4 class="font-weight-bold mt-5">श्री संत नागेबाबा मल्टीस्टेट को. ऑप. क्रेडीट सोसायटी लि. अहमदनगर</h4>
                            <p class="font-weight-bold mt-5">संत नागेबाबा मल्टीस्टेट आपल्या ग्राहकांना विविध वैशिष्ट्यांसह आणि फायद्यांसह बचत खात्यांच्या विस्तृत श्रेणीतून निवडण्याचा पर्याय प्रदान करते. विकसनशील ग्रामीण भागांसाठी आर्थिक आणि तांत्रिक मदतीचा एक महत्त्वाचा स्रोत आहे. संसाधने प्रदान करून लोकांना स्वतःला आणि त्यांच्या पर्यावरणास मदत करणे हे आमचे ध्येय आहे
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <About_Card sr="1" title="OUR VISION" disc="प्रत्येक घर स्वावलंबी, समृद्ध, सुखी व आर्थिक साक्षर बनवणे"></About_Card>
                    <About_Card sr="2" title="OUR MISSION" disc="भारतामध्ये सहकारातून सदभाव, स्थैर्य आणि आर्थिक स्तर उंचावणे"></About_Card>
                    <About_Card sr="3" title="OUR VALUES" disc="विश्वास, सुरक्षितता, स्वयंशिस्त, दिलेल्या शब्दाचे आणि वेळेचे पालन हि पंचसूत्री"></About_Card>
                    <About_Card sr="4" title="OUR B-HAG" disc="सन २०३० पर्यंत संस्थेचे ५० लाख सभासद जोडणार"></About_Card>
                    <About_Card sr="5" title="BRAND PROMISE" disc="३६५ दिवस उत्कृष्ट ग्राहकसेवेसाठी कार्यरत"></About_Card>
                    <About_Card sr="5" title="CORE PURPOSE" disc="सभासदांची पत आणि प्रतिष्ठा वाढवणे "></About_Card>
                </div>
            </div>
            <div class="container-fluid mt-5">
                <div class="row">
                    <div class="col-12 text-center mt-4">
                        <span class="section-title-border border-center"></span>
                        <h2 class="section-title" style={{ fontSize: "30px" }}>इतिहास नागेबाबा मल्टीस्टेट </h2>
                    </div>
                    <div class="col-12">
                        <div class="timeline">
                            <div class="container1 left">
                                <div class="date" style={{ marginRight: "-20px", marginLeft: "-20px" }}>2009-09-09</div>
                                <i class="icon fa fa-book"></i>
                                <div class="content">
                                    <h2 class="font-weight-bold">सुरवात</h2>
                                    <p class="font-weight-bold">
                                        <p>नागेबाबा मल्टीस्टेट ०९ सप्टेंबर २००९ रोजी लोकार्पण&nbsp;</p>
                                    </p>
                                </div>
                            </div>
                            <div class="container1 right">
                                <div class="date" style={{ marginRight: "-20px", marginLeft: "-20px" }}>2019-08-21</div>
                                <i class="icon fa fa-book"></i>
                                <div class="content">
                                    <h2 class="font-weight-bold">नवीन इमारतीचे उद्घाटन</h2>
                                    <p class="font-weight-bold">
                                        <p>नूतन नागेबाबा हाउस इमारतीचे उद्घाटन</p>
                                    </p>
                                </div>
                            </div>
                            <div class="container1 left">
                                <div class="date" style={{ marginRight: "-20px", marginLeft: "-20px" }}>2021-12-11</div>
                                <i class="icon fa fa-money"></i>
                                <div class="content">
                                    <h2 class="font-weight-bold">अत्याधुनिक बँकिंग</h2>
                                    <p class="font-weight-bold">
                                        <p>मोबाईल व नेटबँकिंग सेवा ग्राहकांच्या सेवेत</p>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

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


            <div class="container-fluid p-3">
                <div class="row">
                    <div class="col-12 text-center text-info">
                        <h1 class="text-dark font-weight-bold">---</h1>
                        <h1 class="text-dark font-weight-bold">आमचे पुरस्कार</h1>
                    </div>
                </div>
            </div>

            <section class="pb-5">
                <div class="container-fluid">
                    <div class="row">
                        <About_Award img="image/c7.jpg" ctitle="सह्याद्री कोंदण पुरस्कार" cdisc="दैनिक नगर सह्याद्रीच्या वतीने व खासदार डॉ.सुजयजी विखे पाटील यांच्या शुभहस्ते पुरस्कार"></About_Award>
                        <About_Award img="image/c8.jpeg" ctitle="सर्वोत्कृष्ट वित्तीय संस्था पुरस्कार" cdisc="नवराष्ट्र आणि नवभारत या माध्यम समूहातर्फे महाराष्ट्र राज्याचा प्रतिष्ठित 'सर्वोत्कृष्ट वित्तीय संस्था पुरस्कार'"></About_Award>
                        <About_Award img="image/c9.jpg" ctitle="जाणीव पुरस्कार" cdisc="कोरोना योद्धा सन्मान आणि राज्यस्तरीय 'जागरूकता पुरस्कार' सोहळा 2019-20"></About_Award>
                        <About_Award img="image/a_n/c_last.jpg" ctitle="झी २४ तास उडान पुरस्कार" cdisc="सहकार आणि सामाजिक सेवा क्षेत्रात उल्लेखनीय कार्याबद्दल झी-24 तास उड्डाण पुरस्काराने सन्मानित"></About_Award>
                    </div>
                </div>
            </section>

            <div class="container-fluid p-3 pt-5 pl-5">
                <div class="row">
                    <div class="col-12 text-left text-info">
                        <h4 class="font-weight-bold" style={{color: "grey"}}>---</h4>
                        <h2 style={{color: "grey"}} class="font-weight-bold">ताजी बातमी</h2>
                        <h1 class="mt-3 font-weight-bold text-dark">नागेबाबा मल्टीस्टेटची मीडिया</h1>
                    </div>
                </div>
            </div>

            <section class="pb-5">
                <div class="container-fluid">
                    <div class="row">
                        <About_Award1 img="image/c4.jpg" ctitle="05-Jan-2022" cdisc="राज्यस्तरीय पुरस्कार"></About_Award1>
                        <About_Award1 img="image/c5.jpg" ctitle="03-Dec-2022" cdisc="० पासून ते २००० पेक्षा जास्त करोडचा प्रेरणादायी प्रवास"></About_Award1>
                        <About_Award1 img="image/c6.jpg" ctitle="03-Dec-2022" cdisc="झी २४ तास पुरस्कार सोहळा"></About_Award1>
                    </div>
                </div>
            </section>

        </>
    )
}