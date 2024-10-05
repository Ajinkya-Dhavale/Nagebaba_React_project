import React from "react";
export default function Card(props) {
    return (
        <>
            {/* <div class="col-lg-4 col-sm-6 col-12 mt-4">
                <div class="card shadow" >
                    <div class="card-header p-0">
                        <img src={props.img} class="img-fluid w-100" / />
                    </div>
                    <div class="card-body position-relative text-info position-relative">
                        <i class="fa fa-lock bg-info text-white text-center pt-2 rounded" style={{width:"50px",height: "50px",fontSize: "30px",position: "absolute",top: "-25px",right:"10px"}}></i>
                        <h4 class="text-info mt-0 font-weight-bold">{props.title}</h4>
                        <p class="text-info mt-3">{props.disc}</p>
                    </div>
                    <div class="card-footer bg-light">
                        <button class="btn-sm border-0 float-right bg-info rounded-pill text-white pl-3 pr-3">चौकशी करा </button>
                    </div>
                </div>
            </div>
        */}

            <section class="bg-light pb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center text-info">
                            <h1 class="text-info font-weight-bold mt-3">---</h1>
                            <h2 class="text-dark font-weight-bold mt-4">नागेबाबा मल्टीस्टेट सेवांची माहिती</h2>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12 mt-4">
                            <div class="card shadow">
                                <div class="card-header p-0">
                                    <img src="image/seva/c1.jpg" class="img-fluid w-100" />
                                </div>
                                <div class="card-body position-relative text-info position-relative">
                                    <i class="fa fa-lock bg-info text-white text-center pt-2 rounded" style={{width:"50px",height: "50px",fontSize: "30px",position: "absolute",top: "-25px", right:"10px"}}></i>
                                    <h4 class="text-info mt-0 font-weight-bold">लॉकर सुविधा</h4>
                                    <p class="text-info mt-3">तुमच्या जवळच्या भागात सर्वोत्तम आणि अत्यंत कमी किमतीत लॉकर सेवा</p>
                                </div>
                                <div class="card-footer bg-light">
                                    <button class="btn-sm border-0 float-right bg-info rounded-pill text-white pl-3 pr-3">चौकशी करा </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12 mt-4">
                            <div class="card shadow">
                                <div class="card-header p-0">
                                    <img src="image/seva/c2.jpg" class="img-fluid" />
                                </div>
                                <div class="card-body position-relative text-info">
                                    <i class="fa fa-money bg-info text-white text-center pt-2 rounded" style={{width:"50px",height: "50px",fontSize: "30px",position: "absolute",top: "-25px", right:"10px"}}></i>
                                    <h4 class="text-info mt-0 font-weight-bold">ठेव योजना</h4>
                                    <p class="text-info mt-3">तुमचा पैसा वाचवण्याचा आणि साठवण्याचा सर्वात सुरक्षित मार्ग म्हणजे ठेव योजना</p>
                                </div>
                                <div class="card-footer bg-light">
                                    <button class="btn-sm border-0 float-right bg-info rounded-pill text-white pl-3 pr-3">चौकशी करा </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12 mt-4">
                            <div class="card shadow">
                                <div class="card-header p-0">
                                    <img src="image/seva/c3.jpg" class="img-fluid" />
                                </div>
                                <div class="card-body position-relative text-info">
                                    <i class="fa fa-heart bg-info text-white text-center pt-2 rounded" style={{width:"50px",height: "50px",fontSize: "30px",position: "absolute",top: "-25px", right:"10px"}}></i>
                                    <h4 class="text-info mt-0 font-weight-bold">विमा योजना</h4>
                                    <p class="text-info mt-3">फक्त रु. 700/- मध्ये 1 वर्षासाठी अपघाती विमा पॉलिसी</p>
                                </div>
                                <div class="card-footer bg-light">
                                    <button class="btn-sm border-0 float-right bg-info rounded-pill text-white pl-3 pr-3">चौकशी करा </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12 mt-4">
                            <div class="card shadow" style={{height: "420px"}}>
                                <div class="card-header p-0">
                                    <img src="image/seva/c4.jpg" class="img-fluid" style={{height: "240px",width: "100%"}} / >
                                </div>
                                <div class="card-body position-relative text-info">
                                    <i class="fa fa-bank bg-info text-white text-center pt-2 rounded" style={{width:"50px",height: "50px",fontSize: "30px",position: "absolute",top: "-25px", right:"10px"}}></i>
                                    <h4 class="text-info mt-0 font-weight-bold">कर्ज योजना</h4>
                                    <p class="text-info mt-3">व्यवसाय वाढ, आर्थिक गरजा यासाठी कमी कागदपत्रांमध्ये अर्थ सहाय्य</p>
                                </div>
                                <div class="card-footer bg-light">
                                    <button class="btn-sm border-0 float-right bg-info rounded-pill text-white pl-3 pr-3">चौकशी करा </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12 mt-4">
                            <div class="card shadow">
                                <div class="card-header p-0">
                                    <img src="image/seva/c5.jpg" class="img-fluid" />
                                </div>
                                <div class="card-body position-relative text-info">
                                    <i class="fa fa-mobile bg-info text-white text-center pt-2 rounded" style={{width:"50px",height: "50px",fontSize: "30px",position: "absolute",top: "-25px", right:"10px"}}></i>
                                    <h4 class="text-info mt-0 font-weight-bold">मोबाईल बँकिंग सुविधा</h4>
                                    <p class="text-info mt-3">मोबाईल बँकिंग - जलद आणि सोपा मार्ग.</p>
                                </div>
                                <div class="card-footer bg-light">
                                    <button class="btn-sm border-0 float-right bg-info rounded-pill text-white pl-3 pr-3">चौकशी करा </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12 mt-4">
                            <div class="card shadow">
                                <div class="card-header p-0">
                                    <img src="image/seva/c6.jpg" class="img-fluid" style={{height: "240px",width: "100%"}} />
                                </div>
                                <div class="card-body position-relative text-info">
                                    <i class="fa fa-money bg-info text-white text-center pt-2 rounded" style={{width:"50px",height: "50px",fontSize: "30px",position: "absolute",top: "-25px", right:"10px"}}></i>
                                    <h4 class="text-info mt-0 font-weight-bold">नेटबँकिंग सुविधा</h4>
                                    <p class="text-info mt-3">नेटबँकिंग सुविधा आता चुटकीसरशी..</p>
                                </div>
                                <div class="card-footer bg-light">
                                    <button class="btn-sm border-0 float-right bg-info rounded-pill text-white pl-3 pr-3">चौकशी करा </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12 mt-4">
                            <div class="card shadow">
                                <div class="card-header p-0">
                                    <img src="image/seva/c7.jpg" class="img-fluid" />
                                </div>
                                <div class="card-body position-relative text-info">
                                    <i class="fa fa-thumbs-up bg-info text-white text-center pt-2 rounded" style={{width:"50px",height: "50px",fontSize: "30px",position: "absolute",top: "-25px", right:"10px"}}></i>
                                    <h4 class="text-info mt-0 font-weight-bold">सोनेतारण सुविधा</h4>
                                    <p class="text-info mt-3">सोन्यासारख्या माणसांसाठी सोन्यासारखी संधी!</p>
                                </div>
                                <div class="card-footer bg-light">
                                    <button class="btn-sm border-0 float-right bg-info rounded-pill text-white pl-3 pr-3">चौकशी करा </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12 mt-4">
                            <div class="card shadow">
                                <div class="card-header p-0">
                                    <img src="image/seva/c8.jpg" style={{height:"230px",width: "100%"}} class="img-fluid" />
                                </div>
                                <div class="card-body position-relative text-info">
                                    <i class="fa fa-calendar-check-o bg-info text-white text-center pt-2 rounded" style={{width:"50px",height: "50px",fontSize: "30px",position: "absolute",top: "-25px", right:"10px"}}></i>
                                    <h4 class="text-info mt-0 font-weight-bold">रिकरिंग डिपॉझिट</h4>
                                    <p class="text-info mt-3">सुरवात छोटी - फायदा मोठा..!</p>
                                </div>
                                <div class="card-footer bg-light">
                                    <button class="btn-sm border-0 float-right bg-info rounded-pill text-white pl-3 pr-3">चौकशी करा </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12 mt-4">
                            <div class="card shadow">
                                <div class="card-header p-0">
                                    <img src="image/seva/c9.jpg" class="img-fluid" />
                                </div>
                                <div class="card-body position-relative text-info">
                                    <i class="fa fa-line-chart bg-info text-white text-center pt-2 rounded" style={{width:"50px",height: "50px",fontSize: "30px",position: "absolute",top: "-25px", right:"10px"}}></i>
                                    <h4 class="text-info mt-0 font-weight-bold">डेली कलेक्शन</h4>
                                    <p class="text-info mt-3">डेली कलेक्शन सुविधा आता आपल्या दारापर्यंत</p>
                                </div>
                                <div class="card-footer bg-light">
                                    <button class="btn-sm border-0 float-right bg-info rounded-pill text-white pl-3 pr-3">चौकशी करा </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12 mt-4">
                            <div class="card shadow" style={{height: "350px"}}>
                                <div class="card-header p-0">
                                    <img src="image/seva/c10.jpg" style={{height: "170px",width: "100%"}} class="img-fluid" />
                                </div>
                                <div class="card-body position-relative text-info">
                                    <h4 class="text-info mt-0 font-weight-bold">नागेबाबा स्मार्टकार्ड</h4>
                                    <p class="text-info mt-3">नागेबाबामध्ये खाते उघडा आणि फायदे मिळवा</p>
                                </div>
                                <div class="card-footer bg-light">
                                    <button class="btn-sm border-0 float-right bg-info rounded-pill text-white pl-3 pr-3">चौकशी करा </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12 mt-4">
                            <div class="card shadow" style={{height: "350px"}}>
                                <div class="card-header p-0">
                                    <img src="image/seva/c11.jpg" style={{height: "170px"}} class="img-fluid" />
                                </div>
                                <div class="card-body position-relative text-info">
                                    <h4 class="text-info mt-0 font-weight-bold">QR CODE सुविधा</h4>
                                    <p class="text-info mt-3">नागेबाबा मोबाईल QR CODE सुविधा</p>
                                </div>
                                <div class="card-footer bg-light">
                                    <button class="btn-sm border-0 float-right bg-info rounded-pill text-white pl-3 pr-3">चौकशी करा </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}