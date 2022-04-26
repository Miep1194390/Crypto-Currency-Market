import ImageSlider from "react-simple-image-slider";
import "./ImgSlider.css";

const images = [
  {
    url: "https://i.ytimg.com/vi/oiX-6Y2oGjI/maxresdefault.jpg",
  },
  {
    url: "https://i.ytimg.com/vi/79AT6NYGyOk/maxresdefault.jpg",
  },
  {
    url: "https://i.ytimg.com/vi/Gyg5R8Sfo1U/maxresdefault.jpg",
  }
];

function ImgSlider() {
  return (
    <div className="ImgSlider">
      <ImageSlider
        width={1200}
        height={600}
        images={images}
        showBullets={false}
        showNavs={true}
      />
    </div>
  );
}

export default ImgSlider;
