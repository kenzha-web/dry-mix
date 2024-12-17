import Image from "..//designLayouts/Image";
import Badge from "../home/Products/Badge";

const Equipment = (props) => {
    return (
      <div className="w-full relative group max-w-xs">
          <div className="max-w-full max-h-80 relative overflow-y-hidden">
              <div>
                  <Image className="w-full h-64 object-cover" imgSrc={props.img} />
              </div>
              <div className="absolute top-6 left-8">
                  {props.badge && <Badge text="Новинка" />}
              </div>
          </div>
      </div>
    );
};

export default Equipment;

