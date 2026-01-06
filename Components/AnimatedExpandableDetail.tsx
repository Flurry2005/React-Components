import React, { useState } from "react";

{
  /* Make sure to copy custom variant 'details-open-sibling' from index.css */
}

interface AnimatedExpandableDetailProps {
  title: string;
  children: React.ReactNode;
  width: string;
  height: string;
  border?: boolean;
  bannerColor?: string;
  contentColor?: string;
  textColor?: string;
  titleColor?: string;
}

function AnimatedExpandableDetail({
  title,
  children,
  width,
  height,
  border = false,
  bannerColor = "bg-slate-900",
  contentColor = "bg-slate-900",
  textColor = "text-white",
  titleColor = "text-white",
}: AnimatedExpandableDetailProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <details
        style={{ maxWidth: `${width}` }}
        className={
          "mt-2 rounded-md transition-[border-radius] duration-50 ease-out " +
          bannerColor
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
            <span className="relative flex items-center bg-transparent h-12 text-white hover:cursor-pointer details-span">
              <i
                style={{ rotate: isOpen ? "90deg" : "0deg" }}
                className="flex items-center mr-2 text-xl transition-[rotate] duration-400 ease-out fa-caret-right fa-solid"
              ></i>
              <h1 className={titleColor}>{title}</h1>
            </span>
          </span>
        </summary>
      </details>
      {border ? (
        <div
          style={{
            maxWidth: `${width}`,
            maxHeight: isOpen ? `${height}` : "0px",
          }}
          className={
            "box-border bg-slate-900 border-0 px-2.5 overflow-hidden rounded-b-md text-white transition-[max-height,border-color] duration-400 ease-out details-open-sibling:border-l-2 details-open-sibling:border-r-2 details-open-sibling:border-b-2 details-open-sibling:border-green-500"
          }
        >
          {children}
        </div>
      ) : (
        <div
          style={{
            maxWidth: `${width}`,
            maxHeight: isOpen ? `${height}` : "0px",
          }}
          className={
            "box-borderborder-0 px-2.5 overflow-hidden rounded-b-md text-white transition-[max-height] duration-400 ease-out " +
            contentColor
          }
        >
          <p className={textColor}>{children}</p>
        </div>
      )}
    </article>
  );
}

export default AnimatedExpandableDetail;
