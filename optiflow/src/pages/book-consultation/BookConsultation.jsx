import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import "./BookConsultation.css";

export default function BookConsultation() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
      <div className="container co">
        <div className="candely-title-wrapper">
          <h2 className="c-section-title">
            Book your free <span className="blue-text-color">consultation</span>
          </h2>
          <p className="c-description">
            Learn how we help companies skyrocket productivity through custom
            automations.
          </p>
        </div>
        <Cal
          calLink="martbul-22rgis/secret"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
        ;
      </div>
    </>
  );
}
