import React, {Children} from "react";

import Search from "./Search";

export default function Layout({ children }) {

  const result = Children.toArray(children);

  return (
    <>
    <div className="container-fluid px-0 mb-5 carousel-container">
      <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active" style={{height: 562+'px'}}>
                <img className="w-100" src="images/DFSJ-WWW_02.gif" alt="" />
                <div className="carousel-caption">
                    <div className="container">
                        <div className="row justify-content-center">
                        <main>{result[0]}</main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div>
        <img id="sub-head" src="images/DFSJ-WWW_03.gif" style={{width: '100%'}}/>
    </div>
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
                    <main>{result[1]}</main>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}