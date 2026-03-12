import type { Contest, Problem, ProblemStatus } from "../types";
import styles from "./Contest.module.css";
import classNames from "classnames";

const ProblemComponent: React.FC<{
  problem: Problem;
}> = ({ problem }) => {
  const getPointsColor = (status: ProblemStatus, isOptimization?: boolean) => {
    if (status.submissions == 0) return styles.points_unsolved;
    if (isOptimization) return styles.points_optimization;
    if (status.points == 100) return styles.points_solved;
    return styles.points_partial;
  };
  return (
    <span className={styles.problems__problem}>
      <a href={problem.link} className={styles.problems__problem__title}>
        {problem.title}
      </a>
      <span
        className={classNames(
          styles.problems__problem__points,
          getPointsColor(problem.solvingStatus, problem.isOptimization),
        )}
      >
        {problem.solvingStatus.points}
      </span>
    </span>
  );
};

const ContestComponent: React.FC<{
  contest: Contest;
}> = ({ contest }) => {
  return (
    <div className={styles.contest}>
      <a href={contest.link} className={styles.contest__title}>
        {contest.title}
      </a>
      <div className={styles.problems}>
        {contest.problems.map((problem) => (
          <ProblemComponent key={problem.name} problem={problem} />
        ))}
      </div>
    </div>
  );
};

export default ContestComponent;
