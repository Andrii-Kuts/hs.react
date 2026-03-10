import type { AttachmentsContainer } from "./Attachments";

export type PlanStep = {
  title: string;
  contest: Contest;
};

export type Contest = {
  title: string;
  link: string;
  problems: Problem[];
  attachmentsContainer?: AttachmentsContainer;
};

export type Problem = {
  name: string;
  title: string;
  link: string;
  solvingStatus: ProblemStatus;
  upsolvingStatus: ProblemStatus;
};

export type ProblemStatus = {
  points: number;
  submissions: number;
};
