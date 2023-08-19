import React from 'react';
import { Link } from 'react-router-dom'
import CategoryCard from './CategoryCard';

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">

         {categories.slice(0, 2).map(category => (
        <Link to = {"/wiki/" + category.routeLink}>
          <CategoryCard key={category.id} id={category.id} categoryData={category} />
        </Link>
         )
         )}

      {categories.slice(2).map(category => (
          <CategoryCard categoryData={category} />
        ))}
    </div>
  );
}

export default CategoryList;
