"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import MenuData from "../../data/MegaMenu.json";

import CourseLayout from "./NavProps/CourseLayout";
import PageLayout from "./NavProps/PageLayout";
import ElementsLayout from "./NavProps/ElementsLayout";

import addImage from "../../public/images/service/mobile-cat.jpg";

const Nav = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const pathname = usePathname();

  const isActive = (href) => pathname.startsWith(href);

  const toggleMenuItem = (item) => {
    setActiveMenuItem(activeMenuItem === item ? null : item);
  };

  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        <li className="position-static">
          <Link href="/"> Home </Link>
        </li>
        <li className="with-megamenu has-menu-child-item">
          <Link
            className={`${activeMenuItem === "courses" ? "open" : ""}`}
            href="#"
            onClick={() => toggleMenuItem("courses")}
          >
            Courses
            <i className="feather-chevron-down"></i>
          </Link>

          <div
            className={`rbt-megamenu grid-item-2 ${activeMenuItem === "courses" ? "active d-block" : ""
              }`}
          >
            <div className="wrapper">
              {MenuData &&
                MenuData.menuData.map((data, index) => {
                  if (data.menuType === "grid-item-2") {
                    const elements = data.submenuBanner?.map(
                      (value, innerIndex) => (
                        <div className="row" key={innerIndex}>
                          <div className="col-lg-12">
                            <div className="mega-top-banner">
                              <div className="content">
                                <h4 className="title">{value.title}</h4>
                                <p className="description">
                                  {value.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    );
                    return elements;
                  }
                })}
              <div className="row row--15">
                <CourseLayout
                  courseTitle="Course Layout"
                  MenuData={MenuData}
                  type="grid-item-2"
                  courseType={true}
                  num={7}
                />
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <ul className="nav-quick-access">
                    {MenuData &&
                      MenuData.menuData.map((data, index) => {
                        if (data.menuType === "grid-item-2") {
                          const coursElements = data.menuFooterItems?.map(
                            (value, innerIndex) => (
                              <li key={innerIndex}>
                                <Link href={value.link}>
                                  <i className="feather-folder-minus"></i>
                                  {value.title}
                                </Link>
                              </li>
                            )
                          );
                          return coursElements;
                        }
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <Link className="position-static" href="/about-us-01">About Us</Link>
        </li>

        <li className="has-dropdown has-menu-child-item">
          <Link
            className={`${activeMenuItem === "dashboard" ? "open" : ""}`}
            href="#"
            onClick={() => toggleMenuItem("dashboard")}
          >
            Dashboard
            <i className="feather-chevron-down"></i>
          </Link>
          <ul
            className={`submenu ${activeMenuItem === "dashboard" ? "active d-block" : ""
              }`}
          >
            {MenuData &&
              MenuData.menuData.map((data, index) => {
                if (data.menuType === "default-dropdown") {
                  const elements = data.menuItems?.map((value, innerIndex) => (
                    <li className="has-dropdown" key={innerIndex}>
                      <Link href="#">{value.title}</Link>
                      <ul className="submenu">
                        {value.submenuItems?.map(
                          (submenuItem, submenuItemIndex) => (
                            <li key={submenuItemIndex}>
                              <Link
                                className={
                                  isActive(submenuItem.link) ? "active" : ""
                                }
                                href={submenuItem.link}
                              >
                                {submenuItem.title}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </li>
                  ));
                  return elements;
                }
                return null;
              })}
          </ul>
        </li>
        <li className="position-static">
          <Link
            href="/contact"> Contact Us
          </Link>
        </li>
        <li className="with-megamenu has-menu-child-item position-static">
          <Link href="/blog-grid"> Blog </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
