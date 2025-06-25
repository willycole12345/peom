import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
export default async function Peoms() {
    return (
        <>

            <section className="bg-background pb-16 md:pb-32">
                <div className="group relative m-auto max-w-6xl px-6">
                    <h2 className="relative z-10 max-w-xl text-2xl font-medium lg:text-2xl">Recent Peoms</h2>
                    <div className="mt-8 text-pretty text-lg">
                        <div className='grid grid-cols-3 gap-y-4 divide-y divide-gray-100 sm:gap-x-6 md:gap-x-8 lg:gap-y-0 lg:divide-y-0'>
                            {/* <div className="mt-12 grid grid-cols-12 sm:grid-cols-2 lg:grid-cols-3"> */}
                            <Card className="p-px bg-inherit text-card-foreground flex flex-col gap-2 rounded-none border-none shadow-none">
                                <div className="relative overflow-hidden text-white">
                                    <Image src="/samplephoto.jpeg"
                                        width={450}
                                        height={450}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                                        POPULAR
                                    </div>
                                    <h6 className="mb-2 text-slate-800 text-xl font-semibold">
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
                                    <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                                        POPULAR
                                    </div>
                                    <h6 className="mb-2 text-slate-800 text-xl font-semibold">
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
                                    <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                                        POPULAR
                                    </div>
                                    <h6 className="mb-2 text-slate-800 text-xl font-semibold">
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

            </section >
        </>
    )
}
