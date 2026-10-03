import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Play, CheckCircle2, RefreshCw, AlertTriangle, ShieldCheck, Activity, Gauge } from 'lucide-react';
import { Reveal } from './Reveal';

export const KarthikNohoLab: React.FC = () => {
  const [activeLabTab, setActiveLabTab] = useState<'iot' | 'sputtering' | 'cicd'>('iot');

  // IoT State
  const [temp, setTemp] = useState<number>(27.5);
  const [humidity, setHumidity] = useState<number>(55.0);
  const [logs, setLogs] = useState<string[]>([
    '[INIT] ESP32-WROOM-32 booted (Xtensa dual-core @ 240MHz)',
    '[WIFI] Connected to 2.4GHz network. IP: 192.168.1.142',
    '[MQTT] Handshake established with Arduino Cloud broker'
  ]);
  const [isAlertActive, setIsAlertActive] = useState<boolean>(false);

  // Sputtering State
  const [rfPower, setRfPower] = useState<number>(120); // Watts
  const [arO2Ratio, setArO2Ratio] = useState<number>(90); // % Argon
  const [substrateTemp, setSubstrateTemp] = useState<number>(250); // Celsius

  // Calculated thin film values
  const thickness = Math.round(rfPower * 1.8 + substrateTemp * 0.4); // nm
  const bandgap = (3.25 - (rfPower - 50) * 0.002 + (100 - arO2Ratio) * 0.005).toFixed(2); // eV
  const responsivity = ((rfPower / 120) * 0.48 * (substrateTemp / 250)).toFixed(3); // A/W

  // CI/CD State
  const [ciStep, setCiStep] = useState<number>(0);
  const [isDeploying, setIsDeploying] = useState<boolean>(false);

  // Add IoT telemetry log every few seconds or when slider moves
  useEffect(() => {
    const isHot = temp > 40;
    setIsAlertActive(isHot);

    const timestamp = new Date().toISOString().substring(11, 19);
    const packet = `[${timestamp}] {"device":"ESP32-NODE-01","temp_c":${temp.toFixed(1)},"hum_pct":${humidity.toFixed(1)},"alert":${isHot ? '"HIGH_TEMP"' : '"NORMAL"'}}`;
    
    setLogs((prev) => [packet, ...prev.slice(0, 7)]);
  }, [temp, humidity]);

  const runCiPipeline = () => {
    setIsDeploying(true);
    setCiStep(1);
    setTimeout(() => {
      setCiStep(2);
      setTimeout(() => {
        setCiStep(3);
        setTimeout(() => {
          setCiStep(4);
          setIsDeploying(false);
        }, 800);
      }, 900);
    }, 700);
  };

  return (
    <section id="lab" className="py-24 sm:py-32 bg-[#EDE9E1] border-t border-[#DED8CD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-16">
        
        {/* Header in noho style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D2C5] pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#BA4A24]">
                04 / Applied Engineering Lab & Simulations
              </span>
            </div>
            <Reveal>
              <h2
                className="text-4xl sm:text-6xl font-extrabold text-[#22211F] tracking-tight"
                style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
              >
                Interactive Engineering Workbench
              </h2>
            </Reveal>
            <p className="text-base sm:text-lg text-[#524E48] max-w-xl">
              Live firmware telemetry, cleanroom thin-film physics calculators, and continuous deployment runners modeled directly from my project codebases.
            </p>
          </div>

          {/* Workbench Tabs */}
          <div className="flex gap-2 p-1.5 bg-[#E2DDD3] rounded-2xl border border-[#D5CDBD]">
            <button
              onClick={() => setActiveLabTab('iot')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeLabTab === 'iot'
                  ? 'bg-[#22211F] text-white shadow-xs'
                  : 'text-[#615B52] hover:text-[#22211F]'
              }`}
            >
              📟 ESP32 IoT Node
            </button>
            <button
              onClick={() => setActiveLabTab('sputtering')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeLabTab === 'sputtering'
                  ? 'bg-[#22211F] text-white shadow-xs'
                  : 'text-[#615B52] hover:text-[#22211F]'
              }`}
            >
              🔬 RF Sputtering Lab
            </button>
            <button
              onClick={() => setActiveLabTab('cicd')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeLabTab === 'cicd'
                  ? 'bg-[#22211F] text-white shadow-xs'
                  : 'text-[#615B52] hover:text-[#22211F]'
              }`}
            >
              🚀 Linux CI/CD Runner
            </button>
          </div>
        </div>

        {/* ---------------- 1. ESP32 + DHT11 IoT LAB ---------------- */}
        {activeLabTab === 'iot' && (
          <div className="p-8 sm:p-12 rounded-3xl bg-[#DED8CD] border border-[#D0C8B9] space-y-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#545E45]">
                  Microcontroller Firmware & Transducer Loop
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#22211F]">
                  ESP32 & DHT11 Real-Time Telemetry Node
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
                <span className="text-xs font-mono font-bold text-[#22211F]">
                  Status: Transmitting to Arduino Cloud
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Sliders & Gauges */}
              <div className="lg:col-span-6 space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#D5CDBD] shadow-xs">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase text-[#736C61]">
                      Ambient Temperature Sensor
                    </span>
                    <span className="text-lg font-mono font-extrabold text-[#BA4A24]">
                      {temp.toFixed(1)} °C
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="50"
                    step="0.5"
                    value={temp}
                    onChange={(e) => setTemp(parseFloat(e.target.value))}
                    className="w-full h-2 bg-[#EDE9E1] rounded-lg appearance-none cursor-pointer accent-[#BA4A24]"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-[#736C61]">
                    <span>15°C (Cool)</span>
                    <span className={temp > 40 ? 'text-red-600 font-bold' : ''}>
                      Threshold Alert &gt; 40°C
                    </span>
                    <span>50°C (High)</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-neutral-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase text-[#736C61]">
                      Relative Humidity Transducer
                    </span>
                    <span className="text-lg font-mono font-extrabold text-[#545E45]">
                      {humidity.toFixed(1)} % RH
                    </span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="95"
                    step="1"
                    value={humidity}
                    onChange={(e) => setHumidity(parseFloat(e.target.value))}
                    className="w-full h-2 bg-[#EDE9E1] rounded-lg appearance-none cursor-pointer accent-[#545E45]"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-[#736C61]">
                    <span>20% (Dry)</span>
                    <span>60% (Optimal)</span>
                    <span>95% (Saturated)</span>
                  </div>
                </div>

                {isAlertActive ? (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs font-semibold flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>Threshold Triggered: High temperature warning broadcasted via MQTT!</span>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Nominal operation: Environmental levels within safe limits.</span>
                  </div>
                )}
              </div>

              {/* Live Serial UART Terminal */}
              <div className="lg:col-span-6 bg-[#22211F] text-emerald-400 p-6 rounded-2xl font-mono text-xs shadow-md space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-700 text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    <span>UART0 Serial Monitor (115200 baud)</span>
                  </div>
                  <span className="text-[10px] bg-neutral-800 px-2 py-0.5 rounded text-neutral-300">
                    LIVE
                  </span>
                </div>

                <div className="space-y-1.5 min-h-[190px] overflow-y-auto">
                  {logs.map((log, idx) => (
                    <div key={idx} className="leading-relaxed opacity-95">
                      {log}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ---------------- 2. RF SPUTTERING LAB ---------------- */}
        {activeLabTab === 'sputtering' && (
          <div className="p-8 sm:p-12 rounded-3xl bg-[#DED8CD] border border-[#D0C8B9] space-y-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[#BA4A24]">
                Cleanroom Deposition & Thin-Film Characterization
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#22211F]">
                Tungsten-Trioxide (WO3) RF Sputtering Calculator
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Parameter Adjustments */}
              <div className="lg:col-span-6 space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#D5CDBD] shadow-xs">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase text-[#736C61]">
                      RF Magnetron Power
                    </span>
                    <span className="text-lg font-mono font-extrabold text-[#BA4A24]">
                      {rfPower} Watts
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="250"
                    step="10"
                    value={rfPower}
                    onChange={(e) => setRfPower(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#EDE9E1] rounded-lg appearance-none cursor-pointer accent-[#BA4A24]"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-[#736C61]">
                    <span>50W</span>
                    <span>Target: 120W</span>
                    <span>250W</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-neutral-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase text-[#736C61]">
                      Ar : O2 Gas Flow Ratio
                    </span>
                    <span className="text-lg font-mono font-extrabold text-[#22211F]">
                      {arO2Ratio} : {100 - arO2Ratio}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="75"
                    max="98"
                    step="1"
                    value={arO2Ratio}
                    onChange={(e) => setArO2Ratio(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#EDE9E1] rounded-lg appearance-none cursor-pointer accent-[#22211F]"
                  />
                </div>

                <div className="space-y-3 pt-4 border-t border-neutral-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase text-[#736C61]">
                      Substrate Temperature
                    </span>
                    <span className="text-lg font-mono font-extrabold text-[#545E45]">
                      {substrateTemp} °C
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="450"
                    step="25"
                    value={substrateTemp}
                    onChange={(e) => setSubstrateTemp(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#EDE9E1] rounded-lg appearance-none cursor-pointer accent-[#545E45]"
                  />
                </div>
              </div>

              {/* Calculated Thin-Film Metrics */}
              <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#D5CDBD] shadow-xs space-y-6">
                <div className="font-extrabold text-sm text-[#22211F] pb-3 border-b border-neutral-100">
                  Calculated Film Properties & Detector Efficiency
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-[#EDE9E1] border border-[#D5CDBD] text-center space-y-1">
                    <div className="text-[10px] font-mono text-[#736C61] uppercase">Film Thickness</div>
                    <div className="text-2xl font-black text-[#22211F]">{thickness} nm</div>
                    <div className="text-[10px] text-[#545E45]">Optimized range</div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#EDE9E1] border border-[#D5CDBD] text-center space-y-1">
                    <div className="text-[10px] font-mono text-[#736C61] uppercase">Optical Bandgap (Eg)</div>
                    <div className="text-2xl font-black text-[#BA4A24]">{bandgap} eV</div>
                    <div className="text-[10px] text-[#545E45]">UV absorption band</div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#EDE9E1] border border-[#D5CDBD] text-center space-y-1">
                    <div className="text-[10px] font-mono text-[#736C61] uppercase">UV Responsivity</div>
                    <div className="text-2xl font-black text-[#545E45]">{responsivity} A/W</div>
                    <div className="text-[10px] text-[#545E45]">Peak sensitivity</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#E3DDD1] border border-[#D5CDBD] text-xs text-[#524E48] leading-relaxed">
                  <strong>Scientific Rigor:</strong> Higher RF power increases sputtering yield of WO3 target molecules, while optimized oxygen partial pressure suppresses oxygen vacancy defects, sharpening the UV cut-off edge.
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ---------------- 3. CI/CD RUNNER LAB ---------------- */}
        {activeLabTab === 'cicd' && (
          <div className="p-8 sm:p-12 rounded-3xl bg-[#DED8CD] border border-[#D0C8B9] space-y-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#BA4A24]">
                  Continuous Integration & Autonomous Deployment
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#22211F]">
                  GitHub Actions to Linux Server Pipeline
                </h3>
              </div>

              <button
                onClick={runCiPipeline}
                disabled={isDeploying}
                className="px-5 py-2.5 rounded-xl bg-[#22211F] hover:bg-black text-white text-xs font-bold flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5" />
                <span>{isDeploying ? 'Pipeline Running...' : 'Trigger Git Push & Deploy'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div
                className={`p-5 rounded-2xl border transition-all ${
                  ciStep >= 1
                    ? 'bg-white border-[#22211F] shadow-sm'
                    : 'bg-[#E2DDD3] border-[#D5CDBD] opacity-60'
                }`}
              >
                <div className="text-xs font-mono font-bold text-[#BA4A24]">Stage 01</div>
                <div className="font-extrabold text-sm text-[#22211F] mt-1">Git Webhook Trigger</div>
                <div className="text-[11px] text-[#736C61] mt-1">Commit verified on branch main</div>
                {ciStep >= 1 && <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-3" />}
              </div>

              <div
                className={`p-5 rounded-2xl border transition-all ${
                  ciStep >= 2
                    ? 'bg-white border-[#22211F] shadow-sm'
                    : 'bg-[#E2DDD3] border-[#D5CDBD] opacity-60'
                }`}
              >
                <div className="text-xs font-mono font-bold text-[#BA4A24]">Stage 02</div>
                <div className="font-extrabold text-sm text-[#22211F] mt-1">Python Test Matrix</div>
                <div className="text-[11px] text-[#736C61] mt-1">Unit testing & syntax linters pass</div>
                {ciStep >= 2 && <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-3" />}
              </div>

              <div
                className={`p-5 rounded-2xl border transition-all ${
                  ciStep >= 3
                    ? 'bg-white border-[#22211F] shadow-sm'
                    : 'bg-[#E2DDD3] border-[#D5CDBD] opacity-60'
                }`}
              >
                <div className="text-xs font-mono font-bold text-[#BA4A24]">Stage 03</div>
                <div className="font-extrabold text-sm text-[#22211F] mt-1">SSH Tunnel to Linux</div>
                <div className="text-[11px] text-[#736C61] mt-1">Atomic sync & container deploy</div>
                {ciStep >= 3 && <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-3" />}
              </div>

              <div
                className={`p-5 rounded-2xl border transition-all ${
                  ciStep >= 4
                    ? 'bg-white border-[#22211F] shadow-sm'
                    : 'bg-[#E2DDD3] border-[#D5CDBD] opacity-60'
                }`}
              >
                <div className="text-xs font-mono font-bold text-[#BA4A24]">Stage 04</div>
                <div className="font-extrabold text-sm text-[#22211F] mt-1">Healthcheck & Restart</div>
                <div className="text-[11px] text-[#736C61] mt-1">Systemd daemon active & healthy</div>
                {ciStep >= 4 && <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-3" />}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
