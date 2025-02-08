
"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Pay: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    province: "",
    city: "",
    streetAddress: "",
    zip: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }

    // Proceed with order placement logic
    console.log("Order placed:", formData);
  };

  return (
    <div className="container mx-auto p-6 flex flex-col lg:flex-row gap-10">
      {/* Billing Details */}
      <div className="billing-details w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-8">Billing Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between gap-6 mb-6">
            <div className="flex flex-col w-1/2">
              <label htmlFor="firstName" className="text-base font-medium mb-2">
                First Name
              </label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="w-full h-[50px] rounded-lg border p-4"
                required
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="lastName" className="text-base font-medium mb-2">
                Last Name
              </label>
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="w-full h-[50px] rounded-lg border p-4"
              />
            </div>
          </div>
          {/* Additional fields omitted for brevity */}
          <Button
            type="submit"
            className="w-full bg-white text-black h-[50px] rounded-lg font-medium mt- hover:bg-graident-to-r from-pink-500 to-blue-600 "
          >
            Place Order
          </Button>
        </form>
      </div>

      {/* Product Summary */}
      <div className="product-summary w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-8">Your Order</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-base font-medium">Product</span>
            <span className="text-base font-medium">Subtotal</span>
          </div>
          {/* Replace with dynamic data */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-base">Asgaard sofa</span>
            <span className="text-base">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-base font-medium">Total</span>
            <span className="text-lg font-bold text-yellow-600">Rs. 250,000.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
