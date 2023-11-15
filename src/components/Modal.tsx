import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center sm:pt-[10vh] text-center sm:mx-0 mx-4 pt-[15vh]">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>

        <div className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle max-w-lg w-full">
          <div className="bg-white px-4 py-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start w-fit">
              <div className="mt-2 text-center sm:mt-0 sm:text-left w-full">
                <div className="flex justify-end cursor-pointer" onClick={onClose}>
                  <svg
                    width="27"
                    height="26"
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="1.70711"
                      y1="1.29289"
                      x2="25.7071"
                      y2="25.2929"
                      stroke="#16236E"
                      stroke-width="2"
                    />
                    <line
                      x1="1.29289"
                      y1="25.2929"
                      x2="25.2929"
                      y2="1.29289"
                      stroke="#16236E"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <div className="mt-2">{children}</div>
              </div>
            </div>
          </div>
          {/* <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button onClick={onClose} type="button" className="ml-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-0 sm:w-auto sm:text-sm">
              Close
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
