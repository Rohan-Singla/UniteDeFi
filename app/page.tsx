'use client'

import { useEvmWallet } from '@/modules/ethWallet'
import { useSuiWallet } from '@/modules/suiWallet'
import { ConnectButton } from '@suiet/wallet-kit'
import { useEffect, useState } from 'react'

export default function Home() {
  const { address: evmAddress, authenticated, login, logout } = useEvmWallet()
  const { name, address: suiAddress, publicKey, connected, disconnect } = useSuiWallet()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!connected) return
    console.log('🔗 Connected Sui Wallet:', {
      name,
      address: suiAddress,
      publicKey,
    })
  }, [connected])

  if (!mounted) return null // prevents hydration mismatch

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ConnectButton style={{ marginRight: '10px' }} />
        {connected && (
          <span style={{ fontSize: 12, color: '#888' }}>
            {suiAddress?.slice(0, 6)}...{suiAddress?.slice(-4)}
          </span>
        )}
      </div>

      {authenticated && <button onClick={logout}>Logout EVM</button>}
      {connected && <button onClick={disconnect}>Logout SUI</button>}

      <button
        onClick={() => !authenticated && login()}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
        }}
      >
        {authenticated
          ? `EVM: ${evmAddress?.slice(0, 6)}...${evmAddress?.slice(-4)}`
          : 'Connect EVM Wallet'}
      </button>
    </header>
  )
}
