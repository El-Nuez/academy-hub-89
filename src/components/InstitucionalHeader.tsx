interface InstitucionalHeaderProps {
  userName?: string;
  userInitials?: string;
}

const InstitucionalHeader = ({ userName = "Usuario", userInitials = "U" }: InstitucionalHeaderProps) => {
  return (
    <header className="bg-gradient-primary text-primary-foreground flex items-center justify-between px-10 py-4 shadow-institucional-md sticky top-0 z-50">
      <div className="flex items-center gap-5">
        <div className="text-sm text-muted-foreground">
          {/* Aquí se coloca la dirección del logo institucional */}
        </div>
        <h1 className="text-xl font-semibold tracking-wide">Sistema Integral Académico</h1>
      </div>
      <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
        <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-primary font-semibold">
          {userInitials}
        </div>
        <span className="text-sm">{userName}</span>
      </div>
    </header>
  );
};

export default InstitucionalHeader;
