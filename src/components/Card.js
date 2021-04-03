import React from 'react'
import Avatar from './Avatar'
import Details from './Details'

function Card(props) {
    console.log(props)

    return (
        <div className="card">

            <div className="top">
                <h2 className="name">{props.nameOf}</h2>
                <Avatar imageOf2={props.imageOf}/>
            </div>

            <div className="bottom">
            <Details emailOf2={props.emailOf} phoneOf2={props.phoneOf}/>
            </div>

        </div>
    )
}

export default Card;