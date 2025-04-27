import React, { useEffect, useState } from "react";

const PerformanceSection = () => {
  const [bundleSize, setBundleSize] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBundleSize = async () => {
      try {
        const res = await fetch(
          "https://bundlephobia.com/api/size?package=notify-bolt"
        );
        const data = await res.json();
        if (data.gzip) {
          setBundleSize((data.gzip / 1024).toFixed(2));
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching bundle size:", err);
        setError(true);
      }
    };

    fetchBundleSize();
  }, []);

  return (
    <section className="py-[2rem]">
      <div className="my-0 mx-auto text-center">
        <h3 className="title">🚀 Performance & Bundle Size</h3>
        <p className="subtitle">
          Built with performance in mind. Lightweight, fast, and efficient.
        </p>

        <div className="flex flex-wrap gap-[30px] text-left justify-center">
          <div className="w-[100%] max-w-[340px] flex items-start gap-[15px] bg-white p-[20px] rounded-[10px] shadow-card-2">
            <div className="text-[28px]">⚡</div>
            <div className="flex-1">
              <h3 className="text-[20px] text-primary mb-[6px] text-center w-[100%] font-[700] mt-[1rem]">
                Lightning Fast
              </h3>
              <p className="text-[0.8rem] text-subtitle text-center py-[1rem]">
                Optimized to show notifications instantly with minimal
                footprint.
              </p>
            </div>
          </div>

          <div className="w-[100%] max-w-[340px] flex items-start gap-[15px] bg-white p-[20px] rounded-[10px] shadow-card-2">
            <div className="text-[28px]">📦</div>
            <div className="flex-1">
              <h3 className="text-[20px] text-primary mb-[6px] text-center w-[100%] font-[700] mt-[1rem]">
                Bundle Size
              </h3>

              <p className="text-[0.8rem] text-subtitle text-center py-[1rem]">
                {error
                  ? "Error loading bundle size"
                  : bundleSize
                  ? `${bundleSize} KB`
                  : "Loading..."}{" "}
                (minified + gzipped)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
