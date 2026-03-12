import React from 'react';

const Separator = () => {
    return (
        <div className="flex justify-center items-center py-12 md:py-16 overflow-hidden px-6">
            <svg 
                width="273" 
                height="42" 
                viewBox="0 0 273 42" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[273px] opacity-80"
            >
                {/* Horizontal Lines */}
                <path d="M1 21H86.5M186.5 21H272" stroke="#C5A880" strokeWidth="2" strokeLinecap="round"/>
                
                {/* End Circles */}
                <circle cx="9.5" cy="21.5" r="7.5" fill="#C5A880"/>
                <circle cx="263.5" cy="21.5" r="7.5" fill="#C5A880"/>
                
                {/* Middle Diamonds (Squares rotated 45deg) */}
                {/* Large Center Diamond */}
                <rect 
                    x="136.5" 
                    y="2.82843" 
                    width="25.7" 
                    height="25.7" 
                    transform="rotate(45 136.5 2.82843)" 
                    stroke="#C5A880" 
                    strokeWidth="3"
                />
                
                {/* Small Left Diamond */}
                <rect 
                    x="104.51" 
                    y="10.6066" 
                    width="14.7" 
                    height="14.7" 
                    transform="rotate(45 104.51 10.6066)" 
                    stroke="#C5A880" 
                    strokeWidth="3"
                />
                
                {/* Small Right Diamond */}
                <rect 
                    x="168.49" 
                    y="10.6066" 
                    width="14.7" 
                    height="14.7" 
                    transform="rotate(45 168.49 10.6066)" 
                    stroke="#C5A880" 
                    strokeWidth="3"
                />
            </svg>
        </div>
    );
};

export default Separator;
