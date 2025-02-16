import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";


export const dynamic = "force-dynamic" // forcefully stops the caching


export default async function Home() {


  const snippets = await prisma.snippet.findMany();

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white p-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Code Snippet Manager
        </h1>

        <div className="flex items-center justify-between bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-lg">
          <h1 className="text-xl font-semibold">Snippets</h1>
          <Link href="/snippet/new">
            <Button className="bg-blue-500 hover:bg-blue-600 transition-all text-white px-4 py-2 rounded-lg shadow-md">
              + New Snippet
            </Button>
          </Link>
        </div>

        <div className="mt-6 space-y-4">
          {snippets.map((snippet) => (
            <div key={snippet.id} className="flex items-center justify-between bg-white/10 backdrop-blur-lg p-4 rounded-lg shadow-md transition-transform hover:scale-105">
              <h1 className="text-lg font-medium">{snippet.title}</h1>
              <Link href={`/snippet/${snippet.id}`}>
                <Button variant="ghost" className="text-blue-400 hover:text-blue-300 transition">
                  View →
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
