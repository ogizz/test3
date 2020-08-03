import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import slide1 from '../img/slide1.jpg'
import slide2 from '../img/slide2.jpg'
import slide3 from '../img/slide3.jpg'
import slide4 from '../img/slide4.jpg'
import slide5 from '../img/slide5.jpg'
import institute from '../img/institute.png'
import teacher from '../img/teacher.png'
import attendee from '../img/attend.png'

function Home() {
    return (
        <div>
            <div id="slides" class="carousel slide ml-auto" data-ride="carousel">
	            <ul class="carousel-indicators">
		        <li data-target="#slides" data-slide-to="0" class="active"></li>
		<li data-target="#slides" data-slide-to="1"></li>
		<li data-target="#slides" data-slide-to="2"></li>
		<li data-target="#slides" data-slide-to="3"></li>
		<li data-target="#slides" data-slide-to="4"></li>
		
	</ul>
	<div class="carousel-inner">
		<div class="carousel-item active"> 
			<img class="d-block mx-auto" src={slide1} />
		</div>
		<div class="carousel-item"> 
			<img class="d-block mx-auto" src={slide2} />
		</div>
		<div class="carousel-item"> 
			<img class="d-block mx-auto" src={slide3} />
		</div>
		<div class="carousel-item"> 
			<img class="d-block mx-auto" src={slide4} />
		</div>
		<div class="carousel-item"> 
			<img class="d-block mx-auto" src={slide5} />
		</div>
		
	</div>
</div>



<div class="container-fluid padding ">
	<div class="row welcome text-center">
		<div class="col-12">
			<h1 class="display-4">Choose type of participation</h1>
		</div>
		<hr />
		<div class="col-12">
			<p class="lead">Appreciation Program for participants in IDY2020 on 21st June 2020</p>
		</div>
	</div>
</div>


<div class="container-fluid padding">
	<div class="row text-center padding">
		<div class="col-xs-12 col-sm-6 col-md-4">
			<a href="institutes">
			<img src={institute}/>
			<h3>As institution</h3>
			<p>Participate as institution</p>
		</a>
		</div>
		<div class="col-xs-12 col-sm-6 col-md-4">
			<a href="Teachers">
			<img src={teacher}/>
			<h3>As Teacher</h3>
			<p>Participate as Teacher</p>
		</a>
		</div>
		<div class="col-xs-12 col-sm-6 col-md-4">
			<a href="Participants">
				<img src={attendee}/>
				<h3>As attendee</h3>
			<p>Participate as Attendee</p>
		</a>
		</div>
	</div>
</div>

<div class="container-fluid padding ">
	<div class="row welcome text-center">
		<div class="col-12">
			<iframe width="355" height="200" src="https://www.youtube.com/embed/9EvUIQCgIho" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>		</div>
		<hr />
		<div class="col-12">
			<p class="lead"><a target="_blank" href="img/cyp2020.pdf">To know more about Common Yoga Protocol, click here</a></p>
		</div>
	</div>
</div>
<div class="container-fluid padding ">
	<div class="row welcome text-center">
		<div class="col-12">
			<h1 class="display-4">FAQs</h1>
		</div>
		<hr />
		<div class="col-12">
			<p class="lead">Frequently Asked Questions</p>
		</div>
	</div>
</div>
<div class="accordion container" id="myAccordion">
    <div class="card">
        <div class="card-header" id="headingOne">
            <h2 class="mb-0">
                <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#collapseOne">1. Who can join the IDY-2020, CYP Training Program?</button>
            </h2>
        </div>
        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#myAccordion">
            <div class="card-body">
                <p>•   Institutions, Teacher, Individual participants from India and abroad can apply<br/>
					•	YCB accredited PrCBs, LYIs, Yoga Institutions/Centres <br/>
					•	Universities, colleges, Ashram, Schools, Yoga Studio may also join the program <br/>
					•	Yoga Teacher Associated with institutes<br/>
					•	Freelance Yoga Teacher<br/>
					•	Students associated with institutes, teacher.<br/>
					•	Independent participants / Yoga aspirants
					</p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
                <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo">2. How to join the IDY-2020, CYP Training Program?</button>
            </h2>
        </div>
        <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#myAccordion">
            <div class="card-body">
                <p>•	Institutions shall apply to participate in the program.<br />
					•	Teacher associated with the institute shall apply to participate in the program.<br />
					•	Freelance teacher shall also apply to participate in the program<br/>
					•	Students of the institute, teacher shall apply to participate in the program.<br />
					•	Independent participants / Yoga aspirants shall apply to participate in the program.</p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingThree">
            <h2 class="mb-0">
                <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree">3.How to give IDY-2020, CYP Training?</button>
            </h2>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#myAccordion">
            <div class="card-body">
                <p>•	Teacher shall provide online training on Common Yoga Protocol.  <br />
					•	Teacher shall use video link of Common Yoga Protocol available on You Tube.<br /> 
					•	Teacher shall guide how to observer IDY on 21st June online</p>
            </div>
        </div>
    </div>
</div>

        </div>
    )
}

export default Home