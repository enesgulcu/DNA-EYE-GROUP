import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoClose } from "react-icons/io5";
import { GoDash } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";

function Doctor({ openDoctorModal, goBack, handleCloseModal }) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
      partTime: false,
      fullTime: false,
      cv: null,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      address: Yup.string().required("Address is required"),
      phone: Yup.string().matches(/^\d{3}-\d{3}-\d{4}$/, "Invalid phone number").required("Phone number is required"),
    }),
    onSubmit: (values) => {
      // Submit logic here
      console.log(values);
    },
  });

  const handleFileChange = (event) => {
    formik.setFieldValue("cv", event.target.files[0]);
  };

  return (
    <>
      <div
        className={`fixed z-50  left-0 top-0 bg-blackBg bg-opacity-0 w-screen h-screen   justify-center items-center 
    ${openDoctorModal ? "flex" : "hidden"} `}
      >
        <div className="bg-bodybg h-[80%]  rounded-lg shadow-md md:w-[40%] w-[80%] flex flex-col ">
          <div className="flex flex-row m-3 justify-between items-center">
            <div onClick={goBack} className="  rounded-md p-[6px] text-xl  cursor-pointer  duration-700  transition-all bg-grayHead bg-opacity-20 hover:bg-redTitle text-redTitle hover:text-white  ">
              <IoIosArrowBack />
            </div>
            <div onClick={handleCloseModal}>
              <div className="w-5 h-5 rounded-md p-4 cursor-pointer transition-all duration-700 relative  bg-grayHead bg-opacity-20 hover:bg-redTitle  group">
                <IoClose
                  size={30}
                  className="text-redTitle transition-all duration-700 rotate-180 flex absolute group-hover:opacity-0 group-hover:rotate-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <GoDash
                  size={30}
                  className="text-white rotate-0 transition-all duration-700 opacity-0 group-hover:block group-hover:rotate-180 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
          <div className="  text-center font-[500] text-2xl text-redTitle">
            <h2>Doctor</h2>
          </div>
          <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto space-y-7 p-5 ">
            {/*firstname lastname */}
            <div className="grid  md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
                    formik.touched.firstName && formik.errors.firstName ? "border-red-500" : "border-gray-300"
                  } appearance-none   focus:outline-none focus:ring-0 focus:border-redTitle peer`}
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="firstName"
                  className={`peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] ${
                    formik.values.firstName ? "peer-focus:start-0 rtl:peer-focus:translate-x-1/4" : ""
                  } peer-focus:text-redTitle  ${
                    formik.touched.firstName && formik.errors.firstName ? "text-red-500" : ""
                  } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                >
                  First Name
                </label>
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>
                ) : null}
              </div>
              <div className="relative z-0 w-full  group">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
                    formik.touched.lastName && formik.errors.lastName ? "border-red-500" : "border-gray-300"
                  } appearance-none  focus:outline-none focus:ring-0 focus:border-redTitle peer`}
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="lastName"
                  className={`peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] ${
                    formik.values.lastName ? "peer-focus:start-0 rtl:peer-focus:translate-x-1/4" : ""
                  } peer-focus:text-redTitle  ${
                    formik.touched.lastName && formik.errors.lastName ? "text-red-500" : ""
                  } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                >
                  Last name
                </label>
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.lastName}</div>
                ) : null}
              </div>
            </div>
            {/* email */}
            <div className="relative  z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
                  formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"
                } appearance-none  focus:outline-none focus:ring-0 focus:border-redTitle peer`}
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className={`peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] ${
                  formik.values.email ? "peer-focus:start-0 rtl:peer-focus:translate-x-1/4" : ""
                } peer-focus:text-redTitle  ${
                  formik.touched.email && formik.errors.email ? "text-red-500" : ""
                } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
              >
                Email address
              </label>
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
              ) : null}
            </div>
            {/* address */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="address"
                id="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
                  formik.touched.address && formik.errors.address ? "border-red-500" : "border-gray-300"
                } appearance-none  focus:outline-none focus:ring-0 focus:border-redTitle peer`}
                placeholder=" "
                required
              />
              <label
                htmlFor="address"
                className={`peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] ${
                  formik.values.address ? "peer-focus:start-0 rtl:peer-focus:translate-x-1/4" : ""
                } peer-focus:text-redTitle  ${
                  formik.touched.address && formik.errors.address ? "text-red-500" : ""
                } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
              >
                Address
              </label>
              {formik.touched.address && formik.errors.address ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.address}</div>
              ) : null}
            </div>
            {/* phone number */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
                  formik.touched.phone && formik.errors.phone ? "border-red-500" : "border-gray-300"
                } appearance-none  focus:outline-none focus:ring-0 focus:border-redTitle peer`}
                placeholder=" "
                required
              />
              <label
                htmlFor="phone"
                className={`peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] ${
                  formik.values.phone ? "peer-focus:start-0 rtl:peer-focus:translate-x-1/4" : ""
                } peer-focus:text-redTitle  ${
                  formik.touched.phone && formik.errors.phone ? "text-red-500" : ""
                } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
              >
                Phone number
              </label>
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
              ) : null}
            </div>
            {/* employment type */}
            <fieldset className="flex space-x-2  items-center  justify-center">
              <div className="flex items-center ">
                <input
                  id="partTime"
                  name="partTime"
                  type="checkbox"
                  checked={formik.values.partTime}
                  onChange={formik.handleChange}
                  className="w-4 h-4 text-redTitle bg-gray-100 border-gray-300 rounded focus:ring-redTitle  "
                />
                <label htmlFor="partTime" className="ms-2 text-sm font-medium text-gray-500 ">
                  Part time
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="fullTime"
                  name="fullTime"
                  type="checkbox"
                  checked={formik.values.fullTime}
                  onChange={formik.handleChange}
                  className="w-4 h-4 text-redTitle bg-gray-100 border-gray-300 rounded focus:ring-redTitle  "
                />
                <label htmlFor="fullTime" className="ms-2 text-sm font-medium text-gray-500 ">
                  Full time
                </label>
              </div>
            </fieldset>
            {/* CV upload */}
            <div className="w-full">
              <label htmlFor="file-upload" className="relative cursor-pointer">
                <span className="bg-white hover:bg-redTitle rounded-lg px-4 py-2 border border-gray-300 text-gray-500 hover:text-white">
                  {formik.values.cv ? formik.values.cv.name : "Upload CV"}
                </span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={handleFileChange}
                />
              </label>
            </div>

            <button
              type="submit"
              className="text-white mt-3 bg-redTitle bg-opacity-85 hover:bg-redTitle focus:ring-4 focus:outline-none focus:ring-redTitle font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Doctor;
