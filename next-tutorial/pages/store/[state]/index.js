import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function State() {
  const router = useRouter();
  const { state } = router.query;

  return (
    <div>
      This is State's Page for {state}{" "}
      <Link href={`${state}/Lucknow`}>
        <a>Lucknow</a>
      </Link>{" "}
    </div>
  );
}
