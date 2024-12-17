import React from "react";
import './footer.css';

export default function Footer() {
    return (
        <>
            <footer className="footer-container ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <a href="index.html">
                                <span className="copy">© Copyright 2024 - Binita Shrestha</span>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/binita-shrestha-8283962a6/">
                                    <i className="bi bi-linkedin" style={{ fontSize: "20px", color: "#0077B5", marginRight: "10px"  }}>
                                    </i>
                                </a>
                                <a href="https://github.com/bneta0888">
                                    <i className="bi bi-github" style={{ fontSize: "20px", color: "#0077B5" }}>
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}