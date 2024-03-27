import * as React from "react";
import { MapIcon } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const data = [
  "Calendar",
  "Search Emoji",
  "GUN",
  "24 search Emoji",
  "24 Kote Meskhi Street",
];

export function CommandDialogDemo({ open, setOpen, setOriginAddress }: any) {
  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen} shouldFilter={false}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No addrress found.</CommandEmpty>

          {data?.map((item, index) => (
            <CommandGroup
              onClick={() => {
                console.log("Clicked", item);
                setOriginAddress(item)
                
              }}
              key={index}
            >
              <CommandItem>
                <MapIcon className="mr-2 h-4 w-4" />
                <span>{item}</span>
              </CommandItem>
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
