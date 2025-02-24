import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
  lens1Img,
  lens2Img,
  lens3Img,
  lens4Img,
  lens5Img,
  lens6Img,
  lens7Img,
  lens1_smallImg,
  lens2_smallImg,
  lens3_smallImg,
  lens4_smallImg,
  lens5_smallImg,
  lens6_smallImg,
  lens7_smallImg,
  card1Img,
  card2Img,
  card3Img,
  card4Img,
  card5Img,
  card6Img,
  card7Img,
  iphone15proImg,
  iphone15Img,
  chip1Img,
  cam1Img,
  chip2Img,
  cam2Img,
  battImg

} from "../utils/index";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const imagesSlides = [
  {
    id: 1,
    zoom: "0.5x",
    text: "Ultra Wide | Macro",
    image: lens1Img,
    imageSmall: lens1_smallImg,
  },
  {
    id: 2,
    zoom: "0.5x",
    text: "Ultra Wide | 13 mm",
    image: lens2Img,
    imageSmall: lens2_smallImg,
  },
  {
    id: 3,
    zoom: "1x",
    text: "Main | 24 mm",
    image: lens3Img,
    imageSmall: lens3_smallImg,
  },
  {
    id: 4,
    zoom: "1x",
    text: "Main | 28 mm",
    image: lens4Img,
    imageSmall: lens4_smallImg,
  },
  {
    id: 5,
    zoom: "1x",
    text: "Main | 35 mm",
    image: lens5Img,
    imageSmall: lens5_smallImg,
  },
  {
    id: 6,
    zoom: "2x",
    text: "Telephoto | 48 mm",
    image: lens6Img,
    imageSmall: lens6_smallImg,
  },
  {
    id: 7,
    zoom: "New 5x",
    text: "Telephoto | 120 mm",
    image: lens7Img,
    imageSmall: lens7_smallImg,
  },
];

export const cardSlides = [
  {
    id: 1,
    textLists: [
      "Save with",
      "Apple Trade In.",
    ],
    description: "Get $180–$620 in credit toward iPhone 15 or iPhone 15 Pro when you trade in iPhone 11 or higher.",
    icon: card1Img,
  },
  {
    id: 2,
    textLists: ["Pay over time,", "interest‑free."],
    description: "When you choose to check out with Apple Card Monthly Installments.",
    icon: card2Img,
  },
  {
    id: 3,
    textLists: [
      "iPhone carrier deals.",
      "Right here at Apple.",
      "For as low as $0.",
    ],
    description: "Includes trade‑in and carrier credits. AT&T: up to $1000. T‑Mobile: up to $800. Verizon: up to $830.",
    icon: card3Img,
  },
  {
    id: 4,
    textLists: ["Get flexible delivery and easy pickup."],
    description: "Choose two‑hour delivery from an Apple Store, free delivery, or easy pickup options.",
    icon: card4Img,
  },
  {
    id: 5,
    textLists: [
      "Shop live with",
      "a Specialist.",
    ],
    description: "Let us guide you live over video and answer all of your questions.",
    icon: card5Img,
  },
  {
    id: 6,
    textLists: [
      "Get to know your",
      "new iPhone.",
    ],
    description: "Learn how to get the most out of your new iPhone with a free one‑on‑one Personal Session.",
    icon: card6Img,
  },
  {
    id: 7,
    textLists: [
      "Explore a shopping",
      "experience designed",
      "around you.",
    ],
    description: "When you shop in the Apple Store app.",
    icon: card7Img,
  },

];

export const models = [
  {
    id: 1,
    title: " in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: " in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: " in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: " in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];

export const explore = [
  {
    model: "iPhone 15 Pro",
    image: iphone15proImg,
    colors: ["#8f8a81", "#202630", "#c9c8c3", "#242526"],
    features: [{
      icon: chip1Img,
      main: "A17 Pro chip with 6-core GPU",
      sub: []
    },
    {
      icon: cam1Img,
      main: "Pro camera system",
      sub: ["Our most advanced 48MP Main camera", "3x or 5x Telephoto camera", "Ultra Wide camera"]
    }, {
      icon: battImg,
      main: "Up to 29 hours video playback",
      sub: []
    },
    ]
  },
  {
    model: "iPhone 15",
    image: iphone15Img,
    colors: ["#e3c8ca", "#e5e0c1", "#cad4c5", "#ced5d9", "#35393b"],
    features: [{
      icon: chip2Img,
      main: "A16 Bionic chip with 5-core GPU",
      sub: []
    },
    {
      icon: cam2Img,
      main: "Advanced dual-camera system",
      sub: ["48MP Main camera", "2x Telephoto", "Ultra Wide camera"]
    }, {
      icon: battImg,
      main: "Up to 26 hours video playback",
      sub: []
    },
    ]
  },

]