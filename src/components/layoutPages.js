import React from "react";

export default function LayoutInner({ children }) {
  return (
    <>
    <div className="container-fluid bg-white sticky-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
                <a href="index.html" className="navbar-brand">
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
                    <div className="border-start ps-4 d-none d-lg-block">
                        <button type="button" className="btn btn-sm p-0"><i className="fa fa-search"></i></button>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    

                        <main>{children}</main>

    
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