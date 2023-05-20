import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdAddCall } from 'react-icons/md'

const About_us = () => {
  return (
    <>
      <div className="bg-info  text-black" width={100}>
        <h1 className="text-center navbar-top-bg mt 2">ABOUT COMPANY</h1>
        {/* <Link href='/store' className=''> Store</Link> */}
      </div>
      <section>
        <div className="row g-3 mt-4">
          <div className="col-lg-6">
            <div className="p-2">
              <Image
                src="/images/4.png"
                alt=""
                width={450}
                height={420}
                className="rounded-circle"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <h2>Who are you?</h2>
            <div>
              <h4>
                Transparent and talented, our strong process keeps our team
                focused and yours involved. We love the work we do, the clients
                we work with and the amazing people we work alongside!
              </h4>
            </div>
            <div className="mt-4">
              <h4>
                We closely partner with our clients to become a trusted advisor
                and extension of their business, driving amazing digital
                results. Our mission is to create stunning websites with
                exceptional UI/UX and brilliant App Devlopment, MLM Marketing
                strategies focused on the B2B industry.
              </h4>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5">
        <h5>. Professional Team</h5>
        <h2>Meet Our Creative Team</h2>
        <p>If we had a ‘secret sauce’ it would be our awesome people.</p>
        <p>We have only professional team!</p>
        <div className="row">
          <div
            className="col-sm bg-light view overlay div-fluid"
            height={420}
            width={200}
          >
            <div className="mt-4">
              <Image
                src="/images/3.jpg"
                alt=""
                width={250}
                height={320}
                className="rounded-circle"
              />
            </div>
          </div>
          <div
            className="col-sm bg-light view overlay div-fluid"
            height={420}
            width={200}
          >
            <div className="mt-4">
              <Image
                src="/images/5.jpg"
                alt=""
                width={250}
                height={320}
                className="rounded-circle"
              />
            </div>
          </div>
          <div
            className="col-sm bg-light view overlay div-fluid"
            height={420}
            width={200}
          >
            <div className="mt-4">
              <Image
                src="/images/3.jpg"
                alt=""
                width={250}
                height={320}
                className="rounded-circle"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3 mt-5">
        <div className="col-lg-6">
          <div class="bio-data">
            <h2 class="common-heading">
              Work with a Dedicated Website Development Company
            </h2>
            <p>
              Hire website developer, mobile application developer, project
              manager is having a team of dedicated and professional members.
            </p>
            <p>
              itaque voluptes nesciunt cum dolorum. quidem sed id repellat
              facere quod placeat presuntium.
            </p>
            <div className="bio-data-stats">
              <div className="bio-stats">
                <h3>Design</h3>
                <div class="progress">
                  <div
                    class="progress-bar w-75"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    75%
                  </div>
                </div>
              </div>
              <div className="bio-stats">
                <h3>HTML</h3>
                <div class="progress">
                  <div
                    class="progress-bar w-100"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    100%
                  </div>
                </div>
              </div>
              <div>
                <h3>CSS</h3>
                <div class="progress">
                  <div
                    class="progress-bar w-75"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    75%
                  </div>
                </div>
              </div>
              <div className="bio-stats">
                <h3>JavaScript</h3>
                <div class="progress">
                  <div
                    class="progress-bar w-75"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100">
                    75%
                  </div>
                </div>
              </div>
              <div className="bio-stats">
                <h3>React</h3>
                <div class="progress">
                  <div
                    class="progress-bar w-100"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100">
                    100%
                  </div>
                </div>
              </div>
              <div className="bio-stats">
                <h3>NextJS</h3>
                <div class="progress">
                  <div
                    class="progress-bar w-100"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    100%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mt-4">
            <Image
              src="/images/4.png"
              alt=""
              width={450}
              height={420}
              className="rounded-circle"
            />
          </div>
        </div>
      </div>

      {/* // <div className={Styles.container}>
    //   <h1>About E-COMMERCE</h1>
    //    <h3>INTRODUCTION</h3>
    //    <p>
    //    What is an About Us Page? An About Us page is an opportunity to introduce your company on your own terms. It's where potential customers will go to find out why you're passionate about your products – and why they should be, too. A well-crafted About Us page is the key to building trust and loyalty with your customers.
    //    </p>
    //    <h3>SERVICE OFFERED</h3>
    //    <p>edgxveuh</p>
    //    <h3>Contact Us </h3>
    // </div> */}

      <footer className="bg-primary">
        <div className="bg-primary">
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm  text-white" height={420} width={200}>
                <h4>Quick Link</h4>
                <h5>About Us</h5>
                <h5>Over Team </h5>
                <h5>Privacy Policy</h5>
                <h5>FAQ</h5>
                <h5>Blog</h5>
                <h5>Contact Us</h5>
              </div>
              <div className="col-sm text-white" height={420} width={200}>
                <h2>Service</h2>
                <h5>About Us</h5>
                <h5>Over Team </h5>
                <h5>Privacy Policy</h5>
                <h5>FAQ</h5>
                <h5>Blog</h5>
                <h5>Contact Us</h5>
              </div>
              <div className="col-sm text-white" height={420} width={200}>
                <h2>Contacts</h2>
                <h5>Adress : </h5>
                <h5>anandyadv77177@gmail.com </h5>
                <h5>
                  <MdAddCall />
                  +91 7717730939
                </h5>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default About_us
