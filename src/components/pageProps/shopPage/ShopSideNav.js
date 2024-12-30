import Category from "./shopBy/Category";

const ShopSideNav = ({ onSelectCategory }) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Category icons={false} onSelectCategory={onSelectCategory} />
    </div>
  );
};

export default ShopSideNav;
