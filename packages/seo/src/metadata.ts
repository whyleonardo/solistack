import type { Metadata } from "next"

import merge from "lodash.merge"

type MetadataGenerator = Omit<Metadata, "description" | "title"> & {
  title: string
  description: string
  image?: string
}

const applicationName = "Solistack"
const author: Metadata["authors"] = {
  name: "Christian Leonardo",
  url: "https://whyleonardo.vercel.app/",
}
const publisher = "Christian Leonardo"
const twitterHandle = "@whyleonardo_dev"

export const createMetadata = ({
  title,
  description,
  image,
  ...properties
}: MetadataGenerator): Metadata => {
  const parsedTitle = `${title} | ${applicationName}`
  const defaultMetadata: Metadata = {
    title: parsedTitle,
    description,
    applicationName,
    authors: [author],
    creator: author.name,
    formatDetection: {
      telephone: false,
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: parsedTitle,
    },
    openGraph: {
      title: parsedTitle,
      description,
      type: "website",
      siteName: applicationName,
      locale: "en_US",
    },
    publisher,
    twitter: {
      card: "summary_large_image",
      creator: twitterHandle,
    },
  }

  const metadata: Metadata = merge(defaultMetadata, properties)

  if (image && metadata.openGraph) {
    metadata.openGraph.images = [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ]
  }

  return metadata
}
