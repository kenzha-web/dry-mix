import {memo, useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import EquipmentSlider from "../../components/EquipmentSlider/EquipmentSlider";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="О компании" prevLocation={prevLocation} />
      <div>
        <h1 className="text-base text-lightText mb-2 text-justify">
          <span className="text-primeColor font-semibold text-lg">Производство строительных материалов из техногенных отходов.</span>{" "}
          Современное производство строительных материалов стремится не только к повышению качества продукции, но и к минимизации воздействия на окружающую среду. Одним из перспективных направлений является использование техногенных отходов в качестве сырья для производства. Это позволяет сократить объем отходов, сохранить природные ресурсы и развивать циркулярную экономику.<br />
          Мини-цех по производству строительных материалов, расположенный в Усть-Каменогорске, специализируется на выпуске пазогребневых плит и сухих штукатурных смесей. Основным компонентом для производства является ангидритовое вяжущее, полученное из отходов производства фтористоводородной кислоты – фторгипса.<br />
          Промышленные предприятия, такие как АО «УМЗ», сталкиваются с накоплением значительных объемов фторгипса, образующегося при производстве плавиковой кислоты. На каждую тонну выпускаемой кислоты приходится около 1,8 тонны фторгипса, который складируется в виде техногенных отходов. В Усть-Каменогорске отсутствуют месторождения гипсового камня, а ближайшие месторождения находятся на расстоянии более 1000 км.<br />
          Использование фторгипса в строительстве решает сразу две задачи:<br />
          1. Сокращение объемов складируемых отходов.<br />
          2. Снижение потребности в первичном гипсе, что сохраняет природные ресурсы.<br />
        </h1>
        <h1 className="text-base text-lightText mb-2 text-justify">
          <span className="text-primeColor font-semibold text-lg">Преимущества и технология.</span>{" "}
          Ключевым преимуществом производства является применение отечественного сырья – фторгипса, что делает продукцию конкурентоспособной на рынке. Разработанный способ переработки отходов включает нейтрализацию техногенного продукта известьсодержащими компонентами, химическую активацию с использованием негашеной извести и сульфатных добавок, а также измельчение до высокой дисперсности.<br />
          Этот процесс позволяет:<br />
          - увеличить активность и прочность ангидритового вяжущего.<br />
          - сократить время схватывания строительных смесей.<br />
          - производить материалы, превосходящие зарубежные аналоги по качеству и долговечности.<br />
          Производственные мощности мини-цеха позволяют выпускать более 4000 единиц продукции в месяц, что покрывает значительную часть спроса на строительные материалы в регионе.
        </h1>
        <h1 className="text-base text-lightText mb-2 text-justify">
          <span className="text-primeColor font-semibold text-lg">Продукция.</span>{" "}
          Пазогребневые плиты и сухие штукатурные смеси, изготовленные на основе ангидритового вяжущего, обладают:<br/>
          - Высокой прочностью.<br/>
          - Устойчивостью к внешним воздействиям.<br/>
          - Конкурентной стоимостью.<br/>
          Применение инновационной технологии производства делает продукцию уникальной на рынке, а минимизация ручного труда и использование современного оборудования обеспечивают высокую точность и стабильное качество.
        </h1>
        <h1 className="text-base text-lightText mb-2 text-justify">
          <span className="text-primeColor font-semibold text-lg">Социально-экономический эффект.</span>{" "}
          Производство строительных материалов из фторгипса способствует улучшению экологической обстановки в регионе, созданию новых рабочих мест и стимулирует развитие промышленности. Внедрение безотходных технологий также укрепляет позиции местного предприятия на рынке и вносит вклад в устойчивое развитие строительной отрасли Восточного Казахстана.<br/>
          Запуск мини-цеха открывает возможности для дальнейшего развития инновационного производства, повышая привлекательность региона для инвестиций и улучшая качество жизни местного населения.
        </h1>
      </div>
      <EquipmentSlider />
    </div>
  );
};

export default memo(About);