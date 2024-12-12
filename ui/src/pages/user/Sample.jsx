import React from 'react'
import Logo from "../../assets/logo.png"
import "../../css/style.css"

function Sample() {
  return (
   <>
       <div class="node" id="node"></div>
       <div class="cursor" id="cursor"></div>
   {/* <nav>
        <div class="logo">
            <img src={Logo} alt="Logo Image" />
            <h3>Bannari Amman Institute of Technology</h3>
            <h4>BIT</h4>
        </div>
        <div class="hamburger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <ul class="nav-links">
            <li><a class="active nodeHover" href="#home">Home</a></li>
            <li><a class="nodeHover" href="#about">About</a></li>
            <li><a>Implementation Team</a>
            </li>
            <li><a class="nodeHover" href="#guidelines">Guidelines</a></li>
            <li><a class="nodeHover" href="login.php">Problem-Statement</a></li>
            <li><a class="nodeHover" href="#footer">Contact Us</a></li>
            <li><a class="login-button nodeHover" href="login.php">Login / Register</a></li>
        </ul>
    </nav> */}
    <section class="home" id="home">
        
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>

        <h4 class="main_title" style={{marginTop:"22vh"}}>TAN<span style={{fontSize:"60px"}}>S</span> HACK'24</h4>
        <center>
            <h5 style={{backgroundColor:"#000",width:"30vw",color:"#fff",borderRadius:"2px", paddingLeft:"5px",paddingBottom:"0%"}}>TANSCHE SOFTWARE HACKATHON 2024</h5>
        </center><br />
        <h4 class="main_title" style={{paddingTop:"0%", fontSize:"34px"}}>CASH PRIZE WORTH <span style={{letterSpacing: "5px", fontSize: "50px", paddingTop:"10px"}}>3 LAKHS</span></h4>


        {/* <h2 style="margin-top:30vh;">BIT'<span style="color:#7f58f3;font-size:30px;padding-bottom:0%;">S</span> HACK'22</h2><br />
        <h2 class="main_title" style="padding-top:0%; font-size:15px;margin-bottom:10vh;">CASH PRIZE WORTH <span style="letter-spacing: 5px; font-size: 20px;">3 LAKHS</span></h2>

        <a class="login-button join nodeHover" href="prob-state.php">Join the Event </a>
        <p style="text-align: center; margin-top:20px;font-family:poppins;font-size:22px;">on the 3rd and 4th of December</p> */}

        {/* <div id="mouse-scroll">
            <div class="mouse" id="about">
                <div class="mouse-in"></div>
            </div>
            <div>
                <span class="down-arrow-1"></span>
                <span class="down-arrow-2"></span>
                <span class="down-arrow-3"></span>
            </div>
        </div> */}
    </section>
   </>
  )
}

export default Sample