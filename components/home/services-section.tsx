import { SectionHeading } from '@/components/ui/section-heading'
import { ServiceCard } from '@/components/home/service-card'
import { gardeningServices, handymanServices } from '@/lib/site-data'

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Gardening & Handyman Services"
          description="From keeping your garden looking its best to those essential jobs around the home, we're here to help."
        />

        <div className="mt-16 flex flex-col gap-16">
          <div>
            <h3 className="mb-6 font-heading text-xl font-semibold text-foreground">
              Gardening Services
            </h3>
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {gardeningServices.map((service) => (
                <ServiceCard key={service.name} service={service} />
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-heading text-xl font-semibold text-foreground">
              Handyman Services
            </h3>
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {handymanServices.map((service) => (
                <ServiceCard key={service.name} service={service} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
