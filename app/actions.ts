'use server'

import prisma from "@/app/libs/db"; // adjust path if needed

export async function PeomsDetails() {
    const posts = await prisma.post.findMany();
    return posts;
}

export async function featurePeoms() {
    const contentposts = await prisma.post.findMany({
        where: {
            posttype: "Peom",
        },
        take: 3,
    });

    return contentposts;

}


// PeomsDetails()
//     .then(async () => {
//         await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })