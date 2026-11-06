import React from 'react';
import Image from 'next/image';

// Shows the project image, or a terminal-style panel when there is no screenshot
// (most offensive-security work can't be shown as a screenshot).
export default function ProjectVisual({ image, title, terminal = [] }) {
  if (image) {
    return (
      <Image
        src={image}
        alt={`${title} preview`}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="h-full w-full rounded-lg object-cover transition-transform duration-500 hover:scale-105"
      />
    );
  }

  return (
    <div className="w-full rounded-lg bg-black p-4 font-mono text-xs leading-relaxed text-green-400 shadow-lg sm:p-5 sm:text-sm md:text-base">
      <div className="flex gap-2 mb-4">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>
      {terminal.map((line, i) => (
        <p key={i} className={`break-words ${line.startsWith('$') ? 'text-white' : 'text-green-400'}`}>
          {line}
        </p>
      ))}
      <p className="text-white">
        $ <span className="animate-pulse">▌</span>
      </p>
    </div>
  );
}
