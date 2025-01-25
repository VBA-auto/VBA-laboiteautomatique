import Link from "next/link";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const SubHeaderSpain = () => {
  return (
    <div className="hidden md:block">
      <section className="py-2">
        <div className="container mx-auto md:px-2 px-4">
          <div className="flex justify-between items-center">
            <div className="md:w-[25%] w-1/2">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#2C80EF]" />
                <Link
                  href="mailto:contact@laboiteautomatique.com"
                  className="md:text-[14px] text-[11px] text-gray-700"
                >
                  contact@laboiteautomatique.com
                </Link>
              </div>
            </div>
            <div className="md:w-[25%] w-1/2">
              <div className="flex justify-end items-center gap-3">
                <FaPhoneAlt className="text-[#2C80EF]" />
                <Link
                  target="_blank"
                  href="https://wa.me/0145147254"
                  className="md:text-[15px] text-[11px] text-gray-700"
                >
                  01 45 14 72 54
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubHeaderSpain;
