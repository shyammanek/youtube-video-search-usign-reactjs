import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Video = () => {

    const [user,setUser] = useState([]);

    async function getUser() {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts').
          then(json => setUser(json.data))
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }

      useEffect(() => {
       getUser();
      },[]);
    return(
        <>
        {/* <div className="mycard">
            <img src="https://www.w3schools.com/w3images/jeans3.jpg" className="imgs" />
         <h1>Tailored Jeans</h1>
         <p className="price">$19.99</p>
            <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
        <p><button className="cardButton">Add to Cart</button></p> </div> */}

<div className="container" >
  <div className="row">
    <div className="col-md-3"></div>
    <div className="col-md-6">

    {
    user.map((posts,i) =>
    <div className="card" style={{width:"18rem" ,width:"auto", margin:"10px"}}>
      <div className="card-body">
    <h5 className="card-title">{posts.title}</h5>
   
    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
    <p className="card-text">{posts.body} </p>
    <p className="price">$16.99</p>
   
  </div>
</div>
    )
}



    </div>
    <div className="col-md-3"></div>
  </div>
</div>
        </>
    )
}

export default Video;