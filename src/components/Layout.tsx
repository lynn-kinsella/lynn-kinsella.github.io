import React from "react"

interface LayoutProps{
  children: React.ReactNode;
}

export function Layout({children}: LayoutProps){
  return (
    <div className="flex flex-col gap-4 m-4 items-center">
      {children}
    </div>
  )
}