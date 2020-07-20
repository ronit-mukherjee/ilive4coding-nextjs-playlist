import React from "react";
import { useRouter } from "next/router";

export default function Store() {
  const router = useRouter();
  const { city, state, store_id } = router.query;

  return (
    <p>
      This is Store Page for {state}, {city}, {store_id}
    </p>
  );
}
