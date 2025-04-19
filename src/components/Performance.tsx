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
    <section className="performance-section">
      <div className="container">
        <h3>🚀 Performance & Bundle Size</h3>
        <p className="subtitle">
          Built with performance in mind. Lightweight, fast, and efficient.
        </p>

        <div className="features-grid">
          <div className="feature-box">
            <div className="icon">⚡</div>
            <div style={{ flex: 1 }}>
              <h3>Lightning Fast</h3>
              <p>
                Optimized to show notifications instantly with minimal
                footprint.
              </p>
            </div>
          </div>

          <div className="feature-box">
            <div className="icon">📦</div>
            <div style={{ flex: 1 }}>
              <h3>Bundle Size</h3>
              <p>
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
