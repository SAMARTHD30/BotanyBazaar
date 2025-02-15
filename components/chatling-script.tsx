"use client"

import Script from "next/script"

export function ChatlingScript() {
    return (
        <>
            <Script
                id="chatling-config"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.chtlConfig = {
                            chatbotId: "6218862797",
                            buttonStyle: {
                                backgroundColor: "#24695c",
                                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12.0001 2C6.49993 2 2.00012 6.49981 2.00012 12C2.00012 13.9 2.49991 15.7001 3.39991 17.3001L2.00012 22L6.69995 20.6001C8.29995 21.5001 10.1 22 12.0001 22C17.5002 22 22 17.5002 22 12C22 6.49981 17.5002 2 12.0001 2Z"></path></svg>',
                                position: {
                                    bottom: "20px",
                                    right: "20px"
                                },
                                width: "56px",
                                height: "56px",
                                borderRadius: "50%",
                                boxShadow: "0 2px 12px rgba(0,0,0,0.1)"
                            },
                            chatWindowStyle: {
                                primaryColor: "#24695c",
                                headerColor: "#24695c",
                                borderRadius: "12px",
                                width: "380px",
                                height: "600px",
                                position: {
                                    bottom: "100px",
                                    right: "20px"
                                }
                            }
                        };
                    `
                }}
            />
            <Script
                id="chatling-embed"
                src="https://chatling.ai/js/embed.js"
                data-id="6218862797"
                strategy="afterInteractive"
            />
        </>
    )
}