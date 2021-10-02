import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            title: "Watch",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?",
            price: 1000,
            image:
                "https://ae01.alicdn.com/kf/Hda94ca41d6514a2da4ea25526432a7aco/Men-Watches-2021-Luxury-Male-Elegant-Ultra-Thin-Watch-Men-Business-Stainless-Steel-Mesh-Quartz-Watch.jpg",
        },
        {
            id: 2,
            title: "Watch 2",
            description:
                "Get a big cup of coffee every morning before the day starts",
            price: 20.0,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVyMqy8ck-0j6i6rnyGLXgNGonM25vkLx14A&usqp=CAU",
        },
        {
            id: 3,
            title: "Books That CHANGED My Life",
            description:
                "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
            price: 150.0,
            image:
                "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
        },
    ],
    cart: [],
    currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            // Great Item data from products array
            const item = state.products.find(
                (product) => product.id === action.payload.id
            );
            // Check if Item is in cart already
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );

            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case actionTypes.ADJUST_ITEM_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: +action.payload.qty }
                        : item
                ),
            };
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };
        default:
            return state;
    }
};

export default shopReducer;