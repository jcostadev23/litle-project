"use client";
import Button from "./components/Button";
import "./Page.module.css";

export default function Home() {
  return (
    <div className="custom-grid">
      <main className="custom-flex ">
        <div>My litle project</div>
        <Button label={"Home Page"} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="flex items-center gap-2 hover:underline hover:underline-offset-4">
          My litle project with storybook jest and cypress
        </p>
      </footer>
    </div>
  );
}
