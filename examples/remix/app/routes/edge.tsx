import type { V2_MetaFunction } from "@vercel/remix";

export const config = { runtime: "edge" };

export const meta: V2_MetaFunction = () => [
  { title: "Remix@Edge | New Remix App" },
  { name: "description", content: "Welcome to Remix!" },
];

export default function Edge() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix@Edge</h1>
    </div>
  );
}
