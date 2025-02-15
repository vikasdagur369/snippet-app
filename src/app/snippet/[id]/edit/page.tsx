import EditPageSnippetForm from "@/components/EditSnippetForm"
import { prisma } from "@/lib/prisma";



const EditPageSnippet = async ({ params }: { params: { id: string } }) => {

    const id = parseInt(params.id);


    const snippet = await prisma.snippet.findUnique({
        where: {
            id
        }
    })

    if (!snippet) return <h1>Snippet not found!</h1>

    return (
        < div >

            <EditPageSnippetForm snippet={snippet} />
        </div>
    )
}
export default EditPageSnippet