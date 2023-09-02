import { useEffect, useState } from "react";

export function useIntersect(
  ref: React.MutableRefObject<HTMLDivElement | null>,
  callback: () => void
) {
  const [intersector, setIntersector] = useState<null | IntersectionObserver>(
    null
  );
  useEffect(() => {
    setIntersector(
      new IntersectionObserver((entries, observer) => {
        callback();
      })
    );
    return () => {
      intersector?.disconnect();
    };
  }, []);
  useEffect(() => {
    if (ref) {
      const node = ref.current;
      intersector?.observe(node);
    }
  }, [ref, intersector]);
  return intersector;
}
