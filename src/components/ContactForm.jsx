const ContactForm = () => {
  return (
    <div className="bg-white p-5 md:p-7">
      <h2 className="text-accent font-semibold mb-8">Contact Information</h2>
      <form className="flex flex-col gap-y-6">
        <div className="">
          <label
            htmlFor="nameInput"
            className="block mb-2 text-sm text-text font-semibold" >
            First & Last Name
          </label>
          <input
            type="text"
            id="nameInput"
            name="name"
            placeholder="First & Last Name"
            className="block w-full px-4 py-3 rounded-lg bg-off-white border border-gray placeholder:text-text" />
        </div>
        <div className="">
          <label
            htmlFor="emailInput"
            className="block mb-2 text-sm text-text font-semibold" >
            Email Address
          </label>
          <input
            type="email"
            id="emailInput"
            name="email"
            placeholder="Email Address"
            className="block w-full px-4 py-3 rounded-lg bg-off-white border border-gray placeholder:text-text" />
        </div>
        <div className="flex gap-x-5">
          <div className="flex-1/2">
            <label
              htmlFor="country"
              className="block text-sm text-text mb-2 font-semibold">
              Country
            </label>
            <select
              name="country"
              id="countryInput"
              className="h-[50px] block w-full px-4 py-3 rounded-lg bg-off-white border border-gray placeholder:text-accent">
              <option value="India" className="font-inter">India</option>
            </select>
          </div>
          <div className="flex-1/2">
            <label
              htmlFor="postalCodeInput"
              className="block mb-2 text-sm text-text font-semibold" >
              Postal Code
            </label>
            <input
              type="text"
              id="postalCodeInput"
              name="postalCode"
              placeholder="00027"
              pattern="[0-9]+"
              className="w-full px-4 py-3 rounded-lg bg-off-white border border-gray placeholder:text-text" />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="px-4 py-3 rounded-lg bg-accent text-white w-full">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;