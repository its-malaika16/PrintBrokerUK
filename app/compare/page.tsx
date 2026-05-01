import { Suspense } from "react";
import CompareClient from "./CompareClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
   <CompareClient />
    </Suspense>
  );
}


