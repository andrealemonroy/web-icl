export default function WhatsAppButton() {
    const handleClick = () => {
      window.open(
        'https://wa.me/+51969670703?text=Hola%20Instituto%20Catastral,%20quisiera%20que%20me%20ayudaran%20con%20mi%20consulta',
        '_blank'
      );
    };
  
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={handleClick}
          className="bg-green-500 text-white w-14 h-14 rounded-full"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="m-auto"
          >
            <path
              d="M0.326721 50.6443L3.88512 37.7226C1.68516 33.9299 0.531089 29.6346 0.54311 25.2437C0.54311 11.4845 11.7953 0.297729 25.6082 0.297729C32.3162 0.297729 38.6155 2.89402 43.34 7.60803C48.0765 12.322 50.6852 18.5914 50.6732 25.2556C50.6732 39.0148 39.421 50.2016 25.5961 50.2016H25.5841C21.3886 50.2016 17.2652 49.1487 13.5986 47.1626L0.326721 50.6443ZM14.2357 42.652L14.9931 43.1066C18.1908 44.997 21.8574 45.9901 25.5961 46.002H25.6082C37.0888 46.002 46.4416 36.7056 46.4416 25.2676C46.4416 19.728 44.2777 14.5235 40.3466 10.5991C36.4156 6.6748 31.1742 4.52119 25.6082 4.52119C14.1275 4.50923 4.77472 13.8056 4.77472 25.2437C4.77472 29.1561 5.86868 32.9727 7.96044 36.2749L8.45333 37.0646L6.34955 44.7099L14.2357 42.652Z"
              fill="white"
            />
            <path
              d="M1.20435 49.7709L4.64253 37.2919C2.5147 33.6427 1.39669 29.4911 1.39669 25.2556C1.40871 11.9751 12.2642 1.17114 25.6082 1.17114C32.0879 1.17114 38.1588 3.68368 42.727 8.23019C47.2952 12.7767 49.8077 18.8307 49.8077 25.2676C49.8077 38.5482 38.9402 49.3521 25.6082 49.3521H25.5962C21.5449 49.3521 17.5658 48.3351 14.0314 46.4208L1.20435 49.7709Z"
              fill="url(#paint0_linear_68_13)"
            />
            <path
              d="M0.326721 50.6443L3.88512 37.7226C1.68516 33.9299 0.531089 29.6346 0.54311 25.2437C0.54311 11.4845 11.7953 0.297729 25.6082 0.297729C32.3162 0.297729 38.6155 2.89402 43.34 7.60803C48.0765 12.322 50.6852 18.5914 50.6732 25.2556C50.6732 39.0148 39.421 50.2016 25.5961 50.2016H25.5841C21.3886 50.2016 17.2652 49.1487 13.5986 47.1626L0.326721 50.6443ZM14.2357 42.652L14.9931 43.1066C18.1908 44.997 21.8574 45.9901 25.5961 46.002H25.6082C37.0888 46.002 46.4416 36.7056 46.4416 25.2676C46.4416 19.728 44.2777 14.5235 40.3466 10.5991C36.4156 6.6748 31.1742 4.52119 25.6082 4.52119C14.1275 4.50923 4.77472 13.8056 4.77472 25.2437C4.77472 29.1561 5.86868 32.9727 7.96044 36.2749L8.45333 37.0646L6.34955 44.7099L14.2357 42.652Z"
              fill="url(#paint1_linear_68_13)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.3447 14.8106C18.8759 13.7697 18.383 13.7458 17.9382 13.7338C17.5776 13.7219 17.1568 13.7219 16.736 13.7219C16.3153 13.7219 15.6421 13.8774 15.065 14.4996C14.488 15.1217 12.8771 16.6292 12.8771 19.7041C12.8771 22.767 15.1251 25.7342 15.4377 26.153C15.7503 26.5717 19.7775 33.0684 26.1369 35.569C31.4264 37.6508 32.5084 37.2321 33.6504 37.1244C34.7925 37.0167 37.3531 35.6169 37.882 34.1572C38.399 32.6975 38.399 31.4532 38.2427 31.19C38.0864 30.9268 37.6657 30.7712 37.0405 30.4602C36.4154 30.1491 33.3379 28.6416 32.7608 28.4262C32.1838 28.2228 31.7631 28.1151 31.3543 28.7373C30.9336 29.3594 29.7314 30.7593 29.3708 31.178C29.0101 31.5968 28.6374 31.6447 28.0123 31.3336C27.3872 31.0225 25.3676 30.3645 22.9753 28.2348C21.1119 26.5837 19.8496 24.5378 19.489 23.9156C19.1283 23.2934 19.4529 22.9584 19.7655 22.6474C20.042 22.3722 20.3906 21.9175 20.7032 21.5586C21.0157 21.1997 21.1239 20.9364 21.3283 20.5177C21.5327 20.0989 21.4365 19.74 21.2802 19.4289C21.1239 19.1298 19.8977 16.043 19.3447 14.8106Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_68_13"
                x1="25.5048"
                y1="49.7684"
                x2="25.5048"
                y2="1.16944"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#20B038" />
                <stop offset="1" stopColor="#60D66A" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_68_13"
                x1="25.5049"
                y1="50.6395"
                x2="25.5049"
                y2="0.297729"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9F9F9" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
    );
  }
  