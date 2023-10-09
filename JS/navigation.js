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
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
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
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>
`