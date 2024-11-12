import type { Thing, WithContext } from "schema-dts"

type JsonLdProps = {
  code: WithContext<Thing>
}

export const JsonLd = ({ code }: JsonLdProps) => (
  <script
    type="application/ld+json"
    // biome-ignore lint/security/noDangerouslySetInnerHtml: "This is a JSON-LD script, not user-generated content."
    dangerouslySetInnerHTML={{ __html: JSON.stringify(code) }}
  />
)

// biome-ignore lint/performance/noReExportAll: Necessary in some use cases that could appears in the future.
export * from "schema-dts"