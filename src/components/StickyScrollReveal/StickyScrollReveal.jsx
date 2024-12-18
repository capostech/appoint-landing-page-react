import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import ConversationSection from "../ConversationSection/ConversationSection";
import Footer from "../FooterSection/FooterSection";
const content = [
  {
    title: "Patient Initiates Booking",
    description:
      "Patients simply send a WhatsApp message to the doctor's dedicated number or chatbot. They can choose a date and time from the available slots shared through the chatbot interface.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Patient Initiates Booking
      </div>
    ),
  },
  {
    title: "Confirmation via WhatsApp",
    description:
      "Once the patient selects their preferred appointment slot, they receive an instant confirmation message on WhatsApp with the appointment details. Any necessary documents can also be shared at this stage.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="/whatsapp-confirmation.webp"
          alt="WhatsApp Confirmation"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Doctor's Dashboard",
    description:
      "Doctors get access to a comprehensive dashboard that displays all upcoming appointments, patient details, and any special notes. They can manage their schedule effortlessly from this interface.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Doctor's Dashboard
      </div>
    ),
  },
  {
    title: "Schedule Management",
    description:
      "Doctors can adjust their visiting timings, reschedule appointments, or block off unavailable dates directly from the dashboard. Patients are notified automatically of any changes via WhatsApp.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Schedule Management
      </div>
    ),
  },
];



export function StickyScrollRevealDemo() {
  return (
    <div className="scrollbar-none">
    <div className="m-20 p-10 flex justify-center">
      <StickyScroll content={content} /></div>
      <div className=" m-20 p-10"><ConversationSection/></div>
      <div><Footer/>
    </div>
    </div>
  );
};

export default StickyScrollRevealDemo;
