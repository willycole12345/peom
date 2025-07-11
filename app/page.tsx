import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from "./components/header"
import Image from 'next/image'
import ContentSection from './components/ContentSection'
import { PeomsDetails, featurePeoms } from "@/app/actions";
import CardSection from './components/CardSection'
import FooterSection from './components/FooterSection'


export default async function Home() {
  const peoms = await PeomsDetails();
  const featpeoms = await featurePeoms();
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section className=''>

          <div className="relative py-26">
            <div className="relative mx-auto flex max-w-5xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">Start Your Poem Journey with Us</h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg">{`One tool that does it all. Analyze, and chat—right inside process poem`}</p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="px-5 text-base">
                    <Link href="/getstarted">
                      <span className="text-nowrap">Get Started</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                className="-z-10 order-first ml-auto h-56 w-full object-cover sm:h-96 lg:absolute lg:inset-0 lg:-right-10 lg:-top-10 lg:order-last lg:h-max lg:w-6/12 lg:object-contain dark:mix-blend-lighten dark:invert-0"
                src="/pdmisc1.png"
                alt="Abstract Object"
                height={400}
                width={300}
              />
            </div>
          </div>
        </section>
        <ContentSection />
        <section className='bg-inherit'>
          <div className="py-10">
            <CardSection title={'Recent Poem'} records={peoms} buttonshow={true} />
          </div>
        </section>
        {/* <Started /> */}

        <section className='bg-inherit'>
          <div className="py-10">
            <CardSection title={'Feature Poem'} records={featpeoms} buttonshow={true} />
          </div>
        </section>
        {/* <Blogpost /> */}
      </main>
      <FooterSection />
    </>
  );
}