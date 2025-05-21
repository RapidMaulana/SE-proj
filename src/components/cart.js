'use client';

export default function CartPopUp({ isVisible, onClose, children }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-center z-50 overflow-y-hidden">
      <div className="bg-white p-12 shadow-lg w-[35%] h-screen rounded-tl-[30px] rounded-bl-[30px]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ✖
        </button>
        <div className="flex flex-row border-b-2 border-solid border-grey pb-6 text-black">
            <div className="w-[150px] h-[150px] bg-black rounded-xl animate-pulse"></div>
            <div className="flex flex-row justify-between w-full">
                <div>
                    <h1>Nama Item</h1>
                    <p>Total Harga : Rp. 1.000.000</p>
                </div>
                <div>
                    <h1>Total Item : </h1>
                    <div>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
