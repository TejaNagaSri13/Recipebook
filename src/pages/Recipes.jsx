import React from 'react';
const Recipes = () => {

    return (
      <div>
       <img src="/image1.jpeg" class="img-fluid1" alt="..." />
        
        <h2>Recipes</h2>
       <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
    <div class="col">
      <div class="card">
        <img src="/idly.jpeg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Veg Recipes</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="/dosa.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="/pongal.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="/vada.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    </div>
      </div>
    )
  }
  
export default Recipes;