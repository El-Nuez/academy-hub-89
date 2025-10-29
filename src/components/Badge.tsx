interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'info';
}

const Badge = ({ children, variant = 'info' }: BadgeProps) => {
  const variants = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-orange-100 text-orange-800',
    info: 'bg-blue-100 text-blue-800'
  };

  return (
    <span className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;
