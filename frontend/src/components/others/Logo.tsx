import { cn } from '@/lib/utils';
import { BadgeCheck } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  noLink?: boolean;
  icon?: boolean
}

const Logo: React.FC<LogoProps> = ({ className, noLink, icon }) => {
  return (
    <Link to={ noLink ? "#" : "/" } className={cn(
      className,
      'text-2xl font-semibold flex items-center gap-2',
    )}>
      <BadgeCheck className="text-primary" />
      {!icon && <h2>Validatr360</h2> }
    </Link>
  )
};

export default Logo;
