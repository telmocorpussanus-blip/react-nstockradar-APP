import React from 'react'

const energyStocks = [
  // OIL & GAS - 5 empresas
  {
    ticker: 'XOM',
    name: 'Exxon Mobil',
    sector: 'Oil & Gas',
    rating: 'BUY',
    metrics: {
      'FCF Yield': '12.4%',
      'Reserve Life': '17 yrs',
      'Production Cost': '$35/boe',
      'Dividend Yield': '3.8%',
      'Debt/EBITDA': '1.2x'
    }
  },
  {
    ticker: 'CVX',
    name: 'Chevron',
    sector: 'Oil & Gas',
    rating: 'BUY',
    metrics: {
      'FCF Yield': '11.8%',
      'Reserve Life': '14 yrs',
      'Production Cost': '$38/boe',
      'Dividend Yield': '4.2%',
      'Debt/EBITDA': '1.0x'
    }
  },
  {
    ticker: 'COP',
    name: 'ConocoPhillips',
    sector: 'Oil & Gas',
    rating: 'BUY',
    metrics: {
      'FCF Yield': '10.2%',
      'Reserve Life': '12 yrs',
      'Production Cost': '$42/boe',
      'Dividend Yield': '3.1%',
      'Debt/EBITDA': '1.4x'
    }
  },
  {
    ticker: 'SHEL',
    name: 'Shell',
    sector: 'Oil & Gas',
    rating: 'HOLD',
    metrics: {
      'FCF Yield': '9.8%',
      'Reserve Life': '11 yrs',
      'Production Cost': '$40/boe',
      'Dividend Yield': '4.5%',
      'Debt/EBITDA': '1.6x'
    }
  },
  {
    ticker: 'TTE',
    name: 'TotalEnergies',
    sector: 'Oil & Gas',
    rating: 'BUY',
    metrics: {
      'FCF Yield': '13.1%',
      'Reserve Life': '15 yrs',
      'Production Cost': '$37/boe',
      'Dividend Yield': '5.2%',
      'Debt/EBITDA': '1.3x'
    }
  },

  // NUCLEAR - 5 empresas
  {
    ticker: 'CCJ',
    name: 'Cameco',
    sector: 'Nuclear',
    rating: 'BUY',
    metrics: {
      'FCF Yield': '8.2%',
      'Uranium Reserves': '455M lbs',
      'Production Cost': '$18/lb',
      'Contract Coverage': '85%',
      'Debt/EBITDA': '0.8x'
    }
  },
  {
    ticker: 'CEG',
    name: 'Constellation Energy',
    sector: 'Nuclear',
    rating: 'BUY',
    metrics: {
      'FCF Yield': '6.4%',
      'Capacity Factor': '96%',
      'Nuclear Fleet': '21 reactors',
      'Dividend Yield': '1.2%',
      'Debt/EBITDA': '2.8x'
    }
  },
  {
    ticker: 'VST',
    name: 'Vistra Corp',
    sector: 'Nuclear',
    rating: 'HOLD',
    metrics: {
      'FCF Yield': '7.1%',
      'Capacity Factor': '94%',
      'Nuclear + Gas': '68%',
      'Dividend Yield': '2.4%',
      'Debt/EBITDA': '3.2x'
    }
  },
  {
    ticker: 'UEC',
    name: 'Uranium Energy',
    sector: 'Nuclear',
    rating: 'BUY',
    metrics: {
      'FCF Yield': '4.2%',
      'Uranium Reserves': '78M lbs',
      'Production Cost': '$22/lb',
      'Contract Coverage': '60%',
      'Debt/EBITDA': '1.1x'
    }
  },
  {
    ticker: 'DNN',
    name: 'Denison Mines',
    sector: 'Nuclear',
    rating: 'HOLD',
    metrics: {
      'FCF Yield': '2.1%',
      'Uranium Reserves': '122M lbs',
      'Production Cost': '$24/lb',
      'Contract Coverage': '45%',
      'Debt/EBITDA': '0.4x'
    }
  },

  // RENEWABLES / SOLAR - 5 empresas
  {
    ticker: 'NEE',
    name: 'NextEra Energy',
    sector: 'Renewables',
    rating: 'BUY',
    metrics: {
      'FCF Yield': '4.1%',
      'Capacity Factor': '94%',
      'Renewable Mix': '78%',
      'Dividend Yield': '2.9%',
      'Debt/EBITDA': '4.8x'
    }
  },
  {
    ticker: 'ENPH',
    name: 'Enphase Energy',
    sector: 'Renewables',
    rating: 'HOLD',
    metrics: {
      'FCF Yield': '2.8%',
      'Gross Margin': '45%',
      'Market Share': '22%',
      'Revenue Growth': '18%',
      'Debt/EBITDA': '0.5x'
    }
  },
  {
    ticker: 'FSLR',
    name: 'First Solar',
    sector: 'Renewables',
    rating: 'BUY',
    metrics: {
      'FCF Yield': '3.2%',
      'Gross Margin': '38%',
      'Book-to-Bill': '1.4x',
      'Revenue Growth': '28%',
      'Debt/EBITDA': '0.2x'
    }
  },
  {
    ticker: 'SEDG',
    name: 'SolarEdge',
    sector: 'Renewables',
    rating: 'HOLD',
    metrics: {
      'FCF Yield': '1.8%',
      'Gross Margin': '32%',
      'Market Share': '18%',
      'Revenue Growth': '12%',
      'Debt/EBITDA': '1.2x'
    }
  },
  {
    ticker: 'BE',
    name: 'Bloom Energy',
    sector: 'Renewables',
    rating: 'HOLD',
    metrics: {
      'FCF Yield': '-2.1%',
      'Gross Margin': '28%',
      'Capacity Deployed': '1.2GW',
      'Revenue Growth': '22%',
      'Debt/EBITDA': '2.4x'
    }
  },

  // GRID / UTILITIES - 5 empresas
  {
    ticker: 'DUK',
    name: 'Duke Energy',
    sector: 'Grid/Utilities',
    rating: 'HOLD',
    metrics: {
      'FCF Yield': '5.6%',
      'Regulated Assets': '92%',
      'Customer Growth': '1.2%',
      'Dividend Yield': '4.1%',
      'Debt/EBITDA': '5.2x'
    }
  },
  {
    ticker: 'SO',
    name: 'Southern Co',
    sector: 'Grid/Utilities',
    rating: 'BUY',
    metrics: {
      'FCF Yield': '6.1%',
      'Regulated Assets': '95%',
      'Customer Growth': '0.8%',
      'Dividend Yield': '3.9%',
      'Debt/EBITDA': '5.8x'
    }
  },
  {
    ticker: 'D',
    name: 'Dominion Energy',
    sector: 'Grid/Utilities',
    rating: 'HOLD',
    metrics: {
      'FCF Yield': '5.8%',
      'Regulated Assets': '88%',
      'Customer Growth': '1.5%',
      'Dividend Yield': '4.8%',
      'Debt/EBITDA': '5.5x'
    }
  },
  {
    ticker: 'AEP',
    name: 'American Electric',
    sector: 'Grid/Utilities',
    rating: 'BUY',
    metrics: {
      'FCF Yield': '6.4%',
      'Regulated Assets': '91%',
      'Customer Growth': '1.0%',
      'Dividend Yield': '3.7%',
      'Debt/EBITDA': '5.1x'
    }
  },
  {
    ticker: 'EXC',
    name: 'Exelon',
    sector: 'Grid/Utilities',
    rating: 'HOLD',
    metrics: {
      'FCF Yield': '5.2%',
      'Regulated Assets': '94%',
      'Customer Growth': '0.9%',
      'Dividend Yield': '3.5%',
      'Debt/EBITDA': '4.9x'
    }
  }
]

function StockCard({ stock }) {
  const ratingColor = {
    BUY: '#22c55e',
    HOLD: '#eab308',
    SELL: '#ef4444'
  }

  const sectorColor = {
    'Oil & Gas': '#f97316',
    'Nuclear': '#eab308',
    'Renewables': '#22c55e',
    'Grid/Utilities': '#3b82f6'
  }

  return (
    <div style={{
      backgroundColor: '#1f2937',
      borderRadius: '12px',
      padding: '20px',
      borderTop: `3px solid ${ratingColor[stock.rating]}`,
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
    }}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px'}}>
        <div>
          <div style={{fontSize: '24px', fontWeight: '700', color: 'white'}}>{stock.ticker}</div>
          <div style={{fontSize: '13px', color: '#9ca3af'}}>{stock.name}</div>
        </div>
        <div style={{
          backgroundColor: ratingColor[stock.rating] + '20',
          color: ratingColor[stock.rating],
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '600'
        }}>
          {stock.rating}
        </div>
      </div>

      <div style={{
        backgroundColor: sectorColor[stock.sector] + '20',
        color: sectorColor[stock.sector],
        padding: '4px 10px',
        borderRadius: '6px',
        fontSize: '11px',
        fontWeight: '600',
        display: 'inline-block',
        marginBottom: '16px',
        textTransform: 'uppercase'
      }}>
        {stock.sector}
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        {Object.entries(stock.metrics).map(([label, value]) => (
          <div key={label} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#111827',
            padding: '10px 12px',
            borderRadius: '6px'
          }}>
            <span style={{fontSize: '13px', color: '#d1d5db'}}>{label}</span>
            <span style={{fontSize: '14px', fontWeight: '600', color: 'white'}}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function EnergyRadar() {
  return (
    <div style={{backgroundColor: '#111827', minHeight: '100vh', padding: '24px'}}>
      <div style={{maxWidth: '1280px', margin: '0 auto'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
          {energyStocks.map(stock => (
            <StockCard key={stock.ticker} stock={stock} />
          ))}
        </div>
      </div>
    </div>
  )
}