import React from "react";
import Card from "./Card.jsx";
export default function About() {
    return (
        <>
            <section>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 p-0">
                            <div class="back_img">
                                <h1 class="mt-5 p-5"> </h1>
                                <h1 class="mt-5 ml-5 font-weight-bold pl-md-5 text-white" style={{fontSize: "50px"}}>संत नागेबाबा मल्टीस्टेट</h1>
                                <h3 class="mt-2 pl-md-5 ml-5 font-weight-bold text-white">मुख्यपृष्ठ / संस्थेविषयी</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Card></Card>
        </>
    )
}