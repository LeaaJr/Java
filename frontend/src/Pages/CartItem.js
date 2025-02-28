import React from "react";
import { useCart } from "../Context/CartContext";
import { Minus, Plus, X } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export const CartItem = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Calcular el subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  const savings = 0;
  const storePickup = 10;
  const tax = 0;
  const total = subtotal - savings + storePickup + tax;
  
  const handleContinueShopping = () => {
    // Guarda la posición del scroll antes de redirigir
    const scrollPosition = window.scrollY;

    // Redirige a la página de la tienda
    navigate('/#'); // Cambia "/tienda" por la ruta que necesites

    // Después de un pequeño retardo, vuelve a la posición
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 300); // El tiempo puede ajustarse según lo que necesites
  };    

  return (
    <div className="max-w-5xl mx-auto py-32 px-6">
      <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <div className="grid gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-4 border-b border-gray-700"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-12 h-12 object-cover rounded bg-gray-700"
                />
                <div className="flex flex-col">
                  <span className="font-medium">{item.nombre}</span>
                  <span>${item.precio.toLocaleString()}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="w-6 h-6 flex items-center justify-center rounded bg-gray-700 hover:bg-gray-600 transition-colors disabled:opacity-50"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  <Minus size={14} />
                </button>
                <span>{item.quantity}</span>
                <button
                  className="w-6 h-6 flex items-center justify-center rounded bg-gray-700 hover:bg-gray-600 transition-colors"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus size={14} />
                </button>
                <button
                  className="text-red-400 hover:text-red-300 text-sm transition-colors"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-10 bg-gray-900 p-6 rounded-lg bg-[#202020]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <button className="text-gray-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-gray-300">
              <span>Original price</span>
              <span>${subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-gray-300">
              <span>Savings</span>
              <span className="text-green-500">-${savings.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-gray-300">
              <span>Store Pickup</span>
              <span>${storePickup}</span>
            </div>
            <div className="flex justify-between items-center text-gray-300">
              <span>Tax</span>
              <span>${tax}</span>
            </div>
            <div className="flex justify-between items-center text-white font-semibold text-lg">
              <span>Total</span>
              <span>${total.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors flex-1">
              Proceed to Checkout
            </button>
            <button
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors flex-1"
                onClick={handleContinueShopping}
                >
                Continue Shopping
                </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
