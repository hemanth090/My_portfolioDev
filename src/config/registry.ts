export const registryConfig = {
  /**
   * Registry namespace identifier for shadcn CLI
   * @example "@hemanth" - Users can install components with: `npx shadcn add @hemanth/stars-travel`
   * @see https://ui.shadcn.com/docs/registry/namespace#overview
   */
  namespace: process.env.NEXT_PUBLIC_REGISTRY_NAMESPACE || "@hemanth",
  /**
   * URL pattern for resolving namespaced components
   * The {name} placeholder will be replaced with the component name
   * @example "https://hemanthk.xyz/r/{name}.json" resolves to "https://hemanthk.xyz/r/stars-travel.json"
   * This tells shadcn CLI where to fetch component definitions when installing with namespace prefix
   * @see https://ui.shadcn.com/docs/registry/namespace#url-pattern-system
   */
  namespaceUrl:
    process.env.NEXT_PUBLIC_REGISTRY_NAMESPACE_URL ||
    "https://hemanthk.xyz/r/{name}.json",
};
