import React from "react"
import "./RightButton.css"
import {FaShoppingBag} from 'react-icons/fa'
import {useState} from 'react'
import{AiOutlineShoppingCart} from 'react-icons/ai'
import{AiOutlinePlus} from 'react-icons/ai'
import{HiMinusSm} from 'react-icons/hi'
function RightShop({rigth=false , onchange}){
    const [count , setCount] = useState(0)
    const increase = ()=>{
        setCount(count+1)
    }
    const dec = ()=>{
         if (count >0){
         setCount(count-1)
        }
    }
    return (
        <div className={`right-shop-box $(right && "right-shop-box-true")`}>
        <div className="cont-button">
            <AiOutlinePlus oncick={increase} style={{cursor:'pointer'}} />
            <span></span>
            <HiMinusSm oncick={dec} style={{cursor:'pointer'}}/>
        </div>
        </div>
    )
}
export default function RightButton(){
    const [rigth,setRight] = useState(false)
    return (<>

            <div className="right-button-box">
            <div style={{display:'flex',alignItems:'center',marginBottom:'20'}}>
            <FaShoppingBag className="shop" style={{marginRight:10,fontSize:40,}}/><span>1 sht</span>
            </div>
            <button className="button">400 000 sum</button>
        </div>
        <RightShop/>
        </>
    )
}
