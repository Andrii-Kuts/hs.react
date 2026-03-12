import { createAttachments, type Attachments } from "./Attachments";

export type Data = {
  planSteps: PlanStep[];
};

export type PlanStep = {
  title: string;
  contest: Contest;
  attachments: Attachments;
};

export type Contest = {
  title: string;
  link: string;
  problems: Problem[];
};

export type Problem = {
  name: string;
  title: string;
  link: string;
  isOptimization?: boolean;
  solvingStatus: ProblemStatus;
  upsolvingStatus: ProblemStatus;
};

export type ProblemStatus = {
  points: number;
  submissions: number;
};

export async function getData(): Promise<Data | null> {
  try {
    const dataString = localStorage.getItem("project-domination-data");
    if (dataString == null) return null;
    return JSON.parse(dataString);
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        "Something went wrong while fetching data: " + error.message,
      );
    }
    return null;
  }
}

export async function updateData(data: Data) {
  localStorage.setItem("project-domination-data", JSON.stringify(data));
}

function getTestData(): Data {
  return {
    planSteps: [
      {
        title: "Day 1",
        contest: {
          title: "IOI 2019 Day 1",
          link: "https://oj.uz/problems/source/ioi2019day1",
          problems: [
            {
              name: "shoes",
              title: "Arranging Shoes",
              link: "https://oj.uz/problem/view/IOI19_shoes",
              solvingStatus: {
                points: 100,
                submissions: 2,
              },
              upsolvingStatus: {
                points: 100,
                submissions: 2,
              },
            },
            {
              name: "split",
              title: "Split the Attractions",
              link: "https://oj.uz/problem/view/IOI19_split",
              solvingStatus: {
                points: 30,
                submissions: 1,
              },
              upsolvingStatus: {
                points: 30,
                submissions: 1,
              },
            },
            {
              name: "rect",
              title: "Rectangles",
              link: "https://oj.uz/problem/view/IOI19_rect",
              solvingStatus: {
                points: 50,
                submissions: 3,
              },
              upsolvingStatus: {
                points: 100,
                submissions: 4,
              },
            },
          ],
        },
        attachments: createAttachments(),
      },
      {
        title: "Day 2",
        contest: {
          title: "IOI 2019 Day 2",
          link: "https://oj.uz/problems/source/ioi2019day2",
          problems: [
            {
              name: "line",
              title: "Broken Line",
              link: "https://oj.uz/problem/view/IOI19_line",
              isOptimization: true,
              solvingStatus: {
                points: 79.23,
                submissions: 2,
              },
              upsolvingStatus: {
                points: 100,
                submissions: 2,
              },
            },
            {
              name: "vision",
              title: "Vision Program",
              link: "https://oj.uz/problem/view/IOI19_vision",
              solvingStatus: {
                points: 0,
                submissions: 0,
              },
              upsolvingStatus: {
                points: 30,
                submissions: 1,
              },
            },
            {
              name: "walk",
              title: "Sky Walking",
              link: "https://oj.uz/problem/view/IOI19_walk",
              solvingStatus: {
                points: 100,
                submissions: 3,
              },
              upsolvingStatus: {
                points: 100,
                submissions: 4,
              },
            },
          ],
        },
        attachments: createAttachments(),
      },
      {
        title: "Day 3",
        contest: {
          title: "IOI 2020 Day 1",
          link: "https://oj.uz/problems/source/ioi2020day1",
          problems: [],
        },
        attachments: createAttachments(),
      },
      {
        title: "Day 4",
        contest: {
          title: "IOI 2020 Day 2",
          link: "https://oj.uz/problems/source/ioi2020day2",
          problems: [],
        },
        attachments: createAttachments(),
      },
    ],
  };
}

export async function initializeTestData() {
  const data = await getData();
  if (data != null) return data;
  const testData = getTestData();
  await updateData(testData);
  return testData;
}
