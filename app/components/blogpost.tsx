import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

const categories = [
    {
        name: 'Recent',
        posts: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
        ],
    },
    {
        name: 'Popular',
        posts: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],
    },
    {
        name: 'Trending',
        posts: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
    },
]

export default async function Blogpost() {
    return (
        // <div className="flex relative h-screen w-full justify-center px-4 pt-24">
        <div className="mt-10 max-w-7xl md:text-6xl lg:mt-16 px-4 pt-10">
            {/* <div className="flex relative h-screen w-full justify-center px-4 pt-24"> */}
            <div className="pl-6 w-full">
                <TabGroup>
                    <TabList className="flex gap-4">
                        {categories.map(({ name }) => (
                            <Tab
                                key={name}
                                className="data-hover:underline text-sm/6  data-selected:text-green-800"
                            // className="rounded-full px-3 py-1 text-sm/6 font-semibold text-green-800 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/5 data-selected:bg-white/10 data-selected:data-hover:bg-white/10"
                            >
                                {name}
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanels className="mt-3">
                        {categories.map(({ name, posts }) => (
                            <TabPanel key={name} className=" bg-black/5 p-3">
                                <ul>
                                    {posts.map((post) => (
                                        <li key={post.id} className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5">
                                            <a href="#" className="font-semibold text-green-800	">
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                            <ul className="flex gap-2 text-green-800/50" aria-hidden="true">
                                                <li>{post.date}</li>
                                                <li aria-hidden="true">&middot;</li>
                                                <li>{post.commentCount} comments</li>
                                                <li aria-hidden="true">&middot;</li>
                                                <li>{post.shareCount} shares</li>
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </TabPanel>
                        ))}
                    </TabPanels>
                </TabGroup>
                {/* //grid grid-cols-12 gap-y-4 divide-y divide-gray-100 sm:gap-x-6 md:gap-x-8 lg:gap-y-0 lg:divide-y-0 */}
                <div className="mx-auto max-w-5xl px-6">
                    <div className="text-left">
                        <h2 className="text-slate-800 text-3xl font-semibold">
                            Recent Peoms
                        </h2>
                    </div>
                </div>
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

                    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">

                        <div className="p-4">
                            <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                                POPULAR
                            </div>
                            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                Website Review Check
                            </h6>
                            <p className="bg-black-600 dark:text-gray-400 mt-2 text-sm">
                                The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                                Barcelona.
                            </p>
                        </div>

                    </div>
                    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">

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

                    </div>
                </div>

                {/* <Card className="p-px bg-inherit text-card-foreground flex flex-col gap-2 rounded-none shadow-none">
                    <div className="p-4">
                        <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                            POPULAR
                        </div>
                        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                            Website Review Check
                        </h6>
                        <p className="text-green-500 dark:text-gray-400 mt-2 text-sm">
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                            Barcelona.
                        </p>
                    </div>
                </Card> */}
                {/* <Card className="p-px bg-inherit text-card-foreground flex flex-col gap-2 rounded-none border-none shadow-none">
                    <div className="p-4">
                        <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                            POPULAR
                        </div>
                        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                            Website Review Check
                        </h6>
                        <p className="text-green-500 dark:text-gray-400 mt-2 text-sm">
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                            Barcelona.
                        </p>
                    </div>
                </Card> */}


            </div >
        </div >


    )
}
