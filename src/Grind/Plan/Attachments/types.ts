export type Attachment = {
  type: "file";
  name: string;
  link: string;
};

export type AttachmentsContainer = {
  attachments: Attachment[];
};
