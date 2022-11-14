import { useEffect, useState } from "react"
import { csv } from "d3-fetch"

import AreaChart from "@components/pages/MarketPage/AreaChart"

export default function SectorAreaChart({
  src,
  indicator = "Indicator name",
  unit = "unit",
  precision = 1,
  chartNotes = "",
}) {
  const [data, setData] = useState(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (!src) return
    csv(`/data/sector${src}`).then((d) => {
      const keys = Object.keys(d[0])
      const yearKeys = keys.filter((d) => !isNaN(d)).sort((a, b) => a - b)
      const nameKey = keys.filter((d) => isNaN(d))[0]
      const ddd = {
        indicator,
        subindicators: d.map((dd) => {
          return {
            subindicator: dd[nameKey],
            units: unit,
            data: yearKeys.map((year) => ({
              color: dd[nameKey],
              year: parseInt(year),
              value:
                Math.round(parseFloat(dd[year]) * (1 / precision)) /
                (1 / precision),
            })),
          }
        }),
      }
      setData(ddd)
    })
  }, [src])

  if (!data) return null

  return (
    <div>
      <AreaChart data={data} compactTooltip={false} />
      {chartNotes && (
        <p style={{ fontSize: "0.875rem", color: "#778088", marginTop: "1.25rem" }}>
          {chartNotes}
        </p>
      )}
    </div>
  )
}
