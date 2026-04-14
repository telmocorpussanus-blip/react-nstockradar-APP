import React from 'react'

const retailStocks = [
  // E-COMMERCE - 5 empresas
  {
    ticker: 'AMZN',
    name: 'Amazon',
    sector: 'E-commerce',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '11.4%',
      'Online % Sales': '82%',
      'Gross Margin': '48.2%',
      'FCF Margin': '6.4%',
      'Inventory Turnover': '8.2x'
    }
  },
  {
    ticker: 'MELI',
    name: 'MercadoLibre',
    sector: 'E-commerce',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '36.8%',
      'Online % Sales': '100%',
      'Gross Margin': '52.1%',
      'FCF Margin': '18.4%',
      'Inventory Turnover': '12.1x'
    }
  },
  {
    ticker: 'SHOP',
    name: 'Shopify',
    sector: 'E-commerce',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '21.2%',
      'Online % Sales': '100%',
      'Gross Margin': '51.8%',
      'FCF Margin': '14.2%',
      'Inventory Turnover': 'N/A'
    }
  },
  {
    ticker: 'SE',
    name: 'Sea Limited',
    sector: 'E-commerce',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '28.4%',
      'Online % Sales': '95%',
      'Gross Margin': '44.2%',
      'FCF Margin': '8.1%',
      'Inventory Turnover': '6.4x'
    }
  },
  {
    ticker: 'JD',
    name: 'JD.com',
    sector: 'E-commerce',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '3.2%',
      'Online % Sales': '100%',
      'Gross Margin': '14.8%',
      'FCF Margin': '2.1%',
      'Inventory Turnover': '9.8x'
    }
  },

  // APPAREL / FASHION - 5 empresas
  {
    ticker: 'LVMUY',
    name: 'LVMH',
    sector: 'Apparel',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '8.8%',
      'Same-Store Sales': '6.2%',
      'Gross Margin': '68.4%',
      'Online % Sales': '12%',
      'FCF Margin': '18.8%'
    }
  },
  {
    ticker: 'NKE',
    name: 'Nike',
    sector: 'Apparel',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '1.2%',
      'Same-Store Sales': '-2.1%',
      'Gross Margin': '44.1%',
      'Online % Sales': '28%',
      'FCF Margin': '8.4%'
    }
  },
  {
    ticker: 'TPR',
    name: 'Tapestry',
    sector: 'Apparel',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '4.8%',
      'Same-Store Sales': '3.1%',
      'Gross Margin': '72.8%',
      'Online % Sales': '22%',
      'FCF Margin': '14.2%'
    }
  },
  {
    ticker: 'RL',
    name: 'Ralph Lauren',
    sector: 'Apparel',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '3.1%',
      'Same-Store Sales': '2.4%',
      'Gross Margin': '65.2%',
      'Online % Sales': '18%',
      'FCF Margin': '10.8%'
    }
  },
  {
    ticker: 'LULU',
    name: 'Lululemon',
    sector: 'Apparel',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '18.2%',
      'Same-Store Sales': '12.4%',
      'Gross Margin': '58.4%',
      'Online % Sales': '42%',
      'FCF Margin': '16.4%'
    }
  },

  // BIG BOX / DEPARTMENT - 5 empresas
  {
    ticker: 'WMT',
    name: 'Walmart',
    sector: 'Big Box',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '6.1%',
      'Same-Store Sales': '4.2%',
      'Gross Margin': '24.8%',
      'Online % Sales': '18%',
      'FCF Margin': '4.1%'
    }
  },
  {
    ticker: 'TGT',
    name: 'Target',
    sector: 'Big Box',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '2.8%',
      'Same-Store Sales': '1.8%',
      'Gross Margin': '28.4%',
      'Online % Sales': '21%',
      'FCF Margin': '3.2%'
    }
  },
  {
    ticker: 'COST',
    name: 'Costco',
    sector: 'Big Box',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '9.2%',
      'Same-Store Sales': '7.1%',
      'Gross Margin': '12.4%',
      'Online % Sales': '8%',
      'FCF Margin': '2.8%'
    }
  },
  {
    ticker: 'HD',
    name: 'Home Depot',
    sector: 'Big Box',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '0.8%',
      'Same-Store Sales': '-1.2%',
      'Gross Margin': '33.8%',
      'Online % Sales': '15%',
      'FCF Margin': '9.8%'
    }
  },
  {
    ticker: 'LOW',
    name: 'Lowe\'s',
    sector: 'Big Box',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '-1.2%',
      'Same-Store Sales': '-2.4%',
      'Gross Margin': '33.1%',
      'Online % Sales': '12%',
      'FCF Margin': '8.4%'
    }
  },

  // SPECIALTY / OFF-PRICE - 5 empresas
  {
    ticker: 'TJX',
    name: 'TJX Companies',
    sector: 'Specialty',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '6.4%',
      'Same-Store Sales': '5.2%',
      'Gross Margin': '30.1%',
      'Online % Sales': '3%',
      'FCF Margin': '7.8%'
    }
  },
  {
    ticker: 'ROST',
    name: 'Ross Stores',
    sector: 'Specialty',
    rating: 'BUY',
    metrics: {
      'Revenue Growth': '8.1%',
      'Same-Store Sales': '6.8%',
      'Gross Margin': '28.4%',
      'Online % Sales': '1%',
      'FCF Margin': '9.2%'
    }
  },
  {
    ticker: 'ULTA',
    name: 'Ulta Beauty',
    sector: 'Specialty',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '4.2%',
      'Same-Store Sales': '2.1%',
      'Gross Margin': '39.8%',
      'Online % Sales': '32%',
      'FCF Margin': '11.4%'
    }
  },
  {
    ticker: 'DKS',
    name: 'Dick\'s Sporting',
    sector: 'Specialty',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '2.8%',
      'Same-Store Sales': '1.4%',
      'Gross Margin': '34.2%',
      'Online % Sales': '28%',
      'FCF Margin': '6.8%'
    }
  },
  {
    ticker: 'BBY',
    name: 'Best Buy',
    sector: 'Specialty',
    rating: 'HOLD',
    metrics: {
      'Revenue Growth': '-3.1%',
      'Same-Store Sales': '-4.2%',
      'Gross Margin': '22.8%',
      'Online % Sales': '34%',
      'FCF Margin': '3.4%'
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
    'E-commerce': '#3b82f6',
    'Apparel': '#a855f7',
    'Big Box': '#22c55e',
    'Specialty': '#f97316'
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

export default function RetailRadar() {
  return (
    <div style={{backgroundColor: '#111827', minHeight: '100vh', padding: '24px'}}>
      <div style={{maxWidth: '1280px', margin: '0 auto'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
          {retailStocks.map(stock => (
            <StockCard key={stock.ticker} stock={stock} />
          ))}
        </div>
      </div>
    </div>
  )
}