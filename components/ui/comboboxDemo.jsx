"use client";

import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const languages = [
  { value: "Afrikaans, south Africa", label: "Afrikaans, south Africa" },

  { value: "lbianian (Albania)", label: "Albianian (Albania)" },
  
  { value: "Amharic (Ethiopia)", label: "Amharic (Ethiopia)" },

  { value: "Arabic", label: "Arabic" },

  { value: "Armenian(Armenia)", label: "Armenian(Armenia)" },

  { value: "Azerbaijani(Azerbaijan)", label: "Azerbaijani(Azerbaijan)" },

  { value: "Bangla (Bangladesh)", label: "Bangla (Bangladesh)" },

  { value: "Basque", label:"Basque" },

  { value: "Bangali (India)", label:"Bangali (India)" },

  { value: "Bosnian (Bosnia and Herzegovina", label:"Bosnian (Bosnia and Herzegovina" },


  { value: "Bulgarian, Bulgaria", label:"Bulgarian, Bulgaria" },


  { value: "Burmese (Myanmar)", label:"Burmese (Myanmar)" },


  { value: "Catalan, spain" ,label:"Catalan, spain" },


  { value: "Chinese, Cantonese" ,label:"Chinese, Cantonese" },

  { value: "Chinese, Mandarin" ,label:"Chinese, Mandarin" },


  { value: "Chinese , Mandarin (Taiwan)" ,label:"Catalan, spain" },

  { value: "Croatian, Croatia" ,label:"Croatian, Croatia" },


  { value: "Czech (Czech Republic)" ,label:"Czech (Czech Republic)" },


  { value: "Danish (Denmark)" ,label:"Danish (Denmark)" },


  { value: "Dutch (NetherLands)" ,label:"Dutch (NetherLands)" },


  { value: "English, British" ,label:"English, British" },




];




export function ComboboxDemo() {
  const [value, setValue] = React.useState("");

  return (
    <Command className="w-full md:w-[350px] bg-white ">
      <CommandInput  placeholder="Search  Languages." />
      <CommandList>
        <CommandEmpty>No languages found</CommandEmpty>
        <CommandGroup>
          {languages .map((languages ) => (
            <CommandItem
              key={languages .value}
              onSelect={(currentValue) =>
                setValue(currentValue === value ? "" : currentValue)
              }
            >
              <Check
                className={cn(
                  " h-4 w-14",
                  value === languages .value ? "opacity-100" : "opacity-0"
                )}
              />
              {languages .label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}


