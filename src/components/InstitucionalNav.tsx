import { Link, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  path: string;
}

interface InstitucionalNavProps {
  items: NavItem[];
}

const InstitucionalNav = ({ items }: InstitucionalNavProps) => {
  const location = useLocation();

  return (
    <nav className="bg-card flex justify-center gap-1 px-10 py-2 shadow-institucional-sm">
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`
            relative px-7 py-3 font-medium rounded-lg transition-all duration-300
            hover:bg-accent/10 hover:-translate-y-0.5
            ${location.pathname === item.path ? 'bg-accent/10 text-primary' : 'text-primary'}
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
            after:w-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300
            ${location.pathname === item.path ? 'after:w-4/5' : 'hover:after:w-4/5'}
          `}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default InstitucionalNav;
