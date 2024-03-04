const ButtonIcon = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="256" cy="256" r="256" fill="black" />
      <line
        x1="256"
        y1="100"
        x2="256"
        y2="412"
        stroke="white"
        strokeWidth="34"
      />
      <line
        x1="412"
        y1="256"
        x2="100"
        y2="256"
        stroke="white"
        strokeWidth="34"
      />
    </svg>
  );
};

export default ButtonIcon;
