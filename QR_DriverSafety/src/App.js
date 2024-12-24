import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { FaAmbulance, FaUserMd, FaHeartbeat } from "react-icons/fa";
import "tailwindcss/tailwind.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    address: "",
    bloodGroup: "",
    emergencyContact: "",
  });
  const [qrData, setQrData] = useState("");
  const qrRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateQRCode = () => {
    // Ensure all fields are filled before generating QR code
    if (
      formData.name &&
      formData.number &&
      formData.address &&
      formData.bloodGroup &&
      formData.emergencyContact
    ) {
      const formattedData = `
Name: ${formData.name}
Phone Number: ${formData.number}
Address: ${formData.address}
Blood Group: ${formData.bloodGroup}
Emergency Contact: ${formData.emergencyContact}
      `;
      setQrData(formattedData);
    } else {
      alert("Please fill all the fields before generating the QR Code.");
    }
  };

  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "EmergencyQRCode.png";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-blue-700 flex items-center justify-center p-6">
      <div className="bg-gray-800 text-white shadow-2xl rounded-lg p-6 flex flex-col md:flex-row">
        {/* Left Icons */}
        <div className="flex flex-col justify-center items-center text-blue-400 mb-6 md:mb-0 md:w-1/6">
          <FaAmbulance size={60} className="mb-6" title="Emergency Services" />
          <FaUserMd size={60} className="mb-6" title="Medical Assistance" />
          <FaHeartbeat size={60} className="mb-6" title="Critical Info" />
        </div>

        {/* Form and QR Code */}
        <div className="flex-grow px-6 md:w-2/3">
          <h1 className="text-3xl font-bold text-center mb-6 text-white">
            Emergency QR Code Generator
          </h1>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 bg-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-white"
            />
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 bg-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-white"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 bg-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-white"
            />
            <input
              type="text"
              name="bloodGroup"
              placeholder="Blood Group"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 bg-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-white"
            />
            <input
              type="text"
              name="emergencyContact"
              placeholder="Emergency Contact"
              value={formData.emergencyContact}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 bg-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-white"
            />
          </form>
          <button
            onClick={generateQRCode}
            className="mt-6 w-full bg-blue-600 text-white font-bold py-3 rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Generate QR Code
          </button>
          {qrData && (
            <div className="mt-8 flex flex-col items-center">
              <div
                ref={qrRef}
                className="p-4 bg-white rounded-lg shadow-md"
              >
                <QRCodeCanvas value={qrData} size={150} />
              </div>
              <button
                onClick={downloadQRCode}
                className="mt-4 bg-blue-500 text-white font-bold py-2 px-6 rounded-md shadow-lg hover:bg-blue-600 transition duration-300"
              >
                Download QR Code
              </button>
            </div>
          )}
        </div>

        {/* Right Icons */}
        <div className="flex flex-col justify-center items-center text-blue-400 mb-6 md:mb-0 md:w-1/6">
          <FaHeartbeat size={60} className="mb-6" title="Critical Info" />
          <FaUserMd size={60} className="mb-6" title="Medical Assistance" />
          <FaAmbulance size={60} className="mb-6" title="Emergency Services" />
        </div>
      </div>
    </div>
  );
};

export default App;




// import React, { useState, useRef } from "react";
// import { QRCodeCanvas } from "qrcode.react";

// const App = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     number: "",
//     address: "",
//     bloodGroup: "",
//     emergencyContact: "",
//   });
//   const [qrData, setQrData] = useState("");
//   const qrRef = useRef();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const generateQRCode = () => {
//     if (
//       formData.name &&
//       formData.number &&
//       formData.address &&
//       formData.bloodGroup &&
//       formData.emergencyContact
//     ) {
//       const formattedData = JSON.stringify({
//         Name: formData.name,
//         Phone: formData.number,
//         Address: formData.address,
//         BloodGroup: formData.bloodGroup,
//         EmergencyContact: formData.emergencyContact,
//       });
//       setQrData(formattedData);
//     } else {
//       alert("Please fill out all fields.");
//     }
//   };

//   const downloadQRCode = () => {
//     const canvas = qrRef.current.querySelector("canvas");
//     const url = canvas.toDataURL("image/png");
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "QRCode.png";
//     link.click();
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <h1 className="text-2xl font-bold mb-6">QR Code Generator</h1>
//       <form className="space-y-4 w-full max-w-md">
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="text"
//           name="number"
//           placeholder="Phone Number"
//           value={formData.number}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="text"
//           name="address"
//           placeholder="Address"
//           value={formData.address}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="text"
//           name="bloodGroup"
//           placeholder="Blood Group"
//           value={formData.bloodGroup}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="text"
//           name="emergencyContact"
//           placeholder="Emergency Contact"
//           value={formData.emergencyContact}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//       </form>
//       <button
//         onClick={generateQRCode}
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Generate QR Code
//       </button>

//       {qrData && (
//         <div className="mt-6 flex flex-col items-center">
//           <div ref={qrRef} className="bg-white p-4 rounded shadow">
//             <QRCodeCanvas value={qrData} size={150} />
//           </div>
//           <button
//             onClick={downloadQRCode}
//             className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
//           >
//             Download QR Code
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
