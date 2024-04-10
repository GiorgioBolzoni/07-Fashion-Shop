import { createContext } from "react";

export const CartContext = createContext({
    items: [], // valore di default per semplificare il completamento automatico
    addItemToCart: () => {}, // valore di default che non viene utilizzato MA per semplificare il completamento automatico
    updateItemQuantity: () => {},
});
