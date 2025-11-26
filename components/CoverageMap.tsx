import React, { lazy, Suspense, useState } from "react";

type MapView = "coverage" | "planned" | "both";

const MapChart = lazy(() => import("./CoverageMapChart"));

const COVERED_NAMES = [
  "Sierra Leone",
  "Liberia",
  "C\u00f4te d'Ivoire",
  "Cote d'Ivoire",
  "Ghana",
  "Togo",
  "Benin",
  "Nigeria",
  "Cameroon",
  "Eq. Guinea",
  "Equatorial Guinea",
  "Gabon",
  "Congo",
  "Dem. Rep. Congo",
  "Central African Rep.",
  "Rwanda",
  "Burundi",
  "Uganda",
  "Kenya",
  "Tanzania",
  "Angola",
  "Zambia",
  "Zimbabwe",
  "Mozambique",
  "Namibia",
  "Botswana",
  "South Africa",
  "eSwatini",
  "Swaziland",
  "Lesotho",
  "Madagascar",
  "Mauritius",
];

const PLANNED_NAMES = [
  "Senegal",
  "Malawi",
  "Ethiopia",
  "Somalia",
  "Gambia",
  "Chad",
];

const CoverageMap: React.FC = () => {
  const [view, setView] = useState<MapView>("coverage");
  const options: { id: MapView; label: string }[] = [
    { id: "coverage", label: "Covered" },
    { id: "planned", label: "Planned" },
    { id: "both", label: "Both" },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 pt-4">
        <p className="text-sm text-slate-700">
          <span className="font-semibold text-brand-blue">Our footprint</span> shows current coverage and planned expansion.
        </p>
        <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-1">
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setView(option.id)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue/70 ${
                view === option.id
                  ? "bg-brand-blue text-white shadow-sm"
                  : "text-slate-700 hover:bg-white"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="h-72 w-full px-4 pb-2">
        <Suspense
          fallback={
            <div
              className="h-full w-full animate-pulse rounded-2xl bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200"
              aria-label="Loading coverage map"
            />
          }
        >
          <MapChart covered={COVERED_NAMES} planned={PLANNED_NAMES} view={view} />
        </Suspense>
      </div>

      <div className="flex flex-wrap items-center gap-4 px-4 pb-4 text-xs text-slate-600">
        <div className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#0B4AE2]" aria-hidden="true" />
          <span>Covered countries</span>
        </div>
        <div className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#F59E0B]" aria-hidden="true" />
          <span>Planned expansion</span>
        </div>
        <div className="inline-flex items-center gap-2 text-slate-500">
          <span className="h-3 w-3 rounded-full bg-[#C8CFDE]" aria-hidden="true" />
          <span>Not yet covered</span>
        </div>
      </div>
    </div>
  );
};

export default CoverageMap;
