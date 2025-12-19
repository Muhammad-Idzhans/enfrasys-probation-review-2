
"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button, Steps } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";
import "bootstrap-icons/font/bootstrap-icons.css";

type RouteItem = { path: string; title: string };

const ROUTES: RouteItem[] = [
  { path: "/introduction",    title: "Introduction" },
  { path: "/evaluation-form", title: "Evaluation Form" },
  { path: "/client-related-work", title: "Client Related Work" },
  { path: "/self-discovery", title: "Self Discovery" },
  { path: "/work-challenges", title: "Work Challenges" },
  { path: "/experience-growth", title: "Experience & Growth" },
  { path: "/what-next", title: "What's Next" },
  // ➜ add more pages here in the order you want the dots to represent
];

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const currentIndex = Math.max(
    0,
    ROUTES.findIndex((r) => r.path === pathname)
  );

  const isFirst = currentIndex <= 0;
  const isLast = currentIndex >= ROUTES.length - 1;

  const goPrev = () => {
    if (!isFirst) router.push(ROUTES[currentIndex - 1].path);
  };

  const goNext = () => {
    if (!isLast) router.push(ROUTES[currentIndex + 1].path);
  };

  return (
    <div className="py-3 w-75">
      <div className="d-flex align-items-center justify-content-between">
        {/* Prev button (left) */}
        <Button
          type="default"
          shape="round"
          icon={<LeftOutlined />}
          onClick={goPrev}
          disabled={isFirst}
        >
          Previous
        </Button>

        {/* Center dots (Ant Design Steps with progressDot) */}
        <div className="flex-grow-1 d-flex justify-content-center">
          <Steps
            className="footer-steps"
            current={currentIndex}
            progressDot
            size="small"
            items={ROUTES.map(() => ({ title: "" }))}
          />
        </div>

        {/* Next button (right) */}
        <Button
          type="default"
          shape="round"
          icon={<RightOutlined />}
          onClick={goNext}
          disabled={isLast}
        >
          Next
        </Button>
      </div>

      {/* Optional: small helper text under the dots */}
      {/* <div className="mt-2 text-center text-muted small">
        {ROUTES[currentIndex]?.title}
      </div> */}
    </div>
  );
}
