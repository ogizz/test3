import React from 'react'

function Navbar() {
    return (
      <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div class="container-fluid">

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item ">
                      <a class="nav-link " href="/">Home</a>
                  </li>
                  <li class="nav-item ">
                      <a class="nav-link " target="_blank" href="http://yogacertificationboard.nic.in/">YCB Home</a>
                  </li>
                  <li class="nav-item ">
                      <a class="nav-link " target="_blank" href="img/guidelinesycbidy.pdf">Guidelines</a>
                  </li>
                  <li class="nav-item ">
                      <a class="nav-link " target="_blank" href="https://yoga.ayush.gov.in/yoga/common-yoga-protocol">CYP Videos</a>
                  </li>
                  <li class="nav-item ">
                      <a class="nav-link " target="_blank" href="img/guidelines2.pdf">Approach for Circulation</a>
                  </li>
                  <li class="nav-item ">
                      <a class="nav-link " target="_blank" href="img/yogaathome.pdf">Yoga at Home</a>
                  </li>
                  <li class="nav-item ">
                      <a class="nav-link active" href="Institutes">
                          <button class="btn btn-primary">Institutions</button>
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link active" href="Teachers">
                          <button class="btn btn-primary">Teachers</button>
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link active" href="Participants">
                          <button class="btn btn-primary">Attendee</button>
                      </a>
                  </li>
                  <li class="nav-item">
        <a class="nav-link active" href="Reports"><button class="btn btn-primary">Review Report</button> </a>
      </li>
              </ul>
          </div>
      </div>
  </nav>

    )
}

export default Navbar
