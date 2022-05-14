import InterestCard from "./InterestCard"
import { GetScreenshot } from "../services/PageServices"
import { useState } from "react"
import styled, {keyframes, createGlobalStyle} from "styled-components"


const PageCards = ({page}) => {

 
  return (
    <div class='container'>
      <div draggable='true' class="box">{page.title}</div>
    </div>
  )
}
export default PageCards