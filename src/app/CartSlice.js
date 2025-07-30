// app/CartSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// Clave para localStorage
const CART_STORAGE_KEY = "jacana_cart_v1";

// Funciones de persistencia segura
const loadCartFromStorage = () => {
  try {
    const cart = localStorage.getItem(CART_STORAGE_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.warn("Error al cargar el carrito desde localStorage:", error);
    return [];
  }
};

const saveCartToStorage = (cartItems) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  } catch (error) {
    console.warn("Error al guardar el carrito en localStorage:", error);
    toast.error("No se pudo guardar el carrito. Verifica tu almacenamiento.");
  }
};

// Estado inicial
const initialState = {
  cartState: false,
  cartItems: loadCartFromStorage(),
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
  loading: false,
  error: null,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // --- Estado del Drawer ---
    setOpenCart: (state) => {
      state.cartState = true;
    },
    setCloseCart: (state) => {
      state.cartState = false;
    },

    // --- Gestión de Items ---
    setAddItemToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.cartQuantity += 1;
        toast.success(`Cantidad de "${item.title}" aumentada.`);
      } else {
        state.cartItems.push({ ...item, cartQuantity: 1 });
        toast.success(`✅ "${item.title}" agregado al carrito.`);
      }

      saveCartToStorage(state.cartItems);
      CartSlice.caseReducers.setGetTotals(state);
    },

    setRemoveItemFromCart: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (item) {
        state.cartItems = state.cartItems.filter((i) => i.id !== action.payload.id);
        toast.success(`🗑️ "${item.title}" eliminado del carrito.`);
        saveCartToStorage(state.cartItems);
        CartSlice.caseReducers.setGetTotals(state);
      }
    },

    setIncreaseItemQTY: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (item) {
        item.cartQuantity += 1;
        toast.success(`Cantidad de "${item.title}" aumentada.`);
        saveCartToStorage(state.cartItems);
        CartSlice.caseReducers.setGetTotals(state);
      }
    },

    setDecreaseItemQTY: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (item) {
        if (item.cartQuantity > 1) {
          item.cartQuantity -= 1;
          toast.success(`Cantidad de "${item.title}" reducida.`);
        } else {
          // Opción: eliminar si es 1
          state.cartItems = state.cartItems.filter((i) => i.id !== action.payload.id);
          toast.info(`"${item.title}" eliminado porque la cantidad es 1.`);
        }
        saveCartToStorage(state.cartItems);
        CartSlice.caseReducers.setGetTotals(state);
      }
    },

    setClearCartItems: (state) => {
      if (state.cartItems.length === 0) {
        toast.info("El carrito ya está vacío.");
        return;
      }
      state.cartItems = [];
      toast.success("✅ Carrito vaciado correctamente.");
      saveCartToStorage(state.cartItems);
      CartSlice.caseReducers.setGetTotals(state);
    },

    // --- Cálculo de totales ---
    setGetTotals: (state) => {
      const totals = state.cartItems.reduce(
        (acc, item) => {
          const price = Number(item.price) || 0;
          const quantity = Number(item.cartQuantity) || 0;
          acc.totalAmount += price * quantity;
          acc.totalQTY += quantity;
          return acc;
        },
        { totalAmount: 0, totalQTY: 0 }
      );

      state.cartTotalAmount = Number(totals.totalAmount.toFixed(2));
      state.cartTotalQuantity = totals.totalQTY;
    },

    // --- Persistencia manual (opcional) ---
    setReloadCartFromStorage: (state) => {
      const cart = loadCartFromStorage();
      state.cartItems = cart;
      CartSlice.caseReducers.setGetTotals(state);
    },
  },
});

// --- Exportaciones ---
export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCartItems,
  setGetTotals,
  setReloadCartFromStorage,
} = CartSlice.actions;

// --- Selectores ---
export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQuantity;
export const selectCartLoading = (state) => state.cart.loading;
export const selectCartError = (state) => state.cart.error;

// --- Selector avanzado: resumen del carrito ---
export const selectCartSummary = (state) => ({
  totalItems: state.cart.cartTotalQuantity,
  totalPrice: state.cart.cartTotalAmount,
  itemCount: state.cart.cartItems.length,
});

// --- Selector: obtener mensaje para WhatsApp ---
export const selectCartWhatsAppMessage = (state) => {
  const items = state.cart.cartItems;
  if (items.length === 0) return "Mi carrito está vacío.";

  const message = items
    .map((item) => `- ${item.title} (x${item.cartQuantity}): ₡${(item.price * item.cartQuantity).toFixed(2)}`)
    .join('\n');

  return `🛒 *Mi carrito en JACANA*\n\n${message}\n\n>Total: ₡${state.cart.cartTotalAmount.toFixed(2)}`;
};

export default CartSlice.reducer;