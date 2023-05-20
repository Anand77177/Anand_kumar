import React from 'react'
import Link from 'next/link';
import Image from "next/image";
const Support = () => {
  return (
    <>
      <nav className="navbar navbar-top-bg text-white">
        <div className="container-md">
          <div>
            <li>Support +91 7717730939</li>
          </div>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light float-end">
        <div class="container-fluid float-end">
          <a class="navbar-brand" href="#">
            Help center
          </a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="navbar-brand">
              <a class="nav-link active" aria-current="page" href="#">
                Community
              </a>
            </li>
            <li class="navbar-brand">
              <a class="nav-link active" aria-current="page" href="#">
                System Status
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mt-5 bg-secondary">denkewhoidwe</div>
    </>
  );
}

export default Support