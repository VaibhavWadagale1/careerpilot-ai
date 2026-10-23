const ADZUNA_BASE = "https://api.adzuna.com/v1/api";

function requireConfig() {
  const appId = process.env.ADZUNA_APP_ID;
  const appKey = process.env.ADZUNA_APP_KEY;
  if (!appId || !appKey) {
    const error = new Error("Adzuna is not configured. Add ADZUNA_APP_ID and ADZUNA_APP_KEY to backend/.env.");
    error.code = "JOB_SOURCE_NOT_CONFIGURED";
    throw error;
  }
  return { appId, appKey };
}

function normalize(item) {
  return {
    id: `adzuna:${item.id}`,
    externalId: String(item.id),
    source: "Adzuna",
    company: item.company?.display_name || "Company not listed",
    companyLogo: null,
    role: item.title || "Untitled role",
    title: item.title || "Untitled role",
    description: item.description || "",
    location: item.location?.display_name || "Location not listed",
    workplaceType: "Unknown",
    employmentType: item.contract_type || "Not specified",
    experienceLevel: "",
    tags: item.category?.label ? [item.category.label] : [],
    salary: {
      min: item.salary_min ?? null,
      max: item.salary_max ?? null,
      currency: null,
    },
    jobUrl: item.redirect_url,
    applyUrl: item.redirect_url,
    postedAt: item.created || null,
    updatedAt: new Date().toISOString(),
  };
}

export async function searchAdzuna({
  query = "",
  location = "",
  page = 1,
  resultsPerPage = 20,
} = {}) {
  const { appId, appKey } = requireConfig();
  const params = new URLSearchParams({
    app_id: appId,
    app_key: appKey,
    results_per_page: String(Math.min(Math.max(resultsPerPage, 1), 50)),
    what: query,
    where: location,
    "content-type": "application/json",
  });

  const response = await fetch(
    `${ADZUNA_BASE}/jobs/in/search/${Math.max(1, Number(page))}?${params}`,
    { headers: { Accept: "application/json" } },
  );

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    const error = new Error(`Adzuna returned ${response.status}.`);
    error.detail = detail.slice(0, 300);
    throw error;
  }

  const payload = await response.json();
  return {
    count: payload.count || 0,
    jobs: (payload.results || []).map(normalize),
  };
}
