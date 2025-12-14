import * as React from "react";
import { useEffect } from "react";

const Photography = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://embedsocial.com/cdn/ht.js";
    script.id = "EmbedSocialHashtagScript";

    if (!document.getElementById("EmbedSocialHashtagScript")) {
      document.getElementsByTagName("head")[0].appendChild(script);
    }
  }, []);

  return (
    <div>
      <div className="embedsocial-hashtag" data-ref="54f39887067a11839f605a1303f8235483dedd49">
        <a
          className="feed-powered-by-es feed-powered-by-es-feed-img es-widget-branding"
          href="https://embedsocial.com/social-media-aggregator/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram widget"
        >
          <img src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp" alt="EmbedSocial" />
          <div className="es-widget-branding-text">Instagram widget</div>
        </a>
      </div>
    </div>
  );
};

export default Photography;
