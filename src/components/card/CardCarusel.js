import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card'
import './CardCarusel.css'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

let data = [
    {
        id:1,
        name:"Planshet",
        price:"2000 som",
        img:"https://cdn.goodzone.uz/goodzone/8f3890e9-a0de-4ff0-878d-ac9b978d46cd"
    },
    {
        id:2,
        name:"Phone 12",
        price:"34540 som",
        img:"https://cdn.goodzone.uz/goodzone/8f3890e9-a0de-4ff0-878d-ac9b978d46cd"
    },
    {
        id:3,
        name:"Phone 14",
        price:"65657 som",
        img:"https://cdn.goodzone.uz/goodzone/8f3890e9-a0de-4ff0-878d-ac9b978d46cd"
    },
    {
        id:4,
        name:"Phone 10",
        price:"5678 som",
        img:"https://cdn.goodzone.uz/goodzone/8f3890e9-a0de-4ff0-878d-ac9b978d46cd"
    },
]
function CardCarusel(){
    return(
        <div className="card-carusel-goodzone">
    <Carousel responsive={responsive}>
        {data.map(item=>{
            return (
                <Card name={item.name} img={item.img} price={item.price}/>
            )
        })}
            
            
        </Carousel>;
        </div>
    )
}

export default CardCarusel