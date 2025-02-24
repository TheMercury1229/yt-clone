"use client";
import { trpc } from "@/trpc/trpc-client";

export default function Home() {
  const { data } = trpc.hello.useQuery({ text: "hardy" });
  return <div>Some content {data?.greeting}</div>;
}
