import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-4 border-4 border-dashed border-green-500 p-4">
      {children}
    </div>
  );
}
