import post1 from "../utils/post1.png";
import post2 from "../utils/post2.png";
import post3 from "../utils/post3.png";
import people1 from "../utils/people.png";
import people2 from "../utils/people2.png";

const data = [
  {
    post: true,
    image: post3,
    type: "✍Article",
    heading: "What if famous brands had regular fonts? Meet RegulaBrands!",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    name: "Sarthak Kamra",
    views: "1.4k",
    portfolio: people1,
  },
  {
    post: true,

    image: post1,
    type: "🔬Education ",
    heading:
      " Tax Benefits for Investment under National Pension Scheme launched by Government",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    name: "Joseph Gray",
    views: "1.4k",
    portfolio: people2,
  },
  {
    post: false,
    image: post2,
    type: "📅Meetup",
    heading: "Finance & Investment Elite Social Mixer @Lujiazui",
    description: "Fri, 12 Oct, 2018",
    name: "Sarthak Kamra",
    views: "1.4k",
    location: "Ahmedabad, India",
    portfolio: people1,
    button: "Visit Website",
  },
  {
    post: false,
    job: true,
    image: post2,
    type: "💼Job",
    heading: "Innovaccer Analytics Private Ltd.",
    description: "Innovaccer Analytics Private Ltd.",
    name: "Joseph Gray",
    views: "1.4k",
    location: "Ahmedabad, India",
    portfolio: people2,
    button: "Apply on Timesjobs",
  },
];

export default data;
