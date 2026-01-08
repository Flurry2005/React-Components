import React, { useEffect, useState } from "react";

{
  /* Make sure to copy custom variant 'details-open-sibling' from index.css */
}

interface AnimatedExpandableDetailProps {
  title: string;
  children: React.ReactNode;
  tswidth: string;
  tsheight: string;
  tsborder?: string;
  tsborderColor?: string;
  tsbannerColor?: string;
  tscontentColor?: string;
  tstextColor?: string;
  tstitleColor?: string;
}

function AnimatedExpandableDetail({
  title,
  children,
  tswidth,
  tsheight,
  tsborder = "border-0",
  tsbannerColor = "bg-slate-900",
  tscontentColor = "bg-slate-900",
  tstextColor = "text-white",
  tstitleColor = "text-white",
  tsborderColor = "text-white",
}: AnimatedExpandableDetailProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article>
      <details
        style={{ maxWidth: `${tswidth}` }}
        className={
          "mt-2 rounded-md transition-[border-radius] duration-50 ease-out " +
          tsbannerColor +
          " " +
          tsborderColor +
          " " +
          tsborder
        }
        onToggle={(e) => {
          const el = e.currentTarget;
          if (!el.open) {
            setTimeout(() => {
              el.classList.add("rounded-md");
            }, 350);
          } else {
            el.classList.remove("rounded-md");
            el.classList.add("rounded-t-md");
          }

          setIsOpen((prev) => !prev);
        }}
      >
        <summary className="[&::-webkit-details-marker]:hidden block select-none">
          <span className="flex justify-between items-center pr-2 pl-[0.7rem] text-[1rem]">
            <span className="relative flex items-center bg-transparent h-12 hover:cursor-pointer details-span">
              <i
                style={{ rotate: isOpen ? "90deg" : "0deg" }}
                className={
                  "flex items-center mr-2 text-xl transition-[rotate] duration-400 ease-out fa-caret-right fa-solid " +
                  tstextColor
                }
              ></i>
              <h1 className={tstitleColor}>{title}</h1>
            </span>
          </span>
        </summary>
      </details>
      {tsborder !== "border-0" ? (
        <div
          style={{
            maxWidth: `${tswidth}`,
            maxHeight: isOpen ? `${tsheight}` : "0px",
          }}
          className={
            "border-0 px-2.5 overflow-hidden rounded-b-md transition-[max-height,border-color,border-width] duration-400 ease-out details-open-sibling:border-l details-open-sibling:border-r details-open-sibling:border-b not-details-open-sibling:border-gray-100! " +
            tscontentColor +
            " " +
            tsborderColor
          }
        >
          {children}
        </div>
      ) : (
        <div
          style={{
            maxWidth: `${tswidth}`,
            maxHeight: isOpen ? `${tsheight}` : "0px",
          }}
          className={
            "box-border border-0 px-2.5 overflow-hidden rounded-b-md transition-[max-height] duration-400 ease-out " +
            tscontentColor
          }
        >
          <p className={tstextColor}>{children}</p>
        </div>
      )}
    </article>
  );
}

export default AnimatedExpandableDetail;
