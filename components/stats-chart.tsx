"use client"

import { useEffect, useRef, useState } from "react"

export default function StatsChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !chartRef.current) return

    const loadChart = async () => {
      const { Chart, registerables } = await import("chart.js")
      Chart.register(...registerables)

      const ctx = chartRef.current?.getContext("2d")
      if (!ctx) return

      const gradient1 = ctx.createLinearGradient(0, 0, 0, 400)
      gradient1.addColorStop(0, "rgba(157, 78, 221, 0.8)")
      gradient1.addColorStop(1, "rgba(157, 78, 221, 0.1)")

      const gradient2 = ctx.createLinearGradient(0, 0, 0, 400)
      gradient2.addColorStop(0, "rgba(0, 255, 255, 0.8)")
      gradient2.addColorStop(1, "rgba(0, 255, 255, 0.1)")

      const gradient3 = ctx.createLinearGradient(0, 0, 0, 400)
      gradient3.addColorStop(0, "rgba(255, 0, 255, 0.8)")
      gradient3.addColorStop(1, "rgba(255, 0, 255, 0.1)")

      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
          datasets: [
            {
              label: "Participants",
              data: [150, 200, 350, 450, 500, 600],
              borderColor: "#9d4edd",
              backgroundColor: gradient1,
              borderWidth: 3,
              fill: true,
              tension: 0.4,
              pointBackgroundColor: "#9d4edd",
              pointBorderColor: "#ffffff",
              pointBorderWidth: 2,
              pointRadius: 6,
              pointHoverRadius: 8,
            },
            {
              label: "Projects",
              data: [50, 75, 120, 150, 180, 220],
              borderColor: "#00ffff",
              backgroundColor: gradient2,
              borderWidth: 3,
              fill: true,
              tension: 0.4,
              pointBackgroundColor: "#00ffff",
              pointBorderColor: "#ffffff",
              pointBorderWidth: 2,
              pointRadius: 6,
              pointHoverRadius: 8,
            },
            {
              label: "Prize Pool (₹L)",
              data: [0.5, 0.8, 1.2, 1.5, 1.8, 2.2],
              borderColor: "#ff00ff",
              backgroundColor: gradient3,
              borderWidth: 3,
              fill: true,
              tension: 0.4,
              pointBackgroundColor: "#ff00ff",
              pointBorderColor: "#ffffff",
              pointBorderWidth: 2,
              pointRadius: 6,
              pointHoverRadius: 8,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: "top",
              labels: {
                color: "#ffffff",
                font: {
                  size: 14,
                  weight: "bold",
                },
                usePointStyle: true,
                padding: 20,
              },
            },
            tooltip: {
              backgroundColor: "rgba(10, 10, 10, 0.9)",
              titleColor: "#00ffff",
              bodyColor: "#ffffff",
              borderColor: "#9d4edd",
              borderWidth: 1,
              cornerRadius: 8,
              displayColors: true,
              mode: "index",
              intersect: false,
            },
          },
          scales: {
            x: {
              grid: {
                color: "rgba(157, 78, 221, 0.2)",
                lineWidth: 1,
              },
              ticks: {
                color: "#ffffff",
                font: {
                  size: 12,
                  weight: "bold",
                },
              },
            },
            y: {
              grid: {
                color: "rgba(157, 78, 221, 0.2)",
                lineWidth: 1,
              },
              ticks: {
                color: "#ffffff",
                font: {
                  size: 12,
                  weight: "bold",
                },
              },
            },
          },
          interaction: {
            mode: "index",
            intersect: false,
          },
          animation: {
            duration: 2000,
            easing: "easeInOutQuart",
          },
          elements: {
            point: {
              hoverBackgroundColor: "#ffffff",
              hoverBorderWidth: 3,
            },
          },
        },
      })
    }

    loadChart()
  }, [mounted])

  if (!mounted) return null

  return (
    <div className="cyber-card p-6">
      <h3 className="text-2xl font-bold cyber-heading mb-6 text-center">HACKOASIS Growth Over Years</h3>
      <div className="h-80 relative">
        <canvas ref={chartRef} className="w-full h-full"></canvas>
      </div>
    </div>
  )
}
