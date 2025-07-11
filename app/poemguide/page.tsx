import { HeaderHero } from "../components/HeaderHero";
import AboutBanner from '../../public/books.jpg'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import FooterSection from "../components/FooterSection";



export default async function poemguide() {


    return (

        <>
            < HeaderHero />
            {/* console.log(peomsrecord); */}
            < main className="overflow-hidden">
                <section className=''>
                    <div className="relative pt-25">
                        <div className="relative mx-auto flex max-w-5xl flex-col px-6 lg:block">
                            <div className="relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:min-h-full before:mx-auto before:bg-gray-700 before:opacity-60">
                                <Image src={AboutBanner} alt='about' className='relative' />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-4xl font-bold text-white text-center">
                                    Poem Guide
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='bg-inherit'>
                    <div className="py-10">
                        {/* <div className="mx-auto max-w-5xl px-6"> */}
                        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
                            <div>
                                <h2 className="text-balance text-3xl font-semibold md:text-4xl"> Poem Guide </h2>
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
                                        <div className="mb-4 rounded-full bg-primary py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-25 text-center">
                                            POEM GUIDE
                                        </div>
                                        <h6 className="mb-2 dark:text-gray-400 text-slate-800 text-xl font-semibold">
                                            Website Review Check
                                        </h6>
                                        <p className="text-black-500 dark:text-gray-400 mt-2 text-sm">
                                            {`The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                            and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                                            Barcelona.`}
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
                                        <div className="mb-4 rounded-full bg-primary py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-25 text-center">
                                            POEM GUIDE
                                        </div>
                                        <h6 className="mb-2 text-slate-800 dark:text-gray-400 text-xl font-semibold">
                                            Website Review Check
                                        </h6>
                                        <p className="text-black-500 dark:text-gray-400 mt-2 text-sm">
                                            {`The place is close to Barceloneta Beach and bus stop just 2 min by walk
                      and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                      Barcelona.`}
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
                                        <div className="mb-4 rounded-full bg-primary py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-25 text-center">
                                            POEM GUIDE
                                        </div>
                                        <h6 className="mb-2 text-slate-800 dark:text-gray-400 text-xl font-semibold">
                                            Website Review Check
                                        </h6>
                                        <p className="text-black-500 dark:text-gray-400 mt-2 text-sm">
                                            {`The place is close to Barceloneta Beach and bus stop just 2 min by walk
                      and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                      Barcelona.`}
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
                <section className='bg-inherit'>
                    <div className="py-10">

                        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
                            <div className="max-w-5xl bg-herit border border-gray-200 rounded-xl shadow-2xs sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                                <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
                                    <Image className="size-full absolute top-0 start-0 object-cover" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Card Image" />
                                </div>
                                <div className="flex flex-wrap">
                                    <div className="p-4 flex flex-col h-full sm:p-7">
                                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                            Card title
                                        </h3>
                                        <p className="mt-1 text-gray-500 dark:text-neutral-400">
                                            {` Some quick example text to build on the card title and make up the bulk of the card's content.`}
                                        </p>
                                        <div className="mt-5 sm:mt-auto">
                                            <p className="text-xs text-gray-500 dark:text-neutral-500">
                                                Last updated 5 mins ago
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
            <FooterSection />
        </>
    );
}