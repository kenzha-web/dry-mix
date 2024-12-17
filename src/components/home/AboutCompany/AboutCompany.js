import Heading from "../Products/Heading";
import ReactPlayer from 'react-player';
import Slider from "react-slick";
import {
  EquipmentOne,
  EquipmentTwo ,
  EquipmentThree ,
  EquipmentFour,
  Equipment5 ,
  Equipment6,
  Equipment7,
  Equipment8 ,
} from "../../../assets/images";
import SampleNextArrow from "../../designLayouts/buttons/SampleNextArrow";
import SamplePrevArrow from "../../designLayouts/buttons/SamplePrevArrow";
import Equipment from "../../Equipment/Equipment";

const Card = ({ title, time, description, speakers }) => (
  <div className="w-full md:w-1/2 lg:w-1/2 px-0 p-4 pr-4">
    <div className="bg-white rounded-lg p-6 shadow-md h-full border border-gray-200 relative">
      <div className="absolute top-0 left-0 w-full h-6 bg-greenPrimeColor rounded-t-lg"></div>
      <div className="mt-6">
        <h2 className="text-lg font-bold text-black mb-2">{title}</h2>
        <p className="text-gray-800 text-sm mb-4">{time}</p>
        <p className="text-gray-900 mb-4 text-justify">{description}</p>
        <div className="flex -space-x-2 overflow-hidden">
          {speakers?.map((speaker, index) => (
            <img key={index} src={speaker} alt="Speaker" className="w-10 h-10 rounded-full border-2 border-gray-200" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const AboutCompany = () => {
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

  const cards = [
    {
      title: 'Производство строительных материалов',
      // time: '09:00 - 10:00',
      description: 'Современное производство строительных материалов стремится не только к повышению качества продукции, но и к минимизации воздействия на окружающую среду. Одним из перспективных направлений является использование техногенных отходов в качестве сырья для производства.',
      // speakers: ['speaker1.jpg', 'speaker2.jpg'],
    },
    {
      title: 'Мини-цех в Усть-Каменогорске',
      // time: '10:30 - 11:30',
      description: 'Мини-цех по производству строительных материалов, расположенный в Усть-Каменогорске, специализируется на выпуске пазогребневых плит и сухих штукатурных смесей. Основным компонентом для производства является ангидритовое вяжущее, полученное из отходов производства фтористоводородной кислоты – фторгипса.',
      // speakers: ['speaker3.jpg', 'speaker4.jpg'],
    },
    {
      title: 'Преимущества и технология',
      // time: '12:00 - 13:00',
      description: 'Ключевым преимуществом производства является применение отечественного сырья – фторгипса, что делает продукцию конкурентоспособной на рынке. Разработанный способ переработки отходов включает нейтрализацию техногенного продукта и химическую активацию.',
      // speakers: ['speaker5.jpg', 'speaker6.jpg'],
    },
    {
      title: 'Социально-экономический эффект',
      // time: '13:30 - 14:30',
      description: 'Производство строительных материалов из фторгипса способствует улучшению экологической обстановки в регионе, созданию новых рабочих мест и стимулирует развитие промышленности. Внедрение безотходных технологий также укрепляет позиции местного предприятия на рынке.',
      // speakers: ['speaker7.jpg', 'speaker8.jpg'],
    },
  ];

  return (
    <div>
      <Heading heading="О компании" />

      <div className="flex flex-wrap">
        {/*<Heading heading="О компании" />*/}
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            // time={card.time}
            description={card.description}
            // speakers={card.speakers}
          />
        ))}
      </div>
      <div className="mt-8">
        <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
          <ReactPlayer
            url="https://youtu.be/tTs9VCz4t9I"
            controls
            width="calc(100% - 16px)"
            height="100%"
          />
        </div>
      </div>

      <div className="w-full pt-16 pb-16">
        <div className="mb-8 px-2">
          <div className="flex justify-between items-center">
            <Heading heading="Оборудования" />
          </div>
        </div>
        <Slider {...settings}>
          <div className="px-2">
            <Equipment
              _id="100001"
              img={EquipmentOne}
              // productName="Гипсовая штукатурка, 30кг"
              // price="999"
              // color="Штукатурки"
              // badge={true}
              // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
          </div>
          <div className="px-2">
            <Equipment
              _id="100002"
              img={EquipmentTwo}
              // productName="Гипсовая универсальная шпатлевка, 25 кг"
              // price="999"
              // color="Шпатлевки"
              // badge={true}
              // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
          </div>
          <div className="px-2">
            <Equipment
              _id="100003"
              img={EquipmentThree}
              // productName="Плиточный цементный клей для керамической плитки, 25 кг"
              // price="999"
              // color="Плиточные клеи"
              // badge={true}
              // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
          </div>
          <div className="px-2">
            <Equipment
              _id="100004"
              img={EquipmentFour}
              // productName="Плиточный цементный клей, 25 кг"
              // price="999"
              // color="Плиточные клеи"
              // badge={true}
              // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
          </div>
          <div className="px-2">
            <Equipment
              _id="100005"
              img={Equipment5}
              // productName="Плиточный цементный клей, 25 кг"
              // price="999"
              // color="Плиточные клеи"
              // badge={true}
              // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
          </div>
          <div className="px-2">
            <Equipment
              _id="100005"
              img={Equipment6}
              // productName="Плиточный цементный клей, 25 кг"
              // price="999"
              // color="Плиточные клеи"
              // badge={true}
              // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
          </div>
          <div className="px-2">
            <Equipment
              _id="100005"
              img={Equipment7}
              // productName="Плиточный цементный клей, 25 кг"
              // price="999"
              // color="Плиточные клеи"
              // badge={true}
              // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
          </div>
          <div className="px-2">
            <Equipment
              _id="100005"
              img={Equipment8}
              // productName="Плиточный цементный клей, 25 кг"
              // price="999"
              // color="Плиточные клеи"
              // badge={true}
              // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AboutCompany;

