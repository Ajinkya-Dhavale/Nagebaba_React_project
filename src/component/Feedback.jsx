import React from "react";
export default function Feedback() {
    return (
        <>
            <section>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 p-0">
                            <div class="back_img2" style={{ height: "350px", backgroundImage: "url(" + "image/feedback/back.jpg" + ")" }}>
                                <div class="inner_back">
                                    <h1 class="mt-5 p-5"> </h1>
                                    <h1 class="mt-5 ml-5 font-weight-bold pl-md-5 text-white" style={{ fontSize: "50px" }}>आपला अभिप्राय</h1>
                                    <h3 class="mt-2 pl-md-5 ml-5 font-weight-bold text-white">मुख्यपृष्ठ / आपला अभिप्राय</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-light mb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h1 class="font-weight-bold text-info">---</h1>
                            <h1 class="text-info font-weight-bold">फीडबॅक फॉर्म</h1>
                        </div>
                        <div class="col-md-6 col-12 mt-4">
                            <input type="text" placeholder="Name" class="btn-white shadow form-control border-0" />
                        </div>
                        <div class="col-md-6 col-12 mt-4">
                            <input type="email" placeholder="Email" class="btn-white shadow form-control border-0" />
                        </div>
                        <div class="col-md-6 col-12 mt-4">
                            <input type="text" placeholder="Phone" class="btn-white shadow form-control border-0" />
                        </div>
                        <div class="col-md-6 col-12 mt-4">
                            <input type="email" placeholder="Title" class="btn-white shadow form-control border-0" />
                        </div>
                        <div class="col-12 mt-4">
                            <textarea class="form-control border-0 shadow" placeholder="Your Message" cols="30" rows="5"></textarea>
                        </div>
                        <div class="col-12 mt-4">
                            <button class="btn-lg btn-primary rounded-pill border-0 color_change_btn"> फीडबॅक  पाठवा </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}