import { loadPrototype } from "@/lib/prototype";
import { PrototypeScriptRunner } from "./PrototypeScriptRunner";

type PrototypePageProps = {
  route: Parameters<typeof loadPrototype>[0];
};

export function PrototypePage({ route }: PrototypePageProps) {
  const payload = loadPrototype(route);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: payload.styles }} />
      <div className="prototype-route" dangerouslySetInnerHTML={{ __html: payload.html }} />
      <PrototypeScriptRunner script={payload.scripts} route={route} />
    </>
  );
}
