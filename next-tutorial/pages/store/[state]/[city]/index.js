import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function City() {
  const router = useRouter();
  const { state, city } = router.query;

  return (
    <div>
      This is City's Page for {state}, {city}
      <Link href={`/store/${state}/${city}/1234`}>
        <a>1234</a>
      </Link>
    </div>
  );
}
