import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1A1919] text-white">
      <footer className="footer  bg-[#1A1919] text-white px-72 pt-32 ">
        <aside>
          <h1 className="text-3xl font-semibold">CareerHub</h1>
          <p>
            There are many variations of passages <br /> of Lorem Ipsum , but
            the majority have <br /> suffered alteration in some form.
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Work</a>
          <a className="link link-hover">Latest News</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Prototype</a>
          <a className="link link-hover">Plan & Pricing</a>
          <a className="link link-hover">Customers</a>
          <a className="link link-hover">Integrations</a>
        </nav>

        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Developers</a>
        </nav>

        <div>
          <h1>Contact</h1>
          <p>524 Broadway, NYC</p>
          <p>+1 777 - 978 - 5570</p>
        </div>
      </footer>

      <div className="flex justify-between px-72 h-48 pt-12 ">
        <p>@2023 CareerHub. All Rights Reserved</p>
        <p>Powered by CareerHub</p>
      </div>
    </div>
  );
};

export default Footer;
