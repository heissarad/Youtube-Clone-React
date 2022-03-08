import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Card = (props) => {
  return (
    <div className="cardbox">
      <div className="card" style={{ width: "18rem", backgroundColor: "black" }}>
        <a href={props.url} target='_blank'>
        <img className="card-img-top" src={props.img} alt="Card image cap" />

        </a>
        < div className="card-body">
          <div className="header">
            <a href={props.channelurl} target='_blank'>
            <img  className="logoimg" src={props.logoimg} alt="logoimg" />
            </a>
            <a href={props.url} target = '_blank' className="video--url">

            <h6  className="card-title">{props.title}</h6>
            </a>
          </div>
         <a href={props.channelurl} className="channelurl" target='_blank'>
              <p className="card-text"> {props.channelname} {props.verified===1 &&<svg style={{color: "gray"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
              <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
            </svg>}</p></a>

         
            <span className="card-text">{props.views} views<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>{props.date}</span>

          
        </div>
      </div>
    </div>
  );
};

export default Card;