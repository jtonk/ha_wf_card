# ha_wf_card

This repository contains the **ha-wf-card** custom card for Home Assistant. It displays wind and weather forecast information in a compact table with selectable days.
It is intended to be used with https://github.com/jtonk/ha_wf

## Installation (HACS)

1. In Home Assistant, open **HACS** → **Integrations** → "Custom Repositories" and add this repository as a *Lovelace* type repository.
2. Search for **ha_wf_card** in HACS and install it.
3. Add the following to your Lovelace resources:

```yaml
url: /hacsfiles/ha_wf_card/ha_wf_card.js
type: module
```

4. Use the card in your dashboard:

```yaml
type: custom:ha-wf-card
entity: weather.your_forecast_entity
```

## Manual installation

Copy the single file `ha_wf_card.js` to the `www` folder of your Home Assistant configuration and add the resource reference for the JavaScript file as shown above. The CSS is embedded inside the script.

## Card Options

- `entity` (**required**): Weather entity containing forecast attributes.
- `show_night`: Set to `true` to show night hours.
- `default_source`: `forecastdata` (default) or `superforecastdata`.
- `alert`: Alert configuration for highlighting certain wind conditions during non-night hours only. see example below
- `timezone`: Specify a valid [IANA timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) such as
  `UTC` or `Europe/Amsterdam` to display all times in that zone. If omitted, times
  are shown in the end user's local timezone.
- The card's icon is taken from the entity's `icon` attribute when available.

## Example
```yaml
type: custom:ha-wf-card
entity: sensor.windfinder_noordwijk
title: Noordwijk
show_night: false
default_source: forecastdata
timezone: Europe/Amsterdam
alert:
  speed_min: 15
  angles:
    - from: 0
      to: 30
    - from: 210
      to: 360
```
<img width="508" height="393" alt="Description" src="https://raw.githubusercontent.com/jtonk/ha_wf_card/main/574020315-23316af4-2f7d-425d-95c3-31a6ca0f2d5e.png" />

## License

MIT
