// import React from "react";
// export default function Nav(){
//     return(
//         <>
//         <div classNameName="container-fluid bg-dark">
//             <div className="row pt-2 pb-1">
//                 <div className="col-4">
//                     <ul>
//                         <li className="d-inline text-white ml-1"><i className="text-info mr-1 fa fa-envelope"></i>info@gmail.com </li>
//                         <li className="d-inline text-white ml-1"><i className="text-info mr-1 fa fa-phone"></i>+91 901114920</li>
//                     </ul>
//                 </div>
//                 <div className="col-4">                 
//                      <ul>
//                         <li className="d-inline text-white ml-1"><i className="text-info mr-3 fa fa-user"></i>कॅलेंडर </li>
//                         <li className="d-inline text-white ml-1"><i className="text-info mr-3 fa fa-user"></i>संपर्क</li>
//                         <li className="d-inline text-white ml-1"><i className="text-info mr-3 fa fa-user"></i>करियर</li>
//                     </ul>
//                 </div>
//                 <div className="col-4 text-right">
//                     <button className="btn btn-info rounded mr-2">Customer Care</button>
//                 </div>
//             </div>
//         </div>
//         <div className="container">
//             <div className="row pt-2 pb-1">
//                 <div className="col-4">
//                     <img src="https://www.nagebabamultistate.in/uploads/163997629750642829.jpg" />
//                 </div>
//                 <div className="col-4">
//                      <button className="btn btn-info rounded mr-3">Net Banking</button>
//                      <button className="btn btn-info rounded mr-2">Mobile Banking</button>
//                 </div>
//                 <div className="col-4 text-center">
//                     <h5 className="font-weight-bold">आम्हाला भार नाही;<br/>आधार द्यायचा आहे</h5>
//                 </div>
//             </div>
//         </div>
//         <div className="container-fluid bg-info">
//             <div className="row">
//                 <div className="col-12">
//                     <nav class="navbar navbar-expand-lg navbar-dark">
//                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>

//                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul class="navbar-nav mr-auto">
//                         <li class="nav-item">
//                             <NavLink class="nav-link text-white" to="#">मुख्यपृष्ठ</NavLink>
//                         </li>
//                         <li class="nav-item dropdown">
//                             <NavLink class="nav-link text-white dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-expanded="false">
//                                 आमच्याबद्दल              
//                             </NavLink>
//                             <div class="dropdown-menu">
//                             <NavLink class="dropdown-item " to="#">Action</NavLink>
//                             <NavLink class="dropdown-item" to="#">Another action</NavLink>
//                             <div class="dropdown-divider"></div>
//                             <NavLink class="dropdown-item" to="#">Something else here</NavLink>
//                             </div>
//                         </li>
//                         <li class="nav-item dropdown">
//                             <NavLink class="nav-link text-white dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-expanded="false">
//                                 आमच्याबद्दल              
//                             </NavLink>
//                             <div class="dropdown-menu">
//                             <NavLink class="dropdown-item" to="#">Action</NavLink>
//                             <NavLink class="dropdown-item" to="#">Another action</NavLink>
//                             <div class="dropdown-divider"></div>
//                             <NavLink class="dropdown-item" to="#">Something else here</NavLink>
//                             </div>
//                         </li>
//                         <li class="nav-item dropdown">
//                             <NavLink class="nav-link text-white dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-expanded="false">
//                                 आमच्याबद्दल              
//                             </NavLink>
//                             <div class="dropdown-menu">
//                             <NavLink class="dropdown-item" to="#">Action</NavLink>
//                             <NavLink class="dropdown-item" to="#">Another action</NavLink>
//                             <div class="dropdown-divider"></div>
//                             <NavLink class="dropdown-item" to="#">Something else here</NavLink>
//                             </div>
//                         </li>
//                         </ul>
//                     </div>
//                     </nav>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }

import { NavLink } from 'react-router-dom';
import React from "react";
export default function Nav() {
    return (
        <>
            <header>
                <div className="container-fluid " style={{ background: "#252D39" }}>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <ul className="mt-2 email_hover">
                                <li className="text-white ml-1 d-inline"><i className="text-info fa fa-envelope"></i> info@nagebabamultistate.com </li>
                                <li className="text-info ml-1 d-inline"> | </li>
                                <li className="text-white ml-1 d-inline"><i className="text-info fa fa-phone"></i> +91 95525 54010</li>
                            </ul>
                        </div>
                        <div className="col-md-4 text-center d-none d-md-inline">
                            <ul className="mt-2 calendar_hover">
                                <li className="text-white ml-1 d-inline"><i className="text-info fa fa-calendar"></i><span className="text-white text-decoration-none"> calendar</span></li>
                                <li className="text-white ml-1 d-inline"> | </li>
                                <li className="text-white ml-1 d-inline"><i className="text-info fa fa-address-book"></i><span className="text-white text-decoration-none"> contact</span></li>
                                <li className="text-white ml-1 d-inline"> | </li>
                                <li className="text-white ml-1 d-inline"><i className="text-info fa fa-graduation-cap"></i><span className="text-white text-decoration-none"> Career</span></li>
                            </ul>
                        </div>
                        <div className="col-md-4 text-center d-none d-md-inline">
                            {/* <button className="btn-sm btn-info rounded-pill mt-2 color_change_btn border-0 " style={{ width: "160px" }} data-toggle="modal" data-target="#cust_modal">Customer Support</button> */}
                            <div className="col-12 text-right">
                                <button className="btn btn-info btn-sm mt-2 pl-4 float-right rounded-pill text-left" data-toggle="modal" data-target="#exampleModal5" style={{width:"150px"}}>Customer Help</button>
                                <div className="modal fade " id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-xl">
                                        <div className="modal-content">

                                            <div className="modal-header bg-info text-white">
                                                <h6 className="modal-title font-weight-bold" id="exampleModalLabel">कस्टमर सपोर्ट</h6>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>

                                            <div className="modal-body text-left">

                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-6">

                                                            <button className="btn btn-sm  btn-info m-2">HR</button>
                                                            <button className="btn btn-sm btn-info m-2">Account</button>
                                                            <button className="btn btn-sm btn-info m-2">Marketing</button>
                                                            <button className="btn btn-sm btn-info m-2">Tech Support</button>

                                                            <img className="suportimg img-fluid" src="https://www.nagebabamultistate.in/assets/images/slider/sup5.jpg" />

                                                            <ul className="mt-5">
                                                                <li className="d-inline text-info ml-1"><i className="text-info mr-1 fa fa-envelope"></i>info@nagebabamultistate.com </li>
                                                                <li className="d-inline text-info ml-1"><i className="text-info mr-1 fa fa-phone"></i>+91 95525 54010,4057</li>
                                                            </ul>
                                                        </div>

                                                        <div className="col-6">
                                                            <form className="form border p-3">
                                                                <div className="form-group">
                                                                    <label className="text-dark font-weight-bold" for="formGroupExampleInput2">SUPPORT ON(सपोर्ट)<span className="text-danger font-weight-bold">*</span></label>
                                                                    <select type="text" className="form-control" id="formGroupExampleInput2">
                                                                        <option selected>Select</option>
                                                                        <option>सोनेतारण कर्ज</option>
                                                                        <option>तारण कर्ज</option>
                                                                        <option>वैयक्तिक कर्ज</option>
                                                                        <option>व्यावसायिक कर्ज</option>
                                                                    </select>
                                                                </div>
                                                                <div className="form-row ">
                                                                    <div className="form-group col-md-6 ">
                                                                        <label className="text-dark font-weight-bold" for="formGroupExampleInput">NAME(नाव)<span className="text-danger font-weight-bold">*</span></label>
                                                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Your Name" required />
                                                                    </div>
                                                                    <div className="form-group col-md-6 ">
                                                                        <label className="text-dark font-weight-bold" for="formGroupExampleInput2">EMAIL(ई-मेल) <span className="text-danger font-weight-bold">*</span></label>
                                                                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="@gmail.com" required />
                                                                    </div>
                                                                </div>
                                                                <div className="form-row">
                                                                    <div className="form-group col-md-6 ">
                                                                        <label className="text-dark font-weight-bold" for="formGroupExampleInput">PHONE NUMBER(मोबाईल)  <span className="text-danger font-weight-bold">*</span></label>
                                                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="+91" required />
                                                                    </div>
                                                                    <div className="form-group col-md-6 ">
                                                                        <label className="text-dark font-weight-bold" for="formGroupExampleInput2">BRANCH NAME(ब्रँच नाव) <span className="text-danger font-weight-bold">*</span></label>
                                                                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Branch Name" required />
                                                                    </div>
                                                                </div>

                                                                <div className="form-group col-12">
                                                                    <label className="text-dark font-weight-bold" for="formGroupExampleInput2">ENTER YOUR QUERY(मेसेज) <span className="text-danger font-weight-bold">*</span></label><br></br>
                                                                    <textarea className="form-control mb-5"></textarea>
                                                                </div>
                                                                <div className="form-group col-12">
                                                                    <button type="button" className="form-control btn btn-info btn-sm font-weight-bold rounded-pill float-right btn-info">SEND REPORT</button>
                                                                </div>
                                                            </form>
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
                </div>
            </header>
            <section className="d-none d-md-inline">
                <div className="side_menu_item">
                    <div className="inner_side_menu text-center">
                        <i className="fa fa-facebook"></i>
                    </div>
                    <div className="inner_side_menu text-center">
                        <i className="fa fa-instagram"></i>
                    </div>
                    <div className="inner_side_menu text-center">
                        <i className="fa fa-youtube"></i>
                    </div>
                    <div className="inner_side_menu text-center">
                        <i className="fa fa-whatsapp"></i>
                    </div>
                    <div className="inner_side_menu text-center">
                        <i className="fa fa-twitter"></i>
                    </div>
                    <div className="inner_side_menu text-center">
                        <i className="fa fa-google"></i>
                    </div>
                </div>
            </section>
            <header className="d-none d-md-inline">
                <div className="container-fluid">
                    <div className="row  p-3">
                        <div className="col-md-4   text-center">
                            <img src="image/n_logo.jpg" className="rounded" />
                        </div>
                        <div className="col-md-5 d-none d-md-inline text-center">
                            <button className="btn btn-info ml-2 mt-2" style={{ background: "#12687F" }}><i className="fa-solid fa-download"></i><span className="text-warning"> N</span> E <span className="text-warning">T</span> - B <span className="text-warning">A</span> N <span className="text-warning">K</span> I <span className="text-warning">N</span> G</button>
                            <button className="btn btn-info ml-2 mt-2" style={{ background: "#12687F" }}><i className="fa-solid fa-download"></i> <span className="text-warning">M</span> O <span className="text-warning">B</span> I <span className="text-warning">L</span> E - <span className="text-warning">B</span> A <span className="text-warning">N</span> K <span className="text-warning">I</span> N <span className="text-warning">G</span></button>
                        </div>
                        <div className="col-md-3 d-none d-md-inline text-center " style={{ color: "#12687F" }}>
                            <h5 className="font-weight-bold">आम्हाला भार नाही; <br />
                                आधार द्यायचा आहे</h5>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container-fluid">
                <div className="row" style={{ background: "#12687F" }} >
                    <div className="col-12 p-2 d-xl-flex justify-content-center">
                        <nav className="navbar navbar-expand-lg navbar-dark change_media_nav text-center " style={{ background: "#12687F" }}>

                            <button className="active navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                            </button>
                            {/* <img src="image/n_logo1.png" height="50px" width="50px;" className="ml-5 rounded d-lg-none d-inline d-flex justify-content-right" style="border: 3px solid black;" /> */}
                            <div className="collapse navbar-collapse text-center" id="navbarNavDropdown">
                                <ul className="navbar-nav text-center">
                                    <li className="nav-item ml-xl-4 ml-lg-3 active active" >
                                        <NavLink className="nav-link" to="/">मुख्यपृष्ठ</NavLink>
                                    </li>
                                    <li className="nav-item ml-xl-2 ml-lg-00 active dropdown">
                                        <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            आमच्याबद्दल
                                        </NavLink>
                                        <div className="dropdown-menu mt-0 pt-2" aria-labelledby="navbarDropdown">
                                            <NavLink className="bg-white text-dark dropdown-item" to="/about">नागेबाबा बद्दल</NavLink>
                                            <NavLink className="bg-white text-dark dropdown-item" to="/about1">चेअरमन बद्दल</NavLink>
                                            <NavLink className="bg-white text-dark dropdown-item" to="/about2">व्यवस्थापना बद्दल</NavLink>
                                        </div>
                                    </li>
                                    <li className="nav-item ml-xl-2 ml-lg-00 active">
                                        <NavLink className="nav-link" to="/seva">सेवा</NavLink>
                                    </li>
                                    <li className="nav-item ml-xl-2 ml-lg-00 active dropdown">
                                        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            ठेव योजना
                                        </NavLink>
                                        <div className="dropdown-menu mt-0 pt-2" aria-labelledby="navbarDropdown">
                                            <NavLink className="dropdown-item bg-white text-dark" to="/thev"> फिक्स डिपॉझिट</NavLink>
                                            <NavLink className="dropdown-item bg-white text-dark" to="/thev1">आवर्ती ठेव (रिकरिंग डिपॉझिट)</NavLink>
                                            <NavLink className="dropdown-item bg-white text-dark" to="/thev2">लॉकर डिपॉझिट</NavLink>
                                        </div>
                                    </li>
                                    <li className="nav-item ml-xl-2 ml-lg-00 active dropdown">
                                        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            कर्ज योजना
                                        </NavLink>
                                        <div className="dropdown-menu mt-0 pt-2" aria-labelledby="navbarDropdown">
                                            <NavLink className="dropdown-item bg-white text-dark" to="/karj">सोनेतारण कर्ज</NavLink>
                                            <NavLink className="dropdown-item bg-white text-dark" to="/karj1">तारण कर्ज</NavLink>
                                            <NavLink className="dropdown-item bg-white text-dark" to="/karj2">वैयक्तिक कर्ज</NavLink>
                                            <NavLink className="dropdown-item bg-white text-dark" to="/karj3">व्यावसायिक कर्ज</NavLink>
                                        </div>
                                    </li>
                                    <li className="nav-item ml-xl-2 ml-lg-00 active">
                                        <NavLink className="nav-link" to="/">शाखा</NavLink>
                                    </li>
                                    <li className="nav-item ml-xl-2 ml-lg-00 active">
                                        <NavLink className="nav-link" to="/">आमची कामे</NavLink>
                                    </li>
                                    <li className="nav-item ml-xl-2 ml-lg-00 active dropdown">
                                        <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            प्रकाशन
                                        </NavLink>
                                        <div className="dropdown-menu mt-0 pt-2" aria-labelledby="navbarDropdown">
                                            <NavLink className="dropdown-item bg-white text-dark" to="/book1">विचारधन</NavLink>
                                            <NavLink className="dropdown-item bg-white text-dark" to="/book2">पुस्तके</NavLink>
                                        </div>
                                    </li>
                                    <li className="nav-item ml-xl-2 ml-lg-00 active">
                                        <NavLink className="nav-link" to="/">मीडिया</NavLink>
                                    </li>
                                    <li className="nav-item ml-xl-2 ml-lg-00 active">
                                        <NavLink className="nav-link" to="/feedback">फीडबॅक</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>



        </>
    )
}
