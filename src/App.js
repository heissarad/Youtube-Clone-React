import Card from "./Card";
import React, {useEffect,useState} from 'react';
import Data from './Data';
import Loader from "./Loader/loader";
import Typewriter from "typewriter-effect";
import "./index.css";

const App = () => {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 2000);
  });
  const user_fav_mode = JSON.parse(localStorage.getItem('mode'));

  const [mode, setMode] = React.useState(
    user_fav_mode ? user_fav_mode :
      {
        isTrue: 1,
        backgroundColor: "white",
        color: "black"


      }
  );

  React.useEffect(() => {
    localStorage.setItem('mode', JSON.stringify(mode));
  }, [mode]);




  function handleOnClick() {
    setMode((prevMode) => ({
      ...prevMode,
      isTrue: !mode.isTrue,
      backgroundColor: mode.isTrue ? "black" : "white",
      color: mode.isTrue ? "white" : "black"


    })


    );

  }
  document.body.style.backgroundColor = `${mode.backgroundColor}`;

  const mydb = Data.map((Data) => {
    return (
      < Card
        key={Data.id}
        img={Data.cardimg}
        title={Data.title}
        logoimg={Data.logoimg}
        channelname={Data.channelname}
        views={Data.views}
        date={Data.date}
        verified={Data.verified}
        url={Data.url}
        channelurl={Data.channelurl}
        time={Data.time}
        mode={mode.backgroundColor}
        color={mode.color}
      />
    );
  }
  );



  return (
    <div>
       {loader ? (
        <Loader />
      ) : (
    <>
    <div className="card-container" >
     
      <span className="sun--logo" onClick={handleOnClick}>
        {mode.isTrue ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-brightness-low-fill" viewBox="0 0 16 16">
          <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" />
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-stars-fill" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
        </svg>}
      </span>
      <span className="tw-effect" style={{ color: `${mode.color}` }}>
        <Typewriter loop={true} onInit={(typewriter) => {
          typewriter.typeString("Presenting Youtube Clone").pauseFor(1000).deleteAll().typeString('Created By Sarad Gyawali').start();
        }}
        />
      </span>
      <div className="card-comp">
        {mydb}
      </div>
    </div>
    </>)}
    </div>
  );
};

export default App;