"use client";
import React from "react";
import GitHubCalendar from "react-github-calendar";

interface GitHubGraphProps {
  username: string;
}

export default function GitHubGraph({ username }: GitHubGraphProps) {
  const blueTheme = {
    light: ["#ffffff", "#dbeafe", "#93c5fd", "#3b82f6", "#1e40af"],
    dark: ["#0a0a0a", "#0d1b2a", "#1b3a57", "#274e82", "#1E40AF"],
  };

  return (
    <section
      id="github"
      className="py-20 px-4 max-w-6xl mx-auto text-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-white">GitHub Contributions</h2>

      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-black/20 rounded-lg">
        <div className="inline-block">
          <GitHubCalendar
            username={username}
            blockSize={15}
            blockMargin={5}
            fontSize={16}
            theme={blueTheme}
            hideTotalCount={false}
          />
        </div>
      </div>

      {/* Glow effect + custom scrollbar for browsers that support it */}
      <style jsx>{`
        /* Glow effect on hover */
        .react-activity-calendar .react-activity-calendar-day {
          transition: filter 0.2s ease;
        }
        .react-activity-calendar .react-activity-calendar-day:hover {
          filter: drop-shadow(0 0 6px #1E40AF) drop-shadow(0 0 10px #3b82f6);
        }

        /* Webkit scrollbar */
        .overflow-x-auto::-webkit-scrollbar {
          height: 8px;
        }
        .overflow-x-auto::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: #1E40AF;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
