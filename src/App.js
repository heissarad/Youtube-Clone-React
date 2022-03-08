import Card from "./Card"
import React from 'react'
import Data from './Data'


const App = () => {
  const mydb = Data.map((Data)=>
  {
  return (
    < Card
    key = {Data.id}
    img = {Data.cardimg}
    title = {Data.title}
    logoimg = {Data.logoimg}
    channelname = {Data.channelname}
    views = {Data.views}
    date = {Data.date}
    verified = {Data.verified}
    url = {Data.url}
    channelurl = {Data.channelurl}

    />
  )
  }
  );
  return (
    <div className="card-container">
<div className="card-comp">
{mydb}
</div>
</div>
  )
}

export default App