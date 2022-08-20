import { Heading } from "@chakra-ui/react";
import React from "react";
import paymentMethods from "../../assets/payment-methods.png";
export default function Footer() {
  return (
    <footer className="bg-[#2c3640] text-white select-none">
      <div className="container grid grid-cols-1  md:grid-cols-4">
        <div>
          <Heading className="my-3" as="h3" size="md" fontWeight={"medium"}>
            Custom Links
          </Heading>
          <h5 className="footerLink">About Us</h5>
          <h5 className="footerLink">Delivery</h5>
          <h5 className="footerLink">Privacy Policy</h5>
          <h5 className="footerLink">Terms & Conditions</h5>
          <h5 className="footerLink">Custom Links</h5>
        </div>
        <div>
          <Heading className="my-3" as="h3" size="md" fontWeight={"medium"}>
            My Account
          </Heading>
          <h5 className="footerLink">My Account</h5>
          <h5 className="footerLink">Order History</h5>
          <h5 className="footerLink">Affiliates</h5>
          <h5 className="footerLink">Newsletter</h5>
          <h5 className="footerLink">Gift Cerificates</h5>
        </div>
        <div>
          <Heading className="my-3" as="h3" size="md" fontWeight={"medium"}>
            Customer Services
          </Heading>
          <h5 className="footerLink">Contact</h5>
          <h5 className="footerLink">Returns</h5>
          <h5 className="footerLink">Site Map</h5>
          <h5 className="footerLink">Brands</h5>
          <h5 className="footerLink">Unlimited Links</h5>
        </div>
        <div>
          <Heading
            className="my-3 text-green"
            as="h3"
            size="md"
            fontWeight={"medium"}
          >
            HemiStore
          </Heading>
          <h5 className="footerLink">Contact</h5>
          <h5 className="footerLink">+84 (0) 321 654 884</h5>
          <h5 className="footerLink">mail@store.com</h5>
          <img src={paymentMethods} alt="mehtods" />
        </div>
      </div>
      <div className="text-center py-3 text-lg text-[#8b9198]">
        &copy; <span className="text-green"> HemiStore </span>| 2022 - devoloped
        by{" "}
        <span className="underline">
          <a
            href="https://rafiqul-bashar.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Rafiqul Bashar
          </a>
        </span>{" "}
      </div>
    </footer>
  );
}
