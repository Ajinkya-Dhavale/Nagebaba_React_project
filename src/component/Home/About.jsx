import axios from "axios";
import React, { useEffect, useState } from "react";
export default function About() {
    // var [Aboutinfo, setAboutinfo] = useState();
    // useEffect(() => {
    //     loadApi();
    // },[])
    // var loadApi = async () => {
    //     var res = await axios.get('https://a2zithub.org/nweb/api/about_api');
    //     console.log(res.data);
    //     setAboutinfo(res.data);
    // }
    return (
        <>
            {/* <!-- संस्थेविषयी About information --> */}
            <section className="bg-info mt-4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-12 mt-5 mb-5">
                            {/* <img src={`https://a2zithub.org/nwebuploads/'${Aboutinfo?.[0]['about_image']}`} class="mt-4 img-fluid" style={{ border: "5px solid white" }} /> */}
                            {/* <img src={`https://a2zithub.org/nweb/uploads/${Aboutinfo?.[0]['about_image']}`} class="mt-4 img-fluid" style={{ border: "5px solid white" }} /> */}
                            <img src="image/about_us.jpg" class="mt-4 img-fluid" style={{ border: "5px solid white" }} />
                        </div>
                        <div class=" about_info col-12 col-md-6 mt-5 font-weight-bold">
                            <h3 class="font-weight-bold">संस्थेविषयी</h3>
                            {/* <h4 class="font-weight-bold mt-5">{Aboutinfo?.[0]['title']}</h4> */}
                            <h4 class="font-weight-bold mt-5">SHREE SANT NAGEBABA MULTISTATE CO. OP. CREDIT SOCIETY LTD. AHMEDNAGAR</h4>
                            {/* <p class="font-weight-bold mt-5">{Aboutinfo?.[0]['description']}</p> */}
                            <p class="font-weight-bold mt-5">Sant Nagebaba Multistate offers its customers the option to choose from a wide range of savings accounts with various features and benefits. It is an important source of financial and technical assistance to developing rural areas. Our mission is to help people help themselves and their environment by providing resources</p>
                            <button class="btn font-weight-bold p-3 mb-5 pl-5 pr-5 rounded-pill mt-4 btn_about_read_more">READ ON</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}