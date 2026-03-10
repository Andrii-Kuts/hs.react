import type { Attachment, AttachmentsContainer } from "./types";

const Attachment: React.FC<{
  attachment: Attachment;
}> = ({ attachment }) => {
  return <a href={attachment.link}>{attachment.name}</a>;
};

const Attachments: React.FC<{
  attachmentsContainer: AttachmentsContainer;
}> = ({ attachmentsContainer }) => {
  return (
    <div>
      Attachments:
      {attachmentsContainer.attachments.map((attachment, index) => (
        <Attachment key={index} attachment={attachment} />
      ))}
    </div>
  );
};

export default Attachments;
