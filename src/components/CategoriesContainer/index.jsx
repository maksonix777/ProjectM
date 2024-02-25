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

  let style = ""
 if (type=="allCategories"){
 style = s.AllCategoriesPage
 }
 if(type=="notAllCategories"){
    style = s.notAllCategoriesPage
 }
return (
    <div className="wrapper_All"> 
    <div className={`${s.categoriesAll} wrapper `} >
    
    

        <div  className={style}>
            {allCategories.map(elem => 
                <div key={elem.id}>
                    <Link  to={"/category/" + elem.id}>
                    <img alt='categories' className={s.categoriesItem} src={ROOT_URL+elem.image}/>
                    <p className={s.categoriesName}>{elem.title}</p>
                    </Link>
                </div>
            )}
        </div>
        </div>
        </div>
    
    );
}

export default CategoriesContainer;