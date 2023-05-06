import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { randomBytes } from "./crypto.server";

export const loader = () => {
  return json({ random: randomBytes(16).toString("hex") });
};

export default function A() {
  const data = useLoaderData();
  return <>{data.random}</>;
}
