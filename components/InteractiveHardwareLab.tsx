import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Cpu,
  Layers,
  Play,
  RotateCcw,
  Activity,
  Sliders,
  AlertTriangle,
  CheckCircle2,
  Wifi,
  Cloud,
  ArrowRight,
  ShieldCheck,
  Zap,
  RefreshCw
} from 'lucide-react';

export const InteractiveHardwareLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'iot' | 'sputtering' | 'cicd'>('iot');

  // --- 1. IoT Simulator State ---
  const [temp, setTemp] = useState<number>(27.5);
  const [humidity, setHumidity] = useState<number>(58);
  const [telemetryLogs, setTelemetryLogs] = useState<string[]>([
    'INIT: ESP32-WROOM booted at 240MHz',
    'NET: Connected to 2.4GHz Wi-Fi (RSSI: -58dBm)',
    'MQTT: Arduino Cloud telemetry topic published: [noho-iot/telemetry]',
    'DATA: T=27.5°C | RH=58.0% | Status: NOMINAL'
  ]);

  const isTempAlert = temp > 32;
  const isHumidityAlert = humidity > 70;

  const handleSimulatePulse = () => {
    const newTemp = +(temp + (Math.random() * 2 - 1)).toFixed(1);
    const newHumidity = +(humidity + (Math.random() * 4 - 2)).toFixed(0);
    setTemp(newTemp);
    setHumidity(newHumidity);
    const timestamp = new Date().toLocaleTimeString();
    const status = newTemp > 32 || newHumidity > 70 ? 'ALERT_TRIGGERED' : 'NOMINAL';
    setTelemetryLogs((prev) => [
      `[${timestamp}] T=${newTemp}°C | RH=${newHumidity}% | ESP32 GPIO4 -> Cloud [${status}]`,
      ...prev.slice(0, 5)
    ]);
  };

  // --- 2. Sputtering Simulator State ---
  const [rfPower, setRfPower] = useState<number>(120); // Watts (50 - 200)
  const [arOxygenRatio, setArOxygenRatio] = useState<number>(85); // 85% Ar, 15% O2
  const [substrateTemp, setSubstrateTemp] = useState<number>(250); // Celsius (100 - 450)

  // Derived semiconductor parameters
  const calculatedThickness = Math.round((rfPower * 1.8) + (substrateTemp * 0.4)); // nm
  const calculatedBandgap = (3.15 - (substrateTemp * 0.0006) + ((100 - arOxygenRatio) * 0.004)).toFixed(2); // eV
  const calculatedResponsivity = ((rfPower / 100) * 0.42 * (substrateTemp / 300)).toFixed(3); // A/W

  // --- 3. CI/CD Pipeline Simulator State ---
  const [pipelineState, setPipelineState] = useState<'idle' | 'running' | 'success'>('idle');
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [cicdLogs, setCicdLogs] = useState<string[]>([]);

  const pipelineSteps = [
    'Git webhook trigger: push to main (commit #8f3b21)',
    'Executing Python test suites & syntax check (pytest)',
    'Shell scripting linting & file integrity check (shellcheck)',
    'Establishing SSH Ed25519 tunnel to Linux production host',
    'Deploying atomic build artifacts & restarting systemd daemon',
    'Healthcheck verified: Service status active (running) on port 8080'
  ];

  const runPipeline = () => {
    if (pipelineState === 'running') return;
    setPipelineState('running');
    setCurrentStepIndex(0);
    setCicdLogs(['[INFO] Pipeline launched via GitHub Actions runner...']);

    let step = 0;
    const interval = setInterval(() => {
      if (step < pipelineSteps.length) {
        const currentMsg = pipelineSteps[step];
        setCurrentStepIndex(step + 1);
        setCicdLogs((prev) => [...prev, `[SUCCESS] Step ${step + 1}: ${currentMsg}`]);
        step++;
      } else {
        clearInterval(interval);
        setPipelineState('success');
      }
    }, 600);
  };

  const resetPipeline = () => {
    setPipelineState('idle');
    setCurrentStepIndex(0);
    setCicdLogs([]);
  };

  return (
    <section id="hardware-lab" className="py-20 sm:py-28 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-zinc-800/80">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400 block">
                Interactive Engineering Workbench
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800">
                Live Simulation Lab
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
              Test Karthik's project systems in real time.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Simulate sensor telematics, semiconductor thin-film deposition physics, and automated deployment pipelines directly in the browser.
            </p>
          </div>

          {/* Workbench Tabs */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('iot')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'iot'
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-950'
                  : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>ESP32 & DHT11 Telemetry</span>
            </button>

            <button
              onClick={() => setActiveTab('sputtering')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'sputtering'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950'
                  : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>WO3 Sputtering Lab</span>
            </button>

            <button
              onClick={() => setActiveTab('cicd')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'cicd'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-950'
                  : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>CI/CD Pipeline Runner</span>
            </button>
          </div>
        </div>

        {/* TAB 1: ESP32 & DHT11 Telemetry Workbench */}
        {activeTab === 'iot' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-8 animate-in fade-in duration-200">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Edge Microcontroller Simulation
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">
                  ESP32 + DHT11 Environmental Transducer Node
                </h3>
                <p className="text-xs text-zinc-400">
                  Simulating digital GPIO reading, non-blocking FreeRTOS loop, and MQTT synchronization to Arduino Cloud.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300">
                  <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Wi-Fi: Connected</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300">
                  <Cloud className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Arduino Cloud: Sync</span>
                </div>
              </div>
            </div>

            {/* Metrics & Sliders */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Sliders on Left */}
              <div className="md:col-span-6 space-y-6">
                
                {/* Temperature Slider */}
                <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800/90 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400">Sensor Ambient Temperature</span>
                    <span className={`text-sm font-mono font-bold ${isTempAlert ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {temp}°C {isTempAlert && '(HIGH THRESHOLD)'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="45"
                    step="0.5"
                    value={temp}
                    onChange={(e) => setTemp(parseFloat(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                    <span>15°C (Cool)</span>
                    <span>Threshold: 32°C</span>
                    <span>45°C (High)</span>
                  </div>
                </div>

                {/* Humidity Slider */}
                <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800/90 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400">Relative Humidity (RH)</span>
                    <span className={`text-sm font-mono font-bold ${isHumidityAlert ? 'text-amber-400' : 'text-cyan-400'}`}>
                      {humidity}% {isHumidityAlert && '(MOISTURE THRESHOLD)'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="95"
                    step="1"
                    value={humidity}
                    onChange={(e) => setHumidity(parseInt(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                    <span>20% (Dry)</span>
                    <span>Threshold: 70%</span>
                    <span>95% (Condensing)</span>
                  </div>
                </div>

                <button
                  onClick={handleSimulatePulse}
                  className="w-full py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Send Real-Time Sensor Pulse</span>
                </button>
              </div>

              {/* Status Visualizer & Live Terminal on Right */}
              <div className="md:col-span-6 space-y-4">
                
                {/* Visual Gauges */}
                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-4 rounded-xl border text-center space-y-1 ${isTempAlert ? 'bg-rose-950/30 border-rose-800 text-rose-300' : 'bg-zinc-950 border-zinc-800 text-zinc-200'}`}>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">Temperature</div>
                    <div className="text-3xl font-extrabold font-mono">{temp}°C</div>
                    <div className="text-[11px] font-mono">{isTempAlert ? '⚠️ Alert Triggered' : '✓ Normal Range'}</div>
                  </div>

                  <div className={`p-4 rounded-xl border text-center space-y-1 ${isHumidityAlert ? 'bg-amber-950/30 border-amber-800 text-amber-300' : 'bg-zinc-950 border-zinc-800 text-zinc-200'}`}>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">Humidity</div>
                    <div className="text-3xl font-extrabold font-mono">{humidity}%</div>
                    <div className="text-[11px] font-mono">{isHumidityAlert ? '⚠️ Moisture Alert' : '✓ Normal Range'}</div>
                  </div>
                </div>

                {/* Console Log stream */}
                <div className="p-4 rounded-xl bg-black border border-zinc-800 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-900 text-[11px] text-zinc-500">
                    <span>ESP32 UART0 Console Serial Output (115200 baud)</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="space-y-1 text-zinc-400 max-h-40 overflow-y-auto">
                    {telemetryLogs.map((log, i) => (
                      <div key={i} className="text-[11px] leading-tight">
                        <span className="text-cyan-400">&gt;</span> {log}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB 2: WO3 Thin-Film RF Sputtering Lab */}
        {activeTab === 'sputtering' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-8 animate-in fade-in duration-200">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                  Semiconductor Material Physics & Deposition
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">
                  Tungsten Trioxide (WO3) Thin-Film Optimization Workbench
                </h3>
                <p className="text-xs text-zinc-400">
                  Calculate target deposition rate, optical bandgap (Eg), and ultraviolet photodetection responsivity based on chamber parameters.
                </p>
              </div>

              <div className="px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800/80 text-xs font-mono text-emerald-400">
                Target: High Responsivity UV Detector
              </div>
            </div>

            {/* Sliders & Physics Calculations */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              <div className="md:col-span-6 space-y-6">
                
                {/* RF Power */}
                <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400">RF Magnetron Power</span>
                    <span className="text-sm font-mono font-bold text-emerald-400">{rfPower} Watts</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="200"
                    step="5"
                    value={rfPower}
                    onChange={(e) => setRfPower(parseInt(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                    <span>50W (Low Sputter Yield)</span>
                    <span>200W (High Density Flux)</span>
                  </div>
                </div>

                {/* Ar : O2 Ratio */}
                <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400">Argon / Oxygen Ratio</span>
                    <span className="text-sm font-mono font-bold text-cyan-400">{arOxygenRatio}% Ar : {100 - arOxygenRatio}% O2</span>
                  </div>
                  <input
                    type="range"
                    min="60"
                    max="95"
                    step="1"
                    value={arOxygenRatio}
                    onChange={(e) => setArOxygenRatio(parseInt(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                    <span>Oxygen Rich (Stoichiometric)</span>
                    <span>Argon Rich (Oxygen Vacancies)</span>
                  </div>
                </div>

                {/* Substrate Temp */}
                <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400">Substrate Annealing Temperature</span>
                    <span className="text-sm font-mono font-bold text-amber-400">{substrateTemp}°C</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="450"
                    step="10"
                    value={substrateTemp}
                    onChange={(e) => setSubstrateTemp(parseInt(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                    <span>100°C (Amorphous)</span>
                    <span>300°C (Polycrystalline)</span>
                    <span>450°C (Monoclinic Phase)</span>
                  </div>
                </div>

              </div>

              {/* Computed Semiconductor Outputs */}
              <div className="md:col-span-6 space-y-4">
                <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-5">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 pb-2 border-b border-zinc-800">
                    Synthesized Film Characterization:
                  </h4>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-900">
                      <div>
                        <div className="text-xs font-bold text-zinc-200">Film Thickness (d)</div>
                        <div className="text-[11px] text-zinc-500 font-mono">Governed by RF deposition rate</div>
                      </div>
                      <div className="text-lg font-mono font-extrabold text-emerald-400">
                        {calculatedThickness} nm
                      </div>
                    </div>

                    <div className="flex items-center justify-between pb-2 border-b border-zinc-900">
                      <div>
                        <div className="text-xs font-bold text-zinc-200">Optical Bandgap (Eg)</div>
                        <div className="text-[11px] text-zinc-500 font-mono">UV Absorption cut-off energy</div>
                      </div>
                      <div className="text-lg font-mono font-extrabold text-cyan-400">
                        {calculatedBandgap} eV
                      </div>
                    </div>

                    <div className="flex items-center justify-between pb-2 border-b border-zinc-900">
                      <div>
                        <div className="text-xs font-bold text-zinc-200">UV Responsivity (R_λ)</div>
                        <div className="text-[11px] text-zinc-500 font-mono">Photocurrent per incident watt</div>
                      </div>
                      <div className="text-lg font-mono font-extrabold text-amber-400">
                        {calculatedResponsivity} A/W
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400 leading-relaxed">
                    <strong className="text-zinc-200 block mb-0.5">Laboratory Insight:</strong>
                    Tuning the RF power to {rfPower}W and substrate temperature to {substrateTemp}°C achieves high crystalline density without cracking, optimizing carrier transport across the UV photodetector interdigitated electrodes.
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 3: CI/CD Pipeline Simulator */}
        {activeTab === 'cicd' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-8 animate-in fade-in duration-200">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider font-semibold">
                  DevOps & Server Automation
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">
                  Automated GitHub to Linux Server Deployment Runner
                </h3>
                <p className="text-xs text-zinc-400">
                  Trigger an automated end-to-end continuous deployment cycle with Python tests, shell validation, and remote Linux deployment.
                </p>
              </div>

              <div className="flex items-center gap-2">
                {pipelineState === 'idle' && (
                  <button
                    onClick={runPipeline}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 cursor-pointer transition-colors shadow-md shadow-blue-950"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Run CI/CD Pipeline</span>
                  </button>
                )}

                {pipelineState === 'running' && (
                  <div className="px-4 py-2 rounded-xl bg-zinc-800 text-blue-400 font-mono text-xs flex items-center gap-2 border border-blue-500/30">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Executing Step {currentStepIndex}/6...</span>
                  </div>
                )}

                {pipelineState === 'success' && (
                  <button
                    onClick={resetPipeline}
                    className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Pipeline</span>
                  </button>
                )}
              </div>
            </div>

            {/* Pipeline Stage Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {pipelineSteps.map((step, idx) => {
                const isPassed = currentStepIndex > idx;
                const isCurrent = currentStepIndex === idx + 1 && pipelineState === 'running';

                return (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border transition-all text-xs space-y-1.5 ${
                      isPassed
                        ? 'bg-emerald-950/40 border-emerald-700/80 text-emerald-300'
                        : isCurrent
                        ? 'bg-blue-950/50 border-blue-500 text-blue-200 animate-pulse'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-500'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span>Step 0{idx + 1}</span>
                      {isPassed && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                    </div>
                    <div className="font-semibold text-[11px] line-clamp-2">
                      {idx === 0 && 'Webhook Trigger'}
                      {idx === 1 && 'Python Tests'}
                      {idx === 2 && 'Shell Validation'}
                      {idx === 3 && 'SSH Tunnel'}
                      {idx === 4 && 'Artifact Deploy'}
                      {idx === 5 && 'Server Healthcheck'}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Terminal Live Output */}
            <div className="p-4 rounded-2xl bg-black border border-zinc-800 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-900 text-[11px] text-zinc-500">
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>GitHub Actions Runner Console • ubuntu-latest</span>
                </span>
                <span className="text-[10px] text-zinc-600">SSH Ed25519 Encrypted</span>
              </div>

              <div className="space-y-1.5 max-h-48 overflow-y-auto text-zinc-400">
                {cicdLogs.length === 0 ? (
                  <div className="text-zinc-600 italic">
                    Press "Run CI/CD Pipeline" above to execute the automated build, test, and Linux deployment workflow.
                  </div>
                ) : (
                  cicdLogs.map((log, i) => (
                    <div key={i} className="text-emerald-400 text-[11px]">
                      {log}
                    </div>
                  ))
                )}
                {pipelineState === 'success' && (
                  <div className="pt-2 text-emerald-300 font-bold flex items-center gap-1.5 border-t border-zinc-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>[STATUS: 200 OK] Continuous Deployment Verified Successfully on Linux host.</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
