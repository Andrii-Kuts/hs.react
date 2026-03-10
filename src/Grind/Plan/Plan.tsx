import { useEffect, useState } from "react";
import { type Contest, type PlanStep } from "./types";
import { getPlanSteps } from "./plans";
import Attachments from "./Attachments/Attachments";

const Contest: React.FC<{
  contest: Contest;
}> = ({ contest }) => {
  return (
    <div>
      <h2>{contest.title}</h2>
      <a href={contest.link}>link</a>
      <div>
        {contest.problems.map((problem) => (
          <div>
            <p>{problem.title}</p>
            <a href={problem.link}>link</a>
            <p>Points: {problem.solvingStatus.points}</p>
            <p>Submissions: {problem.solvingStatus.submissions}</p>
          </div>
        ))}
      </div>
      {contest.attachmentsContainer && (
        <Attachments attachmentsContainer={contest.attachmentsContainer} />
      )}
    </div>
  );
};

const PlanStep: React.FC<{
  planStep: PlanStep;
}> = ({ planStep }) => {
  return (
    <div>
      <h1>{planStep.title}</h1>
      <Contest contest={planStep.contest} />
    </div>
  );
};

const Plan: React.FC = () => {
  const [planSteps, setPlanSteps] = useState<PlanStep[] | null>(null);

  useEffect(() => {
    async function fetch() {
      setPlanSteps(await getPlanSteps());
    }
    fetch();
  }, []);

  if (planSteps == null) {
    return (
      <div>
        <p>Loading steps...</p>
      </div>
    );
  }

  return (
    <div>
      {planSteps.map((planStep) => (
        <PlanStep planStep={planStep} />
      ))}
    </div>
  );
};

export default Plan;
