import './footer.css'

let Footer = ()=>{
    return(
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-6 py-3">
                    <h1 className="d-flex justify-content-center">COMPANY LOGO</h1>
                    <div className="row">
                        <div className="col-2 offset-2 d-flex justify-content-center py-3"><i class="fas fa-headset fa-3x foo-callus"></i></div>
                        <div className="col-6 pt-2 align-items-center">Got questions? Call us 10am to 8pm
                        <div className="row">
                            <div className="col"><b>XX XXXXX XXXXX</b></div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 offset-2 py-3">
                        <span className="">
                        <span className="d-block"><b>Office:</b></span>
                        Address of the Office
                        </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 offset-2  d-flex justify-content-around foo-link1">
                        <h3><a href="#" className="nav-link"><i class="fab fa-facebook-f"></i></a></h3>
                        <h3><a href="#" className="nav-link"> <i class="fab fa-twitter"></i></a></h3>
                        <h3><a href="#" className="nav-link"><i class="fab fa-linkedin-in"></i></a></h3>
                        <h3><a href="#" className="nav-link"><i class="fab fa-instagram"></i></a></h3>
                        </div>
                    </div>
                </div>
                <div className="col-3 foo-link2">
                    <span className="nav-link"><b>Find in Fast</b></span>
                    <span className="nav-link"> <a href="#">Amplifiers </a></span>
                    <span className="nav-link"><a href="#">Speakers</a></span>
                    <span className="nav-link"><a href="#">Subwoofers</a></span>
                    <span className="nav-link"><a href="#">Audio Accessories</a></span>
                </div>
                <div className="col-3 foo-link2">
                    <p><b>Information</b></p>
                        <span className="nav-link"><a href="#">About Us</a></span>
                        <span className="nav-link"><a href="#">Return Policy</a></span>
                        <span className="nav-link"><a href="#">Terms and conditions</a></span>
                        <span className="nav-link"><a href="#">Contact Us</a></span>
                </div>
            </div>
            <div className="row">
                <div className="col-6  p-3 bg-light">
                &#169;<a href="#" className="foo-link">Company Name</a>. All rights reserved
                </div>
            </div>
        </div>
    );
}

export default Footer;