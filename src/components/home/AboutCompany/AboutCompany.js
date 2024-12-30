import Heading from "../Products/Heading";
import ReactPlayer from 'react-player';
import {memo} from "react";
import EquipmentSlider from "../../EquipmentSlider/EquipmentSlider";

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
  const cards = [
    {
      title: 'Производство строительных материалов',
      description: 'Современное производство строительных материалов стремится не только к повышению качества продукции, но и к минимизации воздействия на окружающую среду. Одним из перспективных направлений является использование техногенных отходов в качестве сырья для производства.',
    },
    {
      title: 'Мини-цех в Усть-Каменогорске',
      description: 'Мини-цех по производству строительных материалов, расположенный в Усть-Каменогорске, специализируется на выпуске пазогребневых плит и сухих штукатурных смесей. Основным компонентом для производства является ангидритовое вяжущее, полученное из отходов производства фтористоводородной кислоты – фторгипса.',
    },
    {
      title: 'Преимущества и технология',
      description: 'Ключевым преимуществом производства является применение отечественного сырья – фторгипса, что делает продукцию конкурентоспособной на рынке. Разработанный способ переработки отходов включает нейтрализацию техногенного продукта и химическую активацию.',
    },
    {
      title: 'Социально-экономический эффект',
      description: 'Производство строительных материалов из фторгипса способствует улучшению экологической обстановки в регионе, созданию новых рабочих мест и стимулирует развитие промышленности. Внедрение безотходных технологий также укрепляет позиции местного предприятия на рынке.',
    },
  ];

  return (
    <div>
      <Heading heading="О компании" />
      <div className="flex flex-wrap">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div className="w-full pt-16 pb-16">
        <Heading heading="Оборудования" />
        <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] pt-4">
          <ReactPlayer
            url="https://youtu.be/tTs9VCz4t9I"
            controls
            width="calc(100% - 16px)"
            height="100%"
          />
        </div>
        <EquipmentSlider />
      </div>
    </div>
  );
};

export default memo(AboutCompany);

