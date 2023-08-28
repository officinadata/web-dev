import React from "react";
import "./SearchBox.css";

export default function Layout({ children, setMessage, change }) {
    const onButtonClick=(changeValue)=>{
        setMessage(changeValue)
    };

    const handleExpand = () => {
        const search = document.querySelector(".search-input");
        search.classList.toggle("search-expanded");
    };

  return (
    <>
    <div className="container-fluid bg-white sticky-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
                <a href="/" className="navbar-brand">
                    <img className="img-fluid" src="img/logo.png" alt="Logo" />
                </a>
                <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <a href="/" className="nav-item nav-link active">Home</a>
                        <a href="/about" className="nav-item nav-link">About</a>
                        <a href="/evaluate" className="nav-item nav-link">Evaluate</a>
                        <a href="/contribute" className="nav-item nav-link">Contribute</a>
                    </div>
                    <div className="border-start ps-4 d-none d-lg-block container-search">
                        <button type="button" className="btn btn-sm p-0 search-wrapper"  onClick={handleExpand}><i className="fa fa-search"></i></button>
                        <input className="search-input" type="search" placeholder="Search here" onChange={change} />

                    </div>
                </div>
            </nav>
        </div>
    </div>
    
    <div className="container-fluid px-0 mb-5">
      <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active" style={{height: 600+'px'}}>
                <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                <div className="carousel-caption">
                    <div className="container">
                        <div className="row justify-content-center">
                        <main>{children}</main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    
    <div className="container-fluid copyright py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a className="fw-medium" href="#">DaRe Project</a>, All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                    Designed By Dev team @ DaRe project.
                </div>
            </div>
        </div>
    </div>
    </>
  )
}