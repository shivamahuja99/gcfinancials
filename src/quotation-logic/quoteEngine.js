/**
 * Core Quotation Logic for Super Visa Insurance
 * This can be modified to update pricing or rules.
 */

const BASE_RATES = {
  '18-40': 1.5,
  '41-50': 2.0,
  '51-60': 3.5,
  '61-65': 4.5,
  '66-70': 6.0,
  '71-75': 9.0,
  '76-80': 12.0,
  '81+': 18.0,
};

const DEDUCTIBLE_FACTORS = {
  '0': 1.0,
  '100': 0.95,
  '250': 0.90,
  '500': 0.85,
  '1000': 0.80,
};

const COVERAGE_LIMITS = {
  '100k': 1.0,
  '150k': 1.2,
  '200k': 1.4,
};

export const calculatePremium = (age, coverageAmount, deductible, durationInDays, hasPreExisting) => {
  let bracket = '18-40';
  if (age > 80) bracket = '81+';
  else if (age > 75) bracket = '76-80';
  else if (age > 70) bracket = '71-75';
  else if (age > 65) bracket = '66-70';
  else if (age > 60) bracket = '61-65';
  else if (age > 50) bracket = '51-60';
  else if (age > 40) bracket = '41-50';

  let rate = BASE_RATES[bracket] || 4.5;

  if (hasPreExisting) {
    rate *= 1.4;
  }

  const coverageFactor = COVERAGE_LIMITS[coverageAmount] || 1.0;
  const deductibleFactor = DEDUCTIBLE_FACTORS[deductible] || 1.0;

  const dailyPremium = rate * coverageFactor * deductibleFactor;
  const totalPremium = dailyPremium * durationInDays;

  return {
    dailyPremium: dailyPremium.toFixed(2),
    totalPremium: totalPremium.toFixed(2),
  };
};

export const getPlans = (params) => {
  const { age, durationInDays, hasPreExisting } = params;

  return [
    {
      id: 'basic-plus',
      name: 'Basic Plus',
      provider: 'Manulife',
      ...calculatePremium(age, '100k', '1000', durationInDays, hasPreExisting),
      features: ['Emergency Medical', 'Repatriation', 'Hospitalization'],
    },
    {
      id: 'standard-choice',
      name: 'Standard Choice',
      provider: 'TuGo',
      ...calculatePremium(age, '150k', '250', durationInDays, hasPreExisting),
      features: ['Emergency Medical', 'Repatriation', 'Hospitalization', 'Dental Emergency'],
      popular: true,
    },
    {
      id: 'elite-secure',
      name: 'Elite Secure',
      provider: 'Allianz',
      ...calculatePremium(age, '200k', '0', durationInDays, hasPreExisting),
      features: ['Premium Medical', 'Repatriation', 'Hospitalization', 'Full Dental', 'Family Accompany'],
    }
  ];
};
