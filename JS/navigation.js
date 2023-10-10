document.querySelector(".mainheader").innerHTML=` 
<div class="header-bottom py-1" id="headernavigation" style=" background-color: white; backdrop-filter:blur(5px);">
<div class="container-fluid">
    <div class="row">
        <div class="mail-logo nav-logo">
            <a href="https://risemedianetwork.netlify.app/"> <img src="/IMAGE/rise.png" alt=""></a>
        </div>
        <div class="mail-logo body-logo" >
            <a href="https://risemedianetwork.netlify.app/"> <img src="/IMAGE/rise2.png" alt=""></a>
        </div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="https://risemedianetwork.netlify.app/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://risemedianetwork.netlify.app/aboutus.html">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://risemedianetwork.netlify.app/team.html">Our Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://risemedianetwork.netlify.app/services.html">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://risemedianetwork.netlify.app/creation.html">Creation</a>
                        </li>
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="#">Gallery</a>
                        </li> -->
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="#">Advertisment</a>
                        </li> -->
                        <li class="nav-item">
                            <a class="nav-link" href="https://risemedianetwork.netlify.app/contact.html">Contact Us</a>
                        </li>
                </div>
            </div>
        </nav>
        <div class="right ">
            <div class="phone contact">
                <div class="icon">
                    <i class="fa-solid fa-phone"></i>
                </div>
                <div class="detail">
                    <h3>Phone</h3>
                    <p>123456789</p>
                </div>
            </div>
            <div class="Email contact">
                <div class="icon">
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="detail">
                    <h3>E-mail</h3>
                    <p>ABC@email.com</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<div class="offcanvas offcanvas-start navbar-offcanvas" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <div class="logo"><img src="/IMAGE/rise.png"></div>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
   
      <nav>
        <ul>
            <a href="https://risemedianetwork.netlify.app/"> <li> <i class="fa-solid fa-house"></i>Home</li></a>
            <a href="https://risemedianetwork.netlify.app/aboutus.html"><li><i class="fa-regular fa-address-card"></i>About Us</li></a>
            <a href="https://risemedianetwork.netlify.app/team.html"><li><i class="fa-solid fa-users"></i>Our Team</li></a>
            <a href="https://risemedianetwork.netlify.app/services.html"><li><i class="fa-solid fa-server"></i>Services</li></a>
            <a href="https://risemedianetwork.netlify.app/creation.html"><li><i class="fa-brands fa-creative-commons-sampling"></i>Creation</li></a>
            <a href="https://risemedianetwork.netlify.app/contact.html"><li><i class="fa-solid fa-address-card"></i>Contact Us</li></a>
        </ul>
      </nav>
    <div class="offcanvas-icon">
    <div class="follow-us justify-content-center">
                               
                                <div class="social-icon">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </div>
                                <div class="social-icon">
                                    <i class="fa-brands fa-youtube"></i>
                                </div>
                                <div class="social-icon">
                                    <i class="fa-brands fa-x-twitter"></i>
                                </div>
                                <div class="social-icon">
                                    <i class="fa-brands fa-linkedin"></i>
                                </div>
                            </div>
    </div>
  </div>
</div>
`