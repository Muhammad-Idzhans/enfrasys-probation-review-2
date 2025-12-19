"use client";

import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/introduction")

  return (
    <div>
        <h1>This is Root Page</h1>
    </div>
  )
}
