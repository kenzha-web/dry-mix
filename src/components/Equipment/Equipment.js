import Image from "..//designLayouts/Image";
import Badge from "../home/Products/Badge";
import {memo} from "react";

const Equipment = (props) => {
    return (
      <div className="w-full relative group max-w-xs py-4 md:py-6">
          <div className="max-w-full max-h-80 relative overflow-y-hidden">
              <div>
                  <Image className="w-full h-64 object-cover" imgSrc={props.img} />
              </div>
          </div>
      </div>
    );
};

export default memo(Equipment);

