import React from 'react'

import idy from '../img/idy.png'
import ycb2 from '../img/ycb2.png'
import ycb from '../img/ycb.png'


function Topimg() {
    return (
        <div class="container-fluid padding">
        <div class="row text-center padding">
            <div class="col-xs-12 col-sm-6 col-md-4">
                <a href="#">
                    <img src={ycb} />

                </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <a href="#">
                    <img src={ycb2} />

                </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <a href="#">
                    <img src={idy} />

                </a>
            </div>
        </div>
    </div>
    )
}

export default Topimg