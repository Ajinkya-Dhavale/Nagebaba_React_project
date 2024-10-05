import React from "react";
import Card from './Card.jsx'
export default function Seva() {
    return (
        <>
            <section>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 p-0">
                            <div class="back_img3">
                                <div class="inner_back">
                                    <h1 class="mt-5 p-5"> </h1>
                                    <h1 class="mt-5 ml-5 font-weight-bold pl-md-5 text-white" style={{ fontSize: "50px" }}>सेवांची माहिती</h1>
                                    <h3 class="mt-2 pl-md-5 ml-5 font-weight-bold text-white">मुख्यपृष्ठ / सेवांची माहिती</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-light pb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center text-info">
                            <h1 class="text-info font-weight-bold mt-3">---</h1>
                            <h2 class="text-dark font-weight-bold mt-4">नागेबाबा मल्टीस्टेट सेवांची माहिती</h2>
                        </div>
                    </div>
                </div>
            </section>
            <Card img="image/seva/c1.jpg" title="लॉकर सुविधा" disc="तुमच्या जवळच्या भागात सर्वोत्तम आणि अत्यंत कमी किमतीत लॉकर सेवा"></Card>
        </>
    )
}