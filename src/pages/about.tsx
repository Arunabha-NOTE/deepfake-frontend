import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About</h1>
          <p className=" mt-4">
            Welcome to the Deepfake Detection App! This website is designed to help users detect 
            whether a video is real or fake using advanced AI models. Simply upload an MP4 video, 
            and our system will analyze it to provide a prediction along with confidence levels.
          </p>
          <p className=" mt-4">
            Our mission is to provide a reliable and easy-to-use tool for identifying deepfake content, 
            empowering users to make informed decisions in a world where digital media is increasingly manipulated.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
