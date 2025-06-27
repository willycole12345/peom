import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

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
        <>
            <section className='bg-linear-to-b to-muted from-background'>
                <div className="py-12">
                    <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
                        {/* <div className="w-full max-w-md"> */}
                        <TabGroup>
                            <TabList className="flex gap-4 h-10">
                                {categories.map(({ name }) => (
                                    <Tab
                                        key={name}
                                        className="px-3 py-1 text-sm/6 font-semibold text-black focus:not-data-focus:outline-none data-focus:outline data-focus:outline-black data-hover:bg-black/5 data-selected:border-b-4 border-green-900  data-selected:data-hover:bg-black/10"
                                    >
                                        {name}
                                    </Tab>
                                ))}
                            </TabList>
                            <TabPanels className="mt-3">
                                {categories.map(({ name, posts }) => (
                                    <TabPanel key={name} className="bg-black/5 p-3">
                                        <ul>
                                            {posts.map((post) => (
                                                <li key={post.id} className="relative rounded-md p-3 text-sm/6 transition hover:bg-black/5">
                                                    <a href="#" className="font-semibold text-black">
                                                        <span className="absolute inset-0" />
                                                        {post.title}
                                                    </a>
                                                    <ul className="flex gap-2 text-white/50" aria-hidden="true">
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
                    </div>
                </div>
            </section>
        </>
    )
}
