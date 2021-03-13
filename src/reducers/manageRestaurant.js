import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    switch(action.type){
        case 'ADD_RESTAURANT':
            const rest = {id: cuid(), text: action.text}
            return {...state, restaurants: [...state.restaurants, rest]}

        case 'DELETE_RESTAURANT':
            return {...state, restaurants: (state.restaurants.filter((r) => r.id !== action.id))}

        case 'ADD_REVIEW':
            const rev = {id: cuid(), text: action.review.text, restaurantId: action.review.restaurantId}
            return {...state, reviews: [...state.reviews, rev]}

        case 'DELETE_REVIEW':
            return {...state, reviews: (state.reviews.filter((r) => r.id !== action.id))}

        default:
        return state
    }
}
