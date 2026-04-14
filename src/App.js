import React, { useState, useEffect } from 'react'
import { BankRadar } from './BankRadar'
import HealthRadar from './HealthRadar'
import TechRadar from './TechRadar'
import RetailRadar from './RetailRadar'
import REITsRadar from './REITsRadar'
import { EnergyRadar } from './EnergyRadar'

function MarketBar() {
  const [data, setData] = useState({
    fearGreed: { value: 38, label: 'Fear' },
    vix: 21.34,
    loading: true,
    error: false,
    lastUpdate: null
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fgRes = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://production.dataviz.cnn.io/index/fearandgreed/graphdata'))
        const fgWrapper = await fgRes.json()
        const fgData = JSON.parse(fgWrapper.contents)
        const fgScore = Math.round(fgData.fear_and_greed.score)
        const fgRating = fgData.fear_and_greed.rating

        const vixRes = await fetch('https://query1.finance.yahoo.com/v8/finance/chart/%5EVIX')
        const vixData = await vixRes.json()
        const vixValue = vixData.chart.result[0].meta.regularMarketPrice.toFixed(2)

        setData({
          fearGreed: { value: fgScore, label: fgRating },
          vix: parseFloat(vixValue),
          loading: false,
          error: false,
          lastUpdate: new Date()
        })
      } catch (err) {
        console.error('Erro ao buscar dados:', err)
        setData(prev => ({...prev, loading: false, error: true }))
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 300000)
    return () => clearInterval(interval)
  }, [])

  const getFgColor = (val) => {
    if (val < 25) return '#ef4444'
    if (val < 45) return '#f97316'
    if (val < 55) return '#eab308'
    if (val < 75) return '#84cc16'
    return '#22c55e'
  }

  const getTimeSince = () => {
    if (!data.lastUpdate) return ''
    const mins = Math.floor((new Date() - data.lastUpdate) / 60000)
    return mins === 0? 'agora' : `há ${mins} min`
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white',
      padding: '16px 20px',
      borderBottom: '1px solid rgba(59, 130, 246, 0.3)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        gap: '40px',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>
        <div style={{display: 'flex', alignItems: 'center', gap: '48px'}}>
          {/* Logo + Nome */}
          <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
            <div style={{
              width: '36px',
              height: '36px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
            </div>
            <div>
              <div style={{
                fontSize: '20px',
                fontWeight: '800',
                letterSpacing: '-0.5px',
                background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: '1'
              }}>
                StockRadar
              </div>
              <div style={{fontSize: '10px', opacity: 0.5, letterSpacing: '1px', marginTop: '2px'}}>
                MARKET INTEL
              </div>
            </div>
          </div>

          {/* Separador */}
          <div style={{width: '1px', height: '40px', backgroundColor: 'rgba(255,255,255,0.1)'}} />

          {/* Métricas */}
          <div style={{display: 'flex', gap: '32px', alignItems: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: getFgColor(data.fearGreed.value),
                boxShadow: `0 0 12px ${getFgColor(data.fearGreed.value)}`,
                animation: data.loading? 'pulse 2s infinite' : 'none'
              }} />
              <div>
                <div style={{fontSize: '10px', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.5px'}}>Fear & Greed</div>
                <div style={{fontWeight: '700', color: getFgColor(data.fearGreed.value), fontSize: '18px', lineHeight: '1.2'}}>
                  {data.loading? '...' : `${data.fearGreed.value} · ${data.fearGreed.label}`}
                </div>
              </div>
            </div>

            <div style={{width: '1px', height: '32px', backgroundColor: 'rgba(255,255,255,0.1)'}} />

            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: data.vix > 20? '#f87171' : '#34d399',
                boxShadow: `0 0 12px ${data.vix > 20? '#f87171' : '#34d399'}`
              }} />
              <div>
                <div style={{fontSize: '10px', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.5px'}}>VIX</div>
                <div style={{fontWeight: '700', color: data.vix > 20? '#f87171' : '#34d399', fontSize: '18px', lineHeight: '1.2'}}>
                  {data.loading? '...' : data.vix}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{fontSize: '11px', opacity: 0.5}}>
          {data.error? '⚠️ Offline' : data.loading? 'A atualizar...' : `Atualizado ${getTimeSince()}`}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState('bank')

  const tabs = [
    { id: 'bank', label: 'Bank' },
    { id: 'health', label: 'Health' },
    { id: 'tech', label: 'Tech' },
    { id: 'retail', label: 'Retail' },
    { id: 'reits', label: 'REITs' },
    { id: 'energy', label: 'Energy' }
  ]

  return (
    <div style={{minHeight: '100vh', backgroundColor: '#0f172a'}}>
      <MarketBar />

      <div style={{
        backgroundColor: '#1e293b',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 20px'}}>
          <div style={{
            display: 'flex',
            gap: '4px',
            overflowX: 'auto',
            padding: '12px 0'
          }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '14px',
                  whiteSpace: 'nowrap',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: activeTab === tab.id
                ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
                    : 'rgba(255,255,255,0.05)',
                  color: activeTab === tab.id? 'white' : '#94a3b8',
                  boxShadow: activeTab === tab.id? '0 4px 12px rgba(59, 130, 246, 0.4)' : 'none',
                  transform: activeTab === tab.id? 'translateY(-1px)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (activeTab!== tab.id) e.target.style.background = 'rgba(255,255,255,0.08)'
                }}
                onMouseLeave={(e) => {
                  if (activeTab!== tab.id) e.target.style.background = 'rgba(255,255,255,0.05)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeTab === 'bank' && <BankRadar />}
      {activeTab === 'health' && <HealthRadar />}
      {activeTab === 'tech' && <TechRadar />}
      {activeTab === 'retail' && <RetailRadar />}
      {activeTab === 'reits' && <REITsRadar />}
      {activeTab === 'energy' && <EnergyRadar />}
    </div>
  )
}