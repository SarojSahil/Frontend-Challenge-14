import useCart from "../hooks/Cart";
import useFormatter from "../hooks/Formatter";
import closeImage from "../assets/images/close-icon.svg";

const CartSummary = () => {

  const cart = useCart();
  const formatter = useFormatter();
  const subtotal = cart.items.reduce((pre, cur) => pre + (cur.price * cur.count), 0);
  const tax = subtotal * 24 / 100;
  const total = subtotal + tax;

  return (
    <div className="bg-light-gray p-5 md:p-7">
      <div>
        {
          cart.items.map(i => <Item item={i} key={i.id} />)
        }
      </div>
      <hr className="text-gray mb-5" />
      <form className="flex gap-2 mb-5">
        <input
          type="text"
          name="couponCode"
          placeholder="Enter coupon code"
          className="px-4 py-3 bg-white rounded-lg w-full border border-gray placeholder:text-text" />
        <button type="button"
          className="bg-accent text-white px-4 py-3 rounded-lg whitespace-nowrap">Apply Coupon</button>
      </form>
      <div>
        <div className="flex justify-between font-semibold text-text my-1">
          <span>Subtotal</span>
          <span>${formatter.format(subtotal)}</span>
        </div>
        <div className="flex justify-between font-semibold text-text my-1">
          <span>Tax</span>
          <span>${formatter.format(tax)}</span>
        </div>
        <div className="flex justify-between font-semibold text-accent my-1">
          <span>Total</span>
          <span>${formatter.format(total)}</span>
        </div>
      </div>
    </div>
  );
}

const Item = ({ item }) => {

  const formatter = useFormatter();

  return (
    <div className="flex gap-4 mb-5">
      <div className="w-23 aspect-square bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray">
        <img src={item.image} alt="" className="max-h-full" />
      </div>
      <div className="relative grow">
        <p className="font-semibold text-black">{item.name}</p>
        <p className="text-text font-medium">{item.color}</p>
        <span className="bottom-0 left-0 absolute text-text">x {item.count}</span>
        <span className="top-0 right-0 absolute text-accent font-semibold">${formatter.format(item.price)}</span>
        <img src={closeImage} alt="close icon" className="bottom-0 right-0 absolute" />
      </div>
    </div>
  );
}

export default CartSummary;