import photo from "./assets/image-product-desktop.jpg";
import cart from "./assets/icon-cart.svg";
import mobile from "./assets/image-product-mobile.jpg";
function App() {
  return (
    <main className="min-w-screen text-Dark grayish blue flex min-h-screen items-center justify-center bg-cream px-6 py-8 font-Montserrant text-regular">
      <div className="borde-solid grid w-fit max-w-sm auto-rows-max overflow-hidden rounded-xl bg-white sm:max-w-xl sm:grid-cols-2">
        <div>
          <picture>
            <source media="(max-width: 640px)" srcSet={mobile} />
            <img
              src={photo}
              alt="your internet is down"
              className="h-full w-full overflow-hidden"
            />
          </picture>
        </div>
        <div className="p-7">
          <p className="mb-5 uppercase tracking-[0.5em]">Parfume</p>
          <h1 className="mb-7 font-fraunces text-4xl font-bold text-black">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="mb-5">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="mb-4 flex items-center gap-5">
            <span className="font-fraunces text-3xl font-bold text-dark-cyan">
              {" "}
              $149.99
            </span>
            <span className="line-through">$169.99</span>
          </div>
          <button className="flex w-full justify-center gap-4 rounded-lg bg-dark-cyan p-3 text-white">
            <img src={cart} alt="beli" />
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
