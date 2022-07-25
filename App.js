import './App.css';
import FoodCard from './Components/Food.js';

function App() {

return(

<div className="food">
  <FoodCard name= "Veg Burger" des="The Best Burger" price='129' img='https://source.unsplash.com/900x600?burger' />

  <FoodCard name= "Mutton Biryani " des="The Best Mutton Biryani" price='299' img='https://source.unsplash.com/900x600?biryani'  />

  <FoodCard name= "Chicken Biryani " des="The Best Chicken Biryani" price='250'  img='https://source.unsplash.com/900x600?biryani'  />

  <FoodCard name= "Pizza " des="The Best Pizza" price='89' img='https://source.unsplash.com/900x600?pizza'  />

  <FoodCard name= "Plate Shawarma" des="The Best Plate Shawarma" price='120'img='https://source.unsplash.com/900x600?shawarma'  />

  <FoodCard name= "Sizzler Noodles" des="The Best Sizzler Noodles" price='399' img='https://source.unsplash.com/900x600?noodles' />

  <FoodCard name= "Momo Combo" des="The Best Momo Combos" price='450'  img='https://source.unsplash.com/900x600?momos'  />

  <FoodCard name= "Sushi" des="The Best Sushi" price='600' img='https://source.unsplash.com/900x600?sushi'  />

  <FoodCard name= "Veg Salad" des="The Best Salad" price='190' img='https://source.unsplash.com/900x600?salad'  />

</div>

);



}

export default App;












