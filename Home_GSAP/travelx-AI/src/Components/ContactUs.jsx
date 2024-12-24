import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact">
      <div className='' >
        <div>
        <h1 className='text-5xl text-center font-bold text-white mt-20'>ContactUs</h1>
    
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen  py-10">

      
      {/* Left side: Image */}
      <div className="md:w-1/2 w-96 mb-8 md:mb-4 ml-8 mr-8 mt-5">
  <form className="bg-slate-600 p-6 rounded-lg shadow-md">
    <h2 className="text-3xl font-bold mb-4 flex justify-center">Contact Form</h2>

    <div className="mb-4">
      <label htmlFor="name" className="block text-sm font-medium text-white">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        placeholder="Your Name"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-white">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        placeholder="Your Email"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="message" className="block text-sm font-medium text-white">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows="4"
        required
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        placeholder="Your Message"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
    >
      Send Message
    </button>
  </form>
</div>



      {/* Right side: Text inside box */}
      <div className="md:w-1/2 w-[500px] bg-slate-600 p-8 rounded-lg shadow-lg mr-32 h-[450px]">

      <h1 className='flex justify-center text-3xl font-bold'>Feel Free to Reach Out</h1>
      <br/>
      We’d love to hear from you! For inquiries, feedback, or assistance, please reach out using the information below:
      <br/>
      <br/>
      <br/>


Email: TravelX(AI)@gmail.com
<br/>
Phone: 9357463528
<br/>
Address: Indore, M.P.

<br/>
<br/>
<br/>

Our office hours are Monday to Friday, 9 AM to 5 PM. You can also connect with us on social media for the latest updates. Fill out our contact form below, and we'll get back to you promptly!
<br/>
<br/>



Thank you for reaching out!
      </div>
    </div>
        </div>

    </div>
    </section>
  );
};

export default ContactUs;
