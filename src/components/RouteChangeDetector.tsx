"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function RouteChangeDetector() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url);
    if (url.length > 1) {
      setLoaded(true);
    }
    return () => {
      setLoaded(false);
    };
    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);

  return <div>{loaded ? "loaded" : "loading"}</div>;
}
