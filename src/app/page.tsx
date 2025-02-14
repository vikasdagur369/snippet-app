import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Home() {

  const snippets = await prisma.snippet.findMany();
  return (
    <div>

      <h1 className="font-bold text-4xl">Home</h1>
      <div className="flex item-center justify-between">
        <h1>Snippets</h1>
        <Link href={"/snippet/new"}><Button>New</Button></Link>

      </div>
      {
        snippets.map((snippet) => (
          <div key={snippet.id} className="flex items-center justify-between bg-gray-200 p-2 rounded-md my-2">
            <h1>{snippet.title}</h1>
            <Link href={`/snippet/${snippet.id}`}>
              <Button variant={'link'}>View</Button>
            </Link>
          </div>
        ))

      }



    </div>

  );
}
