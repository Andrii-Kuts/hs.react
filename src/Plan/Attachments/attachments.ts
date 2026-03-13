export type Attachment = {
  id: string;
  type: "file";
  name: string;
};

export type Attachments = {
  id: string;
};

export async function addAttachment(
  attachments: Attachments,
  attachment: Attachment,
) {
  const currentAttachments = (await getAttachments(attachments)) ?? [];
  currentAttachments.push(attachment);
  localStorage.setItem(
    "attachments-" + attachments.id,
    JSON.stringify(currentAttachments),
  );
}

export async function removeAttachment(
  attachments: Attachments,
  attachment: Attachment,
) {
  let currentAttachments = (await getAttachments(attachments)) ?? [];
  currentAttachments = currentAttachments.filter(
    (anotherAttachment) => anotherAttachment.id !== attachment.id,
  );
  localStorage.setItem(
    "attachments-" + attachments.id,
    JSON.stringify(currentAttachments),
  );
}

export async function getAttachments(
  attachments: Attachments,
): Promise<Attachment[] | null> {
  try {
    const attachmentsArrayString = localStorage.getItem(
      "attachments-" + attachments.id,
    );
    if (attachmentsArrayString == null) return null;
    return JSON.parse(attachmentsArrayString) as Attachment[];
  } catch (error) {
    if (error instanceof Error) {
      console.log(
        `Something went wrong while getting attachments id=${attachments.id}: ` +
          error.message,
      );
    }
    return null;
  }
}
