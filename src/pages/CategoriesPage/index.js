import React from 'react'
import CategoriesContainer from '../../components/CategoriesContainer'
import { useSelector } from 'react-redux';
import s from './CategoriesPage.module.css'

export default function CategoriesPage() {
  const { category_title } = useSelector((store) => store.categories);
  return (
    <div className="wrapper">
        <h2 className={s.catTitle} >{category_title}</h2>
      <CategoriesContainer type="allCategories" />
    </div>
  )
}