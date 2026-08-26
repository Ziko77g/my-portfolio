import React from 'react';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
  description,
  centered = true,
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-start'}`}>
      <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.25em] text-[#C5A880] uppercase mb-3">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-[#F4F0EA] tracking-tight mb-4">
        {title}
      </h2>
      <div className={`w-16 h-0.5 bg-[#C5A880]/60 mb-6 ${centered ? 'mx-auto' : ''}`} />
      {description && (
        <p className="max-w-2xl text-[#AAA6A0] text-sm md:text-base leading-relaxed font-light mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};
