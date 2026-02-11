import axios from "axios";

// Set tracking endpoint - can be disabled by setting to null
const TRACKING_ENDPOINT = process.env.NEXT_PUBLIC_TRACKING_ENDPOINT || 
  "https://portfolio-tracker-475117.el.r.appspot.com/api/track";

// Create axios instance with timeout
const axiosInstance = axios.create({
  timeout: 5000, // 5 second timeout
});

export async function trackVisit() {
  try {
    // Skip tracking if endpoint not configured
    if (!TRACKING_ENDPOINT) {
      console.log("Tracking disabled - no endpoint configured");
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const encodedRef = params.get("ref") || params.get("track");
    let ref = "unknown";
    if (encodedRef) {
      try {
        ref = atob(encodedRef);
      } catch (decodeError) {
        console.error("Failed to decode ref:", decodeError);
        ref = "invalid_encoding";
      }
    }
    
    // Get IP and location with error handling
    let ip = "unknown";
    let city = "unknown";
    let region = "unknown";
    let country_name = "unknown";
    
    try {
      const ipRes = await axiosInstance.get("https://api.ipify.org?format=json");
      ip = ipRes.data.ip;
      
      const locRes = await axiosInstance.get(`https://ipapi.co/${ip}/json/`);
      city = locRes.data.city || "unknown";
      region = locRes.data.region || "unknown";
      country_name = locRes.data.country_name || "unknown";
    } catch (locErr) {
      console.warn("Failed to fetch location data:", locErr.message);
      // Continue with unknown values
    }
    
    // Prepare payload
    const payload = {
      ipAddress: ip,
      city,
      region,
      country: country_name,
      timestamp: new Date().toISOString(),
      ref: ref, 
    };
    
    try {
      const res = await axiosInstance.post(TRACKING_ENDPOINT, payload);
      console.log("Tracked successfully", res.data);
    } catch (postErr) {
      console.error("Tracking error:", {
        message: postErr.message,
        status: postErr.response?.status,
        statusText: postErr.response?.statusText,
      });
    }
      
  } catch (err) {
    console.error("Error tracking visit:", err.message);
  }
}
export function createTrackedURL(baseURL, recruiterName) {
  const encodedName = btoa(recruiterName);
  return `${baseURL}?ref=${encodedName}`;
}
