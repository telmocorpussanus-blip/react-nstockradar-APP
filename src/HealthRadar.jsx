import React from 'react'

const healthStocks = [
  // PHARMA - 5 empresas
  {
    ticker: 'LLY',
    name: 'Eli Lilly',
    sector: 'Pharma',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '28.2%',
      'R&D % Sales': '25.4%',
      'Gross Margin': '81.2%',
      'Drug Pipeline': '8',
      'P/E Forward': '52.3x'
    }
  },
  {
    ticker: 'NVO',
    name: 'Novo Nordisk',
    sector: 'Pharma',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '31.5%',
      'R&D % Sales': '14.8%',
      'Gross Margin': '84.6%',
      'Drug Pipeline': '5',
      'P/E Forward': '38.1x'
    }
  },
  {
    ticker: 'JNJ',
    name: 'Johnson & Johnson',
    sector: 'Pharma',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '4.2%',
      'R&D % Sales': '12.1%',
      'Gross Margin': '69.8%',
      'Drug Pipeline': '12',
      'P/E Forward': '15.4x'
    }
  },
  {
    ticker: 'PFE',
    name: 'Pfizer',
    sector: 'Pharma',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '-42.1%',
      'R&D % Sales': '16.2%',
      'Gross Margin': '58.3%',
      'Drug Pipeline': '9',
      'P/E Forward': '11.8x'
    }
  },
  {
    ticker: 'MRK',
    name: 'Merck',
    sector: 'Pharma',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '6.8%',
      'R&D % Sales': '24.1%',
      'Gross Margin': '76.4%',
      'Drug Pipeline': '6',
      'P/E Forward': '14.2x'
    }
  },

  // BIOTECH - 5 empresas
  {
    ticker: 'REGN',
    name: 'Regeneron',
    sector: 'Biotech',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '18.4%',
      'R&D % Sales': '31.2%',
      'Gross Margin': '88.1%',
      'Drug Pipeline': '7',
      'ROIC': '22.4%'
    }
  },
  {
    ticker: 'VRTX',
    name: 'Vertex Pharma',
    sector: 'Biotech',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '14.2%',
      'R&D % Sales': '28.8%',
      'Gross Margin': '86.3%',
      'Drug Pipeline': '4',
      'ROIC': '28.1%'
    }
  },
  {
    ticker: 'BIIB',
    name: 'Biogen',
    sector: 'Biotech',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '-8.4%',
      'R&D % Sales': '22.1%',
      'Gross Margin': '81.2%',
      'Drug Pipeline': '3',
      'ROIC': '12.8%'
    }
  },
  {
    ticker: 'GILD',
    name: 'Gilead Sciences',
    sector: 'Biotech',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '2.1%',
      'R&D % Sales': '18.4%',
      'Gross Margin': '82.8%',
      'Drug Pipeline': '5',
      'ROIC': '14.2%'
    }
  },
  {
    ticker: 'AMGN',
    name: 'Amgen',
    sector: 'Biotech',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '7.8%',
      'R&D % Sales': '16.2%',
      'Gross Margin': '74.1%',
      'Drug Pipeline': '8',
      'ROIC': '19.6%'
    }
  },

  // MEDTECH / DEVICES - 5 empresas
  {
    ticker: 'ISRG',
    name: 'Intuitive Surgical',
    sector: 'MedTech',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '14.2%',
      'R&D % Sales': '12.4%',
      'Gross Margin': '68.8%',
      'Procedures YoY': '+18%',
      'ROIC': '18.4%'
    }
  },
  {
    ticker: 'SYK',
    name: 'Stryker',
    sector: 'MedTech',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '11.8%',
      'R&D % Sales': '6.8%',
      'Gross Margin': '64.2%',
      'Market Share': '22%',
      'ROIC': '14.1%'
    }
  },
  {
    ticker: 'MDT',
    name: 'Medtronic',
    sector: 'MedTech',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '3.2%',
      'R&D % Sales': '8.1%',
      'Gross Margin': '68.1%',
      'Market Share': '18%',
      'ROIC': '10.8%'
    }
  },
  {
    ticker: 'BSX',
    name: 'Boston Scientific',
    sector: 'MedTech',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '12.4%',
      'R&D % Sales': '10.2%',
      'Gross Margin': '71.4%',
      'Market Share': '15%',
      'ROIC': '11.2%'
    }
  },
  {
    ticker: 'ABT',
    name: 'Abbott Labs',
    sector: 'MedTech',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '8.1%',
      'R&D % Sales': '7.4%',
      'Gross Margin': '58.2%',
      'Market Share': '12%',
      'ROIC': '15.8%'
    }
  },

  // HOSPITALS / HEALTHCARE SERVICES - 5 empresas
  {
    ticker: 'UNH',
    name: 'UnitedHealth',
    sector: 'Services',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '12.8%',
      'Gross Margin': '24.1%',
      'Medical Loss Ratio': '82.4%',
      'Members': '52.8M',
      'ROIC': '16.2%'
    }
  },
  {
    ticker: 'HCA',
    name: 'HCA Healthcare',
    sector: 'Services',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '8.4%',
      'Gross Margin': '18.2%',
      'Bed Occupancy': '68%',
      'Hospitals': '182',
      'ROIC': '11.4%'
    }
  },
  {
    ticker: 'ELV',
    name: 'Elevance Health',
    sector: 'Services',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '9.2%',
      'Gross Margin': '21.8%',
      'Medical Loss Ratio': '87.1%',
      'Members': '47.2M',
      'ROIC': '12.8%'
    }
  },
  {
    ticker: 'CI',
    name: 'Cigna',
    sector: 'Services',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '6.4%',
      'Gross Margin': '19.1%',
      'Medical Loss Ratio': '83.8%',
      'Members': '18.1M',
      'ROIC': '10.2%'
    }
  },
  {
    ticker: 'HUM',
    name: 'Humana',
    sector: 'Services',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '14.1%',
      'Gross Margin': '16.4%',
      'Medical Loss Ratio': '86.2%',
      'Members': '17.4M',
      'ROIC': '13.8%'
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
    'Pharma': '#3b82f6',
    'Biotech': '#a855f7',
    'MedTech': '#22c55e',
    'Services': '#f97316'
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

export default function HealthRadar() {
  return (
    <div style={{backgroundColor: '#111827', minHeight: '100vh', padding: '24px'}}>
      <div style={{maxWidth: '1280px', margin: '0 auto'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
          {healthStocks.map(stock => (
            <StockCard key={stock.ticker} stock={stock} />
          ))}
        </div>
      </div>
    </div>
  )
}