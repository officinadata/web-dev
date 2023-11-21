import React from "react";
import Search from "./Search";

export default function LayoutInner({ children }) {
  return (
    <>
    <div className="container-fluid px-0 mb-5 carousel-container">
      <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active" style={{height: 562+'px'}}>
                <img className="w-100" src="images/DFSJ-WWW_02.gif" alt="" />
            </div>
        </div>
      </div>
    </div>
    <div>
        <img id="sub-head" src="images/DFSJ-WWW_03.gif" style={{width: '100%'}}/>
    </div>
    <main>{children}</main>
    </>
  )
}