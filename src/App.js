import React, { useState } from 'react';
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Switch } from "./components/ui/switch";
import { Sparkles, Eye, Mic, LayoutDashboard } from 'lucide-react';

const themes = {
  scandi: {
    background: "bg-gray-100",
    text: "text-gray-900",
  },
  dmt: {
    background: "bg-gradient-to-br from-purple-700 via-indigo-800 to-black",
    text: "text-purple-100",
  }
};

export default function FaceGaugeUI() {
  const [theme, setTheme] = useState("scandi");
  const [feedbackEnabled, setFeedbackEnabled] = useState(true);

  const toggleTheme = () => setTheme(theme === "scandi" ? "dmt" : "scandi");

  return (
    <div className={`min-h-screen ${themes[theme].background} ${themes[theme].text} p-6 transition-all`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">FaceGauge: Personal Intelligence HUD</h1>
        <div className="flex gap-3 items-center">
          <span>Feedback</span>
          <Switch checked={feedbackEnabled} onChange={() => setFeedbackEnabled(!feedbackEnabled)} />
          <Button onClick={toggleTheme}>Toggle Theme</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold flex items-center gap-2"><Eye size={20} /> Perception Scan</h2>
            <p>Charisma Level: 🔥 High</p>
            <p>Presence Strength: ⚡️ Intense</p>
            <p>Emotional Truth: ✅ Congruent</p>
            <p>Archetype Detected: 🧠 Strategist</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold flex items-center gap-2"><Mic size={20} /> Feedback & Voice</h2>
            {feedbackEnabled ? (
              <p>"You're projecting clarity and dominance. Maintain this tone. Smile is activating rapport."</p>
            ) : (
              <p>Feedback is off.</p>
            )}
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardContent>
            <h2 className="text-xl font-semibold flex items-center gap-2"><LayoutDashboard size={20} /> Session Dashboard</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Trust Signal Heatmap: 84%</li>
              <li>Energy Profile: 💪 Balanced & Calm</li>
              <li>Motivation Type: Achievement-Driven</li>
              <li>Recommended Action: Ask open-ended question</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardContent>
            <h2 className="text-xl font-semibold flex items-center gap-2"><Sparkles size={20} /> Visual Overlay Preview</h2>
            <div className="w-full h-64 bg-black rounded-xl text-center flex items-center justify-center text-white">
              [ Camera Feed + HUD Overlay ]
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
