type ImageSize = {
   width: number
   height: number
}

type ImageProps = {
   src: string
   alt: string
   size?: ImageSize
}

export default function Image({ src, alt, size }: ImageProps) {
   return (
      <img
         src={src}
         alt={alt}
         width={size?.width}
         height={size?.height}
      />
   )
}
