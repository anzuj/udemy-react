import { useEffect } from "react";
import ReactDOM from "react-dom";

export default function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  // will inject this div into public/html file
  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
      <div className="fixed inset-40 p-10 bg-white border rounded">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end"> {actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}
