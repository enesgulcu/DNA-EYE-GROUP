// components/ChatWidget/index.js
"use client";
import React, { useEffect, useRef } from "react";

export default function ChatWidget() {
  const ref = useRef(null);
  const theme =
    "https://app.five9.com/consoles/Common/css/themes/default-theme.css";

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = theme;
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.innerHTML = `
      #five9-widget-container {
        bottom: 0 !important;
        right: 0 !important;
        overflow: visible !important;
        width: auto !important;
        height: auto !important;
      }
      .five9-frame {
        bottom: 0 !important;
        right: 0 !important;
      }
      .five9-chat-button {
        font-size: 24px !important;
        width: 320px !important;
        margin-bottom: 0 !important;
        height: 40px !important;
      }
      .five9-text::after {
        content: " Now" !important;
      }
    `;
    document.head.appendChild(style);

    const s = document.createElement("script");
    s.src =
      "https://app.five9.com/consoles/SocialWidget/five9-social-widget.min.js";
    s.async = true;
    s.onload = () => {
      window.Five9SocialWidget?.addWidget({
        rootUrl: "https://app.five9.com/consoles/",
        type: "chat",
        tenant: "DNA Eye Group",
        title: "DNA Eye Group",
        profiles: ["Chat"],
        containerId: "five9-widget-container",
        theme,
        autostart: true,
        showProfiles: true,
        hideDuringAfterHours: false,
      });
    };
    document.body.appendChild(s);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
      document.body.removeChild(s);
    };
  }, []);

  return (
    <div
      id="five9-widget-container"
      ref={ref}
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        overflow: "visible",
        zIndex: 9999,
      }}
    />
  );
}
