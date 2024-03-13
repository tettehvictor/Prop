import React from 'react'

const New = (props) => {
  return (
    <>
     <div class="card" style={{width: '18rem'}}>
  <img src={props.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">{props.descrip}</p>
    <p className="card-text">{props.price}</p>
   <div className="mb-3 d-flex justify-content-between mx-3">
   </div>
    <a href="#" class="btn btn-primary w-100">Add to cart </a>
  </div>
</div>
    
    </>
  )
}

export default New