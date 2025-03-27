import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import cartReducer, {
  addToProductCart,
  deleteProductCart,
  toggalAmount,
  totalPrice,
} from "./reducer/cart-reducer";
import { loadState, saveState } from "@/config/storage";

const setTotalPrice = createListenerMiddleware();

setTotalPrice.startListening({
  matcher: isAnyOf(addToProductCart, deleteProductCart, toggalAmount),
  effect: (_, listenerApi) => {
    listenerApi.dispatch(totalPrice());
  },
});
export const store = configureStore({
  reducer: {
    product: cartReducer,
  },
  preloadedState: {
    product: loadState("products"),
  },
  middleware: (defaultMiddlware) =>
    defaultMiddlware().concat(setTotalPrice.middleware),
});

store.subscribe(() => {
  saveState("products", store.getState()?.product);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
