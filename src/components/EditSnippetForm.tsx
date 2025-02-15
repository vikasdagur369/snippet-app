"use client";
import { useState } from "react";
import Editor from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { Button } from "./ui/button";
import { saveSnippet } from "@/actions";

const EditPageSnippetForm = ({ snippet }: { snippet: Snippet }) => {
    const [code, setCode] = useState(snippet.code);

    const changeEventHandler = (value: string = "") => {
        setCode(value);
    };

    const saveSnippetAction = saveSnippet.bind(null, snippet.id, code);

    return (
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg">
            {/* Header */}
            <form action={saveSnippetAction} className="flex items-center justify-between">
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    Your Code Editor ✨
                </h1>
                <Button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition-all"
                >
                    💾 Save
                </Button>
            </form>

            {/* Code Editor */}
            <div className="mt-4 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                <Editor
                    height="40vh"
                    theme="vs-dark"
                    defaultLanguage="javascript"
                    defaultValue={code}
                    onChange={changeEventHandler}
                    className="rounded-lg"
                />
            </div>
        </div>
    );
};

export default EditPageSnippetForm;
