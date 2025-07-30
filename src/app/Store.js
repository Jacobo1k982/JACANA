// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"; // 👈 El reducer está en `CartSlice.reducer`

const store = configureStore({
  reducer: {
    cart: cartReducer, // ✅ Asignamos el reducer correctamente
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ⚠️ Opcional: útil si usas non-serializable data (ej: funciones, símbolos)
    }),
});

export default store;

// Tipos para usar con TypeScript deben ir en archivos .ts o .tsx, no en .js
// Si usas TypeScript, mueve estas declaraciones a un archivo .ts