import React, { Dispatch, SetStateAction } from "react";

type ButtonType = "increment" | "decrement";

interface IProps {
  buttonType: ButtonType;
  winnerState: number;
  winnerSetState: Dispatch<SetStateAction<number>>;
}

const WinnerButton = ({ buttonType, winnerState, winnerSetState }: IProps) => {
  const onClickButton = (
    buttonType: string,
    state: number,
    setState: Dispatch<SetStateAction<number>>
  ) => {
    if (buttonType === "increment") {
      if (state === 2021) {
        return;
      }
      return setState((year: number) => year + 1);
    }
    if (state === 2017) {
      return;
    }
    return setState((year: number) => year - 1);
  };

  return buttonType === "increment" ? (
    <button
      className="hover:scale-125 cursor-pointer transition-all ml-4"
      onClick={() => onClickButton(buttonType, winnerState!, winnerSetState!)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </button>
  ) : (
    <button
      className="hover:scale-125 cursor-pointer transition-all mr-4"
      onClick={() => onClickButton(buttonType, winnerState!, winnerSetState!)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </button>
  );
};

export default WinnerButton;
