export type FileData = {
  id: string;
  name: string;
  uploadDate: string;
  content: string;
};

export async function uploadFile(file: File): Promise<string> {
  const id = crypto.randomUUID();
  const fileData: FileData = {
    id,
    name: file.name,
    uploadDate: new Date().toISOString(),
    content: await file.text(),
  };
  localStorage.setItem(id, JSON.stringify(fileData));
  return id;
}

export async function deleteFile(id: string) {
  localStorage.removeItem(id);
}

export async function getFileData(id: string): Promise<FileData | null> {
  const fileDataString = localStorage.getItem(id);
  if (fileDataString == null) return null;
  try {
    return JSON.parse(fileDataString) as FileData;
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        "Something went wrong while fetching file data: " + error.message,
      );
    }
    return null;
  }
}

export async function getRawFile(id: string): Promise<File | null> {
  const fileData = await getFileData(id);
  if (fileData == null) return null;

  const file = new File([fileData.content], fileData.name, {
    type: "text/plain",
  });
  return file;
}
