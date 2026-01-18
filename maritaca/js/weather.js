/**
 * Weather Widget Module for Flat Maritaca
 * Uses Open-Meteo API for weather data
 */

const WeatherWidget = {
  latitude: -14.2786,
  longitude: -38.9958,
  refreshInterval: 1800000, // 30 minutes

  init() {
    const widgetEl = document.querySelector('.weather-widget');
    if (!widgetEl) return;

    this.fetchWeather();
    setInterval(() => this.fetchWeather(), this.refreshInterval);
  },

  async fetchWeather() {
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=America%2FBahia`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      this.displayWeather(data);
    } catch (error) {
      console.error('Weather fetch error:', error);
      this.displayError();
    }
  },

  displayWeather(data) {
    try {
      if (!data.current || !data.daily) {
        throw new Error('Invalid weather data');
      }

      const currentTemp = data.current.temperature_2m;
      const currentCode = data.current.weather_code;
      const weather = this.getWeatherInfo(currentCode);

      // Update current weather
      const tempEl = document.getElementById('weather-temp');
      const iconEl = document.getElementById('weather-icon');
      const descEl = document.getElementById('weather-desc');

      if (tempEl) tempEl.textContent = `${Math.round(currentTemp)}°C`;
      if (iconEl) iconEl.textContent = weather.icon;
      if (descEl) descEl.textContent = weather.desc;

      // Update forecast
      this.displayForecast(data.daily);
    } catch (error) {
      console.error('Weather display error:', error);
      this.displayError();
    }
  },

  displayForecast(daily) {
    const container = document.getElementById('weather-forecast');
    if (!container) return;

    const lang = window.i18n ? window.i18n.getLanguage() : 'pt';
    const days = window.i18n ? window.i18n.t('weather.days') : ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const today = new Date();

    container.innerHTML = '';

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayName = days[date.getDay()];
      const maxTemp = Math.round(daily.temperature_2m_max[i]);
      const minTemp = Math.round(daily.temperature_2m_min[i]);
      const weather = this.getWeatherInfo(daily.weather_code[i]);

      const item = document.createElement('div');
      item.className = 'forecast-item';
      item.innerHTML = `
        <span class="forecast-day">${dayName}</span>
        <div class="forecast-temp">
          <span>${weather.icon}</span>
          <span>${maxTemp}°</span>
          <span style="opacity: 0.7">${minTemp}°</span>
        </div>
      `;
      container.appendChild(item);
    }
  },

  getWeatherInfo(code) {
    const lang = window.i18n ? window.i18n.getLanguage() : 'pt';
    const conditions = window.i18n ? window.i18n.t('weather.conditions') : {};

    return conditions[code] || conditions[0] || { icon: '☀️', desc: 'Clear' };
  },

  displayError() {
    const tempEl = document.getElementById('weather-temp');
    const iconEl = document.getElementById('weather-icon');
    const descEl = document.getElementById('weather-desc');

    if (tempEl) tempEl.textContent = '--°C';
    if (iconEl) iconEl.textContent = '❌';
    if (descEl) descEl.textContent = 'Error';
  },

  // Called when language changes
  refresh() {
    this.fetchWeather();
  }
};

// Export
window.WeatherWidget = WeatherWidget;
