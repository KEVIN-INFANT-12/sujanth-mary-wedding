import React from 'react';

interface FloralDividerProps {
  className?: string;
  variant?: 'gold' | 'sage' | 'burgundy';
  styleType?: 'cross' | 'monogram' | 'diamond' | 'botanical';
}

export const FloralDivider: React.FC<FloralDividerProps> = ({
  className = '',
  variant = 'gold',
  styleType = 'cross',
}) => {
  const strokeColor =
    variant === 'gold' ? '#C5A46D' : variant === 'sage' ? '#7F9371' : '#4A0718';
  const fillColor =
    variant === 'gold' ? '#ECCF9A' : variant === 'sage' ? '#B8C4AC' : '#831C33';

  return (
    <div className={`flex items-center justify-center py-4 my-2 select-none ${className}`}>
      <div className="flex items-center w-full max-w-xs md:max-w-md">
        {/* Left taper line */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#C5A46D]/60 to-[#C5A46D]" />

        {/* Center decorative motif */}
        <div className="px-3 flex items-center justify-center space-x-1">
          {styleType === 'cross' && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transform scale-95">
              <path
                d="M12 2V22M6 8H18"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="12" cy="8" r="1.5" fill={fillColor} />
              <circle cx="12" cy="2" r="1" fill={fillColor} />
              <circle cx="12" cy="22" r="1" fill={fillColor} />
              <circle cx="6" cy="8" r="1" fill={fillColor} />
              <circle cx="18" cy="8" r="1" fill={fillColor} />
            </svg>
          )}

          {styleType === 'diamond' && (
            <div className="flex items-center space-x-1.5">
              <div className="w-1 h-1 rotate-45 border border-[#C5A46D] bg-[#ECCF9A]/40" />
              <div className="w-2.5 h-2.5 rotate-45 border border-[#C5A46D] bg-[#ECCF9A]/60 flex items-center justify-center">
                <div className="w-1 h-1 bg-[#8E6D38]" />
              </div>
              <div className="w-1 h-1 rotate-45 border border-[#C5A46D] bg-[#ECCF9A]/40" />
            </div>
          )}

          {styleType === 'botanical' && (
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
              <path
                d="M2 10C8 6 14 6 20 10C26 14 32 14 38 10"
                stroke={strokeColor}
                strokeWidth="1"
                strokeLinecap="round"
              />
              <circle cx="20" cy="10" r="2.5" fill={strokeColor} />
              <path
                d="M16 8C14 4 11 5 11 5C11 5 12 8 16 8Z"
                fill={strokeColor}
                opacity="0.8"
              />
              <path
                d="M24 12C26 16 29 15 29 15C29 15 28 12 24 12Z"
                fill={strokeColor}
                opacity="0.8"
              />
            </svg>
          )}
        </div>

        {/* Right taper line */}
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#C5A46D]/60 to-[#C5A46D]" />
      </div>
    </div>
  );
};

export const CornerFlourish: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position, className = '' }) => {
  const rotationClass = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <div
      className={`absolute w-12 h-12 md:w-16 md:h-16 pointer-events-none select-none ${rotationClass} ${className}`}
    >
      <svg viewBox="0 0 60 60" fill="none" className="w-full h-full opacity-60">
        <path
          d="M4 56V12C4 7.58172 7.58172 4 12 4H56"
          stroke="#C5A46D"
          strokeWidth="1.2"
        />
        <path
          d="M8 56V16C8 11.5817 11.5817 8 16 8H56"
          stroke="#C5A46D"
          strokeWidth="0.6"
          strokeDasharray="2 2"
        />
        <path
          d="M12 24C12 17.3726 17.3726 12 24 12"
          stroke="#C5A46D"
          strokeWidth="1"
        />
        <circle cx="16" cy="16" r="2" fill="#C5A46D" />
      </svg>
    </div>
  );
};
