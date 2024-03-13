"use client";

import { LoadResumeForm } from "@/lib/features/LoadResumeForm";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import { useState } from "react";
import { useConvertResumeMutation } from "@/lib/entity/resume";
import { LoadResumeMutationFixedCacheKey } from "@/lib/features/LoadResumeForm/ui/LoadResumeForm";

export default function IndexPage() {
  const [docs, setDocs] = useState([]);

  const [, { isLoading, data }] = useConvertResumeMutation({
    fixedCacheKey: LoadResumeMutationFixedCacheKey,
  });

  return (
    <div className="pt-10 grid grid-cols-[1fr_2fr] gap-5">
      <LoadResumeForm />
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    </div>
  );
}
