"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null); // For nested dropdown

  const getPathMatch = (href) =>
    href && href.split("/")[1] === pathname.split("/")[1];

  const renderLinks = (links, parentIndex = null) => (
    <ul style={{ overflowY: "auto", backgroundColor: "white" }}>
      {links.map((link, index) => {
        const isNestedOpen = openDropdown === `${parentIndex}-${index}`;
        const hasSubLinks = link.subLinks && link.subLinks.length > 0;

        return (
          <li
            key={index}
            className={`${
              link.href && getPathMatch(link.href) ? "current" : ""
            } ${hasSubLinks ? "dropdown2" : ""}`}
          >
            {hasSubLinks ? (
              <>
                <a onClick={() =>
                  setOpenDropdown(
                    isNestedOpen ? null : `${parentIndex}-${index}`
                  )
                }>
                  {link.label}
                </a>
                {isNestedOpen && renderLinks(link.subLinks)}
                <div className="dropdown2-btn"></div>
              </>
            ) : (
              <Link href={link.href}>{link.label}</Link>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {menuItems.map((item, index) => {
        const isDropdown = !!item.links;
        const isCurrent = isDropdown
          ? item.links.some(
              (link) =>
                (link.href && getPathMatch(link.href)) ||
                (link.subLinks &&
                  link.subLinks.some((sub) => getPathMatch(sub.href)))
            )
          : item.href && getPathMatch(item.href);

        return (
          <li key={index} className={`dropdown2 ${isCurrent ? "current" : ""}`}>
            {isDropdown ? (
              <>
                <a>{item.title}</a>
                {renderLinks(item.links, index)}
                <div className="dropdown2-btn"></div>
              </>
            ) : (
              <Link href={item.href}>{item.title}</Link>
            )}
          </li>
        );
      })}
    </>
  );
}
