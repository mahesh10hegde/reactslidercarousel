const INITIAL_STATE={
    items:[],
    isLoading:false,
    hasErrored:false,
    current:0,
    isNext: true
}
export default function carouselReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
                return {
                    ...state,
                    hasErrored: action.hasErrored
                }
        case 'ITEMS_IS_LOADING':
                return {
                    ...state,
                    isLoading:action.isLoading
                }
        case 'ITEMS_FETCH_DATA_SUCCESS':
                return {
                    ...state,
                    items:action.items
                    }
        case 'HANDLE_NEXT':{
            let index = state.current,
            length = state.items.length - 1;
    
            if( index === length ) {
            index = -1;
            }
    
            index = index + 1;
            return {
                ...state,
                isNext:true,
                current: index
                }
        }
        case 'HANDLE_PREV':{
            let index = state.current,
             length = state.items.length;
    
            if( index < 1 ) {
            index = length;
            }
    
            index = index - 1;
            return {
                ...state,
                isNext:false,
                current:index
                }
        }
                
        default:
            return state;
    }
}
