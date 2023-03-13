async function getUser() {
  try {
    const sessionToken = await sessionStorage.getItem("sessionToken");
    const userId = await sessionStorage.getItem("userId");
    const result = await axios.get("http://localhost:3000/api/user/get", {
      headers: {
        Authorization: sessionToken,
        "X-User-Id": userId,
      },
    });
    // console.log("result: " + result);
    // console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
async function getUserData() {
  console.log("get user data start:");
  try {
    const sessionToken = await sessionStorage.getItem("sessionToken");
    const userId = await sessionStorage.getItem("userId");
    const result = await axios.get("http://localhost:3000/api/mood/get/data", {
      headers: {
        Authorization: sessionToken,
        "X-User-Id": userId,
      },
    });
    // console.log(result.data.data);
    return result.data.data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function getEntryData() {
  console.log("create entry data start:");
  try {
    const sessionToken = await sessionStorage.getItem("sessionToken");
    const userId = await sessionStorage.getItem("userId");
    const result = await axios.get(
      "http://localhost:3000/api/mood/get/entries",
      {
        headers: {
          Authorization: sessionToken,
          "X-User-Id": userId,
        },
      }
    );
    return result.data.data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function createChartData(data_raw) {
  console.log("create chart data start:");
  try {
    // const data_raw = await getUserData();
    // console.log(data_raw);
    let chartDataObjArray = [];
    await data_raw.forEach(async (mood) => {
      //   console.log(mood);
      let moodObj = {};
      const active = mood.mood_active;
      const pleasant = mood.mood_pleasant;
      const dateTime = await reformatDateTime(mood.mood_datetime, ".");
      const date = dateTime.date;
      const time = dateTime.time;
      moodObj.date = date;
      moodObj.dataPoints = [
        {
          time: time,
          active: active,
          pleasant: pleasant,
        },
      ];
      //   console.log(moodObj);
      chartDataObjArray.push(moodObj);
      //   console.log(chartDataObjArray);
    });
    // console.log(chartDataObjArray);
    //combine datapoints for same date
    const sortedData = chartDataObjArray.reduce((acc, obj) => {
      if (acc[obj.date]) {
        acc[obj.date].dataPoints.push(...obj.dataPoints);
      } else {
        acc[obj.date] = { date: obj.date, dataPoints: [...obj.dataPoints] };
      }
      return acc;
    }, {});
    // console.log(sortedData);
    return Object.values(sortedData);
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function reformatDateTime(dateTime, format = "/") {
  try {
    const date = new Date(dateTime).toISOString().substring(0, 10);
    const time = new Date(dateTime).toISOString().substring(11, 19);
    const parts = date.split("-");

    const formattedDate = parts[2] + format + parts[1] + format + parts[0];
    return { date: formattedDate, time: time };
  } catch (error) {
    console.log(error);
    return false;
  }
}
