import React from 'react'
import Image from 'next/image';
import { HeroHeader } from '../components/header';
import contactus from '../../public/contact.jpg';
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'


export default async function contact() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section className=''>
                    <div className="relative pt-25">
                        <div className="relative mx-auto flex max-w-5xl flex-col px-6 lg:block">
                            <div className="relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:min-h-full before:mx-auto before:bg-gray-700 before:opacity-20">
                                <Image src={contactus} alt='about' className='relative' />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-4xl font-bold text-white text-center">
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-inhert py-15 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-4xl px-4 lg:px-0">
                        <h1 className="text-4xl font-semibold lg:text-5xl">Help us route your inquiry</h1>
                        <p className="text-muted-foreground mt-4 text-lg">{`We'll help you find the right plan and pricing for your business.`}</p>
                        <div className="mt-12 grid gap-12 lg:grid-cols-5">
                            <div className="grid grid-cols-2 lg:col-span-2 lg:block lg:space-y-12">
                                <div className="flex flex-col justify-between space-y-6">
                                    <div>
                                        <h2 className="mb-3 text-lg font-semibold">Collaborate</h2>
                                        <Link
                                            href="mailto:hello@tailus.com"
                                            className="text-primary text-lg hover:underline">
                                            {`hello@tailark.com`}
                                        </Link>
                                        <p className="mt-3 text-sm">{`+243 000 000 000`}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between space-y-6">
                                    <div>
                                        <h3 className="mb-3 text-lg font-semibold">Press</h3>
                                        <Link
                                            href="mailto:press@tailark.com"
                                            className="text-primary text-lg hover:underline">
                                            press@tailark.com
                                        </Link>
                                        <p className="mt-3 text-sm">{`+243 000 000 000`}</p>
                                    </div>
                                </div>
                            </div>

                            <form
                                action=""
                                className="@container lg:col-span-3">
                                <Card className="p-8 sm:p-12">
                                    <h3 className="text-xl font-semibold">{`Let's get you to the right place`}</h3>
                                    <p className="mt-4 text-sm">{`Reach out to our sales team! We’re eager to learn more about how you plan to use our application.`}</p>

                                    <div className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
                                        <div className="@md:grid-cols-2 grid gap-3 *:space-y-3">
                                            <div>
                                                <Label
                                                    htmlFor="name"
                                                    className="space-y-2">
                                                    Full name
                                                </Label>
                                                <Input
                                                    type="text"
                                                    id="name"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="email">Work Email</Label>
                                                <Input
                                                    type="email"
                                                    id="email"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <Label htmlFor="country">Country/Region</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a country" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1">DR Congo</SelectItem>
                                                    <SelectItem value="2">United States</SelectItem>
                                                    <SelectItem value="3">France</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="@md:grid-cols-2 grid gap-3 *:space-y-3">
                                            <div>
                                                <Label htmlFor="website">Company Website</Label>
                                                <Input
                                                    type="url"
                                                    id="website"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="job">Job function</Label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a job function" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="1">Finance</SelectItem>
                                                        <SelectItem value="2">Education</SelectItem>
                                                        <SelectItem value="3">Legal</SelectItem>
                                                        <SelectItem value="4">More</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        <div>
                                            <Label htmlFor="msg">Message</Label>
                                            <Textarea
                                                id="msg"
                                                rows={3}
                                            />
                                        </div>
                                        <Button>Submit</Button>
                                    </div>
                                </Card>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}