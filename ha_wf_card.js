const css = `
:host {
  display: block;
  font-size: 11px;

}
.title-block {
  display: flex;
  align-items: center;
  gap: 0px;
  padding: 12px 16px 12px 16px;
}
.icon-title-block {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  min-height: 32px;
}
.icon-title-block ha-icon {
  margin-right: 6px;
  vertical-align: middle;
  width: 32px;
  height: 32px;
  color: var(--state-icon-color, var(--primary-text-color));
}
.text-title-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}
.card-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-text-color);
  line-height: 1.2;
  letter-spacing: 0.01em;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.subtitle {
  font-size: 12px;
  font-weight: 400;
  color: var(--secondary-text-color);
  margin: 0;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.controls {
  display: flex;
  gap: 4px;
  align-items: center;
  margin-left: auto;
}
.toggle-switch {
  position: relative;
  width: 40px;
  height: 22px;
  display: inline-block;
}
.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--toggle-off-color, #888);
  transition: 0.4s;
  border-radius: 11px;
  border: 1px solid var(--toggle-border-color, #666);
}
.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 2px;
  bottom: 1.5px;
  background-color: var(--toggle-thumb-color, white);
  transition: 0.4s;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.4);
}
input:checked + .slider {
  background-color: var(--toggle-on-color, #4caf50);
  border-color: var(--toggle-on-color, #4caf50);
}
input:checked + .slider:before {
  transform: translateX(18px);
}
.footer {
  padding: 4px 12px;
  font-size: 9px;
  font-weight: 400;
  color: var(--secondary-text-color);
  text-align: right;
}
.footer.warning {
  color: var(--error-color);
  font-weight: bold;
}
/* Dates row */
.dates-row {
  display: table;
  table-layout: fixed;
  background: var(--card-background-color);
  top: 0;
  cursor: default;
  width: 100%;
  height: 70px;
}
.date-tab {
  display: table-cell;

  vertical-align: top;
  padding: 4px 0px 0px 0px;
  height: 100%;
  border-left: 1px solid var(--divider-color);
  border-right: 0px solid var(--divider-color);
  border-top: 0px solid var(--divider-color);
  border-bottom: 1px solid var(--divider-color);

  overflow: hidden;
  background: var(--card-background-color);
  transition: background-color 0.2s;
}
.date-tab:first-child {
  border-left: none;
}

.date-tab.active {
  background-color: var(--chip-background-color, #ff0000 );
  font-weight: bold;
  color: var(--primary-text-color);
  border-bottom: 1px solid var(--card-background-color);
}
.date-tab-inner {
  position: relative;
  height: 100%;
}

.date-label {
  position: absolute;
  font-size: 11px;
  color: var(--primary-text-color);
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 2;
  padding: 4px;
}

.date-wind-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: -1px;
  text-align: center;
  z-index: 1;
  min-height: 4px;
  margin-top: 2px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 0px;
}
.wind-bar-segment {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column-reverse; /* stack from bottom up */
  align-items: stretch;
  margin-right: 1px;
}

.wind-bar-segment.alert::after{
  content: " ";
  background: red;
  position: absolute;
  width: 100%;
  height: 4px;
  z-index: 0;
  
}
.date-wind-bar-segment {
  display: inline-block;
  margin-right: 1px;
}

.date-gust-bar-segment {
  display: inline-block;
  margin-right: 1px;
}


/* Forecast table container */
.forecast-table {
  display: table;
  table-layout: fixed;
  width: 100%;
}

/* Header row */
.forecast-header {
  display: table-header-group;
  background: var(--card-background-color);
  color: var(--primary-text-color);
  font-size: 11px;
}
.forecast-cell {
  display: table-cell;
  padding: 2px;
  text-align: center;
  font-weight: 600;
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-left: 1px solid var(--divider-color);
  border-right: 0px solid var(--divider-color);
  border-top: 0px solid var(--divider-color);
  border-bottom: 1px solid var(--divider-color);
  vertical-align: middle;
}

.forecast-cell.square {
  width: 36px;
}
.forecast-cell:first-child {
  border-left: none;
}

/* Data rows */
.forecast-body{
  display: table-row-group;
}
.forecast-row {
  display: table-row;
  font-size: 11px;
  color: var(--primary-text-color);
}

.forecast-row.night {
  background-color: var(--chip-background-color, #ff0000 );
  color: var(--primary-text-color);
}
.forecast-cell-value {
  display: table-cell;
  padding: 2px;
  text-align: center;
  color: inherit;
  white-space: nowrap;
  border-left: 1px solid var(--divider-color);
  border-right: 0px solid var(--divider-color);
  border-top: 0px solid var(--divider-color);
  border-bottom: 1px solid var(--divider-color);
  vertical-align: middle;
}
.forecast-cell-value:first-child {
  border-left: none;
}
.forecast-cell-value:first-child.alert {
  border-left: 4px solid red;
}
.forecast-cell-value.current-hour {
  background-color: var(--chip-background-color, #ff0000 );
  font-weight: bold;
  color: var(--primary-text-color);
}
ha-icon.rotated {
  color: var(--primary-text-color);
  display: inline-block;
  transform-origin: center center;
  vertical-align: middle;
  width: 16px;
  height: 16px;
}

.toggle-label {
  font-size: 0.8rem;
  margin-left: 6px;
  user-select: none;
}



`;
class HaWfCard extends HTMLElement {
  setConfig(config) {
    if (!config.entity) throw new Error("Entity is required");
    this.config = config;
    this._alertConfig = config.alert || null;
    this._showNight = config.show_night ?? false;
    this._defaultSource = config.default_source || 'forecastdata';
    if (typeof config.timezone === 'string') {
      this._timeZone = config.timezone.toLowerCase() === 'utc'
        ? 'UTC'
        : config.timezone;
    } else {
      this._timeZone = undefined;
    }
    this._selectedSource = null;
    this._lastState = null;
    this._activeDay = null;

    this.innerHTML = `
      <style>${css}</style>

      <ha-card>
          <div class="title-block">
            <div class="icon-title-block">
              <ha-icon id="refresh-icon" style="cursor:pointer" title="Refresh"></ha-icon>
            </div>
            <div class="text-title-block">
              <div class="card-title">${this.config.title || 'Kite Forecast'}</div>
              <div class="subtitle" id="subtitle"></div>
            </div>
            <div class="controls" id="controls-container">
              <span class="toggle-label">Night</span>
              <label class="toggle-switch" title="Toggle night hours">
                <input type="checkbox" id="toggle-night" ${this._showNight ? 'checked' : ''}>
                <span class="slider"></span>
              </label>
              <span class="toggle-label">Super Forecast</span>
              <label class="toggle-switch" title="Toggle forecast source (off=Forecast, on=Superforecast)">
                <input type="checkbox" id="toggle-source" ${this._defaultSource === 'superforecastdata' ? 'checked' : ''}>
                <span class="slider"></span>
              </label>
            </div>
          </div>
        <div class="scroll-container">
          <div id="dates-row" class="dates-row"></div>
          <div class="forecast-table" id="forecast-table"></div>
        </div>
        <div class="footer" id="footer"></div>
      </ha-card>
    `;

    const refreshIcon = this.querySelector('#refresh-icon');
    if (refreshIcon) {
      refreshIcon.onclick = () => {
        if (this._hass) {
          this._hass.callService('windfinder', 'refresh', { entity_id: this.config.entity });
        }
      };
    }

    this.querySelector("#toggle-night").onchange = () => {
      this._showNight = this.querySelector("#toggle-night").checked;
      this._applyNightVisibility();
    };

    this.querySelector("#toggle-source").onchange = () => {
      const checked = this.querySelector("#toggle-source").checked;
      this._selectedSource = checked ? 'superforecastdata' : 'forecastdata';
      //this.querySelector("#source-label").textContent = checked ? 'Superforecast' : 'Forecast';
      this._updateFromSelectedSource();
    };

    // Initialize selected source
    //this._selectedSource = this._defaultSource;
  }

  set hass(hass) {
    this._hass = hass;
    const entity = this.config.entity;
    const stateObj = this._hass.states[entity];
    if (!stateObj) return;

    const refreshIcon = this.querySelector('#refresh-icon');
    if (refreshIcon) {
      const icon = stateObj.attributes.icon || 'mdi:windsock';
      refreshIcon.setAttribute('icon', icon);
    }

    if (stateObj.state === this._lastState) return;
    this._lastState = stateObj.state;
    this._updateFromSelectedSource();
  }

  _checkAlertCondition(speed, angleDeg, isNightHour = false) {
    const alert = this._alertConfig;
    if (!alert || !Array.isArray(alert.angles)) return false;
    if (isNightHour) return false;

    const minSpeed = alert.speed_min ?? Infinity;
    if (typeof speed !== 'number' || speed < minSpeed || typeof angleDeg !== 'number') return false;

    const norm = v => ((v % 360) + 360) % 360;  // Normalize to 0–359

    const angle = norm(angleDeg);

    return alert.angles.some(({ from, to }) => {
      const start = norm(from);
      const end = norm(to);

      if (start <= end) {
        return angle >= start && angle <= end;
      } else {
        // Wraparound case
        return angle >= start || angle <= end;
      }
    });
  }



  _updateFromSelectedSource() {
    if (!this._hass) return;
    const entity = this.config.entity;
    const stateObj = this._hass.states[entity];
    if (!stateObj) return;

    //const sourceSelector = this.querySelector("#source-select");
    const controlsContainer = this.querySelector("#controls-container");
    const hasSuper = Array.isArray(stateObj.attributes.superforecastdata);
    const hasForecast = Array.isArray(stateObj.attributes.forecastdata);

    controlsContainer.style.display = hasSuper ? 'flex' : 'none';

    let source = this._selectedSource;
    if (!source) {
      if (this.config.default_source && Array.isArray(stateObj.attributes[this.config.default_source])) {
        source = this.config.default_source;
      } else if (hasForecast) {
        source = 'forecastdata';
      } else if (hasSuper) {
        source = 'superforecastdata';
      } else {
        this._clearDisplay("No forecast data available");
        return;
      }
    }

    //sourceSelector.value = source;
    this._selectedSource = source;

    const data = stateObj.attributes[source];
    if (!Array.isArray(data)) {
      this._clearDisplay("Forecast data is not an array");
      return;
    }

    const subtitle = this.querySelector("#subtitle");
    const footer = this.querySelector("#footer");
    const datesRow = this.querySelector("#dates-row");
    const forecastTable = this.querySelector("#forecast-table");
    const tzOpt = this._timeZone ? { timeZone: this._timeZone } : {};
    const spot_name = stateObj.attributes.spot_name;
    const prefix = source === 'superforecastdata' ? 'superforecast' : 'forecast';
    const generated_at = stateObj.attributes[prefix + '_generated'];

    // Parse generation date - use local timezone unless timezone config is set
    let generatedDate = new Date(generated_at);
    if (isNaN(generatedDate.getTime())) generatedDate = new Date();
    const now = new Date();
    const nowTz = this._timeZone ? new Date(now.toLocaleString('en-US', { timeZone: this._timeZone })) : now;
    const ageHours = (now - generatedDate) / 36e5;

    subtitle.textContent = `${spot_name || 'Unknown location'}`;

    // footer.textContent = `Updated ${generatedDate.toLocaleDateString('en-GB', {
    //   weekday: 'short', day: 'numeric', month: 'short'
    // })} ${generatedDate.toLocaleTimeString('en-GB', {
    //   hour: '2-digit', minute: '2-digit', hour12: false
    // })}`;

    const generatedStr = generatedDate.toLocaleDateString('en-GB', {
      weekday: 'short', day: 'numeric', month: 'short', ...tzOpt
    }) + ' ' + generatedDate.toLocaleTimeString('en-GB', {
      hour: '2-digit', minute: '2-digit', hour12: false, ...tzOpt
    });

    footer.textContent = `Generated ${generatedStr}`;


    footer.classList.toggle('warning', ageHours > 6);

    // Color map for wind speeds and temperature
    const wsColors = [
      "#9700ff", "#6400ff", "#3200ff", "#0032ff", "#0064ff", "#0096ff", "#00c7ff",
      "#00e6f0", "#25c192", "#11d411", "#00e600", "#00fa00", "#b8ff61", "#fffe00",
      "#ffe100", "#ffc800", "#ffaf00", "#ff9600", "#e67d00", "#e66400", "#dc4a1d",
      "#c8321d", "#b4191d", "#aa001d", "#b40032", "#c80064", "#fe0096"
    ];

    const getColorForWind = (speed) => {
      if (speed == null || isNaN(speed)) return 'inherit';
      const index = Math.min(wsColors.length - 1, Math.floor(speed / 2));
      return wsColors[index];
    };

    const getColorForTemperature = (temp) => {
      if (temp == null || isNaN(temp)) return 'inherit';
      const index = Math.floor((temp + 13) / 2); // since ws0 is for ≤ -13
      return wsColors[Math.max(0, Math.min(wsColors.length - 1, index))];
    };


    const groupedByDay = {};
    data.forEach(row => {
      const dt = new Date(row.datetime);
      if (isNaN(dt.getTime())) return;

      // Use en-CA for ISO-like yyyy-mm-dd grouping keys
      const dayKey = dt.toLocaleDateString('en-CA', tzOpt);

      if (!groupedByDay[dayKey]) groupedByDay[dayKey] = [];
      groupedByDay[dayKey].push(row);
    });

    if (!this._activeDay || !groupedByDay[this._activeDay]) {
      const todayKey = new Date().toLocaleDateString('en-CA', tzOpt);
      this._activeDay = groupedByDay[todayKey] ? todayKey : Object.keys(groupedByDay)[0];
    }

    datesRow.innerHTML = Object.keys(groupedByDay).map(day => {
      const activeClass = day === this._activeDay ? 'active' : '';

      // For display, you can still use 'nl-NL' or 'en-GB' or whatever you prefer
      const displayDay = new Date(day).toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        ...tzOpt
      });

      // Wind bar for this day
      const windBars = groupedByDay[day].map(row => {
        const colorWind = getColorForWind(row.wind_speed_kn);
        const colorGust = getColorForWind(row.wind_gust_kn);
        const gustDif = row.wind_gust_kn - row.wind_speed_kn;
        const gustHeight = gustDif >= 1 ? 1 : 0;
        const gustMargin = gustDif >= 1 ? gustDif: 0;
        const windBarAlert = this._checkAlertCondition(row.wind_speed_kn, row.wind_direction_deg, row.night_hour);
        const windBarClass = `${windBarAlert ? 'alert' : ''}`;
        return `<div class="wind-bar-segment ${windBarClass}">
            <div class="date-wind-bar-segment" style="background:${colorWind};height:${row.wind_speed_kn}px;width:100%;display:inline-block;"></div>
            <div class="date-gust-bar-segment" style="background:${colorGust};height: ${gustHeight}px;margin-bottom:${gustMargin}px;width:100%;display:inline-block;"></div>
          </div>`;
      }).join('');


      return `
        <div class="date-tab ${activeClass}" data-day="${day}">
          <div class="date-tab-inner">
            <div class="date-label">${displayDay}</div>
            <div class="date-wind-bar" style="margin-top:2px;text-align:center;">${windBars}</div>
          </div>
        </div>
      `;
    }).join('');

    datesRow.querySelectorAll('.date-tab').forEach(tab => {
      tab.onclick = () => {
        this._activeDay = tab.dataset.day;
        this._updateFromSelectedSource();
      };
    });

    // Render forecast header
    forecastTable.innerHTML = `
      <div class="forecast-header">
        <div class="forecast-cell">Time</div>
        <div class="forecast-cell square">Wind<br>kn</div>
        <div class="forecast-cell square">Gust<br>kn</div>
        <div class="forecast-cell square">Wind<br>dir</div>
        <div class="forecast-cell square">Temp<br>°C</div>
        <div class="forecast-cell square">Cloud</div>
        <div class="forecast-cell">Rain<br>mm</div>
        <div class="forecast-cell">Pressure<br>hPa</div>
        <div class="forecast-cell square">Wave<br>dir</div>
        <div class="forecast-cell">Wave<br>m | sec</div>
      </div>
      <div class="forecast-body"></div>
    `;

    const nowDayKey = nowTz.toLocaleDateString('en-CA', tzOpt);
    const nowHour = nowTz.getHours();

    // Render forecast body rows for active day (always render night rows)
    const body = forecastTable.querySelector(".forecast-body");
    const rowsHtml = groupedByDay[this._activeDay].map(row => {
      const nightClass = row.night_hour ? 'night' : '';

      // Rotate mdi:navigation icon by (deg + 180) % 360
      const rotateDir = deg => ((deg + 180) % 360);

      const windDirIcon = (row.wind_direction_deg != null)
        ? `<ha-icon icon="mdi:navigation" class="rotated" style="transform: rotate(${rotateDir(row.wind_direction_deg)}deg); --mdc-icon-size: 16px;"></ha-icon>`
        : '';

      const waveDirIcon = (row.wave_direction_deg != null)
        ? `<ha-icon icon="mdi:navigation" class="rotated" style="transform: rotate(${rotateDir(row.wave_direction_deg)}deg); --mdc-icon-size: 16px;" ></ha-icon>`
        : '';

      // Format time locally
      const dt = new Date(row.datetime);
      const dtTz = this._timeZone ? new Date(dt.toLocaleString('en-US', { timeZone: this._timeZone })) : dt;
      const isAlert = this._checkAlertCondition(row.wind_speed_kn, row.wind_direction_deg, row.night_hour);
      const timeStr = dt.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, ...tzOpt });

      // Highlight logic:
      // - For superforecast (hourly), highlight when the exact hour matches
      // - For forecast (3-hourly: 02,05,08,...), highlight when now falls within the row's 3-hour span
      const sameDay = dtTz.toLocaleDateString('en-CA', tzOpt) === nowDayKey;
      let isCurrentHour = false;
      if (source === 'superforecastdata') {
        isCurrentHour = sameDay && (dtTz.getHours() === nowHour);
      } else {
        // Treat each cell as covering [dt, dt + 3h)
        const rowStart = dtTz.getTime();
        const rowEnd = rowStart + 3 * 60 * 60 * 1000;
        const nowMs = nowTz.getTime();
        isCurrentHour = sameDay && nowMs >= rowStart && nowMs < rowEnd;
      }

      const timeClasses = [isAlert ? 'alert' : '', isCurrentHour ? 'current-hour' : ''].filter(Boolean).join(' ');



      // Format weather icon
      const getWeatherIcon = (cloudPct, rainMm, isNight) => {
        if (cloudPct == null) return "mdi:weather-cloudy";

        const rain = rainMm ?? 0;

        if (cloudPct <= 10) {
          return isNight ? "mdi:weather-night" : (rain > 0 ? "mdi:weather-partly-rainy" : "mdi:weather-sunny");
        }

        if (cloudPct <= 50) {
          if (rain > 0) return "mdi:weather-partly-rainy";
          return isNight ? "mdi:weather-night-partly-cloudy" : "mdi:weather-partly-cloudy";
        }

        if (rain > 5) return "mdi:weather-pouring";
        if (rain > 0.2) return "mdi:weather-rainy";

        return "mdi:weather-cloudy";
      };

      return `
        <div class="forecast-row ${nightClass}">
          <div class="forecast-cell-value ${timeClasses}">${timeStr}</div>

          ${(() => {
            const bg = getColorForWind(row.wind_speed_kn);
            const fg = this._getContrastTextColor(bg);
            return `<div class="forecast-cell-value" style="background:${bg};color:${fg};">${row.wind_speed_kn?.toFixed(0) ?? '-'}</div>`;
          })()}

          ${(() => {
            const bg = getColorForWind(row.wind_gust_kn);
            const fg = this._getContrastTextColor(bg);
            return `<div class="forecast-cell-value" style="background:${bg};color:${fg};">${row.wind_gust_kn?.toFixed(0) ?? '-'}</div>`;
          })()}


          <div class="forecast-cell-value icon">${windDirIcon}</div>

          ${(() => {
            const bg = getColorForTemperature(row.temperature_c);
            const fg = this._getContrastTextColor(bg);
            return `<div class="forecast-cell-value icon" style="background:${bg};color:${fg};">${row.temperature_c?.toFixed(1) ?? '-'}</div>`;
          })()}

          <div class="forecast-cell-value icon">
              <ha-icon icon="${getWeatherIcon(row.cloud_cover_pct, row.rain_mm, row.night_hour)}" style="--mdc-icon-size: 16px;" title="${row.cloud_cover_pct?.toFixed(0) ?? '?'}% cloud, ${row.rain_mm?.toFixed(1) ?? '0'}mm rain"></ha-icon>
          </div>

          <div class="forecast-cell-value">${(row.rain_mm > 0 ? row.rain_mm.toFixed(1) : '-')}</div>

          <div class="forecast-cell-value">${row.air_pressure_hpa?.toFixed(0) ?? '-'}</div>
          <div class="forecast-cell-value icon">${waveDirIcon}</div>
          <div class="forecast-cell-value">${row.wave_height_m?.toFixed(1) ?? '-'}m<br>${row.wave_interval_s?.toFixed(0) ?? '-'} sec</div>
        </div>
      `;
    }).join('');
    body.innerHTML = rowsHtml;

    // Apply night visibility toggle
    this._applyNightVisibility();
  }



  _getContrastTextColor(color) {
    let r, g, b;

    if (color.startsWith('rgba') || color.startsWith('rgb')) {
      const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (!match) return '#000';
      r = parseInt(match[1], 10);
      g = parseInt(match[2], 10);
      b = parseInt(match[3], 10);
    } else if (color.startsWith('#')) {
      const hex = color.slice(1);
      if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
      } else if (hex.length === 6) {
        r = parseInt(hex.slice(0, 2), 16);
        g = parseInt(hex.slice(2, 4), 16);
        b = parseInt(hex.slice(4, 6), 16);
      } else {
        return '#000';
      }
    } else {
      return '#000';
    }

    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminance > 110 ? '#000000' : '#ffffff';
  }


  _applyNightVisibility() {
    const rows = this.querySelectorAll('.forecast-row.night');
    rows.forEach(row => {
      row.style.display = this._showNight ? '' : 'none';
    });
  }

  _clearDisplay(msg) {
    const subtitle = this.querySelector("#subtitle");
    const footer = this.querySelector("#footer");
    const datesRow = this.querySelector("#dates-row");
    const forecastTable = this.querySelector("#forecast-table");

    subtitle.textContent = msg;
    footer.textContent = '';
    datesRow.innerHTML = '';
    forecastTable.innerHTML = '';
  }
}

if (!customElements.get('ha-wf-card')) {
  customElements.define('ha-wf-card', HaWfCard);
}

HaWfCard.getConfigElement = () => document.createElement('ha-wf-card-editor');
HaWfCard.getStubConfig = () => ({
  entity: '',
  title: '',
  show_night: false,
  default_source: 'forecastdata',
});

const editorCss = `
  :host {
    display: block;
  }
  .editor {
    display: grid;
    gap: 16px;
    padding: 16px;
    color: var(--primary-text-color);
  }
  .section {
    display: grid;
    gap: 12px;
    padding: 16px;
    border: 1px solid var(--divider-color);
    border-radius: 16px;
    background:
      linear-gradient(180deg, color-mix(in srgb, var(--card-background-color) 92%, var(--primary-color) 8%), var(--card-background-color));
  }
  .section-header {
    display: grid;
    gap: 4px;
  }
  .section-title {
    font-size: 16px;
    font-weight: 600;
  }
  .section-description {
    font-size: 13px;
    color: var(--secondary-text-color);
  }
  .field-grid {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
  .field {
    display: grid;
    gap: 6px;
  }
  .field label,
  .toggle-row label,
  .angles-header {
    font-size: 13px;
    font-weight: 600;
  }
  input,
  select {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 12px;
    border-radius: 12px;
    border: 1px solid var(--divider-color);
    background: var(--card-background-color);
    color: var(--primary-text-color);
    font: inherit;
  }
  .toggle-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 12px 14px;
    border-radius: 14px;
    background: color-mix(in srgb, var(--card-background-color) 85%, var(--primary-color) 15%);
  }
  .toggle-row input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }
  .alert-layout {
    display: grid;
    gap: 16px;
    grid-template-columns: minmax(250px, 300px) minmax(0, 1fr);
  }
  .alert-preview-wrap {
    display: grid;
    gap: 12px;
    align-content: start;
  }
  .compass-card {
    display: grid;
    justify-items: center;
    gap: 10px;
    padding: 16px;
    border-radius: 18px;
    background: radial-gradient(circle at center, color-mix(in srgb, var(--card-background-color) 80%, var(--primary-color) 20%) 0 30%, var(--card-background-color) 31% 100%);
  }
  .compass {
    position: relative;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    border: 1px solid var(--divider-color);
    background:
      radial-gradient(circle at center, transparent 0 45px, color-mix(in srgb, var(--divider-color) 50%, transparent) 46px 47px, transparent 48px 100%),
      var(--alert-preview, conic-gradient(from -90deg, color-mix(in srgb, var(--divider-color) 30%, transparent) 0deg 360deg));
    box-shadow: inset 0 0 0 18px color-mix(in srgb, var(--card-background-color) 88%, transparent);
  }
  .compass::after {
    content: "";
    position: absolute;
    inset: 50%;
    width: 8px;
    height: 8px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: var(--primary-text-color);
  }
  .compass-marker {
    position: absolute;
    font-size: 12px;
    font-weight: 700;
    color: var(--secondary-text-color);
  }
  .compass-marker.n { top: 10px; left: 50%; transform: translateX(-50%); }
  .compass-marker.e { right: 12px; top: 50%; transform: translateY(-50%); }
  .compass-marker.s { bottom: 10px; left: 50%; transform: translateX(-50%); }
  .compass-marker.w { left: 12px; top: 50%; transform: translateY(-50%); }
  .alert-summary {
    font-size: 13px;
    color: var(--secondary-text-color);
    text-align: center;
  }
  .angles-panel {
    display: grid;
    gap: 12px;
    min-width: 0;
  }
  .preset-row,
  .angles-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  button {
    font: inherit;
    border: 1px solid var(--divider-color);
    border-radius: 999px;
    background: var(--card-background-color);
    color: var(--primary-text-color);
    padding: 8px 12px;
    cursor: pointer;
  }
  button.primary {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
    border-color: var(--primary-color);
  }
  button.danger {
    color: var(--error-color);
  }
  .angle-chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--card-background-color) 80%, var(--primary-color) 20%);
    font-size: 13px;
  }
  .range-list {
    display: grid;
    gap: 10px;
  }
  .range-row {
    display: grid;
    gap: 10px;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;
    align-items: end;
    padding: 12px;
    border: 1px solid var(--divider-color);
    border-radius: 14px;
    background: color-mix(in srgb, var(--card-background-color) 92%, var(--primary-color) 8%);
  }
  .field-hint {
    font-size: 12px;
    color: var(--secondary-text-color);
  }
  .empty-state {
    padding: 14px;
    border-radius: 14px;
    border: 1px dashed var(--divider-color);
    color: var(--secondary-text-color);
  }
  @media (max-width: 800px) {
    .alert-layout {
      grid-template-columns: 1fr;
    }
    .compass {
      width: 180px;
      height: 180px;
    }
  }
`;

class HaWfCardEditor extends HTMLElement {
  setConfig(config) {
    this._config = {
      show_night: false,
      default_source: 'forecastdata',
      ...config,
    };
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    if (this.isConnected) this._render();
  }

  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
    }
    this._render();
  }

  _render() {
    if (!this.shadowRoot || !this._config) return;

    const alert = this._normalizeAlert(this._config.alert);
    const alertEnabled = !!alert;
    const ranges = alert?.angles ?? [];
    const entityPicker = this._hass
      ? `<ha-entity-picker
          data-field="entity"
          allow-custom-entity
        ></ha-entity-picker>`
      : `<input data-field="entity" type="text" value="${this._escape(this._config.entity ?? '')}" placeholder="sensor.windfinder_noordwijk">`;

    this.shadowRoot.innerHTML = `
      <style>${editorCss}</style>
      <div class="editor">
        <section class="section">
          <div class="section-header">
            <div class="section-title">Card Setup</div>
            <div class="section-description">Select the Windfinder entity and the default display behavior.</div>
          </div>
          <div class="field-grid">
            <div class="field">
              <label>Entity</label>
              ${entityPicker}
            </div>
            <div class="field">
              <label for="title">Title</label>
              <input id="title" data-field="title" type="text" value="${this._escape(this._config.title ?? '')}" placeholder="Kite Forecast">
            </div>
            <div class="field">
              <label for="default_source">Default source</label>
              <select id="default_source" data-field="default_source">
                <option value="forecastdata" ${this._config.default_source !== 'superforecastdata' ? 'selected' : ''}>Forecast</option>
                <option value="superforecastdata" ${this._config.default_source === 'superforecastdata' ? 'selected' : ''}>Superforecast</option>
              </select>
            </div>
            <div class="field">
              <label for="timezone">Timezone</label>
              <input id="timezone" data-field="timezone" type="text" value="${this._escape(this._config.timezone ?? '')}" placeholder="Europe/Amsterdam">
              <div class="field-hint">Leave empty to use the viewer's local timezone.</div>
            </div>
          </div>
          <div class="toggle-row">
            <label for="show_night">Show night hours by default</label>
            <input id="show_night" data-field="show_night" type="checkbox" ${this._config.show_night ? 'checked' : ''}>
          </div>
        </section>

        <section class="section">
          <div class="section-header">
            <div class="section-title">Alert Highlighting</div>
            <div class="section-description">Highlight forecast periods when wind speed and direction match your preferred sailing window. Alerts only apply to non-night hours in the card.</div>
          </div>
          <div class="toggle-row">
            <label for="alert_enabled">Enable alert highlighting</label>
            <input id="alert_enabled" type="checkbox" ${alertEnabled ? 'checked' : ''}>
          </div>
          ${alertEnabled ? this._renderAlertSection(alert) : ''}
        </section>
      </div>
    `;

    if (this._hass) {
      const picker = this.shadowRoot.querySelector('ha-entity-picker');
      if (picker) {
        picker.hass = this._hass;
        picker.value = this._config.entity ?? '';
        picker.configValue = 'entity';
      }
    }

    this._bindEvents();
  }

  _renderAlertSection(alert) {
    const ranges = alert.angles ?? [];
    return `
      <div class="alert-layout">
        <div class="alert-preview-wrap">
          <div class="compass-card">
            <div class="compass" style="--alert-preview:${this._buildAlertGradient(ranges)};">
              <span class="compass-marker n">N</span>
              <span class="compass-marker e">E</span>
              <span class="compass-marker s">S</span>
              <span class="compass-marker w">W</span>
            </div>
            <div class="alert-summary">${this._describeAlert(ranges, alert.speed_min)}</div>
          </div>
          <div class="field">
            <label for="alert_speed_min">Minimum wind speed (kn)</label>
            <input id="alert_speed_min" data-alert-field="speed_min" type="number" min="0" step="1" value="${Number.isFinite(alert.speed_min) ? alert.speed_min : ''}" placeholder="15">
            <div class="field-hint">Only rows at or above this wind speed are highlighted.</div>
          </div>
        </div>
        <div class="angles-panel">
          <div class="angles-header">Direction ranges</div>
          <div class="field-hint">Use degrees where 0/360 is north, 90 east, 180 south, and 270 west. Wrap-around ranges such as 300 to 40 are supported.</div>
          <div class="preset-row">
            <button type="button" data-preset="north">North</button>
            <button type="button" data-preset="east">East</button>
            <button type="button" data-preset="south">South</button>
            <button type="button" data-preset="west">West</button>
            <button type="button" data-preset="cross">Cross-shore pair</button>
            <button type="button" data-preset="clear">Clear</button>
          </div>
          ${ranges.length ? `
            <div class="angles-list">${ranges.map((range, index) => `
              <span class="angle-chip">
                ${this._formatRange(range)}
                <button type="button" class="danger" data-remove-range="${index}">Remove</button>
              </span>
            `).join('')}</div>
          ` : `<div class="empty-state">No direction ranges configured yet.</div>`}
          <div class="range-list">
            ${ranges.map((range, index) => `
              <div class="range-row">
                <div class="field">
                  <label for="range_from_${index}">From</label>
                  <input id="range_from_${index}" data-range-index="${index}" data-range-field="from" type="number" min="0" max="360" step="1" value="${this._escape(range.from ?? '')}">
                </div>
                <div class="field">
                  <label for="range_to_${index}">To</label>
                  <input id="range_to_${index}" data-range-index="${index}" data-range-field="to" type="number" min="0" max="360" step="1" value="${this._escape(range.to ?? '')}">
                </div>
                <button type="button" class="danger" data-remove-range="${index}">Delete</button>
              </div>
            `).join('')}
          </div>
          <button type="button" class="primary" id="add-range">Add direction range</button>
        </div>
      </div>
    `;
  }

  _bindEvents() {
    this.shadowRoot.querySelectorAll('[data-field]').forEach((el) => {
      const eventName = el.tagName === 'HA-ENTITY-PICKER'
        ? 'value-changed'
        : (el.tagName === 'SELECT' || el.type === 'checkbox' ? 'change' : 'input');
      el.addEventListener(eventName, (ev) => {
        const value = el.type === 'checkbox' ? el.checked : (ev.detail?.value ?? el.value);
        this._updateConfigValue(el.dataset.field, value);
      });
    });

    const alertToggle = this.shadowRoot.querySelector('#alert_enabled');
    if (alertToggle) {
      alertToggle.addEventListener('change', () => {
        this._updateConfig({
          alert: alertToggle.checked ? { speed_min: 15, angles: [] } : undefined,
        });
      });
    }

    const speedInput = this.shadowRoot.querySelector('[data-alert-field="speed_min"]');
    if (speedInput) {
      speedInput.addEventListener('input', () => {
        const nextAlert = this._normalizeAlert(this._config.alert) ?? { angles: [] };
        const value = speedInput.value === '' ? undefined : Number(speedInput.value);
        nextAlert.speed_min = Number.isFinite(value) ? value : undefined;
        this._updateConfig({ alert: this._compactAlert(nextAlert) });
      });
    }

    this.shadowRoot.querySelectorAll('[data-range-field]').forEach((input) => {
      input.addEventListener('input', () => {
        const index = Number(input.dataset.rangeIndex);
        const field = input.dataset.rangeField;
        const nextAlert = this._normalizeAlert(this._config.alert) ?? { angles: [] };
        const nextAngles = [...(nextAlert.angles ?? [])];
        const nextRange = { ...(nextAngles[index] ?? {}) };
        nextRange[field] = input.value === '' ? undefined : Number(input.value);
        nextAngles[index] = nextRange;
        nextAlert.angles = nextAngles;
        this._updateConfig({ alert: this._compactAlert(nextAlert) });
      });
    });

    this.shadowRoot.querySelectorAll('[data-remove-range]').forEach((button) => {
      button.addEventListener('click', () => {
        const index = Number(button.dataset.removeRange);
        const nextAlert = this._normalizeAlert(this._config.alert) ?? { angles: [] };
        nextAlert.angles = (nextAlert.angles ?? []).filter((_, i) => i !== index);
        this._updateConfig({ alert: this._compactAlert(nextAlert) });
      });
    });

    const addButton = this.shadowRoot.querySelector('#add-range');
    if (addButton) {
      addButton.addEventListener('click', () => {
        const nextAlert = this._normalizeAlert(this._config.alert) ?? { speed_min: 15, angles: [] };
        nextAlert.angles = [...(nextAlert.angles ?? []), { from: 0, to: 30 }];
        this._updateConfig({ alert: this._compactAlert(nextAlert) });
      });
    }

    this.shadowRoot.querySelectorAll('[data-preset]').forEach((button) => {
      button.addEventListener('click', () => {
        this._applyPreset(button.dataset.preset);
      });
    });
  }

  _applyPreset(preset) {
    if (preset === 'clear') {
      this._updateConfig({ alert: { ...this._normalizeAlert(this._config.alert), angles: [] } });
      return;
    }

    const presets = {
      north: [{ from: 315, to: 45 }],
      east: [{ from: 45, to: 135 }],
      south: [{ from: 135, to: 225 }],
      west: [{ from: 225, to: 315 }],
      cross: [{ from: 45, to: 135 }, { from: 225, to: 315 }],
    };

    const nextAlert = this._normalizeAlert(this._config.alert) ?? { speed_min: 15, angles: [] };
    nextAlert.angles = presets[preset] ?? nextAlert.angles ?? [];
    this._updateConfig({ alert: this._compactAlert(nextAlert) });
  }

  _updateConfigValue(key, value) {
    const next = {};
    if (key === 'title' || key === 'timezone') {
      next[key] = value || undefined;
    } else {
      next[key] = value;
    }
    this._updateConfig(next);
  }

  _updateConfig(changes) {
    this._config = {
      ...this._config,
      ...changes,
    };

    if (!this._config.alert) {
      delete this._config.alert;
    }

    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    }));

    this._render();
  }

  _normalizeAlert(alert) {
    if (!alert) return null;
    return {
      speed_min: Number.isFinite(alert.speed_min) ? Number(alert.speed_min) : undefined,
      angles: Array.isArray(alert.angles)
        ? alert.angles.map((range) => ({
          from: Number.isFinite(range?.from) ? Number(range.from) : undefined,
          to: Number.isFinite(range?.to) ? Number(range.to) : undefined,
        }))
        : [],
    };
  }

  _compactAlert(alert) {
    if (!alert) return undefined;
    const angles = (alert.angles ?? []).filter((range) => range.from != null && range.to != null);
    return {
      ...(Number.isFinite(alert.speed_min) ? { speed_min: alert.speed_min } : {}),
      angles,
    };
  }

  _buildAlertGradient(ranges) {
    if (!ranges?.length) {
      return 'conic-gradient(from -90deg, color-mix(in srgb, var(--divider-color) 25%, transparent) 0deg 360deg)';
    }

    const normalized = [];
    ranges.forEach((range) => {
      if (range.from == null || range.to == null) return;
      const from = this._normalizeDeg(range.from);
      const to = this._normalizeDeg(range.to);
      if (from <= to) {
        normalized.push([from, to]);
      } else {
        normalized.push([from, 360], [0, to]);
      }
    });

    normalized.sort((a, b) => a[0] - b[0]);

    const segments = [];
    let cursor = 0;
    normalized.forEach(([start, end]) => {
      if (start > cursor) {
        segments.push(`color-mix(in srgb, var(--divider-color) 20%, transparent) ${cursor}deg ${start}deg`);
      }
      segments.push(`color-mix(in srgb, var(--error-color) 75%, orange) ${start}deg ${end}deg`);
      cursor = Math.max(cursor, end);
    });
    if (cursor < 360) {
      segments.push(`color-mix(in srgb, var(--divider-color) 20%, transparent) ${cursor}deg 360deg`);
    }

    return `conic-gradient(from -90deg, ${segments.join(', ')})`;
  }

  _describeAlert(ranges, speedMin) {
    const speedText = Number.isFinite(speedMin) ? `${speedMin}+ kn` : 'any wind speed';
    if (!ranges?.length) {
      return `Alerting enabled for ${speedText}, but no wind direction ranges are selected yet.`;
    }
    return `${speedText} from ${ranges.map((range) => this._formatRange(range)).join(', ')}.`;
  }

  _formatRange(range) {
    return `${this._normalizeDeg(range.from)}° to ${this._normalizeDeg(range.to)}°`;
  }

  _normalizeDeg(value) {
    return ((Number(value) % 360) + 360) % 360;
  }

  _escape(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  }
}

if (!customElements.get('ha-wf-card-editor')) {
  customElements.define('ha-wf-card-editor', HaWfCardEditor);
}

window.customCards = window.customCards || [];
if (!window.customCards.find((card) => card.type === 'ha-wf-card')) {
  window.customCards.push({
    type: 'ha-wf-card',
    name: 'Windfinder Card',
    description: 'Windfinder forecast card with visual alert configuration.',
  });
}
