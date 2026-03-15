import React from "react";
import Hero from "../Components/Hero";

export default function ErrorPage() {
  return (
    <>
      <main className="main">
        <Hero title="Error" />

        <div className="container">
          <div className="my-5 py-5 text-center">
            <h1>404 Page Not Found</h1>
          </div>
        </div>
      </main>
    </>
  );
}
