import { BadgeCheck } from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";


const AuthLayout: React.FC = () => {

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link to="/" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <BadgeCheck className="size-4" />
          </div>
          Validatr360
        </Link>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
