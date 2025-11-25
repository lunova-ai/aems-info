import type { MDXComponents } from "mdx/types";
import Callout from "@/components/callouts/Callout";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    ...components,
  };
}
