import { ReactNode } from 'react';

interface FilhoProps{
  text?: string;
  children?: ReactNode;
}

export const Filho = ({text, children}: FilhoProps) => {
  return (
    <>
      <h2>{text}</h2>
      {children}
    </>
  );
};