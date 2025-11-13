import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'primary' | 'gradient';
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'white'
}) => {
  const backgroundStyles = {
    white: 'bg-white',
    light: 'bg-[var(--color-background)]',
    primary: 'bg-[var(--color-primary)] text-white',
    gradient: 'bg-gradient-primary text-white',
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgroundStyles[background]} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
