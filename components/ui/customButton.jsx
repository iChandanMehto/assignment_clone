import React from "react";
import { Button } from "@/components/ui/button";

const CustomButton = ({ icon: Icon, label, onClick, className, variant }) => {
  return (
    <Button
      onClick={onClick}
      className={`md:border bg-white border-[#e9e9e9] rounded-3xl text-[#242424] text-base md:px-3 md:py-2  ${className}`}
      variant={variant || "default"}
    >
      {Icon && <Icon className="border bg-white border-[#e9e9e9] rounded-3xl text-[#242424] text-base px-3 py-2" />}
      {label}
    </Button>
  );
};
className=""
export default CustomButton;
