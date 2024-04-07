import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleClientMessage } from "../Redux/Action";
import {
  CLIENT_MESSAGE_FAILURE,
  CLIENT_MESSAGE_SUCCESS,
} from "../Redux/Constants";
import { toast, Toaster } from "sonner";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const isLoading = useSelector((state) => state.Message.isLoading);
  const success = useSelector((state) => state.Message.success);
  const failure = useSelector((state) => state.Message.failure);

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(handleClientMessage(formData));
  };

  useEffect(() => {
    if (failure) {
      toast.error(failure);
      dispatch({ type: CLIENT_MESSAGE_FAILURE, payload: "" });
    }
  }, [failure]);

  useEffect(() => {
    if (success) {
      toast.success(success);
      dispatch({ type: CLIENT_MESSAGE_SUCCESS, payload: "" });
    }
  }, [success]);

  return (
    <div className="w-full" id="contact-form">
      <Toaster richColors position="bottom-center"></Toaster>
      <div className="w-full flex flex-col items-center justify-center bg-slate-200 py-12">
        <h1 className="text-5xl text-indigo-900 mb-12">Contact Us</h1>

        <div className="flex flex-col items-start gap-2 bg-white lg:w-1/2 sm:w-3/4 xs:w-full px-12 py-8 rounded-md shadow-2xl mb-12">
          <h1 className="text-3xl text-indigo-900">Address</h1>
          <span className="text-lg opacity-80">
            <i className="fa-solid fa-location-dot"></i>&nbsp;Manufacturing Research Lab,
Mechanical and Production Engineering Department,
Guru Nanak Dev Engineering College, Gill Park, Gill Road, Ludhiana, Punjab, India-141006
          </span>

          <span className="text-lg opacity-80">
            <i className="fa-solid fa-phone"></i>&nbsp;Phone No. : 0161-5064555, +919914400353, +919914330555
          </span>
          <span className="text-lg opacity-80">
            <i className="fa-solid fa-envelope"></i>&nbsp;Email : mrlabgndec@gmail.com
          </span>
          <span className="text-lg opacity-80">
            <i className="fa-solid fa-phone"></i>&nbsp;Testing and Consultancy:
            0161 5064709
          </span>
        </div>

        <div className="lg:w-1/2 sm:w-3/4 xs:w-full flex flex-col items-center gap-4 bg-white px-12 py-8 rounded-md shadow-2xl">
          <h1 className="text-3xl text-indigo-900">Leave a message</h1>
          <form
            className="flex flex-col gap-4 w-full"
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              placeholder="Enter your Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="bg-white px-4 py-1 text-lg border border-slate-400 hover:border-slate-700 focus:outline-black "
            />
            <input
              type="text"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-white px-4 py-1 text-lg border border-slate-400 hover:border-slate-700 focus:outline-black "
            />
            <input
              type="text"
              placeholder="Enter your mobile"
              className="bg-white px-4 py-1 text-lg border border-slate-400 hover:border-slate-700 focus:outline-black "
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
            />

            <textarea
              name="message"
              id=""
              cols="30"
              rows="6"
              placeholder="Leave a message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="bg-white px-4 py-1 text-lg border border-slate-400 hover:border-slate-700 focus:outline-black "
            ></textarea>

            <div className="mt-6 flex items-center justify-center">
              <button className="px-8 py-2 text-xl font-semibold text-white border border-indigo-600 bg-indigo-600 rounded-md hover:bg-white hover:border  hover:border-indigo-600 hover:text-indigo-600">
                {isLoading ? <span>Loading....</span> : <span>Send</span>}
              </button>
            </div>
          </form>
        </div>

        <div className="googlemap flex items-center justify-center w-full mt-12 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.7604327864055!2d75.85704311066512!3d30.86068466599051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a828f09011b15%3A0xbf3f5b51dcc81b12!2sGuru%20Nanak%20Dev%20Engineering%20College!5e0!3m2!1sen!2sin!4v1712036083726!5m2!1sen!2sin"
            className="lg:w-3/4 shadow-2xl h-96 sm:w-3/4 xs:w-full"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
