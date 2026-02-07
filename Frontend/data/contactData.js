import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const mapData = {
  title: "ArraySoft Location",
  url: "https://www.google.com/maps?q=ArraySoft%20Technology%20Pvt%20Ltd%20Gandhinagar&output=embed",
};

export const contactInfo = [
  {
    id: 1,
    icon: FaPhoneAlt,
    title: "Phone",
    value: "+91 7383669390",
  },
  {
    id: 2,
    icon: FaMapMarkerAlt,
    title: "Address",
    value: `407–408, Megh Malhar Complex,
Sector-11, Gandhinagar, Gujarat`,
  },
  {
    id: 3,
    icon: FaEnvelope,
    title: "Email",
    value: "info@arraysofttechnology.com",
  },
];

export const initialFormData = {
  username: "",
  email: "",
  number: "",
  message: "",
};
