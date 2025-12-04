const WhatsAppButton = () => {
  const phoneNumber = "+918799599824"; // Replace with employer's WhatsApp number
  const message =
    "Hi, I’m interested in your import-export products. Could you please share more details?"; // Default message

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
    >
      {/* Official WhatsApp SVG logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="currentColor"
      >
        <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.5 2.1 7.9L.6 31.4l7.6-2c2.3 1.3 4.9 2 7.8 2 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28c-2.5 0-4.8-.7-6.8-1.9l-.5-.3-4.5 1.2 1.2-4.4-.3-.5c-1.3-2.1-2-4.6-2-7.2C3.1 9 9 3.1 16 3.1s12.9 5.9 12.9 12.9S23 28.5 16 28.5zm7.1-8.8c-.4-.2-2.3-1.1-2.6-1.3-.3-.1-.5-.2-.7.2s-.8 1.3-1 1.6c-.2.2-.4.3-.7.1s-1.4-.5-2.7-1.7c-1-1-1.7-2.2-1.9-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.5-.7.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7-.1-.2-.7-1.7-1-2.3-.3-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.6s1.2 3 1.3 3.2c.2.2 2.3 3.6 5.5 5 3.2 1.4 3.2.9 3.8.9.6 0 1.9-.7 2.2-1.4.3-.7.3-1.2.2-1.4-.1-.2-.3-.3-.7-.5z" />
      </svg>
    </button>
  );
};

export default WhatsAppButton;
