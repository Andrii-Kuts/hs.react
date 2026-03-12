import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./FileViewer.module.css";
import { getFileData, type FileData } from "./fileViewer";
import Prism from "prismjs";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prism-themes/themes/prism-vsc-dark-plus.css";
import { ChevronLeft } from "lucide-react";
import { formatDate } from "../utils";

export const FileComponent: React.FC = () => {
  const { slug } = useParams();
  const [fileData, setFileData] = useState<FileData | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [highlightedCode, setHighlightedCode] = useState<string>("");

  useEffect(() => {
    async function fetch() {
      if (slug == undefined) return;
      const fetchedFileData = await getFileData(slug);
      if (fetchedFileData == null) {
        setError(true);
        return;
      }
      setFileData(fetchedFileData);
      setHighlightedCode(
        Prism.highlight(fetchedFileData.content, Prism.languages.cpp, "cpp"),
      );
    }
    fetch();
  }, [slug]);

  if (error) {
    return (
      <div>
        <p style={{ color: "var(--red)" }}>
          Something went wrong while fetching file
        </p>
      </div>
    );
  }

  if (fileData == null) {
    return <div>Fetching file...</div>;
  }

  return (
    <div className={styles.file_viewer}>
      <span className={styles.file_viewer__meta}>
        <span className={styles.file_viewer__meta__name}>{fileData.name}</span>
        <span className={styles.file_viewer__meta__date}>
          {formatDate(new Date(fileData.uploadDate))}
        </span>
      </span>
      <div className={styles.file_viewer__separator} />
      <pre
        className={styles.file_viewer__code}
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </div>
  );
};

export const FileViewer: React.FC = () => {
  return (
    <div className={styles.page}>
      <a href="/" className={styles.go_back_button}>
        <ChevronLeft /> Go Back
      </a>
      <FileComponent />
    </div>
  );
};

export default FileViewer;
