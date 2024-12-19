"use client";

import * as React from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

const languages = [
  { value: "<af-za></af-za>", label: "Afrikaans, South Africa" },
  { value: "<sq-al></sq-al>", label: "Albanian (Albania)" },
  { value: "<am-et></am-et>", label: "Amharic (Ethiopia)" },
  { value: "<arb></arb>", label: "Arabic" },
  { value: "<hy-am></hy-am>", label: "Armenian (Armenia)" },
  { value: "<az-az></az-az>", label: "Azerbaijani (Azerbaijan)" },
  { value: "<bn-bd></bn-bd>", label: "Bangla (Bangladesh)" },


  { value: "<eu-es></eu-es>", label: "Bosque" },
  { value: "<bn-in></bn-in>", label: "Banglali (India) " },
  { value: "<bs-ba></bs-ba>", label: "Bosnian (Bosnia and Herzegovina" },
];

export function ComboboxDemo({ onLanguageSelect }) {
  const handleSelect = (value) => {
    if (onLanguageSelect) {
      onLanguageSelect(value); 
    }
  };

  return (
    <div className="w-full md:w-[350px] bg-white">
      <Command>
        <CommandInput placeholder="Search Languages." />
        <CommandList>
          <CommandEmpty>No languages found</CommandEmpty>
          <CommandGroup>
            {languages.map((lang) => (
              <CommandItem key={lang.value} onSelect={() => handleSelect(lang.value)}>
                {lang.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}



