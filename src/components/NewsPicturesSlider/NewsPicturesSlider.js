import Slider from "react-slick";
import SampleNextArrow from "../designLayouts/buttons/SampleNextArrow";
import SamplePrevArrow from "../designLayouts/buttons/SamplePrevArrow";
import NewsPictures from "../NewsPictures/NewsPictures";

const NewsPicturesSlider = ({ posts }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const images = posts
    .flatMap((post) => post.images)
    .filter((image) => image);

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index} className="px-2">
          <NewsPictures img={img.startsWith("http") ? img : `https://${img}`} />
        </div>
      ))}
    </Slider>
  );
};

export default NewsPicturesSlider;
