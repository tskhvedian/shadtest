import * as React from "react";
import { ProgressDemo } from "./tests/components/ProgressDemo";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

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

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h1>Where to</h1>
    </div>
  );
}

export default App;
