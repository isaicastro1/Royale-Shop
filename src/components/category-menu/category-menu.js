import DirectoryItem from "../directory-item/directory-item";
import "./category-menu.scss";

const CategoryMenu = ({ categories }) => {
  return (
    <div className="menu-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryMenu;
