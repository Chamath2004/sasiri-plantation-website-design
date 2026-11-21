import { PLANTS } from '../data/plants';

export const STOCK_KEY = 'sasiri_admin_stock_v1';
export type Stock = Record<number, number>;

export function loadStock(): Stock {
  const defaults = Object.fromEntries(PLANTS.filter(plant => !plant.catalogOnly).map(plant => [plant.id, plant.quantity]));
  try {
    const saved = JSON.parse(localStorage.getItem(STOCK_KEY) || 'null');
    if (saved && typeof saved === 'object' && !Array.isArray(saved)) {
      for (const plant of PLANTS) {
        if (plant.catalogOnly) continue;
        const value = saved[plant.id];
        if (Number.isSafeInteger(value) && value >= 0) defaults[plant.id] = value;
      }
    }
  } catch { /* Keep catalogue defaults if browser storage is unavailable or invalid. */ }
  return defaults;
}

export function persistStock(stock: Stock): boolean {
  if (!PLANTS.filter(plant => !plant.catalogOnly).every(plant => Number.isSafeInteger(stock[plant.id]) && stock[plant.id] >= 0)) return false;
  try {
    localStorage.setItem(STOCK_KEY, JSON.stringify(stock));
    return true;
  } catch {
    return false;
  }
}
