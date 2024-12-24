import React from 'react'

export default function Modal({modalData,closeModal}) {
  return (
    <>
        <div className="fixed inset-0 top-8 flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <img src={modalData.image} alt={modalData.name} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">{modalData.name}</h3>
            <p className="mb-4">{modalData.description}</p>
            <button
              onClick={closeModal}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
              Close
            </button>
          </div>
        </div>
      )}
      
    </>
  )
}
