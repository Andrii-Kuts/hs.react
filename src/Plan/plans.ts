import { type Attachments } from "./Attachments";

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

const url = import.meta.env.VITE_API_URL as string;

export async function getData(): Promise<Data | null> {
  const response = await fetch(`${url}/get_data`);
  if (!response.ok) {
    console.error(await response.text());
    return null;
  }

  try {
    const json = await response.json();
    console.log(json);
    return json as Data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return null;
  }
}
