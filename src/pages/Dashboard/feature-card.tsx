import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  actionText: string;
  imgSrc: string;
  onActionClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  actionText,
  imgSrc,
  onActionClick,
}) => {
  return (
    <div
      className="border border-[#1E212F] bg-[#14161F66] backdrop-blur-sm text-white p-6 rounded-lg shadow-lg flex flex-col justify-between relative"
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "80px",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#8256FF66] to-transparent rounded-lg pointer-events-none opacity-25"></div>

      <div className="absolute top-4 right-4 text-gray-400 cursor-pointer">
        <span>⤢</span>
      </div>
      <div className="flex items-center gap-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-4 text-gray-300 text-[16px] font-syne">{description}</p>
      <button
        onClick={onActionClick}
        className="mt-6 text-white text-md flex items-center gap-2 hover:underline font-syne"
      >
        {actionText} →
      </button>
    </div>
  );
};

export default FeatureCard;
