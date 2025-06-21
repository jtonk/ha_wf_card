# ha_wf_card

This repository contains the **ha-wf-card** custom card for Home Assistant. It displays wind and weather forecast information in a compact table with selectable days.

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
- `alert`: Alert configuration for highlighting certain wind conditions.

## License

MIT
