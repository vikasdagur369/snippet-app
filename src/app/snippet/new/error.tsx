"use client"

import React from "react";

type errorPageProps = {
    error: Error
}

const ErrorPage: React.FC<errorPageProps> = ({ error }) => {
    return (
        <div>{error.message}</div>
    )
}
export default ErrorPage