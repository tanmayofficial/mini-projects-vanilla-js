import "./styles.css";
import R, { useEffect, useRef } from "react";

export default function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const submitRef = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  const handleFirstName = () => {
    lastNameRef.current.focus();
  };

  const handleLastName = () => {
    submitRef.current.focus();
  };

  const handleSubmit = () => {};
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input
        type="text"
        ref={firstNameRef}
        onKeyDown={handleFirstName}
        placeholder="enter first name"
      />
      <input
        type="text"
        ref={lastNameRef}
        onKeyDown={handleLastName}
        placeholder="enter last name"
      />
      <button type="submit" onClick={handleSubmit} ref={submitRef}>
        submit
      </button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
