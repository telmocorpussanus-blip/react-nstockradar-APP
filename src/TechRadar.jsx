import React from 'react'

const techStocks = [
  // SOFTWARE / SAAS - 5 empresas
  {
    ticker: 'MSFT',
    name: 'Microsoft',
    sector: 'Software',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '12.8%',
      'Gross Margin': '69.4%',
      'Rule of 40': '58',
      'FCF Margin': '35.2%',
      'P/S Forward': '12.1x'
    }
  },
  {
    ticker: 'CRM',
    name: 'Salesforce',
    sector: 'Software',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '11.2%',
      'Gross Margin': '76.8%',
      'Rule of 40': '41',
      'FCF Margin': '30.1%',
      'P/S Forward': '7.2x'
    }
  },
  {
    ticker: 'NOW',
    name: 'ServiceNow',
    sector: 'Software',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '22.4%',
      'Gross Margin': '81.2%',
      'Rule of 40': '52',
      'FCF Margin': '30.8%',
      'P/S Forward': '14.8x'
    }
  },
  {
    ticker: 'ADBE',
    name: 'Adobe',
    sector: 'Software',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '10.1%',
      'Gross Margin': '88.1%',
      'Rule of 40': '48',
      'FCF Margin': '38.4%',
      'P/S Forward': '11.4x'
    }
  },
  {
    ticker: 'PLTR',
    name: 'Palantir',
    sector: 'Software',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '27.8%',
      'Gross Margin': '81.4%',
      'Rule of 40': '43',
      'FCF Margin': '15.2%',
      'P/S Forward': '18.2x'
    }
  },

  // SEMICONDUCTORS - 5 empresas
  {
    ticker: 'NVDA',
    name: 'Nvidia',
    sector: 'Semiconductors',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '122.4%',
      'Gross Margin': '75.1%',
      'R&D % Sales': '19.8%',
      'FCF Margin': '48.2%',
      'P/E Forward': '42.1x'
    }
  },
  {
    ticker: 'AMD',
    name: 'AMD',
    sector: 'Semiconductors',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '18.2%',
      'Gross Margin': '51.2%',
      'R&D % Sales': '24.1%',
      'FCF Margin': '12.8%',
      'P/E Forward': '48.4x'
    }
  },
  {
    ticker: 'AVGO',
    name: 'Broadcom',
    sector: 'Semiconductors',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '44.2%',
      'Gross Margin': '74.8%',
      'R&D % Sales': '16.4%',
      'FCF Margin': '42.1%',
      'P/E Forward': '32.8x'
    }
  },
  {
    ticker: 'TSM',
    name: 'TSMC',
    sector: 'Semiconductors',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '33.1%',
      'Gross Margin': '58.8%',
      'R&D % Sales': '8.2%',
      'FCF Margin': '28.4%',
      'P/E Forward': '22.4x'
    }
  },
  {
    ticker: 'INTC',
    name: 'Intel',
    sector: 'Semiconductors',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '-6.2%',
      'Gross Margin': '41.2%',
      'R&D % Sales': '28.4%',
      'FCF Margin': '-2.1%',
      'P/E Forward': '28.1x'
    }
  },

  // HARDWARE - 5 empresas
  {
    ticker: 'AAPL',
    name: 'Apple',
    sector: 'Hardware',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '2.1%',
      'Gross Margin': '45.8%',
      'R&D % Sales': '7.2%',
      'FCF Margin': '26.4%',
      'P/E Forward': '29.8x'
    }
  },
  {
    ticker: 'DELL',
    name: 'Dell Tech',
    sector: 'Hardware',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '8.4%',
      'Gross Margin': '22.1%',
      'R&D % Sales': '2.8%',
      'FCF Margin': '5.2%',
      'P/E Forward': '12.4x'
    }
  },
  {
    ticker: 'HPQ',
    name: 'HP Inc',
    sector: 'Hardware',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '-2.8%',
      'Gross Margin': '20.4%',
      'R&D % Sales': '3.1%',
      'FCF Margin': '4.8%',
      'P/E Forward': '9.2x'
    }
  },
  {
    ticker: 'CSCO',
    name: 'Cisco',
    sector: 'Hardware',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '3.4%',
      'Gross Margin': '64.2%',
      'R&D % Sales': '12.8%',
      'FCF Margin': '24.1%',
      'P/E Forward': '14.8x'
    }
  },
  {
    ticker: 'ANET',
    name: 'Arista Networks',
    sector: 'Hardware',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '18.8%',
      'Gross Margin': '62.1%',
      'R&D % Sales': '18.4%',
      'FCF Margin': '32.8%',
      'P/E Forward': '38.2x'
    }
  },

  // INTERNET / PLATFORMS - 5 empresas
  {
    ticker: 'GOOGL',
    name: 'Alphabet',
    sector: 'Internet',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '13.8%',
      'Gross Margin': '58.1%',
      'R&D % Sales': '14.2%',
      'FCF Margin': '28.4%',
      'P/E Forward': '24.1x'
    }
  },
  {
    ticker: 'META',
    name: 'Meta',
    sector: 'Internet',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '22.1%',
      'Gross Margin': '81.2%',
      'R&D % Sales': '28.4%',
      'FCF Margin': '28.8%',
      'P/E Forward': '26.4x'
    }
  },
  {
    ticker: 'AMZN',
    name: 'Amazon',
    sector: 'Internet',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '11.4%',
      'Gross Margin': '48.2%',
      'R&D % Sales': '12.8%',
      'FCF Margin': '6.4%',
      'P/E Forward': '42.8x'
    }
  },
  {
    ticker: 'NFLX',
    name: 'Netflix',
    sector: 'Internet',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '15.8%',
      'Gross Margin': '42.1%',
      'R&D % Sales': '7.8%',
      'FCF Margin': '18.2%',
      'P/E Forward': '38.4x'
    }
  },
  {
    ticker: 'UBER',
    name: 'Uber',
    sector: 'Internet',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '16.2%',
      'Gross Margin': '39.8%',
      'R&D % Sales': '8.4%',
      'FCF Margin': '12.1%',
      'P/E Forward': '31.2x'
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
    'Software': '#3b82f6',
    'Semiconductors': '#a855f7',
    'Hardware': '#22c55e',
    'Internet': '#f97316'
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

export default function TechRadar() {
  return (
    <div style={{backgroundColor: '#111827', minHeight: '100vh', padding: '24px'}}>
      <div style={{maxWidth: '1280px', margin: '0 auto'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
          {techStocks.map(stock => (
            <StockCard key={stock.ticker} stock={stock} />
          ))}
        </div>
      </div>
    </div>
  )
}