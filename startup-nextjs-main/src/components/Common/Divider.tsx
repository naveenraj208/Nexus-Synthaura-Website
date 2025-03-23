'use client'
import React from "react";

const Divider: React.FC = () => {
  return (
    <div className="relative w-full h-[2px] my-6 overflow-hidden bg-gradient-to-r from-pink-500 via-blue-500 to-pink-500 animate-gradient">
      <style jsx>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientAnimation 3s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default Divider;
