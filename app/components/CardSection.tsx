import Image from "next/image"
import { Card } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

type PeomDetailsRecord = {
    id: number;
    title: string;
    posttype: string;
    description: string;
    audio: string | null;
    image: string | null;
    content: string | null;
    // slug: string | null;
    // published: string | null;
    // authorId: number;
    // createdAt: Date;
    // updatedAt: Date;
};

type PeomDetails = {
    title: string;
    buttonshow: boolean;
    records: PeomDetailsRecord[];
};


export default async function CardSection({ title, records, buttonshow }: PeomDetails) {
    const basepath = '/';
    return (
        <>
            <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
                <div>
                    <h2 className="text-balance text-3xl font-semibold md:text-4xl">{title}</h2>
                    {/* <p className="text-muted-foreground mt-3 text-lg">Connect seamlessly with popular platforms and services to enhance your workflow.</p> */}
                </div>
                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {records.map((record) => (

                        // <CardSection id={peom.id} title={'Recent Peom'} picture={peom.picture} posttype={peom.posttype} posttitle={peom.posttitle} description={peom.description} />



                        <Card key={record.id} className="p-px bg-inherit text-card-foreground flex flex-col gap-2 rounded-none border-none shadow-none">
                            <div className="relative overflow-hidden text-white">
                                <Image src={basepath + record.image}
                                    width={450}
                                    height={450}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="p-4">
                                <div className="mb-4 rounded-full bg-primary py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                                    {record.posttype}
                                </div>
                                <h6 className="mb-2 dark:text-gray-400 text-slate-800 text-xl font-semibold">
                                    {record.title}
                                </h6>
                                <p className="text-black-500 dark:text-gray-400 mt-2 text-sm overflow-hidden text-ellipsis line-clamp-3">
                                    {record.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
                {buttonshow === true ?
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
                    :
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                }
            </div>
        </>
    );

}