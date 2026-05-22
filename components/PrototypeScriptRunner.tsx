"use client";

import { useEffect } from "react";

type PrototypeScriptRunnerProps = {
  route: string;
  script: string;
};

export function PrototypeScriptRunner({ route, script }: PrototypeScriptRunnerProps) {
  useEffect(() => {
    try {
      const runPrototype = new Function(script);
      runPrototype();
    } catch (error) {
      console.error(`Prototype script failed for ${route}`, error);
    }
  }, [route, script]);

  return null;
}
