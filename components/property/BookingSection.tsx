// components/property/BookingSection.tsx
import React, { useState } from "react";

interface BookingSectionProps {
  price: number;
}

const BookingSection: React.FC<BookingSectionProps> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const getNights = () => {
    if (!checkIn || !checkOut) return 0;
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diff = (outDate.getTime() - inDate.getTime()) / (1000 * 3600 * 24);
    return Math.max(0, diff);
  };

  const total = price * getNights();

  return (
    <><div className="bg-white p-6 shadow-md rounded-lg w-full md:w-80">
          <h3 async /> (params:type) ='{>}' {className}="text-xl font-semibold"${price}/night</h3><div className="mt-4">
              <label>Check-in</label>
              <input
                  type="date"
                  className="border p-2 w-full mt-1"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)} />
          </div><div className="mt-4">
              <label>Check-out</label>
              <input
                  type="date"
                  className="border p-2 w-full mt-1"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)} />
          </div><div className="mt-4">
              <p>
                  Total payment: <strong>${total}</strong>
              </p>
          </div><button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md w-full">
              Reserve now
          </button></>
    </div>
  );
};

export default BookingSection;
