const defaultState = {
    category_title: '',
    allCategories: [],
    notAllCategories : []
   
}

const ALL_CATEGORIES = 'ALL_CATEGORIES'
const NOTALL_CATEGORIES = 'NOTALL_CATEGORIES'
const TITLE_CATEGORY = 'TITLE_CATEGORY'

export const categoriesReducer = (state = defaultState, action) => {
    console.log(action);
    switch (action.type) {
        case ALL_CATEGORIES:
            return { allCategories: action.payload }
        case NOTALL_CATEGORIES:
            let notAllCategories = action.payload.slice(0,4)
            return { allCategories: notAllCategories }
            // return { ...state, allCategories: notAllCategories };
        case TITLE_CATEGORY:
            // return {  category_title: action.payload}
            return {category: action.payload.category.title, products: action.payload.data}
          default:
            return state
    }
  }


  export const allCategoriesAction = (payload) => ({ type: ALL_CATEGORIES, payload })
  export const notAllCategoriesAction = (payload) => ({ type: NOTALL_CATEGORIES, payload })
  export const titleCategoryAction = (payload) => ({ type: TITLE_CATEGORY, payload })