const d = new Date("2022-05-25");
const wd = new Intl.DateTimeFormat("en", { weekday: "short" }).format(d);
const mo = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

const data = [
  {
    _id: 1,
    date: "Thu, 26 May",
    events: [
      {
        id: 1,
        event: `The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
        time: "8:30-9:45 PM IST",
        duration: 75,
        src: "/img1.png",
        genre: "Design",
        status: {
          availability: 1,
          color: "#FBBF24",
          registered: false,
          attending: 45,
          seats: 30,
        },
      },
      {
        id: 2,
        event: `Contrary to popular belief`,
        time: "8:30-9:30 AM IST",
        duration: 60,
        src: "/img3.png",
        genre: "Product Management",
        status: {
          registered: true,
          attending: 0,
          seats: 0,
        },
      },
      {
        id: 3,
        event: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. `,
        time: "6:00-6:30 PM IST",
        duration: 30,
        src: "/img4.png",
        genre: "Productivity",
        status: {
          availability: 3,
          color: "#BFBFBF",
          registered: false,
          attending: 122,
          seats: 78,
        },
      },
    ],
  },
  {
    _id: 2,
    date: "Sun, 29 May",
    events: [
      {
        id: 1,
        event: null,
      },
    ],
  },
  {
    _id: 3,
    date: "Wed, 1 June",
    events: [
      {
        id: 1,
        event: `Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"`,
        time: "8:30-10:45 PM IST",
        duration: 135,
        src: "/img2.png",
        genre: "Design",
        status: {
          availability: 2,
          color: "#4C98FB",
          registered: false,
          attending: 69,
          seats: 11,
        },
      },
    ],
  },
  {
    _id: 4,
    date: "Fri, 3 June",
    events: [
      {
        id: 1,
        event: `Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
        time: "7:30-6:30 PM IST",
        duration: 60,
        src: "/img6.png",
        genre: "Mindfullness",
        status: {
          registered: true,
          attending: 0,
          seats: 0,
        },
      },
      {
        id: 2,
        event: `If you are going to use a passage of Lorem Ipsum`,
        time: "9:00-10:30 AM IST",
        duration: 90,
        src: "/img3.png",
        genre: "Mental Health",
        status: {
          availability: 1,
          color: "#FBBF24",
          registered: false,
          attending: 44,
          seats: 16,
        },
      },
    ],
  },
  {
    _id: 5,
    date: "Wed, 11 June",
    events: [
      {
        id: 1,
        event:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        time: "8:00-9:45 AM IST",
        duration: 105,
        src: "/img4.png",
        genre: "Mental Health",
        status: {
          availability: 2,
          color: "#4C98FB",
          registered: false,
          attending: 108,
          seats: 42,
        },
      },
      {
        id: 2,
        event: `'Content here, content here'`,
        time: "8:00-9:45 AM IST",
        duration: 105,
        src: "/img1.png",
        genre: "Product Management",
        status: {
          registered: true,
          attending: 0,
          seats: 0,
        },
      },
    ],
  },
];

module.exports = { data };
