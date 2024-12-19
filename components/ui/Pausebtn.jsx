import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Pausebtn = ({ onSelectPause }) => {
  // Define the pause options with their specific values
  const pauseOptions = [
    { label: "0.5s", value: '<break time="0.5s"/>' },
    { label: "1s", value: '<break time="1s"/>' },
    { label: "2s", value: '<break time="2s"/>' },
    { label: "3s", value: '<break time="3s"/>' },
    { label: "4s", value: '<break time="4s"/>' },
    { label: "5s", value: '<break time="5s"/>' },
    { label: "6s", value: '<break time="6s"/>' },
  ];

  const handlePauseSelect = (value) => {
    onSelectPause(value); // Pass the specific value to the parent
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>Pause</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator />
          {pauseOptions.map((option) => (
            <DropdownMenuItem
              key={option.label}
              onClick={() => handlePauseSelect(option.value)}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Pausebtn;

