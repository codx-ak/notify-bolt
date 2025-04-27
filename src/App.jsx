import React, { useEffect, useState } from "react";
import Footer from "./components/common/Footer";
import Prism from "prismjs";
import HomePage from "./Pages/Home";
import DocPage from "./Pages/Doc";
import { showNotify } from "notify-bolt";

const App = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      showNotify({
        title: "Welcome!",
        message: "We're glad to have you here. Enjoy exploring Notify Bolt!",
        allowOutsideClick: true,
        animation: "zoom-in",
        celebrate: true,
        celebrationType: "pride",
        showCancelButton: false,
        size: "sm",
        status: "success",
        variant: "default",
        iconType: "classic",
        timer: 5000,
      });
    }, 1000);
  }, []);

  const getPageFromQuery = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("page") === "docs" ? "docs" : "home";
  };

  const [page, setPage] = useState(getPageFromQuery());

  const navigate = (targetPage) => {
    setPage(targetPage);
    const query = targetPage === "docs" ? "?page=docs" : "";
    window.history.pushState({}, "", `${window.location.pathname}${query}`);
  };

  useEffect(() => {
    const handlePopState = () => {
      setPage(getPageFromQuery());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="max-w-[960px] my-0 mx-auto py-[2rem] px-[1rem] text-center sm:px-[0.5rem] sm:py-[1rem]">
      {page === "home" && <HomePage goToDocs={() => navigate("docs")} />}
      {page === "docs" && <DocPage goToHome={() => navigate("home")} />}
      <Footer
        goToDocs={() => navigate("docs")}
        goToHome={() => navigate("home")}
      />
    </div>
  );
};

export default App;
