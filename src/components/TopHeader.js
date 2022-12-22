import "./Topheader.css"
import Dropdown from 'react-bootstrap/Dropdown';
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FiMenu} from "react-icons/fi"
let dataLang = ["Ruskiy","Uzbek"]
let dataCity = ["Samarqand","Toshkent"]

function ResponsiveHeader(){
  return(
    <div>
      <div>
        <FiMenu/>
      </div>
    </div>
  )
}

function BasicExample({name,data}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        {name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {data.map((item)=>{
                       return  <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
        })}
      
    
      </Dropdown.Menu>
    </Dropdown>
  );
}

function TopHeader(){
    return(
    <div>

      <ResponsiveHeader/>
          <div className="cont">
        <div className="left">
        <BasicExample name={"Til"} data={dataLang}/>
        <BasicExample name={"Shahar"} data={dataCity}/>
        </div>
        <div className="middle">
            <ul>
                <li>
                    <a href="#">Do'konlar</a>
                </li>
                <li>
                    <a href="#">Yetkazib berish</a>
                </li>
                <li>
                    <a href="#">Kampaniya haqida</a>
                </li>
            </ul>
        </div>
        <div className="right">
          <BsFillTelephoneFill/>
            +998994483690
        </div>
       
    </div>
    </div>
    )
}
export default TopHeader
