import React, { useEffect, useRef, useState } from "react";

class IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

const Dropdown = ({
  button,
  children,
  isOpen,
  onOpen = NOOP,
  onClose = NOOP,
}: IDropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen !== undefined) {
      setIsDropdownOpen(isOpen);
    }
  }, [isOpen]);
  useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen]);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [isDropdownOpen]);

  return (
    <div ref={ref}>
      <div onClick={handleOpen}>{button}</div>
      {isDropdownOpen && (
        <div>
          <div style={{ position: "relative", width: "100%" }}>{children}</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
