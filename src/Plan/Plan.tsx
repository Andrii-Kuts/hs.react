import { useEffect, useState } from "react";
import { getData, initializeTestData, type PlanStep } from "./plans";
import styles from "./Plan.module.css";
import ContestComponent from "./Contest";
import { ChevronDown } from "lucide-react";
import AttachmentsComponent from "./Attachments";

const PlanStep: React.FC<{
  planStep: PlanStep;
}> = ({ planStep }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        className={styles.plan_step__button}
        onClick={() => setOpen(!open)}
      >
        <h1 className={styles.plan_step__button__title}>{planStep.title}</h1>
        <ChevronDown
          className={styles.plan_step__button__chevron}
          strokeWidth={3}
          style={{
            transform: `rotate(${open ? 180 : 360}deg)`,
          }}
        />
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.2s ease",
        }}
      >
        <div
          style={{
            overflow: "hidden",
          }}
        >
          <div className={styles.plan_step__separator} />
          <div className={styles.plan_step__content}>
            <ContestComponent contest={planStep.contest} />
            {planStep.attachments && (
              <AttachmentsComponent attachments={planStep.attachments} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Plan: React.FC = () => {
  const [planSteps, setPlanSteps] = useState<PlanStep[] | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetch() {
      await initializeTestData();
      const data = await getData();
      if (data == null) {
        setError(true);
        return;
      }
      setPlanSteps(data.planSteps);
    }
    fetch();
  }, []);

  if (error) {
    return (
      <div>
        <p style={{ color: "var(--red)" }}>Failed to fetch data</p>
      </div>
    );
  }

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
        <PlanStep key={planStep.title} planStep={planStep} />
      ))}
    </div>
  );
};

export default Plan;
