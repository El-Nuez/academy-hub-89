interface StatCardProps {
  label: string;
  value: string | number;
}

const StatCard = ({ label, value }: StatCardProps) => {
  return (
    <div className="bg-card p-5 rounded-xl shadow-institucional-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-institucional-md border-l-4 border-secondary h-full flex flex-col justify-center">
      <div className="text-xs text-muted-foreground font-medium mb-2 uppercase tracking-wide">
        {label}
      </div>
      <div className="text-2xl font-bold text-primary leading-snug text-balance">
        {value}
      </div>
    </div>
  );
};

export default StatCard;
