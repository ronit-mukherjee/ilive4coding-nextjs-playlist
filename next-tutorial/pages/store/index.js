import React from "react";
import Link from "next/link";

export default function Store() {
  return (
    <p>
      This is Store Page{" "}
      <Link href="/store/uttar pradesh">
        <a>Uttar Pradesh</a>
      </Link>{" "}
    </p>
  );
}
