"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const sampleRates = [
  { label: "48000", value: "48000" },
  { label: "44100", value: "44100" },
  { label: "24000", value: "24000" },
  { label: "22050", value: "22050" },
  { label: "16000", value: "16000" },
  { label: "8000", value: "8000" },
];

export function ComboboxForm() {
  const [selectedRate, setSelectedRate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedRate) {
      setError("Please select a sample rate.");
      return;
    }
    setError("");

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify({ sampleRate: selectedRate }, null, 2)}
          </code>
        </pre>
      ),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col">
        <label className="text-sm font-medium">Sample Rate</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className={cn(
                "w-[200px] justify-between",
                !selectedRate && "text-muted-foreground"
              )}
            >
              {selectedRate
                ? sampleRates.find((rate) => rate.value === selectedRate)?.label
                : "Select sample rate"}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandList>
                {sampleRates.map((rate) => (
                  <CommandItem
                    value={rate.label}
                    key={rate.value}
                    onSelect={() => setSelectedRate(rate.value)}
                  >
                    {rate.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        rate.value === selectedRate
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
