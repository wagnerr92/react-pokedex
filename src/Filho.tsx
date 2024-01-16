import { ReactNode, useRef } from 'react';

interface FilhoProps{
  text?: string;
  children?: ReactNode;
}

export const Filho = ({text, children}: FilhoProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const reduceInputSize = () => {
    if (inputRef && inputRef.current && inputRef.current.style) {
      inputRef.current.style.width = '100px'
    }
  }

  return (
    <div className='w-full flex flex-col'>
      <h2>{text}</h2>
      {children}
      <input
         ref={inputRef}
         type='text'
         placeholder='Digite aqui'
         className='bg-gray-200 border rounded-md'
      />
      <button 
        onClick={reduceInputSize}
        className="bg-red-600 hover:bg-red-400  text-white">
        Diminuir tamanho do input
      </button>
    </div>
  );
};