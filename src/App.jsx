import CheckoutSection from "./components/CheckoutSection";
import BgImage from "./assets/images/background-image.png";
import useCart from "./hooks/Cart";

const App = () => {

  const cart = useCart();

  return (
    <main className="relative max-w-screen min-h-screen font-inter bg-off-white pb-10">
      <div className="absolute z-10 w-full flex justify-center overflow-hidden">
        <img src={BgImage} alt="Background Pattern" className="min-w-full max-w-none shrink-0 min-h-[30vh]" />
      </div>
      <div className="relative z-20 flex items-center justify-center py-10">
        <h1 className="text-center text-2xl text-white font-bold">Checkout</h1>
        <span className="ml-4 text-sm text-white bg-accent px-2 py-0.5 rounded-full">{cart.items.length} ITEMS</span>
      </div>
      <CheckoutSection />
    </main>
  );
}

export default App;
