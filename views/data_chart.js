// Generate 5 days of data
let random_test_data = [];
for (let i = 0; i < 5; i++) {
  let date = new Date();
  date.setDate(date.getDate() + i);
  let dayDataPoints = [];

  // Generate 3 data points for each day
  for (let j = 0; j < 5; j++) {
    let time =
      Math.floor(Math.random() * 24) + ":" + Math.floor(Math.random() * 60);
    let active = Math.floor(Math.random() * 11);
    let pleasant = Math.floor(Math.random() * 11);
    dayDataPoints.push({
      time: time,
      active: active,
      pleasant: pleasant,
    });
  }

  random_test_data.push({
    date: date.toLocaleDateString(),
    dataPoints: dayDataPoints,
  });
}

let data = [
  {
    date: "06.02.2022",
    dataPoints: [
      {
        time: "10:00",
        active: 2,
        pleasant: 4,
      },
      {
        time: "12:00",
        active: 4,
        pleasant: 6,
      },
      {
        time: "14:00",
        active: 5,
        pleasant: 7,
      },
    ],
  },
  {
    date: "22.02.2023",
    dataPoints: [
      {
        time: "9:00",
        active: 3,
        pleasant: 2,
      },
      {
        time: "11:00",
        active: 4,
        pleasant: 3,
      },
      {
        time: "13:00",
        active: 5,
        pleasant: 6,
      },
    ],
  },
  // add more days here
];

var chart_data = [
  {
    date: "06.02.2022",
    time: "17:00",
    active: 4, //0-10
    pleasant: 6, //0-10
  },
  {
    date: "02.22.2023",
    time: "12:15",
    active: 3, //0-10
    pleasant: 2, //0-10
  },

  {
    date: "05.10.2022",
    time: "09:30",
    active: 6, //0-10
    pleasant: 8, //0-10
  },
  {
    date: "01.01.2023",
    time: "00:01",
    active: 2, //0-10
    pleasant: 5, //0-10
  },
  {
    date: "08.15.2022",
    time: "08:00",
    active: 7, //0-10
    pleasant: 9, //0-10
  },
  {
    date: "12.24.2022",
    time: "22:00",
    active: 2, //0-10
    pleasant: 10, //0-10
  },
  {
    date: "09.21.2022",
    time: "16:30",
    active: 5, //0-10
    pleasant: 7, //0-10
  },
  {
    date: "03.17.2023",
    time: "20:00",
    active: 10, //0-10
    pleasant: 10, //0-10
  },
  {
    date: "07.04.2023",
    time: "21:00",
    active: 8, //0-10
    pleasant: 9, //0-10
  },
  {
    date: "11.01.2022",
    time: "19:00",
    active: 4, //0-10
    pleasant: 6, //0-10
  },
  {
    date: "04.05.2022",
    time: "14:30",
    active: 7, //0-10
    pleasant: 9, //0-10
  },
  {
    date: "07.01.2022",
    time: "19:45",
    active: 2, //0-10
    pleasant: 3, //0-10
  },
  {
    date: "08.15.2023",
    time: "08:00",
    active: 5, //0-10
    pleasant: 7, //0-10
  },
  {
    date: "12.24.2022",
    time: "21:00",
    active: 4, //0-10
    pleasant: 8, //0-10
  },
  {
    date: "09.03.2022",
    time: "10:15",
    active: 6, //0-10
    pleasant: 9, //0-10
  },
  {
    date: "03.30.2023",
    time: "16:00",
    active: 2, //0-10
    pleasant: 3, //0-10
  },
  {
    date: "11.11.2022",
    time: "11:11",
    active: 5, //0-10
    pleasant: 7, //0-10
  },
  {
    date: "07.04.2023",
    time: "12:00",
    active: 8, //0-10
    pleasant: 6, //0-10
  },
  {
    date: "01.20.2023",
    time: "18:30",
    active: 3, //0-10
    pleasant: 4, //0-10
  },
  {
    date: "06.21.2022",
    time: "07:00",
    active: 9, //0-10
    pleasant: 8, //0-10
  },
];
