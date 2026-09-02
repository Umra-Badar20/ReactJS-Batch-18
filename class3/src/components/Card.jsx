import React from 'react'

const Card = (props) => {
    console.log(props);
    
  return (
    <div className="col">
                    <div className="card h-100">
                        <img src={props.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.desc}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary fw-bold">Price: {props.price}/-</small>
                        </div>
                    </div>
                </div>
  )
}

export default Card
