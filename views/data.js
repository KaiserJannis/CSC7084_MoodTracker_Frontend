// var myData = {
//   1: {
//     date: "06.02.2022",
//     time: "17:00",
//     active: 4, //0-10
//     pleasant: 6, //0-10
//     trigger: "weather",
//     id: 1,
//   },
//   2: {
//     date: "02.22.2023",
//     time: "12:15",
//     active: 3, //0-10
//     pleasant: 2, //0-10
//     trigger: "work stress",
//     id: 2,
//   },
//   3: {
//     date: "05.10.2022",
//     time: "09:30",
//     active: 6, //0-10
//     pleasant: 8, //0-10
//     trigger: "listening to music",
//     id: 3,
//   },
//   4: {
//     date: "01.01.2023",
//     time: "00:01",
//     active: 2, //0-10
//     pleasant: 5, //0-10
//     trigger: 'new year\\"s eve fireworks',
//     id: 4,
//   },
//   5: {
//     date: "08.15.2022",
//     time: "08:00",
//     active: 7, //0-10
//     pleasant: 9, //0-10
//     trigger: "morning coffee",
//     id: 5,
//   },
//   6: {
//     date: "12.24.2022",
//     time: "22:00",
//     active: 2, //0-10
//     pleasant: 10, //0-10
//     trigger: "christmas eve",
//     id: 6,
//   },
//   7: {
//     date: "09.21.2022",
//     time: "16:30",
//     active: 5, //0-10
//     pleasant: 7, //0-10
//     trigger: "spending time with family",
//     id: 7,
//   },
//   8: {
//     date: "03.17.2023",
//     time: "20:00",
//     active: 10, //0-10
//     pleasant: 10, //0-10
//     trigger: 'st. patrick\\"s day celebration',
//     id: 8,
//   },
//   9: {
//     date: "07.04.2023",
//     time: "21:00",
//     active: 8, //0-10
//     pleasant: 9, //0-10
//     trigger: "fireworks on independence sdacwecewacwecevewvrwevewvewday",
//     id: 9,
//   },
//   10: {
//     date: "11.01.2022",
//     time: "19:00",
//     active: 4, //0-10
//     pleasant: 6, //0-10
//     trigger: "watching a movie",
//     id: 10,
//   },
//   11: {
//     date: "04.05.2022",
//     time: "14:30",
//     active: 7, //0-10
//     pleasant: 9, //0-10
//     trigger: "meeting a friend",
//     id: 11,
//   },
//   12: {
//     date: "07.01.2022",
//     time: "19:45",
//     active: 2, //0-10
//     pleasant: 3, //0-10
//     trigger: "traffic jam",
//     id: 12,
//   },
//   13: {
//     date: "08.15.2023",
//     time: "08:00",
//     active: 5, //0-10
//     pleasant: 7, //0-10
//     trigger: "morning coffee",
//     id: 13,
//   },
//   14: {
//     date: "12.24.2022",
//     time: "21:00",
//     active: 4, //0-10
//     pleasant: 8, //0-10
//     trigger: "christmas dinner",
//     id: 14,
//   },
//   15: {
//     date: "09.03.2022",
//     time: "10:15",
//     active: 6, //0-10
//     pleasant: 9, //0-10
//     trigger: "hiking in the mountains",
//     id: 15,
//   },
//   16: {
//     date: "03.30.2023",
//     time: "16:00",
//     active: 2, //0-10
//     pleasant: 3, //0-10
//     trigger: "dentist appointment",
//     id: 16,
//   },
//   17: {
//     date: "11.11.2022",
//     time: "11:11",
//     active: 5, //0-10
//     pleasant: 7, //0-10
//     trigger: "seeing a shooting star",
//     id: 17,
//   },
//   18: {
//     date: "07.04.2023",
//     time: "12:00",
//     active: 8, //0-10
//     pleasant: 6, //0-10
//     trigger: "family gathering",
//     id: 18,
//   },
//   19: {
//     date: "01.20.2023",
//     time: "18:30",
//     active: 3, //0-10
//     pleasant: 4, //0-10
//     trigger: "stuck in an elevator",
//     id: 19,
//   },
//   20: {
//     date: "06.21.2022",
//     time: "07:00",
//     active: 9, //0-10
//     pleasant: 8, //0-10
//     trigger: "watching the sunrise",
//     id: 20,
//   },
// };
// console.log("mood log is successfully loaded from database");

var myData = [
  {
    date: "06.02.2022",
    time: "17:00",
    active: 4, //0-10
    pleasant: 6, //0-10
    trigger: "weather",
    id: 1,
  },
  {
    date: "02.22.2023",
    time: "12:15",
    active: 3, //0-10
    pleasant: 2, //0-10
    trigger: "work stress",
    id: 2,
  },
  {
    date: "05.10.2022",
    time: "09:30",
    active: 6, //0-10
    pleasant: 8, //0-10
    trigger: "listening to music",
    id: 3,
  },
  {
    date: "01.01.2023",
    time: "00:01",
    active: 2, //0-10
    pleasant: 5, //0-10
    trigger: 'new year\\"s eve fireworks',
    id: 4,
  },
  {
    date: "08.15.2022",
    time: "08:00",
    active: 7, //0-10
    pleasant: 9, //0-10
    trigger: "morning coffee",
    id: 5,
  },
  {
    date: "12.24.2022",
    time: "22:00",
    active: 2, //0-10
    pleasant: 10, //0-10
    trigger: "christmas eve",
    id: 6,
  },
  {
    date: "09.21.2022",
    time: "16:30",
    active: 5, //0-10
    pleasant: 7, //0-10
    trigger: "spending time with family",
    id: 7,
  },
  {
    date: "03.17.2023",
    time: "20:00",
    active: 10, //0-10
    pleasant: 10, //0-10
    trigger: 'st. patrick\\"s day celebration',
    id: 8,
  },
  {
    date: "07.04.2023",
    time: "21:00",
    active: 8, //0-10
    pleasant: 9, //0-10
    trigger: "fireworks on independence sdacwecewacwecevewvrwevewvewday",
    id: 9,
  },
  {
    date: "11.01.2022",
    time: "19:00",
    active: 4, //0-10
    pleasant: 6, //0-10
    trigger: "watching a movie",
    id: 10,
  },
  {
    date: "04.05.2022",
    time: "14:30",
    active: 7, //0-10
    pleasant: 9, //0-10
    trigger: "meeting a friend",
    id: 11,
  },
  {
    date: "07.01.2022",
    time: "19:45",
    active: 2, //0-10
    pleasant: 3, //0-10
    trigger: "traffic jam",
    id: 12,
  },
  {
    date: "08.15.2023",
    time: "08:00",
    active: 5, //0-10
    pleasant: 7, //0-10
    trigger: "morning coffee",
    id: 13,
  },
  {
    date: "12.24.2022",
    time: "21:00",
    active: 4, //0-10
    pleasant: 8, //0-10
    trigger: "christmas dinner",
    id: 14,
  },
  {
    date: "09.03.2022",
    time: "10:15",
    active: 6, //0-10
    pleasant: 9, //0-10
    trigger: "hiking in the mountains",
    id: 15,
  },
  {
    date: "03.30.2023",
    time: "16:00",
    active: 2, //0-10
    pleasant: 3, //0-10
    trigger: "dentist appointment",
    id: 16,
  },
  {
    date: "11.11.2022",
    time: "11:11",
    active: 5, //0-10
    pleasant: 7, //0-10
    trigger: "seeing a shooting star",
    id: 17,
  },
  {
    date: "07.04.2023",
    time: "12:00",
    active: 8, //0-10
    pleasant: 6, //0-10
    trigger: "family gathering",
    id: 18,
  },
  {
    date: "01.20.2023",
    time: "18:30",
    active: 3, //0-10
    pleasant: 4, //0-10
    trigger: "stuck in an elevator",
    id: 19,
  },
  {
    date: "06.21.2022",
    time: "07:00",
    active: 9, //0-10
    pleasant: 8, //0-10
    trigger: "watching the sunrise",
    id: 20,
  },
];
console.log("mood log is successfully loaded from database");
