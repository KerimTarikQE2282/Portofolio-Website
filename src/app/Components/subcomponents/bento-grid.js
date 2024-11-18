import { cn } from "../../lib/utils.ts";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}>
      {children}
    </div>)
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  description2,
  header,
  icon
}) => {
  return (
    (<div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}>
      
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        
        <div
          className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div
          className="font-sans  text-neutral-600 font-light dark:text-neutral-300">
          {description}
        </div>
        <div
          className="font-sans font-light text-neutral-600 mt-5 dark:text-neutral-300">
          {description2}
        </div>
        
      </div>
    </div>)
  );
};