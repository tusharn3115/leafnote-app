import Image from "next/image";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className || ""}`}>
      {/* Logo image */}
      <Image
        src="/leafnote.png"
        alt="LeafNote Logo"
        width={38}   // set your desired size
        height={38}
        priority
      />
      {/* Logo text */}
      <h1 className="text-xl font-semibold text-foreground">LeafNote</h1>
    </div>
  );
};

export default Logo;