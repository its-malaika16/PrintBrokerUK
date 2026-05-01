import { Suspense } from "react"
import GetQuoteClient from "./GetQuoteClient"

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GetQuoteClient />
    </Suspense>
  )
}