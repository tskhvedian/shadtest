import * as React from "react";
import { Progress } from "@/components/ui/progress";

export function ProgressDemo({ isLoading }) {
  const [progress, setProgress] = React.useState(0);
  const [progressCompleted, setProgressCompleted] = React.useState(false);
  const duration = 1000; // Duration in milliseconds (2 seconds)

  React.useEffect(() => {
    if (isLoading && !progressCompleted) {
      let startTime = Date.now();
      const timer = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const progressPercentage = (elapsedTime / duration) * 100;
        setProgress(Math.min(progressPercentage, 100));
        if (progressPercentage >= 100) {
          clearInterval(timer);
          setProgressCompleted(true); // Update progressCompleted state
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isLoading, progressCompleted]); // Add isLoading and progressCompleted as dependencies

  return <Progress value={progress} className="w-[20%]" />;
}
