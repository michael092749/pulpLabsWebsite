import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Audio Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From music production to podcast editing, our team of sound engineers has the expertise to elevate
              your audio projects.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Music Production</h3>
              <p className="text-muted-foreground">
                Our team of experienced producers and engineers can help you create professional-sounding music,
                from beat production to final mastering.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Podcast Editing</h3>
              <p className="text-muted-foreground">
                We offer comprehensive podcast editing services, including noise reduction, volume normalization,
                and expert mixing to ensure your podcast sounds its best.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Mixing and Mastering</h3>
              <p className="text-muted-foreground">
                Our experienced audio engineers can provide professional mixing and mastering services to ensure
                your music or audio project sounds polished and radio-ready.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Final Mix and Sound Design for Adverts</h3>
              <p className="text-muted-foreground">
                We specialize in creating the perfect final mix and immersive sound design for advertising
                campaigns, helping your message stand out with a powerful audio experience.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Jingle Composing</h3>
              <p className="text-muted-foreground">
                Our talented composers can create custom jingles and musical branding elements to make your business
                or product instantly recognizable.
              </p>
            </div>
          </div>
          <Image
            src="/placeholder.svg"
            width={550}
            height={310}
            alt="Music Production"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/placeholder.svg"
            width={550}
            height={310}
            alt="Podcast Editing"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Vocal Tuning</h3>
              <p className="text-muted-foreground">
                Our expert vocal engineers can help you achieve the perfect vocal performance, whether it's for a
                music project or a voiceover.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">VO Recording</h3>
              <p className="text-muted-foreground">
                We offer professional voice-over recording services, ensuring your voiceovers are captured with the
                highest quality and clarity.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">VO Editing</h3>
              <p className="text-muted-foreground">
                Our team of audio editors can clean up, polish, and enhance your voiceover recordings, making them
                sound their absolute best.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Podcast Mixing and Editing</h3>
              <p className="text-muted-foreground">
                We provide comprehensive podcast mixing and editing services, including noise reduction, volume
                balancing, and expert audio cleanup to make your podcast sound professional.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Production of Beats/Music</h3>
              <p className="text-muted-foreground">
                Our team of experienced producers can create custom beats, instrumentals, and original music to
                elevate your audio projects, whether it's for a song, podcast, or advertisement.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Sound Design for TV and Commercials</h3>
              <p className="text-muted-foreground">
                Our sound design experts can create immersive and impactful audio environments for your television
                shows, films, and commercials, elevating the overall production value.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Dolby Atmos Mix and Master</h3>
              <p className="text-muted-foreground">
                Experience the future of audio with our Dolby Atmos mixing and mastering services, delivering an
                immersive and cinematic sound experience for your music, films, or other multimedia projects.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Vocal Recording</h3>
              <p className="text-muted-foreground">
                Our state-of-the-art recording studios and experienced engineers can capture your vocals with
                exceptional clarity and detail, ensuring your vocal performances shine.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Audio Post-Production</h3>
              <p className="text-muted-foreground">
                From sound effects and foley to dialogue editing and final mixing, our audio post-production
                services can transform your video or film projects with a professional, polished sound.
              </p>
            </div>
          </div>
          <Image
            src="/placeholder.svg"
            width={550}
            height={310}
            alt="Sound Design"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </div>
    </section>
  )
}