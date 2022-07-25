function FoodCard(props){

    function CheckOrder(){
      if(Number(props.price)>170){
        console.log("Eligible for discount and also Free Delivery");
        console.log("Your Order: "+props.name);
      }
else{
    console.log("No Free Delivery : " + (Number(props.price)+10));
    console.log("Your Order: "+props.name);
}
    }

return(
    <div className="food-container">
    <div className="food-header">
        <img src={props.img} className="food-img" alt="food-img" ></img>

    </div>
    <p className="food-name">{props.name} </p>
    <p className="food-des">{props.des}</p>
    <p className="food-price">{props.price}</p>
    <button className="btn" onClick={CheckOrder}>Order Now!</button>
    </div>
);
}








export default FoodCard;
