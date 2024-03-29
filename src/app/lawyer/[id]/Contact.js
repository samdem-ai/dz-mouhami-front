'use client'

import CalendarIcon from "../../../assets/calendar.svg";
import EmailIcon from "../../../assets/email.svg";
import CallIcon from "../../../assets/call.svg";
import AppointmentDialog from "../../../components/AppointmentDialog";
import Image from "next/image";
const Contact = () => {
  return (
    <>
      <p className="mb-4">
        Ready for Legal Assistance? Connect with [Lawyer's Name] to discuss your
        case, ask questions, or schedule an appointment.
      </p>
      <AppointmentDialog
        key="appointment"
        trigger={
          <div className="bg-[#094b72] flex flex-row justify-center gap-2 py-3 px-5 rounded-full hover:opacity-90 cursor-pointer transition-all mb-2">
            <Image src={CalendarIcon} width={20} height={20} alt="Calendar Icon" />
            <div className="text-white text-base font-medium">
                Book an appointment.
            </div>
          </div>
        }
      />

      <div className="bg-[#E5F2FA] bg-[#fbfc81] flex flex-row justify-center gap-2 py-3 px-5 rounded-full hover:bg-[#d5eaf4] cursor-pointer transition-all mb-2">
        <Image src={EmailIcon} width={20} height={20} alt="Calendar Icon" />
        <div className="text-[#094b72] text-base font-medium">
          Send an email
        </div>
      </div>
      <div className="bg-[#E5F2FA] bg-[#fbfc81] flex flex-row justify-center gap-2 py-3 px-5 rounded-full hover:bg-[#d5eaf4] cursor-pointer transition-all mb-2">
        <Image src={CallIcon} alt="Calendar Icon" width={20} height={20}/>
        <div className="text-[#094b72] text-base font-medium">Make a call</div>
      </div>
    </>
  );
};

export default Contact;
