import React from 'react'

const reitsStocks = [
  // RESIDENTIAL - 5 empresas
  {
    ticker: 'AVB',
    name: 'AvalonBay',
    sector: 'Residential',
    rating: 'BUY',
    metrics: {
      'Dividend Yield': '3.8%',
      'FFO per Share': '$10.84',
      'Occupancy Rate': '95.8%',
      'Debt/EBITDA': '5.1x',
      'AFFO Payout': '68%',
      'P/FFO': '16.2x'
    }
  },
  {
    ticker: 'EQR',
    name: 'Equity Residential',
    sector: 'Residential',
    rating: 'BUY',
    metrics: {
      'Dividend Yield': '4.1%',
      'FFO per Share': '$3.72',
      'Occupancy Rate': '96.2%',
      'Debt/EBITDA': '5.4x',
      'AFFO Payout': '72%',
      'P/FFO': '17.1x'
    }
  },
  {
    ticker: 'MAA',
    name: 'Mid-America Apt',
    sector: 'Residential',
    rating: 'HOLD',
    metrics: {
      'Dividend Yield': '4.4%',
      'FFO per Share': '$8.92',
      'Occupancy Rate': '95.4%',
      'Debt/EBITDA': '5.8x',
      'AFFO Payout': '75%',
      'P/FFO': '15.8x'
    }
  },
  {
    ticker: 'ESS',
    name: 'Essex Property',
    sector: 'Residential',
    rating: 'HOLD',
    metrics: {
      'Dividend Yield': '4.2%',
      'FFO per Share': '$14.21',
      'Occupancy Rate': '96.8%',
      'Debt/EBITDA': '6.1x',
      'AFFO Payout': '71%',
      'P/FFO': '18.4x'
    }
  },
  {
    ticker: 'UDR',
    name: 'UDR Inc',
    sector: 'Residential',
    rating: 'HOLD',
    metrics: {
      'Dividend Yield': '4.6%',
      'FFO per Share': '$2.41',
      'Occupancy Rate': '96.1%',
      'Debt/EBITDA': '6.2x',
      'AFFO Payout': '78%',
      'P/FFO': '16.8x'
    }
  },

  // INDUSTRIAL / LOGISTICS - 5 empresas
  {
    ticker: 'PLD',
    name: 'Prologis',
    sector: 'Industrial',
    rating: 'BUY',
    metrics: {
      'Dividend Yield': '3.2%',
      'FFO per Share': '$5.12',
      'Occupancy Rate': '97.4%',
      'Debt/EBITDA': '5.2x',
      'AFFO Payout': '71%',
      'P/FFO': '22.1x'
    }
  },
  {
    ticker: 'AMT',
    name: 'American Tower',
    sector: 'Industrial',
    rating: 'BUY',
    metrics: {
      'Dividend Yield': '3.1%',
      'FFO per Share': '$10.28',
      'Occupancy Rate': '98.2%',
      'Debt/EBITDA': '6.8x',
      'AFFO Payout': '68%',
      'P/FFO': '19.8x'
    }
  },
  {
    ticker: 'CCI',
    name: 'Crown Castle',
    sector: 'Industrial',
    rating: 'HOLD',
    metrics: {
      'Dividend Yield': '5.8%',
      'FFO per Share': '$7.12',
      'Occupancy Rate': '98.8%',
      'Debt/EBITDA': '7.1x',
      'AFFO Payout': '82%',
      'P/FFO': '14.2x'
    }
  },
  {
    ticker: 'DLR',
    name: 'Digital Realty',
    sector: 'Industrial',
    rating: 'BUY',
    metrics: {
      'Dividend Yield': '3.4%',
      'FFO per Share': '$6.84',
      'Occupancy Rate': '84.2%',
      'Debt/EBITDA': '6.4x',
      'AFFO Payout': '74%',
      'P/FFO': '21.4x'
    }
  },
  {
    ticker: 'EXR',
    name: 'Extra Space',
    sector: 'Industrial',
    rating: 'HOLD',
    metrics: {
      'Dividend Yield': '4.8%',
      'FFO per Share': '$8.12',
      'Occupancy Rate': '92.4%',
      'Debt/EBITDA': '6.1x',
      'AFFO Payout': '81%',
      'P/FFO': '17.2x'
    }
  },

  // RETAIL REITs - 5 empresas
  {
    ticker: 'SPG',
    name: 'Simon Property',
    sector: 'Retail',
    rating: 'HOLD',
    metrics: {
      'Dividend Yield': '5.8%',
      'FFO per Share': '$11.84',
      'Occupancy Rate': '94.8%',
      'Debt/EBITDA': '6.2x',
      'AFFO Payout': '68%',
      'P/FFO': '12.1x'
    }
  },
  {
    ticker: 'O',
    name: 'Realty Income',
    sector: 'Retail',
    rating: 'BUY',
    metrics: {
      'Dividend Yield': '5.6%',
      'FFO per Share': '$4.08',
      'Occupancy Rate': '98.6%',
      'Debt/EBITDA': '5.4x',
      'AFFO Payout': '76%',
      'P/FFO': '13.8x'
    }
  },
  {
    ticker: 'REG',
    name: 'Regency Centers',
    sector: 'Retail',
    rating: 'HOLD',
    metrics: {
      'Dividend Yield': '4.2%',
      'FFO per Share': '$4.21',
      'Occupancy Rate': '95.2%',
      'Debt/EBITDA': '5.8x',
      'AFFO Payout': '71%',
      'P/FFO': '14.4x'
    }
  },
  {
    ticker: 'FRT',
    name: 'Federal Realty',
    sector: 'Retail',
    rating: 'HOLD',
    metrics: {
      'Dividend Yield': '4.4%',
      'FFO per Share': '$6.48',
      'Occupancy Rate': '93.1%',
      'Debt/EBITDA': '6.4x',
      'AFFO Payout': '68%',
      'P/FFO': '15.2x'
    }
  },
  {
    ticker: 'KIM',
    name: 'Kimco Realty',
    sector: 'Retail',
    rating: 'HOLD',
    metrics: {
      'Dividend Yield': '4.8%',
      'FFO per Share': '$1.62',
      'Occupancy Rate': '96.2%',
      'Debt/EBITDA': '6.1x',
      'AFFO Payout': '74%',
      'P/FFO': '13.1x'
    }
  },

  // OFFICE / SPECIALTY - 5 empresas
  {
    ticker: 'BXP',
    name: 'Boston Properties',
    sector: 'Office',
    rating: 'HOLD',
    metrics: {
      'Dividend Yield': '6.8%',
      'FFO per Share': '$7.24',
      'Occupancy Rate': '88.2%',
      'Debt/EBITDA': '7.2x',
      'AFFO Payout': '68%',
      'P/FFO': '9.1x'
    }
  },
  {
    ticker: 'VTR',
    name: 'Ventas',
    sector: 'Office',
    rating: 'BUY',
    metrics: {
      'Dividend Yield': '3.8%',
      'FFO per Share': '$3.12',
      'Occupancy Rate': '86.4%',
      'Debt/EBITDA': '6.8x',
      'AFFO Payout': '78%',
      'P/FFO': '14.8x'
    }
  },
  {
    ticker: 'WELL',
    name: 'Welltower',
    sector: 'Office',
    rating: 'BUY',
    metrics: {
      'Dividend Yield': '2.8%',
      'FFO per Share': '$3.84',
      'Occupancy Rate': '82.1%',
      'Debt/EBITDA': '6.1x',
      'AFFO Payout': '71%',
      'P/FFO': '22.4x'
    }
  },
  {
    ticker: 'PEAK',
    name: 'Healthpeak',
    sector: 'Office',
    rating: 'HOLD',
    metrics: {
      'Dividend Yield': '6.2%',
      'FFO per Share': '$1.72',
      'Occupancy Rate': '88.8%',
      'Debt/EBITDA': '6.4x',
      'AFFO Payout': '84%',
      'P/FFO': '11.2x'
    }
  },
  {
    ticker: 'HST',
    name: 'Host Hotels',
    sector: 'Office',
    rating: 'HOLD',
    metrics: {
      'Dividend Yield': '3.4%',
      'FFO per Share': '$1.88',
      'Occupancy Rate': '72.4%',
      'Debt/EBITDA': '4.8x',
      'AFFO Payout': '58%',
      'P/FFO': '9.8x'
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
    'Residential': '#3b82f6',
    'Industrial': '#a855f7',
    'Retail': '#22c55e',
    'Office': '#f97316'
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

export default function REITsRadar() {
  return (
    <div style={{backgroundColor: '#111827', minHeight: '100vh', padding: '24px'}}>
      <div style={{maxWidth: '1280px', margin: '0 auto'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
          {reitsStocks.map(stock => (
            <StockCard key={stock.ticker} stock={stock} />
          ))}
        </div>
      </div>
    </div>
  )
}