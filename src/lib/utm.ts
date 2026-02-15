interface UtmParams {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  referrer?: string;
}

const STORAGE_KEY = "utm_params";

/** Capture UTM from URL on first load and persist to sessionStorage. */
export function captureUtm(): void {
  if (sessionStorage.getItem(STORAGE_KEY)) return;

  const params = new URLSearchParams(window.location.search);
  const utm: UtmParams = {
    utmSource: params.get("utm_source") || undefined,
    utmMedium: params.get("utm_medium") || undefined,
    utmCampaign: params.get("utm_campaign") || undefined,
    referrer: document.referrer || undefined,
  };

  if (utm.utmSource || utm.utmMedium || utm.utmCampaign || utm.referrer) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
  }
}

/** Read saved UTM (falls back to current URL if nothing stored). */
export function getUtmParams(): UtmParams {
  const stored = sessionStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored) as UtmParams;
    } catch {
      /* corrupted — fall through */
    }
  }

  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get("utm_source") || undefined,
    utmMedium: params.get("utm_medium") || undefined,
    utmCampaign: params.get("utm_campaign") || undefined,
    referrer: document.referrer || undefined,
  };
}
