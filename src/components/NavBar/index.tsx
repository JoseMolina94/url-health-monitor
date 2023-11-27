import React from "react";

export const NavBar = ({children}) => {

  return (
    <div>
      <div
        className="p-2 flex gap-4 items-center"
        style={{
          borderBottom: "1px solid gray"
        }}
      >
        <img
          src="/images/logo-mini.png"
          alt="logo-mini"
          className="rounded-lg w-16"
        />
        <h1 className="text-4xl font-bold font-chango">
          URL Watcher
        </h1>
      </div>

      {children}
    </div>
  )
}
