import React from "react" 
import { Helmet } from "react-helmet"

 const GSearch = () => { 
 
  return ( 
 <div className='gsearch'> 
 <Helmet> <script async src="https://cse.google.com/cse.js?cx=b2f80291070734ee5" ></script> </Helmet> 
 <div className="gcse-search"></div> 
 </div> ) } 
 export default GSearch
