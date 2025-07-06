import ContactForm from "./ContactForm";
import CartSummary from "./CartSummary";

const CheckoutSection = () => {
  return (
    <section className="relative z-30 grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-8 lg:mx-12 rounded-2xl overflow-hidden shadow-[0px_4px_4px_-1px_rgba(17, 23, 41, 0.05)]">
      <CartSummary />
      <ContactForm />      
    </section>
  );
}

export default CheckoutSection;