import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Docs</h1>
          <p className=" mt-4">
            Welcome to the Deepfake Detection App! Follow these steps to get started:
          </p>
          <ol className=" text-left mt-4 list-decimal list-inside">
            <li>Go to the <strong>Home Page</strong>.</li>
            <li>Upload an MP4 video file by clicking the upload button.</li>
            <li>Wait for the results to be processed and displayed in the modal.</li>
          </ol>
          <p className=" mt-4">
            For any issues, please contact support or refer to the documentation.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
