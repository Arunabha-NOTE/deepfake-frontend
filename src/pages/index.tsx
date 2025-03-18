import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";





import { title, subtitle } from "@/components/primitives";

import DefaultLayout from "@/layouts/default";
import FileUpload from "@/components/fileupload.tsx";

export default function IndexPage() {
  const handleFileSelect = (file: File) => {
    // Process the file (e.g., upload to a server)
    console.log("Selected file:", file);
  };
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Deepfake&nbsp;</span>
          <span className={title({ color: "violet" })}>Detector&nbsp;</span>
          <br />
          <span className={title()}>
            website
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </div>
        </div>
        <div className="my-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by uploading{" "}
              <Code color="primary">the video</Code> below
            </span>
          </Snippet>

        </div>

        <FileUpload onFileSelect={handleFileSelect} />
      </section>
    </DefaultLayout>
  );
}
