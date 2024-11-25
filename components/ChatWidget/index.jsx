"use client";
import React, { useEffect } from "react";

function ChatWidget() {
  const basicOptions = {
    rootUrl: "https://app.five9.com/consoles/",
    type: "chat",
    title: "DNA Eye Group",
    tenant: "DNA Eye Group",
    profiles: "Chat",
    showProfiles: true,
    autostart: true,
    theme: "default-theme.css",
    surveyOptions: {
      showComment: true,
      requireComment: false,
    },
    fields: {
      name: {
        value: "",
        show: true,
        label: "Name",
      },
      email: {
        value: "",
        show: true,
        label: "Email",
      },
      UserLocale: {
        value: "en",
        show: false,
      },
    },
    playSoundOnMessage: true,
    allowCustomerToControlSoundPlay: false,
    showEmailButton: false,
    hideDuringAfterHours: true,
    useBusinessHours: false,
    showPrintButton: false,
    allowUsabilityMenu: false,
    enableCallback: false,
    callbackList: "",
    allowRequestLiveAgent: false,
  };
  const proactiveOptions = {
    tenant: "DNA Eye Group",
    title: "DNA Eye Group",
    showProfiles: true,
    restAPI: "https://app.five9.com",
    chatConsole: "https://app.five9.com/consoles/ChatConsole/index.html",
    notificationType: "notification",
    customChatFields: {
      name: {
        value: "",
        show: true,
        label: "Name",
      },
      email: {
        value: "",
        show: true,
        label: "Email",
      },
      UserLocale: {
        value: "en",
        show: false,
      },
    },
    chatOptions: {
      allowRequestLiveAgent: false,
      showEmailButton: false,
      hideDuringAfterHours: true,
      useBusinessHours: false,
      enableCallback: false,
      callbackList: "",
      showPrintButton: false,
      playSoundOnMessage: true,
      allowCustomerToControlSoundPlay: false,
      allowUsabilityMenu: false,
    },
  };
  const parameters = {
    pageId: "",
    profiles: "Chat",
  };

  const widgetContainer = React.useRef(null);

  useEffect(() => {
    // five9 stillerini head e ekler
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
        .five9-chat-button {
            font-size: 24px !important;
            width: 320px !important;
        }
        .five9-text::after {
            content: " Now" !important;
        }
        #five9-popout-button {
            float: right;
        }
        #five9-minimize-icon {
            margin: 0px 0px 0px 90px !important;
        }
    `;
    document.head.appendChild(styleTag);

    // five9 ProactiveChat scriptini componente ekler
    const proactiveChat = document.createElement("script");
    proactiveChat.src =
      "https://app.five9.com/consoles/ProactiveChat/javascripts/five9proactivechat.js";
    proactiveChat.async = true;
    proactiveChat.onload = () => {
      window.Five9ProactiveChat.init(proactiveOptions);
      window.Five9ProactiveChat.startNewPage(parameters);
    };
    widgetContainer.current.appendChild(proactiveChat);

    // five9 socialWidget scriptini componente ekler
    const socialWidget = document.createElement("script");
    socialWidget.src =
      "https://app.five9.com/consoles/SocialWidget/five9-social-widget.min.js";
    socialWidget.async = true;
    socialWidget.onload = () => {
      window.Five9SocialWidget.addWidget(basicOptions);
    };
    widgetContainer.current.appendChild(socialWidget);

    return () => {
      widgetContainer.current.removeChild(socialWidget);
      widgetContainer.current.removeChild(proactiveChat);
    };
  }, []);

  return <div id="five9-widget-container" ref={widgetContainer}></div>;
}

export default ChatWidget;
