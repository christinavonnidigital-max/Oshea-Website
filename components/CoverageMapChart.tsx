import React, { useMemo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import world from "world-atlas/countries-110m.json";
import { feature } from "topojson-client";

type MapView = "coverage" | "planned" | "both";

type CoverageMapChartProps = {
  covered: string[];
  planned: string[];
  view: MapView;
};

const CoverageMapChart: React.FC<CoverageMapChartProps> = ({ covered, planned, view }) => {
  const geography = useMemo(() => feature(world as any, (world as any).objects.countries), []);
  const coveredSet = useMemo(() => new Set(covered), [covered]);
  const plannedSet = useMemo(() => new Set(planned), [planned]);

  const showCovered = view !== "planned";
  const showPlanned = view !== "coverage";

  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ center: [20, 0], scale: 420 }}
      width={820}
      height={520}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies geography={geography as any}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const name = (geo.properties.name as string) || "";
            const isCovered = showCovered && coveredSet.has(name);
            const isPlanned = showPlanned && plannedSet.has(name);
            const fill = isCovered ? "#0B4AE2" : isPlanned ? "#F59E0B" : "#C8CFDE";
            const stroke = "#0f172a";

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill,
                    stroke,
                    strokeWidth: 0.45,
                    outline: "none",
                  },
                  hover: {
                    fill: isCovered ? "#0A3DC0" : isPlanned ? "#D97706" : "#E3E7F0",
                    stroke,
                    strokeWidth: 0.45,
                    outline: "none",
                  },
                  pressed: { outline: "none" },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default CoverageMapChart;
