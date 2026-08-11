import Image from 'next/image'
import { SectionHeading } from '@/components/ui/section-heading'

const galleryImages = [
  { src: '/images/gallery-lawn.png', alt: 'A freshly mown striped lawn' },
  { src: '/images/gallery-hedge.png', alt: 'A neatly trimmed garden hedge and flower border' },
  { src: '/images/gallery-handyman.png', alt: 'A handyman\u2019s tools laid out on a workbench' },
  { src: '/images/about-gardener.png', alt: 'A gardener trimming a hedge with hand shears' },
]

export function GallerySection() {
  return (
    <section id="gallery" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="A Look at Our Gardening & Handyman Work"
          description="A few glimpses of the everyday jobs we help local homes with."
        />

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <li
              key={image.src}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-sm"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 45vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
