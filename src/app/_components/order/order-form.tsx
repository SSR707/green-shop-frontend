"use client";
import React, { useState } from "react";

export const OrderForm = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [phoneCode, setPhoneCode] = useState("+998");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <h3 className="font-bold text-[18px] leading-[94%] text-[#3d3d3d] mb-[21px]">
        Billing Address
      </h3>
      <form>
        <div className="flex gap-[22px]">
          <div className="">
            <div className="flex flex-col w-[350px]">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                className="border-1 border-[#EAEAEA] w-full px-[10px] py-[10px] outline-none mt-[10px]  rounded-[6px]"
              />
            </div>
            <div className="flex flex-col w-[350px] mt-[30px]">
              <label htmlFor="region">Country / Region</label>
              <select
                value={country}
                id="region"
                onChange={(e) => setCountry(e.target.value)}
                className="border-1 border-[#EAEAEA] w-full px-[10px] py-[11px] outline-none mt-[10px] rounded-[6px]"
              >
                <option value="" disabled hidden>
                  Select a country / region
                </option>
                <option value="uzb">Uzbekistan/Tashkent</option>
                <option value="use">Amerrica/New York</option>
                <option value="ru">Russian/Moscowa</option>
              </select>
            </div>
            <div className="flex flex-col w-[350px] mt-[30px]">
              <label htmlFor="address">Street Address</label>
              <input
                type="text"
                placeholder="House number and street name"
                id="address"
                className="border-1 border-[#EAEAEA] w-full px-[10px] py-[10px] outline-none mt-[10px]  rounded-[6px]"
              />
            </div>
            <div className="flex flex-col w-[350px] mt-[30px]">
              <label htmlFor="state">State</label>
              <select
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="border-1 border-[#EAEAEA] w-full px-[10px] py-[11px] outline-none mt-[10px] rounded-[6px]"
              >
                <option value="" className="text-[#a5a5a5]" disabled hidden>
                  Select a state
                </option>
                <option value="uz">Uzbekistan/Tashkent</option>
                <option value="us">Amerrica/New York</option>
                <option value="r">Russian/Moscowa</option>
              </select>
            </div>
            <div className="flex flex-col w-[350px] mt-[30px]">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                className="border-1 border-[#EAEAEA] w-full px-[10px] py-[10px] outline-none mt-[10px]  rounded-[6px]"
              />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col w-[350px]">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                className="border-1 border-[#EAEAEA] w-full px-[10px] py-[10px] outline-none mt-[10px]  rounded-[6px]"
              />
            </div>
            <div className="flex flex-col w-[350px] mt-[30px]">
              <label htmlFor="city">Town / City</label>
              <input
                type="text"
                id="city"
                className="border-1 border-[#EAEAEA] w-full px-[10px] py-[10px] outline-none mt-[10px]  rounded-[6px]"
              />
            </div>
            <div className="flex flex-col w-[350px] mt-[54px]">
              <input
                type="text"
                placeholder="Appartment, suite, unit, etc. (optional)"
                id="apartament"
                className="border-1 border-[#EAEAEA] w-full px-[10px] py-[10px] outline-none mt-[10px]  rounded-[6px]"
              />
            </div>
            <div className="flex flex-col w-[350px] mt-[30px]">
              <label htmlFor="zip">Zip</label>
              <input
                type="text"
                id="zip"
                className="border-1 border-[#EAEAEA] w-full px-[10px] py-[10px] outline-none mt-[10px]  rounded-[6px]"
              />
            </div>
            <div className="flex flex-col w-[350px] mt-[30px]">
              <label htmlFor="state">Phone Number</label>
              <div className="flex gap-[15px]">
                <select
                  value={phoneCode}
                  onChange={(e) => setPhoneCode(e.target.value)}
                  id="state"
                  className="border-1 border-[#EAEAEA] w-[78px] px-[10px] py-[11px] outline-none mt-[10px] rounded-[6px]"
                >
                  <option value="+998">+998</option>
                  <option value="+1">+1</option>
                  <option value="+7">+7</option>
                </select>
                <input
                  type="text"
                  className="border-1 border-[#EAEAEA] w-full px-[10px] py-[10px] outline-none mt-[10px]  rounded-[6px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-[32px] gap-[7px] items-center">
          <input
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            type="radio"
            className="w-5 h-5 accent-[var(--primary)]"
          />
          <p>Ship to a different address?</p>
        </div>

        <div className="flex flex-col w-[350px] mt-[54px]">
          <label htmlFor="Order">Order notes (optional)</label>
          <textarea
            id="Order"
            className="border-1 border-[#EAEAEA] w-full px-[10px] py-[10px] outline-none mt-[10px]  rounded-[6px]"
          />
        </div>
      </form>
    </div>
  );
};
