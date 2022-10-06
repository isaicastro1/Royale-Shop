import CategoryItem from "../category-item/category-item";
import "./category-menu.scss";

const CategoryMenu = ({ categories }) => {
  return (
    <div className="menu-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryMenu;
