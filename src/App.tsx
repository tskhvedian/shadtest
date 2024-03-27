import * as React from "react";
import { ProgressDemo } from "./tests/components/ProgressDemo";
import { CommandDialogDemo } from "./tests/components/CommandMenu";
import { Input } from "@/components/ui/input";
import { CommandInput } from "./components/ui/command";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [originAddress, setOriginAddress] = React.useState("");

  // Simulate changing isLoading and stopping progress after 2 seconds
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change isLoading to false after 2 seconds
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <ProgressDemo isLoading={isLoading} />
      </div>
    );

  console.log("Origin AddressL ", originAddress);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center space-y-2">
      <Input
        className="w-60"
        onFocus={() => {
          setOpen(true);
        }}
        type="text"
        placeholder="Search address..."
      />

      <CommandDialogDemo
        open={open}
        setOpen={setOpen}
        setOriginAddress={setOriginAddress}
      />
    </div>
  );
}

export default App;
