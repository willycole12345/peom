import React from 'react'
import Image from 'next/image';
import AboutBanner from '../../public/aboutus.jpg'
import { HeroHeader } from '../components/header';

export default function About() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section className=''>
                    <div className="relative pt-25">
                        <div className="relative mx-auto flex max-w-5xl flex-col px-6 lg:block">
                            <div className="relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:min-h-full before:mx-auto before:bg-gray-700 before:opacity-60">
                                <Image src={AboutBanner} alt='about' className='relative' />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-4xl font-bold text-white text-center">
                                    About Us
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='py-5'>
                        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
                            <h4 className="mt-5 text-2xl font-bold text-left">
                                Our Mission
                            </h4>
                            <p className='mt-2'>
                                {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='py-5'>
                        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
                            <h4 className="mt-5 text-2xl font-bold text-left">
                                How We Fulfill Our Mission
                            </h4>
                            <p className='mt-2'>
                                {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                            </p>
                        </div>
                    </div>
                </section>
            </main >
        </>
    );
}