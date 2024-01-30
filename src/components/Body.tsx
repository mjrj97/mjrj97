import { ReactNode } from 'react';

export default function Body({ children }: { children: ReactNode }) {
  return (
    <div className="w-full overflow-scroll h-screen overflow-x-hidden">
      {children}
    </div>
  );
}
