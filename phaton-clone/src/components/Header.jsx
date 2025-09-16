import React from "react";
import ProductPage from "./ProductPage";
import Footer from "./Footer";
import CheckoutCart from "./CheckoutCart";
import CheckoutCartInfo from "./CheckoutCartInfo";
import CheckoutPayment from "./CheckoutPayment";
import Confirmation from "./CheckoutConfirmation";
import AboutPage from "./AboutPage"; 

export default function Header() {
  const [showAboutPage, setShowAboutPage] = React.useState(false);
  const [showProductPage, setShowProductPage] = React.useState(false);
  const [showCheckoutCartPage, setShowCheckoutCartPage] = React.useState(false);
  const [showCheckoutCartInfoPage, setShowCheckoutCartInfoPage] =
    React.useState(false);
  const [showCheckoutPaymentPage, setShowCheckoutPaymentPage] =
    React.useState(false);
  const [showConfirmationPage, setShowConfirmationPage] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get("page");

    if (page === "about") setShowAboutPage(true);
    else if (page === "products") setShowProductPage(true);
    else if (page === "cart") setShowCheckoutCartPage(true);
    else if (page === "checkout-info") setShowCheckoutCartInfoPage(true);
    else if (page === "checkout-payment") setShowCheckoutPaymentPage(true);
    else if (page === "checkout-confirmation") setShowConfirmationPage(true);
  }, []);

  const handleAboutPageClick = () => {
    resetPages();
    setShowAboutPage(true);
    window.history.pushState({}, "", "?page=about");
  };

  const handleCloseAboutPage = () => {
    setShowAboutPage(false);
    window.history.pushState({}, "", "/");
  };

  const handleProductPageClick = () => {
    resetPages();
    setShowProductPage(true);
    window.history.pushState({}, "", "?page=products");
  };

  const handleCloseProductPage = () => {
    setShowProductPage(false);
    window.history.pushState({}, "", "/");
  };

  const handleCartPageClick = () => {
    resetPages();
    setShowCheckoutCartPage(true);
    window.history.pushState({}, "", "?page=cart");
  };

  const handleCloseCartPage = () => {
    setShowCheckoutCartPage(false);
    window.history.pushState({}, "", "/");
  };

  const handleCheckoutInfoPageClick = () => {
    resetPages();
    setShowCheckoutCartInfoPage(true);
    window.history.pushState({}, "", "?page=checkout-info");
  };

  const handleCheckoutPaymentPageClick = () => {
    resetPages();
    setShowCheckoutPaymentPage(true);
    window.history.pushState({}, "", "?page=checkout-payment");
  };

  const handleConfirmationPageClick = () => {
    resetPages();
    setShowConfirmationPage(true);
    window.history.pushState({}, "", "?page=checkout-confirmation");
  };

  const resetPages = () => {
    setShowAboutPage(false);
    setShowProductPage(false);
    setShowCheckoutCartPage(false);
    setShowCheckoutCartInfoPage(false);
    setShowCheckoutPaymentPage(false);
    setShowConfirmationPage(false);
  };

  return (
    <>
      <header className="border-b border-gray-200 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-extrabold tracking-tight">Phaton</div>

          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center w-full max-w-xl bg-gray-100 rounded-full px-4 py-2 gap-3 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-700 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                className="flex-1 bg-transparent outline-none placeholder-gray-500 text-sm text-gray-800"
                placeholder="Search on the go"
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleAboutPageClick}
              className="text-sm text-gray-700 hover:text-blue-500 flex items-center gap-1"
            >
              About Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l6 6-6 6" />
              </svg>
            </button>

            <button
              onClick={handleProductPageClick}
              className="text-sm bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Products
            </button>
            <button
              onClick={handleCartPageClick}
              className="text-sm bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition"
            >
              Cart
            </button>

            <div className="flex items-center gap-2">
              <a
                href="#"
                className="text-sm border border-gray-300 px-3 md:px-4 py-2 rounded-full hover:border-gray-400 hover:text-blue-500 transition whitespace-nowrap"
              >
                Log in
              </a>
              <a
                href="#"
                className="text-sm border border-gray-300 px-3 md:px-4 py-2 rounded-full hover:border-gray-400 hover:text-blue-500 transition whitespace-nowrap"
              >
                Sign Up
              </a>
            </div>
          </nav>

          <button
            className="md:hidden text-gray-700 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-4 py-4 space-y-4">
            <button
              onClick={handleAboutPageClick}
              className="w-full border border-gray-400 text-gray-800 py-2 rounded-full font-medium"
            >
              About Us
            </button>
            <button
              onClick={handleProductPageClick}
              className="w-full bg-blue-500 text-white py-2 rounded-full font-medium"
            >
              Products
            </button>
            <button
              onClick={handleCartPageClick}
              className="w-full bg-purple-500 text-white py-2 rounded-full font-medium"
            >
              Cart
            </button>
            <button className="w-full border border-gray-400 text-gray-800 py-2 rounded-full font-medium">
              Log in
            </button>
            <button className="w-full border border-gray-400 text-gray-800 py-2 rounded-full font-medium">
              Sign Up
            </button>
          </div>
        )}
      </header>

      {showAboutPage && (
        <div className="fixed inset-0 z-50 bg-white overflow-hidden">
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={handleCloseAboutPage}
              className="bg-white/90 backdrop-blur-sm text-gray-600 hover:text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition"
            >
              ✕
            </button>
          </div>
          <div className="h-full w-full overflow-y-auto">
            <AboutPage />
          </div>
        </div>
      )}

      {showProductPage && (
        <div className="fixed inset-0 z-50 bg-white overflow-hidden">
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={handleCloseProductPage}
              className="bg-white/90 backdrop-blur-sm text-gray-600 hover:text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition"
            >
              ✕
            </button>
          </div>
          <div className="h-full w-full overflow-y-auto">
            <ProductPage />
            <Footer />
          </div>
        </div>
      )}

      {showCheckoutCartPage && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <CheckoutCart
            onNext={handleCheckoutInfoPageClick}
            onClose={handleCloseCartPage}
          />
        </div>
      )}

      {showCheckoutCartInfoPage && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <CheckoutCartInfo
            onBack={() => {
              setShowCheckoutCartInfoPage(false);
              setShowCheckoutCartPage(true);
              window.history.pushState({}, "", "?page=cart");
            }}
            onClose={() => {
              setShowCheckoutCartInfoPage(false);
              window.location.href = "/";
            }}
            onNext={handleCheckoutPaymentPageClick}
          />
        </div>
      )}

      {showCheckoutPaymentPage && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <CheckoutPayment
            onBack={() => {
              setShowCheckoutPaymentPage(false);
              setShowCheckoutCartInfoPage(true);
              window.history.pushState({}, "", "?page=checkout-info");
            }}
            onClose={() => {
              setShowCheckoutPaymentPage(false);
              window.location.href = "/";
            }}
            onNext={handleConfirmationPageClick}
          />
        </div>
      )}

      {showConfirmationPage && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <Confirmation
            onBack={() => {
              setShowConfirmationPage(false);
              setShowCheckoutPaymentPage(true);
              window.history.pushState({}, "", "?page=checkout-payment");
            }}
            onClose={() => {
              setShowConfirmationPage(false);
              window.location.href = "/";
            }}
          />
        </div>
      )}
    </>
  );
}
