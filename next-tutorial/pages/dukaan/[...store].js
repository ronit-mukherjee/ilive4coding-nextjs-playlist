import React from "react";
import { useRouter } from "next/router";
export default function Dukaan() {
  const router = useRouter();
  console.log(router);
  if (!router.query || !router.query.store) {
    return null;
  }
  const [state, city, store_id] = router.query.store;
  return (
    <p>
      //This is Dukaan page for {state}, {city}, {store_id}
    </p>
  );
}
