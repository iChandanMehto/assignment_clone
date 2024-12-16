"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export function ComboboxDemo({ onSelect }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(""); // Value holds the selected framework's value.
  const [search, setSearch] = React.useState(""); // For handling search input.

  const handleSelect = (currentValue) => {
    setValue(currentValue === value ? "" : currentValue); // Toggle value
    onSelect(currentValue === value ? "" : currentValue); // Pass value to parent
    setOpen(false); // Close the dropdown when a framework is selected
  };

  const filteredFrameworks = frameworks.filter((framework) =>
    framework.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        
        <button
          variant="outline"
          aria-expanded={open}
          className = "justify-between"
        >
          <svg
          
          className="text-[#007bff]"
            width="40"
            height="18"
            viewBox="0 0 10 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.49999 1L1.04672 6.34393C0.872316 6.55321 0.785114 6.65785 0.783781 6.74623C0.782622 6.82306 0.816858 6.89615 0.87662 6.94445C0.945366 7 1.08158 7 1.35401 7H4.99999L4.49999 11L8.95326 5.65607C9.12767 5.44679 9.21487 5.34215 9.2162 5.25377C9.21736 5.17694 9.18313 5.10385 9.12336 5.05555C9.05462 5 8.9184 5 8.64598 5H4.99999L5.49999 1Z"
              stroke="#FCFCFD"
            ></path>
          </svg> 
          {"Pro 1 Language"} {/* Fixed text for the button */}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 ">
        <Command>
          <CommandInput
            placeholder="Search frameworks..."
            value={search}
              onChange={(e) => setSearch(e.target.value)}
          
            // Update search query
          />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {filteredFrameworks.length === 0 ? (
                <CommandItem>No results found</CommandItem>
              ) : (
                filteredFrameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={() => handleSelect(framework.value)}
                  >
                    {framework.label}
                  </CommandItem>
                ))
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}





