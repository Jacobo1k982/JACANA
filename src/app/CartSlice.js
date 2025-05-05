import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state) => {
      state.cartState = true;
    },
    setCloseCart: (state) => {
      state.cartState = false;
    },

    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Cantidad aumentada`);
      } else {
        state.cartItems.push({ ...action.payload, cartQuantity: 1 });
        toast.success(`${action.payload.title} agregado al carrito`);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setRemoveItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.title} eliminado del carrito`);
    },

    setIncreaseItemQTY: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.cartQuantity += 1;
        toast.success(`Cantidad aumentada`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setDecreaseItemQTY: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item && item.cartQuantity > 1) {
        item.cartQuantity -= 1;
        toast.success(`Cantidad reducida`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setClearCartItems: (state) => {
      state.cartItems = [];
      toast.success(`Carrito vaciado`);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setGetTotals: (state) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const itemTotal = cartItem.price * cartItem.cartQuantity;
          cartTotal.totalAmount += itemTotal;
          cartTotal.totalQTY += cartItem.cartQuantity;
          return cartTotal;
        },
        { totalAmount: 0, totalQTY: 0 }
      );

      state.cartTotalAmount = totalAmount;
      state.cartTotalQuantity = totalQTY;
    },
  },
});

export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCartItems,
  setGetTotals,
} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQuantity;

export default CartSlice.reducer;
