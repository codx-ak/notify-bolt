import FeaturesSection from "@/components/Features";
import HeaderSection from "@/components/Header";
import PerformanceSection from "@/components/Performance";
import PlaygroundSection from "@/components/Playground";
import SetupSection from "@/components/Setup";

export default function Home() {
  return (
    <>
      {/* header  */}
      <HeaderSection />

      {/* Features section  */}
      <FeaturesSection />

      {/* package setup section  */}
      <SetupSection />

      {/* package playground  */}
      <PlaygroundSection />

      {/* package performance section  */}
      <PerformanceSection />

      {/* thanks section  */}
      <section className="text-center mt-[5rem]">
        <div className="container">
          <h3 className="text-[20px] text-primary mb-[6px] text-center w-[100%] font-[600]">
            🎉 Thanks for Checking Out Notify-Bolt!
          </h3>
          <p className="text-[0.8rem] text-subtitle text-center">
            We appreciate your time. Hope `notify-bolt` helps you make your
            notifications smoother and more efficient.
          </p>
        </div>
      </section>
    </>
  );
}
