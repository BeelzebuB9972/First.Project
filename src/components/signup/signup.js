import './signup.css';

let Signup = ()=>{
    return(
        <div className="container-fluid bg-warning">
            <div className="row p-3">   
                <div className="col-3 d-flex d-flex justify-content-start align-items-center">
                <i class="fab fa-telegram-plane fa-3x">   </i>
                <span className="s_sizel"><b>Sign up to Newsletter</b></span>
                </div>
                <div className="col-4 d-flex justify-content-start align-items-center">
                    <span className="s_sizes">...and receive <b>updates on the finest car products</b></span>
                </div>
                <div className="col-5 d-flex justify-content-center align-items-center">
                    <div className="input-group w-80">
                        <input type="text" className="form-control s_in_brdr" placeholder="your email here" />
                        <button className="btn btn-dark s_btn_brdr">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;