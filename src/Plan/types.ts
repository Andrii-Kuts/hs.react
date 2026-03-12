import type { AttachmentsContainer } from "./Attachments";

export type PlanStep = {
  title: string;
  contest: Contest;
  attachmentsContainer?: AttachmentsContainer;
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
