"use client";
import { MainTable } from "../components/MainTable/MainTable";
import { SWRConfig } from "swr";

export default function Home() {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <MainTable />
      </main>
    </SWRConfig>
  );
}
