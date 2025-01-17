"use client"

import * as React from "react"
import {SessionProvider as ParentSessionProvider, SessionProviderProps} from "next-auth/react";

export function SessionProvider({children, ...props}: SessionProviderProps) {
    return <ParentSessionProvider {...props}>{children}</ParentSessionProvider>
}
