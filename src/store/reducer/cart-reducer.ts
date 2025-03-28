import { ProductToCart } from "@/utils/type/cart-product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IinitialState {
  productCount: number;
  totalPrice: number;
  products: ProductToCart[];
}

const initialState: IinitialState = {
  productCount: 0,
  totalPrice: 0,
  products: [],
};

const CartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToProductCart: (state, action: PayloadAction<ProductToCart>) => {
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (!product) {
        return {
          ...state,
          productCount: state.productCount + 1,
          products: [
            ...state.products,
            {
              ...action.payload,
              userCount: action.payload.count,
              userPrice: +action.payload.price * action.payload.count,
            },
          ],
        };
      }
    },
    toggalAmount: (
      state,
      action: PayloadAction<{ id: string; type: boolean }>
    ) => {
      const newProducts = state.products.map((item) => {
        if (item.id === action.payload.id) {
          const newUserCount = action.payload.type
            ? item.userCount + 1
            : Math.max(0, item.userCount - 1);
          const newCount = action.payload.type
            ? Math.max(0, item.count - 1)
            : item.count + 1;

          return {
            ...item,
            userCount: newUserCount,
            userPrice: newUserCount * +item.price,
            count: newCount,
          };
        }
        return item;
      });

      return { ...state, products: newProducts };
    },
    deleteProductCart: (state, action: PayloadAction<{ id: string }>) => {
      return {
        ...state,
        productCount:
          state.productCount > 0 ? state.productCount - 1 : state.productCount,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
    totalPrice: (state) => {
      return {
        ...state,
        totalPrice: state.products.reduce((a, b) => a + b.userPrice, 0),
      };
    },
  },
});

export default CartReducer.reducer;

export const { addToProductCart, deleteProductCart, totalPrice, toggalAmount } =
  CartReducer.actions;
