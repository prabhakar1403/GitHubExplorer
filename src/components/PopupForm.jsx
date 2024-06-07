import React, { useState, useEffect, useContext} from 'react';
import { BsXCircleFill } from "react-icons/bs";

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");


  useEffect(() => {
    const isFormSubmitted = sessionStorage.getItem('formSubmitted');

    if (!isFormSubmitted) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 4000);

      return () => clearTimeout(timer); 
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(false);
    sessionStorage.setItem('formSubmitted', 'true'); 
    sessionStorage.setItem('userName', userName); 
    sessionStorage.setItem('Name', fullName); 
    console.log("Form submitted:", userName);
  };

  if (!showPopup && sessionStorage.getItem('formSubmitted')) return null;

  return (
    showPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <button 
        className='ml-auto m-2'
        onClick={handleSubmit}>
             <BsXCircleFill />
        </button>
          <h2 className='text-center text-2xl font-bold hover:text-gray-500 mb-5'>
            Enter your Details for personalised experience <br /> on GitHub Explorer
          </h2>
          <form className="p-6 flex flex-col items-center" onSubmit={handleSubmit}>
            <label htmlFor="name" className="hidden">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              className="mt-2 py-3 px-3 text-center rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
            <label htmlFor="username" className="hidden">
              UserName
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="GitHub UserName"
              className="mt-2 py-3 px-3 text-center rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
            <button
              type="submit"
              className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default PopupForm;
