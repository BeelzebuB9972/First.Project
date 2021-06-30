import ItemsCarousel from "react-items-carousel";
import { useState, useEffect } from "react";
import Card from "./card";

let CardCarousel = (data) => {
  let cards_count;
  useEffect(() => {
    window.addEventListener("resize", reportWindowSize);
  });
  let reportWindowSize = () => {
    console.log(window.innerWidth);
    if (window.innerWidth < 479) {
      setNoOfCards(1);
    } else if (window.innerWidth > 479 && window.innerWidth < 768) {
      setNoOfCards(2);
    } else if (window.innerWidth > 768 && window.innerWidth < 1080) {
      setNoOfCards(3);
    } else if (window.innerWidth > 1080) {
      setNoOfCards(4);
    }
  };
  const list = data.data.data;
  let [noOfCards, setNoOfCards] = useState(cards_count);
  let [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 10;
  function render_card(list) {
    console.log("insode render_card", list);
    if (list) return list.map((elem) => <Card data={elem} />);
    else return null;
  }
  console.log("Slick Carousel has been called", data);
  return (
    <ItemsCarousel
      requestToChangeActive={setActiveItemIndex}
      activeItemIndex={activeItemIndex}
      numberOfCards={noOfCards}
      leftChevron={<button className="btn btn-warning">{"<"}</button>}
      rightChevron={<button className="btn btn-warning">{">"}</button>}
      outsideChevron
      chevronWidth={chevronWidth}
      infiniteLoop={true}
    >
      {render_card(list)}
    </ItemsCarousel>
  );
};
export default CardCarousel;
