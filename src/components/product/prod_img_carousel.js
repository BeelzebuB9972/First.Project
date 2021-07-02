import "./prod_img_carousel.css";
import img from '../../assets/coding_wallpaper.jpg'
import { useEffect } from "react";

let ProdImgCarousel = () => {
    let removeElem = ()=>{
        console.log("inside remove elem")
        let img_mag =document.getElementById("img-magnifier")
        if(img_mag){
            img_mag.remove()
        }
    }
    function magnify(imgID, zoom) {
        var img, glass, w, h, bw;
        img = document.getElementById(imgID);
      
        /* Create magnifier glass: */
        glass = document.createElement("DIV");
        glass.setAttribute("class", "img-magnifier-glass");
        glass.setAttribute("id", "img-magnifier");
      
        /* Insert magnifier glass: */
        img.parentElement.insertBefore(glass, img);
      
        /* Set background properties for the magnifier glass: */
        glass.style.backgroundImage = "url('" + img.src + "')";
        glass.style.backgroundRepeat = "no-repeat";
        glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
        bw = 3;
        w = glass.offsetWidth / 2;
        h = glass.offsetHeight / 2;
      
        /* Execute a function when someone moves the magnifier glass over the image: */
        glass.addEventListener("mousemove", moveMagnifier);
        img.addEventListener("mousemove", moveMagnifier);
      
        /*and also for touch screens:*/
        glass.addEventListener("touchmove", moveMagnifier);
        img.addEventListener("touchmove", moveMagnifier);
        function moveMagnifier(e) {
          var pos, x, y;
          /* Prevent any other actions that may occur when moving over the image */
          e.preventDefault();
          /* Get the cursor's x and y positions: */
          pos = getCursorPos(e);
          x = pos.x;
          y = pos.y;
          /* Prevent the magnifier glass from being positioned outside the image: */
          if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
          if (x < w / zoom) {x = w / zoom;}
          if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
          if (y < h / zoom) {y = h / zoom;}
          /* Set the position of the magnifier glass: */
          glass.style.left = (x - w) + "px";
          glass.style.top = (y - h) + "px";
          /* Display what the magnifier glass "sees": */
          glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
        }
      
        function getCursorPos(e) {
          var a, x = 0, y = 0;
          e = e || window.event;
          /* Get the x and y positions of the image: */
          a = img.getBoundingClientRect();
          /* Calculate the cursor's x and y coordinates, relative to the image: */
          x = e.pageX - a.left;
          y = e.pageY - a.top;
          /* Consider any page scrolling: */
          x = x - window.pageXOffset;
          y = y - window.pageYOffset;
          return {x : x, y : y};
        }
      }
  return (
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" onMouseLeave={removeElem}>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={img} class="d-block w-100 h-100" id="id1" alt="..." onMouseEnter={()=>magnify("id1",4)}/>
      </div>
      <div class="carousel-item">
        <img src={img} class="d-block w-100" id="id2" alt="..." onMouseEnter={()=>magnify("id2",4)}/>
      </div>
      <div class="carousel-item">
        <img src={img} class="d-block w-100" id="id3" alt="..." onMouseEnter={()=>magnify("id3",4)}/>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  );
};

export default ProdImgCarousel;
