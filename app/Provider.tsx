"use client";

import { AuthProvider } from "../hooks/useAuth";
import { RecoilRoot } from "recoil";

interface Props {
  children: React.ReactNode;
}

function Provider({ children }: Props) {
  return (
    <RecoilRoot>
      <AuthProvider>{children}</AuthProvider>
    </RecoilRoot>
  );
}

export default Provider;
