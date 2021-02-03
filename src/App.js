import React, { useEffect, useState } from 'react'
import './App.css';

function App() {


  const [ newsList,setNewsList ] = useState([]);


  useEffect( () => {
    fetch('https://www.spaceflightnewsapi.net/api/v2/articles').then( res => (res.json()) ).then( data => {
      setNewsList(data);
    } );
  },[] );

  return (
    <div className="App">

      <div className="title">
        <h1> Space News </h1>
      </div>

      <div className="newsContainer">

          {newsList.map( (v,k) => {
            return <div className="article" key={k} onClick={ () => { window.location.href = v.url } } >

              <h3> {v.title} </h3>
              <img src={v.imageUrl} alt="img" />
              <p> {v.summary} </p>
              <h4> {v.publishedAt} </h4>
              
             </div>
          } )}

      </div>

    </div>
  );
}

export default App;
