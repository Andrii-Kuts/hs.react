import type { Attachment, AttachmentsContainer } from "./types";
import styles from "./Attachments.module.css";

const Attachment: React.FC<{
  attachment: Attachment;
}> = ({ attachment }) => {
  return (
    <a className={styles.attachment} href={attachment.link}>
      {attachment.name}
    </a>
  );
};

const SubmitComponent: React.FC = () => {
  return (
    <div className={styles.attachments__submit}>
      <div className={styles.attachments__submit__file}>File</div>
      <button className={styles.attachments__submit__button}>Submit</button>
    </div>
  );
};

const Attachments: React.FC<{
  attachmentsContainer: AttachmentsContainer;
}> = ({ attachmentsContainer }) => {
  return (
    <div className={styles.attachments}>
      <div>Attachments</div>
      <div className={styles.attachments__container}>
        {attachmentsContainer.attachments.map((attachment, index) => (
          <Attachment key={index} attachment={attachment} />
        ))}
      </div>
      <SubmitComponent />
    </div>
  );
};

export default Attachments;
