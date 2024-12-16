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

const formats = [
  { label: "MP3", value: "mp3" },
  { label: "WAV", value: "wav" },
  { label: "OGG", value: "ogg" },
  { label: "AAC", value: "aac" },
  { label: "OPUS", value: "opus" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
];

export function ComboboxForm() {
  const [selectedFormat, setSelectedFormat] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedFormat) {
      setError("Please select an audio format.");
      return;
    }
    setError("");

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify({ audioFormat: selectedFormat }, null, 2)}
          </code>
        </pre>
      ),
    });
  };

  const filteredFormats = search
    ? formats.filter((format) =>
        format.label.toLowerCase().includes(search.toLowerCase())
      )
    : formats;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col">
        <label className="text-sm font-medium">Audio Format</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className={cn(
                "w-[200px] justify-between",
                !selectedFormat && "text-muted-foreground"
              )}
            >
              {selectedFormat
                ? formats.find((format) => format.value === selectedFormat)
                    ?.label
                : "Select format"}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput
                placeholder="Search format..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-9"
              />
              <CommandList>
                {filteredFormats.length ? (
                  filteredFormats.map((format) => (
                    <CommandItem
                      key={format.value}
                      onSelect={() => {
                        setSelectedFormat(format.value);
                        setSearch(""); // Clear search on select
                      }}
                    >
                      {format.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          format.value === selectedFormat
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))
                ) : (
                  <CommandEmpty>No format found.</CommandEmpty>
                )}
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
