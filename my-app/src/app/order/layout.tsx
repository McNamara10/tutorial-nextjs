import React from "react";

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-4 border-4 border-dashed border-red-500 p-4">
      {children}
    </div>
  );
}
