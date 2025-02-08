// import React from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// export default function Gettouch() {
//   return (
//     <div  className="bg-gray-100 py-12 text-center  justify-center">
//         <h2 className="text-2xl font-bold text-gray-900">Get in touch</h2>
//         <p className="text-sm text-gray-600 justify-center">
//         For More Information About Our Product & Services.</p><p> Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
//         </p>
      
//     <div className="main-container w-[1058px] h-[923px] relative mx-auto mt-3">
//       {/* Form Section */}
//       <div className="form-section w-[635px] h-[923px] bg-white absolute top-0 left-[423px] z-10">
//         {/* Name Input */}
//         <Label className="block mt-[119px] ml-[75px] text-[16px] font-medium text-black">
//           Your name
//         </Label>
//         <div className="input-box w-[528.75px] h-[75px] rounded-[10px] border border-gray-400 mt-[22px] mx-auto ml-[76.25px]">
//           <span className="block mt-[25px] ml-[28.75px] text-[16px] text-gray-400">Abc</span>
//         </div>

//         {/* Email Input */}
//         <label className="block mt-[36px] ml-[75px] text-[16px] font-medium text-black">
//           Email address
//         </label>
//         <div className="input-box w-[528.75px] h-[75px] rounded-[10px] border border-gray-400 mt-[22px] mx-auto ml-[76.25px]">
//           <span className="block mt-[25px] ml-[28.75px] text-[16px] text-gray-400">Abc@def.com</span>
//         </div>

//         {/* Subject Input */}
//         <Label className="block mt-[36px] ml-[75px] text-[16px] font-medium text-black">
//           Subject
//         </Label>
//         <div className="input-box w-[526.755px] h-[75px] rounded-[10px] border border-gray-400 mt-[22px] mx-auto ml-[76.245px]">
//           <span className="block mt-[25px] ml-[28.755px] text-[16px] text-gray-400">This is optional</span>
//         </div>

//         {/* Message Input */}
//         <Label className="block mt-[36px] ml-[75px] text-[16px] font-medium text-black">
//           Message
//         </Label>
//         <div className="textarea-box w-[527px] h-[120px] rounded-[10px] border border-gray-400 mt-[22px] mx-auto ml-[75px]">
//           <span className="block mt-[25px] ml-[29px] text-[16px] text-gray-400">Hi! I’d like to ask about</span>
//         </div>

//         {/* Submit Button */}
//         <Button className="submit-btn w-[237px] h-[48px] rounded-[15px] border border-black mt-[49px] mx-auto ml-[81px]">
//           <span className="block mt-[11px] text-center text-black">Submit</span>
//         </Button>
//       </div>

//       {/* Info Section */}
//       <div className="info-section w-[393px] h-[537px] bg-white absolute top-[68px] left-0 z-0">
     
//         <div className="content w-[212px] mx-auto mt-[58px]">
//         {/* <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
// 	<path fill="#000" d="M13 0a6 6 0 0 0-6 6c0 3.314 5.219 11.543 5.219 16h1.562C13.781 17.558 19 9.044 19 6a6 6 0 0 0-6-6m0 3a3 3 0 1 1 0 6a3 3 0 0 1 0-6M6.844 17.281l-.063.032c-1.845.324-3.409.768-4.593 1.375c-.593.303-1.104.662-1.5 1.093c-.397.432-.688.993-.688 1.625c0 .948.628 1.689 1.375 2.219s1.69.935 2.844 1.281C6.524 25.598 9.605 26 13 26s6.476-.402 8.781-1.094c1.153-.346 2.097-.75 2.844-1.281S26 22.354 26 21.406c0-.634-.29-1.224-.688-1.656s-.904-.759-1.5-1.063c-1.19-.607-2.769-1.051-4.625-1.375a1 1 0 1 0-.343 1.97c1.723.3 3.155.725 4.062 1.187c.454.23.773.477.938.656s.156.25.156.281c0 .047-.064.263-.531.594s-1.263.694-2.282 1c-2.037.611-4.955 1-8.187 1s-6.15-.389-8.188-1c-1.018-.306-1.814-.669-2.28-1c-.468-.331-.532-.547-.532-.594c0-.03-.007-.103.156-.281c.164-.178.487-.426.938-.656c.9-.461 2.318-.886 4.031-1.188a1.01 1.01 0 1 0-.281-2" />
// </svg> */}
//           <h2 className="text-[24px] font-medium">Address</h2>
//           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
// 	<path fill="#000" d="M13 0a6 6 0 0 0-6 6c0 3.314 5.219 11.543 5.219 16h1.562C13.781 17.558 19 9.044 19 6a6 6 0 0 0-6-6m0 3a3 3 0 1 1 0 6a3 3 0 0 1 0-6M6.844 17.281l-.063.032c-1.845.324-3.409.768-4.593 1.375c-.593.303-1.104.662-1.5 1.093c-.397.432-.688.993-.688 1.625c0 .948.628 1.689 1.375 2.219s1.69.935 2.844 1.281C6.524 25.598 9.605 26 13 26s6.476-.402 8.781-1.094c1.153-.346 2.097-.75 2.844-1.281S26 22.354 26 21.406c0-.634-.29-1.224-.688-1.656s-.904-.759-1.5-1.063c-1.19-.607-2.769-1.051-4.625-1.375a1 1 0 1 0-.343 1.97c1.723.3 3.155.725 4.062 1.187c.454.23.773.477.938.656s.156.25.156.281c0 .047-.064.263-.531.594s-1.263.694-2.282 1c-2.037.611-4.955 1-8.187 1s-6.15-.389-8.188-1c-1.018-.306-1.814-.669-2.28-1c-.468-.331-.532-.547-.532-.594c0-.03-.007-.103.156-.281c.164-.178.487-.426.938-.656c.9-.461 2.318-.886 4.031-1.188a1.01 1.01 0 1 0-.281-2" />
// </svg>
//           <p className="mt-2 text-[16px] text-black leading-6">
    
//             236 5th SE Avenue, New York NY10000, United States
//           </p>

//           <h2 className="mt-6 text-[24px] font-medium">Phone</h2>
//           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
// 	<path fill="#000" d="M22.386 18.026c-1.548-1.324-3.119-2.126-4.648-.804l-.913.799c-.668.58-1.91 3.29-6.712-2.234c-4.801-5.517-1.944-6.376-1.275-6.951l.918-.8c1.521-1.325.947-2.993-.15-4.71l-.662-1.04C7.842.573 6.642-.552 5.117.771l-.824.72c-.674.491-2.558 2.087-3.015 5.119c-.55 3.638 1.185 7.804 5.16 12.375c3.97 4.573 7.857 6.87 11.539 6.83c3.06-.033 4.908-1.675 5.486-2.272l.827-.721c1.521-1.322.576-2.668-.973-3.995z" />
// </svg>
//           <p className="mt-2 text-[16px] text-black leading-6">
//             Mobile: +(84) 546-6789 <br />
//             Hotline: +(84) 456-6789
//           </p>

//           <h2 className="mt-6 text-[24px] font-medium">Working Time</h2>
//           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 1024 1024">
// 	<path fill="#000" d="M511.984 36.128C230.016 36.128.639 265.536.639 547.504c0 177.152 89.68 339.185 239.903 433.408c14.944 9.472 34.688 4.88 44.097-10.096s4.88-34.72-10.096-44.095c-54.096-33.952-99.04-78.048-133.424-128.88l33.552-19.376c15.311-8.848 20.56-28.4 11.712-43.711c-8.88-15.344-28.464-20.56-43.712-11.712l-33.6 19.391c-24.4-50.511-39.297-105.792-43.281-163.424h35.616c17.68 0 32-14.32 32-32s-14.32-32-32-32H65.95c4.24-58.687 19.776-114.304 44.56-164.592l32.16 18.56a31.75 31.75 0 0 0 15.97 4.288c11.055 0 21.807-5.744 27.743-16c8.847-15.312 3.6-34.88-11.712-43.713l-31.84-18.368c32.112-46.832 72.864-87.296 119.984-119.023l18.016 31.2c5.935 10.288 16.687 16 27.743 16a31.75 31.75 0 0 0 15.969-4.288c15.311-8.848 20.56-28.4 11.712-43.712l-17.953-31.072c49.329-23.792 103.68-38.656 160.976-42.816v39.872c0 17.68 14.32 32 32 32s32-14.32 32-32v-40c58.592 4.08 114.128 19.391 164.384 43.95l-17.36 30.049c-8.848 15.311-3.6 34.88 11.712 43.712a31.75 31.75 0 0 0 15.969 4.288c11.055 0 21.807-5.712 27.743-16l17.28-29.936a451.2 451.2 0 0 1 118.88 118.816l-29.968 17.312c-15.311 8.847-20.56 28.4-11.711 43.71c5.935 10.289 16.687 16 27.743 16c5.44 0 10.944-1.375 15.969-4.287l30.127-17.392C938.638 401.839 954 457.39 958.094 516H922.96c-17.68 0-32 14.32-32 32s14.32 32 32 32h35.12c-4.048 56.88-18.592 111.439-42.496 161.312l-31.68-18.288c-15.28-8.848-34.912-3.568-43.712 11.713c-8.848 15.311-3.6 34.88 11.712 43.712L883.68 796.8c-35.103 52.24-81.44 97.393-137.359 131.824c-15.055 9.28-19.712 29.008-10.464 44.032c6.065 9.808 16.529 15.216 27.28 15.216a31.9 31.9 0 0 0 16.753-4.752c152.464-93.904 243.472-256.784 243.472-435.632c0-281.952-229.408-511.36-511.376-511.36zm236.127 411.6c15.296-8.848 20.544-28.398 11.712-43.71c-8.832-15.296-28.416-20.544-43.712-11.696L542.287 492.674c-9.28-5.248-19.856-8.496-31.28-8.496c-35.28 0-63.84 28.591-63.84 63.807c0 35.248 28.576 63.84 63.84 63.84c35.28 0 63.84-28.592 63.84-63.84c0-.064-.016-.144-.016-.209z" />
// </svg>
//           <p className="mt-2 text-[16px] text-black leading-6">
//             Monday-Friday: 9:00 - 22:00 <br />
//             Saturday-Sunday: 9:00 - 21:00
//           </p>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Gettouch() {
  return (
    <div className="bg-gray-100 py-12 text-center justify-center">
      <h2 className="text-2xl font-bold text-gray-900">Get in touch</h2>
      <p className="text-sm text-gray-600">
        For More Information About Our Product & Services.
      </p>
      <p className="text-sm text-gray-600">
        Please Feel Free To Drop Us An Email. Our Staff Always Be There To
        Help You Out. Do Not Hesitate!
      </p>

      {/* Main Container */}
      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="form-section bg-white p-8 rounded-lg shadow-lg">
          <form>
            {/* Name Input */}
            <Label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Abc"
              className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />

            {/* Email Input */}
            <Label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-700">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Abc@def.com"
              className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />

            {/* Subject Input */}
            <Label htmlFor="subject" className="block mt-4 text-sm font-medium text-gray-700">
              Subject (Optional)
            </Label>
            <Input
              id="subject"
              type="text"
              placeholder="This is optional"
              className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />

            {/* Message Textarea */}
            <Label htmlFor="message" className="block mt-4 text-sm font-medium text-gray-700">
              Message
            </Label>
            <textarea
              id="message"
              placeholder="Hi! I’d like to ask about..."
              className="mt-2 block w-full h-32 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>

            {/* Submit Button */}
            <Button
              type="submit"
              className="mt-6 w-full bg-indigo-600 text-white rounded-lg p-3 hover:bg-indigo-700"
            >
              Submit
            </Button>
          </form>
        </div>

        {/* Info Section */}
        <div className="info-section bg-white p-8 rounded-lg shadow-lg">
          <div className="content">
            {/* Address */}
            <h2 className="text-xl font-medium">Address</h2>
            <div className="mt-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 2C7 2 4 6 4 10c0 6 8 12 8 12s8-6 8-12c0-4-3-8-8-8zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2-.9 2-2 2z" />
              </svg>
              <p className="ml-2 text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
            </div>

            {/* Phone */}
            <h2 className="text-xl font-medium mt-6">Phone</h2>
            <div className="mt-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M22 16.56l-2-1.58a16.63 16.63 0 0 0-1.35-2.16l1.48-2.48a2 2 0 0 0-1.17-2.8l-4.02-1.57a2 2 0 0 0-2.8 1.17l-1.53 2.53a16.6 16.6 0 0 0-2.17-1.34l-1.58-2a2 2 0 0 0-2.8 1.17l-2.48 4.02a2 2 0 0 0 1.17 2.8l2.54 1.54a16.53 16.53 0 0 0-1.34 2.16L7 22a2 2 0 0 0 2.8 1.17l4.02-1.57a2 2 0 0 0 2.8-1.17l1.57-2.54a16.57 16.57 0 0 0 2.16 1.34l1.58 2.02a2 2 0 0 0 2.8-1.17l2.49-4.02a2 2 0 0 0-1.17-2.8z" />
              </svg>
              <p className="ml-2 text-gray-600">Mobile: +(84) 546-6789 | Hotline: +(84) 456-6789</p>
            </div>

            {/* Working Time */}
            <h2 className="text-xl font-medium mt-6">Working Time</h2>
            <div className="mt-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 2c-6 0-10 6-10 10s4 10 10 10s10-4 10-10s-4-10-10-10zM12 18c-3.3 0-6-3.5-6-6h2c0 2 1 4 4 4s4-2 4-4h2c0 2.5-2.7 6-6 6z" />
              </svg>
              <p className="ml-2 text-gray-600">Monday-Friday: 9:00 - 22:00 | Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
