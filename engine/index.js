function run({ on_tick }) {
  const refreshRateMs = 1000;
  const timeId = setInterval(on_tick, refreshRateMs);
}

export default run;
