import React from 'react'

const bankStocks = [
  {
    ticker: 'JPM',
    name: 'JPMorgan Chase',
    rating: 'BUY',
    metrics: {
      'Net Interest Margin': '3.5%',
      'CET1 Ratio': '14.2%',
      'Return on Assets': '1.3%',
      'NPL Ratio': '0.6%',
      'Loan Growth': '5.2%'
    }
  },
  {
    ticker: 'BAC',
    name: 'Bank of America',
    rating: 'HOLD',
    metrics: {
      'Net Interest Margin': '2.9%',
      'CET1 Ratio': '11.8%',
      'Return on Assets': '0.9%',
      'NPL Ratio': '0.8%',
      'Loan Growth': '3.1%'
    }
  },
  {
    ticker: 'WFC',
    name: 'Wells Fargo',
    rating: 'BUY',
    metrics: {
      'Net Interest Margin': '3.1%',
      'CET1 Ratio': '12.5%',
      'Return on Assets': '1.1%',
      'NPL Ratio': '0.7%',
      'Loan Growth': '2.8%'
    }
  },
  {
    ticker: 'C',
    name: 'Citigroup',
    rating: 'HOLD',
    metrics: {
      'Net Interest Margin': '2.7%',
      'CET1 Ratio': '13.1%',
      'Return on Assets': '0.7%',
      'NPL Ratio': '0.9%',
      'Loan Growth': '1.9%'
    }
  }
]

function StockCard({ stock }) {
  const ratingColor = {
    BUY: '#22c55e',
    HOLD: '#eab308',
    SELL: '#ef4444'
  }

  return (
    <div style={{
      backgroundColor: '#1f2937',
      borderRadius: '12px',
      padding: '20px',
      borderTop: `3px solid ${ratingColor[stock.rating]}`,
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
    }}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px'}}>
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

export function BankRadar() {
  return (
    <div style={{backgroundColor: '#111827', minHeight: '100vh', padding: '24px'}}>
      <div style={{maxWidth: '1280px', margin: '0 auto'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
          {bankStocks.map(stock => (
            <StockCard key={stock.ticker} stock={stock} />
          ))}
        </div>
      </div>
    </div>
  )
}