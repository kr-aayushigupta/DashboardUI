// "use client";
// import { SessionProvider } from "next-auth/react";

// import { ReactNode } from "react";


// const AuthProvider = ({ children }:{children:React.ReactNode}) => {
//   return <SessionProvider>{children}</SessionProvider>;
// };

// export default AuthProvider;

// "use client";
// import { SessionProvider } from "next-auth/react";

// const AuthProvider = ({ children, session }) => {
//   return <SessionProvider session={session}>{children}</SessionProvider>;
// };

// export default AuthProvider;



"use client";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

interface AuthProviderProps {
  children: React.ReactNode;
  session?: Session | null;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;
