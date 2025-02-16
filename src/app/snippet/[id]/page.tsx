import { deleteSnippet } from "@/actions";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";



const SnippetDetailPage = async ({ params }: { params: { id: string } }) => {

    const id = Number(params.id); // Ensure safe conversion

    if (isNaN(id)) {
        return (
            <h1 className="text-center text-xl font-semibold text-red-500">
                🚨 Invalid snippet ID!
            </h1>
        );
    }

    const snippet = await prisma.snippet.findUnique({
        where: { id },
    });

    if (!snippet)
        return (
            <h1 className="text-center text-xl font-semibold text-red-500">
                🚨 Snippet not found!
            </h1>
        );

    const deleteSnippetAction = deleteSnippet.bind(null, id);

    return (
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                    ✨ {snippet.title}
                </h1>

                {/* Buttons */}
                <div className="flex gap-2">
                    <Link href={`/snippet/${snippet.id}/edit`}>
                        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                            ✏️ Edit
                        </Button>
                    </Link>

                    <form action={deleteSnippetAction}>
                        <Button
                            variant="destructive"
                            type="submit"
                            className="bg-red-500 hover:bg-red-600"
                        >
                            🗑️ Delete
                        </Button>
                    </form>
                </div>
            </div>

            {/* Code Block */}
            <div className="rounded-lg overflow-hidden border border-gray-700">
                <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                    {snippet.code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default SnippetDetailPage;
