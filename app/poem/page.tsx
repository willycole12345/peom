import { HeroHeader } from "../components/header";
import Image from "next/image";
import AboutBanner from '../../public/aboutus.jpg'
import CardSection from "../components/CardSection";
import { PeomsDetails } from "@/app/actions";
import FooterSection from "../components/FooterSection";

export default async function poem() {
    const peoms = await PeomsDetails();
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
                                    Poem
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='bg-inherit'>
                    <div className="py-10">
                        <CardSection title={'Recent Poem'} records={peoms} buttonshow={false} />
                    </div>
                </section>
            </main>
            <FooterSection />
        </>
    );
}