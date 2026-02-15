interface UtmParams {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  referrer?: string;
}

export function getUtmParams(): UtmParams {
  const params = new URLSearchParams(window.location.search);

  return {
    utmSource: params.get("utm_source") || undefined,
    utmMedium: params.get("utm_medium") || undefined,
    utmCampaign: params.get("utm_campaign") || undefined,
    referrer: document.referrer || undefined,
  };
}
