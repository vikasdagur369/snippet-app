import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

const CreateSnippetPage = () => {
    async function createSnippet(formData: FormData) {
        "use server";

        const title = formData.get("title") as string;
        const code = formData.get("code") as string;

        const snippet = await prisma.snippet.create({
            data: { title, code },
        });
        console.log("Created snippet:", snippet);
        redirect("/");
    }

    return (
        <div className="max-w-lg mx-auto bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg">
            {/* Header */}
            <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                ✨ Create New Snippet
            </h1>

            {/* Form */}
            <form action={createSnippet} className="mt-6 space-y-4">
                <div>
                    <Label className="text-gray-300 font-semibold">Title</Label>
                    <Input
                        type="text"
                        name="title"
                        id="title"
                        className="mt-1 w-full p-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter snippet title..."
                    />
                </div>

                <div>
                    <Label className="text-gray-300 font-semibold">Code</Label>
                    <Textarea
                        name="code"
                        id="code"
                        className="mt-1 w-full p-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                        placeholder="Write your code here..."
                        rows={6}
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition-all"
                >
                    🚀 Create Snippet
                </Button>
            </form>
        </div>
    );
};

export default CreateSnippetPage;
