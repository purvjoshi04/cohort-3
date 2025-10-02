import { PrismaClient } from './generated/prisma';

const client = new PrismaClient();

async function main() {
    const user = await client.todo.create({
        data: {
            title: "go to gym",
            description: "go to gym",
            done: false,
            id: 1,
            userId: 1
        }
    })
    console.log(user)
}
main()