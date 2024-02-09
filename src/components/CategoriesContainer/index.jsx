import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ROOT_URL } from "../../index";
import { fetchAllCategories} from "../../asyncActions/categories";
import s from "./Categories.module.css"





function CategoriesContainer({ type }) {
  const { id } = useParams();
  const { category_title, allCategories } = useSelector((store) => store.categories);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchAllCategories(type))
  }, [id, type]);


 


    return (
    <div className="wrapper"> 
    <div className={s.categoriesAll}>
    <h2 className={s.categoriesTitle}>{category_title}</h2>
    </div>

        <div className={s.categoriesContainer}>
            {allCategories.map(elem => 
                <div>
                    <Link key={elem.id} to={"/category/" + elem.id}>
                    <img alt='categories' className={s.categoriesItem} src={ROOT_URL+elem.image}/>
                    <p className={s.categoriesName}>{elem.title}</p>
                    </Link>
                </div>
            )}
        </div>
        </div>
    
    );
}

export default CategoriesContainer;