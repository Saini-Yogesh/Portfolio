import { useEffect, useState } from "react";

const MIN_LOADER_MS = 1400;
const MAX_LOADER_MS = 3500;

/**
 * Keeps the loader visible for at least MIN_LOADER_MS (animation finish)
 * but dismisses early once the page is ready — never blocks past MAX_LOADER_MS.
 */
export function usePageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = performance.now();
    let minTimerId;
    let maxTimerId;
    let finished = false;

    const dismiss = () => {
      if (finished) return;
      finished = true;
      setLoading(false);
    };

    const onReady = () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_LOADER_MS - elapsed);
      minTimerId = setTimeout(dismiss, remaining);
    };

    maxTimerId = setTimeout(dismiss, MAX_LOADER_MS);

    if (document.readyState === "complete") {
      onReady();
    } else {
      window.addEventListener("load", onReady, { once: true });
    }

    return () => {
      finished = true;
      clearTimeout(minTimerId);
      clearTimeout(maxTimerId);
      window.removeEventListener("load", onReady);
    };
  }, []);

  return loading;
}
