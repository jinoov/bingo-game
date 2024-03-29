import { useEffect, useLayoutEffect } from "react";

const isSSR = typeof window === "undefined";

export const useIsomorphicEffect = isSSR ? useEffect : useLayoutEffect;
