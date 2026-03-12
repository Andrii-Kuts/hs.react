import {
  addAttachment,
  getAttachments,
  removeAttachment,
  type Attachment,
  type Attachments,
} from "./attachments";
import styles from "./Attachments.module.css";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import classNames from "classnames";
import { deleteFile, uploadFile } from "../../FileViewer";
import { X } from "lucide-react";
import { Link } from "react-router";

const AttachmentComponent: React.FC<{
  attachment: Attachment;
  onDelete: () => void;
}> = ({ attachment, onDelete }) => {
  return (
    <span className={styles.attachment}>
      <Link to={`/file/${attachment.id}`} className={styles.attachment__name}>
        {attachment.name}
      </Link>
      <button className={styles.attachment__delete} onClick={onDelete}>
        <X size={16} style={{ display: "block" }} />
      </button>
    </span>
  );
};

const SubmitComponent: React.FC<{
  attachments: Attachments;
  onUpdate: () => void;
}> = ({ attachments, onUpdate }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const fileChanged = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ?? [];
    const newFile = files[0] ?? null;
    setFile(newFile);
  };

  type SubmitResult = "success" | "none" | "error";

  const [submitResult, setSubmitResult] = useState<SubmitResult>("none");

  const submit = async () => {
    if (file == null) {
      setSubmitResult("none");
      return;
    }
    const id = await uploadFile(file);
    if (!id) {
      setSubmitResult("error");
      return;
    }
    setFile(null);
    const attachment: Attachment = {
      type: "file",
      id,
      name: file.name,
    };
    await addAttachment(attachments, attachment);
    onUpdate();
    setSubmitResult("success");
  };

  return (
    <div className={styles.attachments__submit}>
      <button
        className={classNames("button", styles.attachments__submit__file)}
        onClick={() => inputRef.current?.click()}
      >
        {file ? file.name : "Choose file"}
      </button>
      <input
        ref={inputRef}
        type="file"
        onChange={fileChanged}
        style={{ display: "none" }}
      />
      <button
        className={classNames("button", styles.attachments__submit__button)}
        onClick={submit}
      >
        Submit
      </button>
      {submitResult == "error" && (
        <span style={{ color: "var(--red)" }}>Failed to submit file</span>
      )}
    </div>
  );
};

const AttachmentsComponent: React.FC<{
  attachments: Attachments;
}> = ({ attachments }) => {
  const [attachmentsArray, setAttachmentsArray] = useState<Attachment[] | null>(
    null,
  );

  useEffect(() => {
    async function fetch() {
      const array = await getAttachments(attachments);
      if (array == null) {
        setAttachmentsArray([]);
        return;
      }
      setAttachmentsArray(array);
    }
    fetch();
  }, [attachments]);

  const onUpdate = async () => {
    setAttachmentsArray([]);
    const array = await getAttachments(attachments);
    if (array == null) {
      setAttachmentsArray([]);
      return;
    }
    setAttachmentsArray(array);
  };

  const onDelete = async (attachment: Attachment) => {
    await removeAttachment(attachments, attachment);
    await deleteFile(attachment.id);
    await onUpdate();
  };

  if (attachmentsArray == null) {
    return (
      <div>
        <p>Loading steps...</p>
      </div>
    );
  }

  return (
    <div className={styles.attachments}>
      <div>Attachments</div>
      {attachmentsArray.length > 0 && (
        <div className={styles.attachments__container}>
          {attachmentsArray.map((attachment) => (
            <AttachmentComponent
              key={attachment.id}
              attachment={attachment}
              onDelete={() => onDelete(attachment)}
            />
          ))}
        </div>
      )}
      <SubmitComponent attachments={attachments} onUpdate={onUpdate} />
    </div>
  );
};

export default AttachmentsComponent;
