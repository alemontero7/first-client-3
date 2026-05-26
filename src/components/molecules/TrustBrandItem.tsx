interface TrustBrandItemProps {
  icon: string;
  name: string;
  className?: string;
}

export function TrustBrandItem({ icon, name, className = '' }: TrustBrandItemProps) {
  return (
    <img src={icon} alt={name} className={`h-28 w-auto shrink-0 ${className}`} style={{ mixBlendMode: 'multiply' }} />
  );
}
