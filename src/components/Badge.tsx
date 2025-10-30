interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'info' | 'destructive';
}

const Badge = ({ children, variant = 'info' }: BadgeProps) => {
  const variants = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-orange-100 text-orange-800',
    info: 'bg-blue-100 text-blue-800',
    destructive: 'bg-red-100 text-red-800 border border-red-300',
  };

  return (
    <span
      className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide ${variants[variant]}`}
    >
      {children}
    </span>
  );
};

export default Badge;
