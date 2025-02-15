"use client";
import { useState } from 'react';
import Editor from '@monaco-editor/react';
import type { Snippet } from '@prisma/client';
import { Button } from './ui/button';
import { saveSnippet } from "@/actions"

const EditPageSnippetForm = ({ snippet }: { snippet: Snippet }) => {
    const [code, setCode] = useState(snippet.code)

    const changeEventHandler = (value: string = "") => {
        setCode(value)
    }

    // this is a client component ,so we cant use server action here, but we can make server action in another file or folder then can use here.

    const saveSnippetAction = saveSnippet.bind(null, snippet.id, code)


    return (
        <div className='flex flex-col gap-4'>
            <form action={saveSnippetAction} className='flex items-center justify-between'>
                <h1 className='font-bold text-xl'
                >Your code editor!</h1>
                <Button type='submit'>Save</Button>
            </form>
            <Editor
                height="40vh"
                theme="vs-dark"
                defaultLanguage="javascript"
                defaultValue={code}
                onChange={changeEventHandler}

            />
        </div>
    )
}
export default EditPageSnippetForm;