import React from 'react';

interface PageDecorationProps {
    variant?: 'diamond' | 'wing-left' | 'wing-right' | 'full-mini' | 'diamond-outline' | 'dots';
    className?: string;
    opacity?: number;
}

const PageDecoration: React.FC<PageDecorationProps> = ({ 
    variant = 'diamond', 
    className = '',
    opacity = 0.4
}) => {
    const renderSVG = () => {
        switch (variant) {
            case 'diamond':
                return (
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                        <rect x="20" y="4" width="22" height="22" transform="rotate(45 20 4)" fill="#C5A880" />
                    </svg>
                );
            case 'diamond-outline':
                return (
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                        <rect x="20" y="4" width="22" height="22" transform="rotate(45 20 4)" stroke="#C5A880" strokeWidth="2" />
                    </svg>
                );
            case 'wing-left':
                return (
                    <svg width="100" height="42" viewBox="0 0 100 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                         <path d="M1 21H86.5" stroke="#C5A880" strokeWidth="2" strokeLinecap="round"/>
                         <circle cx="9.5" cy="21.5" r="7.5" fill="#C5A880"/>
                         <rect x="85" y="10.6066" width="14.7" height="14.7" transform="rotate(45 85 10.6066)" stroke="#C5A880" strokeWidth="3" />
                    </svg>
                );
            case 'wing-right':
                return (
                    <svg width="100" height="42" viewBox="0 0 100 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                        <path d="M13.5 21H99" stroke="#C5A880" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="90.5" cy="21.5" r="7.5" fill="#C5A880"/>
                         <rect x="15" y="10.6066" width="14.7" height="14.7" transform="rotate(45 15 10.6066)" stroke="#C5A880" strokeWidth="3" />
                    </svg>
                );
            case 'full-mini':
                return (
                    <svg width="140" height="42" viewBox="0 0 140 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                        <path d="M1 21H40M100 21H139" stroke="#C5A880" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="9.5" cy="21.5" r="7.5" fill="#C5A880"/>
                        <circle cx="130.5" cy="21.5" r="7.5" fill="#C5A880"/>
                        <rect x="70" y="2.82843" width="25.7" height="25.7" transform="rotate(45 70 2.82843)" stroke="#C5A880" strokeWidth="2" />
                    </svg>
                );
            case 'dots':
                return (
                    <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                        <circle cx="10" cy="10" r="4" fill="#C5A880" />
                        <circle cx="30" cy="10" r="4" fill="#C5A880" />
                        <circle cx="50" cy="10" r="4" fill="#C5A880" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className={`pointer-events-none select-none ${className}`} style={{ opacity }}>
            {renderSVG()}
        </div>
    );
};

export default PageDecoration;
