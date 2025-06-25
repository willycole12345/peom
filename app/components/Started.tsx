import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Started() {
    return (
        <section className='bg-linear-to-b to-muted from-background'>
            <div className="py-12">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <h2 className="text-foreground text-balance text-3xl font-semibold lg:text-4xl">Start your poems Journey today </h2>
                        </div>
                        <div className="flex justify-end gap-3">
                            <Button
                                asChild
                                variant="outline"
                                size="lg">
                                <Link href="#">Get Started</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}