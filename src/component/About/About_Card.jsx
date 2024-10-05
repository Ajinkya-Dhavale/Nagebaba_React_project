import React from "react";
export default function About_Card(props) {
    return (
        <>
            <div class="col-xl-4 col-md-6 col-12 p-0">
                <div class="card-body mt-4 ml-3 border bg-white pb-0">
                    <h1 class="mt-0 font-weight-bold h2"><span class="text-info">{props.sr}.</span>{props.title}</h1>
                    <p class="mt-4">{props.disc}</p>
                </div>
            </div>
        </>
    )
}

export function About_Award(props) {
    return (
        <>
            <div class="col-xl-3 col-md-6 mt-4 col-12">
                <div class="card ml-md-0">
                    <div class="p-0 card-header">
                        <i class="fa-solid fa-award Award_logo"></i>
                        <img src={props.img} class="w-100 img-fluid" style={{ height: "250px" }} />
                    </div>
                    <div class="card-body text-info">
                        <h5 class="text-dark">{props.ctitle}</h5>
                        <h2 class="mt-0">---</h2>
                        <h6>{props.cdisc}</h6>
                        <button class="btn mt-2 pl-4 pr-4 btn-info rounded-pill">पहा</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export function About_Award1(props) {
    return (
        <>
            <div class="col-md-4 mt-4 col-12 ">
                <div class="card ml-md-4">
                    <div class="p-0 card-header ">
                        <img src={props.img} class="w-100 img-fluid" style={{height:"250px"}} />
                    </div>
                    <div class="card-body text-info">
                        <i class="fa fa-clock"></i>
                        <h5>{props.ctitle}</h5>
                        <h6>{props.cdisc}</h6>
                        <button class="btn mt-3 pl-4 pr-4 btn-info rounded-pill">पहा</button>
                    </div>
                </div>
            </div>
        </>
    )
}