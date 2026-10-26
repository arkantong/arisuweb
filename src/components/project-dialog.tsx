"use client";
import { useEffect, useRef } from "react";
import { Arrow } from "./arrow";
export function ProjectDialog({ children }: { children: React.ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const previousOverflow = useRef("");
  useEffect(() => {
    const element = dialog.current;
    return () => {
      if (element?.open)
        document.body.style.overflow = previousOverflow.current;
    };
  }, []);
  function open() {
    previousOverflow.current = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
  }
  function closed() {
    document.body.style.overflow = previousOverflow.current;
    trigger.current?.focus({ preventScroll: true });
  }
  return (
    <>
      <button
        ref={trigger}
        type="button"
        className="button button-outline"
        onClick={open}
      >
        Explore the project <Arrow />
      </button>
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby="project-title"
        onClose={closed}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <div className="project-dialog-content">
          <div className="project-toolbar">
            <span>ARISU / Selected work</span>
            <button
              type="button"
              autoFocus
              aria-label="Close project"
              onClick={() => dialog.current?.close()}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m6 6 12 12M6 18 18 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>
          <div className="project-body">{children}</div>
        </div>
      </dialog>
    </>
  );
}
