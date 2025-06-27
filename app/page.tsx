import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from "./components/header"
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import ContentSection from './components/ContentSection'
import Blogpost from './components/blogpost'

export default function Home() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section className=''>

          <div className="relative py-26">
            <div className="relative mx-auto flex max-w-5xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">Start Your Poem Journey with Us</h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg">One tool that does it all. Analyze, and chat—right inside process poem</p>

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
            {/* <div className="mx-auto max-w-5xl px-6"> */}
            <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
              <div>
                <h2 className="text-balance text-3xl font-semibold md:text-4xl">Recent Peoms </h2>
                {/* <p className="text-muted-foreground mt-3 text-lg">Connect seamlessly with popular platforms and services to enhance your workflow.</p> */}
              </div>
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="p-px bg-inherit text-card-foreground flex flex-col gap-2 rounded-none border-none shadow-none">
                  <div className="relative overflow-hidden text-white">
                    <Image src="/samplephoto.jpeg"
                      width={450}
                      height={450}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-4 rounded-full bg-primary py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                      POEM
                    </div>
                    <h6 className="mb-2 dark:text-gray-400 text-slate-800 text-xl font-semibold">
                      Website Review Check
                    </h6>
                    <p className="text-black-500 dark:text-gray-400 mt-2 text-sm">
                      The place is close to Barceloneta Beach and bus stop just 2 min by walk
                      and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                      Barcelona.
                    </p>
                  </div>
                </Card>
                <Card className="p-px bg-inherit text-card-foreground flex flex-col gap-2 rounded-none border-none shadow-none">
                  <div className="relative overflow-hidden text-white">
                    <Image src="/samplephoto.jpeg"
                      width={450}
                      height={450}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-4 rounded-full bg-primary py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                      POEM
                    </div>
                    <h6 className="mb-2 text-slate-800 dark:text-gray-400 text-xl font-semibold">
                      Website Review Check
                    </h6>
                    <p className="text-black-500 dark:text-gray-400 mt-2 text-sm">
                      The place is close to Barceloneta Beach and bus stop just 2 min by walk
                      and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                      Barcelona.
                    </p>
                  </div>
                </Card>
                <Card className="p-px bg-inherit text-card-foreground flex flex-col gap-2 rounded-none border-none shadow-none">
                  <div className="relative overflow-hidden text-white">
                    <Image src="/samplephoto.jpeg"
                      width={450}
                      height={450}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-4 rounded-full bg-primary py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                      POEM
                    </div>
                    <h6 className="mb-2 text-slate-800 dark:text-gray-400 text-xl font-semibold">
                      Website Review Check
                    </h6>
                    <p className="text-black-500 dark:text-gray-400 mt-2 text-sm">
                      The place is close to Barceloneta Beach and bus stop just 2 min by walk
                      and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                      Barcelona.
                    </p>
                  </div>
                </Card>
                <Card className="p-px bg-inherit text-card-foreground flex flex-col gap-2 rounded-none border-none shadow-none">
                  <div className="relative overflow-hidden text-white">
                    <Image src="/samplephoto.jpeg"
                      width={450}
                      height={450}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-4 rounded-full bg-primary py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                      POEM
                    </div>
                    <h6 className="mb-2 text-slate-800 text-xl dark:text-gray-400 font-semibold">
                      Website Review Check
                    </h6>
                    <p className="text-black-500 dark:text-gray-400 mt-2 text-sm">
                      The place is close to Barceloneta Beach and bus stop just 2 min by walk
                      and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                      Barcelona.
                    </p>
                  </div>
                </Card>
                <Card className="p-px bg-inherit text-card-foreground flex flex-col gap-2 rounded-none border-none shadow-none">
                  <div className="relative overflow-hidden text-white">
                    <Image src="/samplephoto.jpeg"
                      width={450}
                      height={450}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-4 rounded-full bg-primary py-0.5 px-2.5 border border-transparent text-xs text-white dark:text-black-400 transition-all shadow-sm w-20 text-center">
                      POEM
                    </div>
                    <h6 className="mb-2 text-slate-800 dark:text-gray-400 text-xl font-semibold">
                      Website Review Check
                    </h6>
                    <p className="text-black-500 dark:text-gray-400 mt-2 text-sm">
                      The place is close to Barceloneta Beach and bus stop just 2 min by walk
                      and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                      Barcelona.
                    </p>
                  </div>
                </Card>
                <Card className="p-px bg-inherit text-card-foreground flex flex-col gap-2 rounded-none border-none shadow-none">
                  <div className="relative overflow-hidden text-white">
                    <Image src="/samplephoto.jpeg"
                      width={450}
                      height={450}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-4 rounded-full bg-primary py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                      POEM
                    </div>
                    <h6 className="mb-2 text-slate-800 dark:text-gray-400 text-xl font-semibold">
                      Website Review Check
                    </h6>
                    <p className="text-black-500 dark:text-gray-400 mt-2 text-sm">
                      The place is close to Barceloneta Beach and bus stop just 2 min by walk
                      and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                      Barcelona.
                    </p>
                  </div>
                </Card>
              </div>
              <div className='py-2'>
                <div className="flex justify-end gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="lg">
                    <Link href="#">View all poems </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <Started /> */}

        <section className='bg-inherit'>
          <div className="py-10">
            {/* <div className="mx-auto max-w-5xl px-6"> */}
            <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
              <div>
                <h2 className="text-balance text-3xl font-semibold md:text-4xl">Featured Poets </h2>
                {/* <p className="text-muted-foreground mt-3 text-lg">Connect seamlessly with popular platforms and services to enhance your workflow.</p> */}
              </div>
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="p-px bg-inherit text-card-foreground flex flex-col gap-2 rounded-none border-none shadow-none">
                  <div className="relative overflow-hidden text-white">
                    <Image src="/samplephoto.jpeg"
                      width={450}
                      height={450}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-4 rounded-full bg-primary py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                      POEM
                    </div>
                    <h6 className="mb-2 dark:text-gray-400 text-slate-800 text-xl font-semibold">
                      Website Review Check
                    </h6>
                    <p className="text-black-500 dark:text-gray-400 mt-2 text-sm">
                      The place is close to Barceloneta Beach and bus stop just 2 min by walk
                      and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                      Barcelona.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <Blogpost />
      </main>
    </>
  );
}