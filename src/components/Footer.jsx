import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-500 mt-7 pb-5 text-white">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="grid row-gap-10 lg:grid-cols-6 ">
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
            <div>
              <p className="font-bold tracking-wide ">Quickas</p>
              <ul className="mt-2 space-y-2 ">
                <li>
                  <a
                    href="/News"
                    className=" transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/Sports"
                    className=" transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Sports
                  </a>
                </li>
                <li>
                  <a
                    href="/Business"
                    className=" transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/Entertainment"
                    className=" transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/Admin"
                    className=" transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Admin
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold tracking-wide ">Contacts</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <p className="">
                    Phone No:
                    <a
                      href="tel:000-252-5200"
                      className=" transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      {" "}
                      8302892110
                    </a>
                  </p>
                </li>
                <li>
                  <p className="">
                    E-mail:
                    <a
                      href="mailto:amulyaparashar258@gmail.com"
                      className=" transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      {" "}
                      amulyaparashar258@gmail.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-10 md:max-w-md lg:col-span-2">
            <span className="text-base font-bold tracking-wide ">
              Message Us
            </span>
            {}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;