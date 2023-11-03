import React, { forwardRef, useRef } from 'react';

// Child component that will receive the forwarded ref
const MyInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

// Parent component
function App() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <MyInput ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
