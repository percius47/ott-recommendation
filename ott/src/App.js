import './App.css';
import React, { useEffect, useState } from 'react'
// import Nav from './Components/Nav';
import Logo from "./netflix.png"
import Search from "./netflixsearch.png"
import rc1 from "../src/images/rc1.jpg"
import rc2 from "../src/images/rc2.jpg"
import rc3 from "../src/images/rc3.jpg"
import th1 from "../src/images/th1.jpg"
import th2 from "../src/images/th2.jpg"
import th3 from "../src/images/th3.jpg"  
import co1 from "../src/images/co1.jpg" 
import co2 from "../src/images/co2.jpg" 
import co3 from "../src/images/co3.jpg" 
import Banner from "../src/images/banner.jpg" 
var objLib={

  
  "Rom-Com":["The Last Summer", "Yesterday", "50 First Dates"],
  "Thriller":["La Llorona", "Close", "Greta"],
  "Comedy":["Dolittle","Roohi","TAG"],
  };
  var imgLib={

  
    "Rom-Com":[rc1, rc2, rc3],
    "Thriller":[th1,th2,th3],
    "Comedy":[co1,co2,co3],
    };

    var imdb={

  
      "Rom-Com":["8.0", "6.0", "9.0"],
      "Thriller":["8.5", "5.5", "4.2"],
      "Comedy":["7.0", "6.2", "8.0"],
      };


var arrLib=Object.keys(objLib);
function App() {
  const [title,setTitle]= useState([]);
  const [image,setImage]=useState([]);
  const [rating,setRating]=useState([]);
function clickHandler(items){
 
  var resArr=objLib[items];
  var resImg=imgLib[items];
  var x=imdb[items];
setTitle(resArr);
setImage(resImg);
setRating(x);

}

function inputhandler(event){

  var x=document.querySelector(".inputText")
  var resKey=x.value;
var resArr="";
var resImg="";
var xy="";
  if(objLib[resKey]===undefined)
 { resArr=["Please Come back later. We are expanding our Databse."];
  resImg=[];
  xy=0;
}
  else
  { resArr=objLib[resKey];
    resImg=imgLib[resKey];
    xy=imdb[resKey];
  }
  setTitle(resArr);
  setImage(resImg);
  setRating(xy);



}

// Nav Js start
const [show,setShow]=useState(false);
 
const transitionNavBar =()=>{
    if(window.scrollY>100){
        setShow(true);
    }
    else
    {
        setShow(false);
    }
}
useEffect(() => {
    window.addEventListener("scroll",transitionNavBar)
    return()=>window.removeEventListener('scroll',transitionNavBar)
   
}, [])
// Nav js end



  return (
    <div className="App">
       
   {/* Nav Start */}

     <div className={`nav ${show && "nav_black"}`}>

         <div className="nav_contents">

         <img 
         
         className="nav_logo" src={Logo} alt="Netflix"/>

 <div className="list">
          
          {arrLib.map(function (items){
            return (
            <span
            onClick={()=>clickHandler(items)}
            key={items}
            className="listItem">
              {items}
             
              </span>
           );
          
   })}          
   
   

         </div>
         <div className="inputParent">
        <input type="text" className="inputText" />
      <img src={Search}alt="find"className="search" onClick={inputhandler}/>
      </div>


     <img 
     
     className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar"/>
         </div>
        
     </div>



{/* Nav End */}
     
   

    {/* Body start */}
    
    {/* banner */}
   <div className="banner">
     <img src={Banner} alt="" className="bannerImage" />
   </div>

{/* banner */}
      <div className="outputList">

        {title.map(function(label,index){
          const currentImg=image[index];
          const crating= rating[index];
          return(
            <div className="resultList">

      <img src={currentImg} alt="title" className="listImage" />
            <span
            key={label}
            className="listItems">Title: {label}</span>
            <span
            key={rating}
            className="listRating">IMDB: {crating}/10</span>
           
            </div>
          )

        })}
        
         

      </div>

      {/* Body end */}

      <div className="footer">
      <h5 className="footText">©️ Copyright 2021.</h5>
      </div>
    
          </div>//app
  


  )
}

export default App
