import Heading from "../home/Products/Heading";
import Slider from "react-slick";
import Equipment from "../Equipment/Equipment";
import {
  Equipment5,
  Equipment6,
  Equipment7, Equipment8,
  EquipmentFour,
  EquipmentOne,
  EquipmentThree,
  EquipmentTwo
} from "../../assets/images";
import SampleNextArrow from "../designLayouts/buttons/SampleNextArrow";
import SamplePrevArrow from "../designLayouts/buttons/SamplePrevArrow";

const EquipmentSlider = () => {
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

  return (
    <Slider {...settings}>
      <div className="px-2">
        <Equipment
          _id="100001"
          img={EquipmentOne}
        />
      </div>
      <div className="px-2">
        <Equipment
          _id="100002"
          img={EquipmentTwo}
        />
      </div>
      <div className="px-2">
        <Equipment
          _id="100003"
          img={EquipmentThree}
        />
      </div>
      <div className="px-2">
        <Equipment
          _id="100004"
          img={EquipmentFour}
        />
      </div>
      <div className="px-2">
        <Equipment
          _id="100005"
          img={Equipment5}
        />
      </div>
      <div className="px-2">
        <Equipment
          _id="100005"
          img={Equipment6}
        />
      </div>
      <div className="px-2">
        <Equipment
          _id="100005"
          img={Equipment7}
        />
      </div>
      <div className="px-2">
        <Equipment
          _id="100005"
          img={Equipment8}
        />
      </div>
    </Slider>
  )
}

export default EquipmentSlider;
