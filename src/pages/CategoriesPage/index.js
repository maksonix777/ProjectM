import React from 'react'
import CategoriesContainer from '../../components/CategoriesContainer'
import { useSelector } from 'react-redux';


export default function CategoriesPage() {
  const { category_title } = useSelector((store) => store.categories);
  return (
    <div>
      <h2>{category_title}</h2>
      <CategoriesContainer type="allCategories" />
    </div>
  )
}