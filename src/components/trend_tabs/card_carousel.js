import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Card from "./card";

let CardCarousel = (data) => {
  let list = data.data;
  function render_card(list) {
    console.log("INSIDE CARD CAROUSEL", list);
  if (list) {
    console.log("inside iff")
    return list.map((elem,index) => <Card key={index} data={elem} />)
  }
    else {
      console.log('inside else')
      return null};
  }
  return (
    <OwlCarousel className='owl-theme' loop margin={10} nav>
      {render_card(list)}
    </OwlCarousel>
  );
};
export default CardCarousel;
