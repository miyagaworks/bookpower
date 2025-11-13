import React from 'react';

type ButtonVariant = 'primary' | 'accent' | 'kindle' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  href,
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl';

  const variantStyles = {
    primary: 'bg-gold text-foreground hover:bg-gold/90 hover:scale-105',
    accent: 'bg-accent text-white hover:bg-accent/90 hover:scale-105',
    kindle: 'bg-kindle-orange text-white hover:bg-kindle-orange/90 hover:scale-105',
    outline: 'bg-white text-primary hover:bg-gray-50 hover:scale-105',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="text-xl">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="text-xl">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {content}
    </button>
  );
};

export default Button;
