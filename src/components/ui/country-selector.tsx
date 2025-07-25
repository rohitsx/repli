import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { allCountryCode } from "@/lib/countryCode";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCallback, useEffect, useState } from "react";
import { ChevronsUpDownIcon } from "lucide-react";

type CountryCodeType = keyof typeof allCountryCode;

export function CountrySelector({
  setDialCode,
  countryCode,
}: {
  setDialCode: (v: string) => void;
  countryCode: CountryCodeType;
}) {
  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState("▢");

  const updateValue = useCallback(
    ({ id }: { id: CountryCodeType }) => {
      if (!id) return;

      const value = allCountryCode[id];

      setFlag(value.flag);
      setDialCode(value.dial_code);
      setOpen(false);
    },
    [setDialCode],
  );

  useEffect(() => {
    countryCode && updateValue({ id: countryCode });
  }, [countryCode, updateValue]);

  return (
    <div className="flex space-x-2 items-center w-18">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className="h-[50px]">
          <button
            aria-expanded={open}
            className="w-full hover:bg-gray-100 shadow-xs cursor-pointer flex items-center justify-center gap-1 border border-r-0 rounded-none rounded-l-md"
          >
            <span className="text-lg pl-1">{flag}</span>
            <ChevronsUpDownIcon className="h-4 w-4 p-0 m-0" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="p-0 mx-10">
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>
                Yo, your country not on map (respecfully)
              </CommandEmpty>
              {Object.entries(allCountryCode).map(([key, value]) => (
                <CommandItem
                  key={key}
                  onSelect={(v) => updateValue({ id: v as any })}
                  value={key}
                >
                  <div className="flex w-full justify-between">
                    <div className="flex gap-2">
                      <p>{value.flag}</p>
                      <p>{value.name}</p>
                    </div>
                    <p>{value.dial_code}</p>
                  </div>
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
