'use client'

import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

export default function CryptoQRGenerator() {
  const [bitcoinAddress, setBitcoinAddress] = useState('')
  const [ethereumAddress, setEthereumAddress] = useState('')
  const [polkadotAddress, setPolkadotAddress] = useState('')

  const inputStyle = "w-full p-2 border rounded-md"
  const cardStyle = "bg-white shadow-md rounded-lg p-6 mb-6"
  const titleStyle = "text-xl font-bold mb-2"
  const labelStyle = "block mb-2 text-sm font-medium text-gray-700"

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Crypto Wallet QR Code Generator</h1>
      
      <div className={cardStyle}>
        <h2 className={titleStyle}>Bitcoin</h2>
        <label className={labelStyle} htmlFor="bitcoin">Bitcoin Address</label>
        <input
          id="bitcoin"
          className={inputStyle}
          placeholder="Enter Bitcoin address"
          value={bitcoinAddress}
          onChange={(e) => setBitcoinAddress(e.target.value)}
        />
        {bitcoinAddress && (
          <div className="mt-4 flex justify-center">
            <QRCodeSVG 
              value={bitcoinAddress} 
              size={200}
              bgColor="#ffffff"
              fgColor="#10352b"
              includeMargin={true}
            />
          </div>
        )}
      </div>

      <div className={cardStyle}>
        <h2 className={titleStyle}>Ethereum/Polygon</h2>
        <label className={labelStyle} htmlFor="ethereum">Ethereum/Polygon Address</label>
        <input
          id="ethereum"
          className={inputStyle}
          placeholder="Enter Ethereum or Polygon address"
          value={ethereumAddress}
          onChange={(e) => setEthereumAddress(e.target.value)}
        />
        {ethereumAddress && (
          <div className="mt-4 flex justify-center">
            <QRCodeSVG 
              value={ethereumAddress} 
              size={200}
              bgColor="#ffffff"
              fgColor="#10352b"
              includeMargin={true}
            />
          </div>
        )}
      </div>

      <div className={cardStyle}>
        <h2 className={titleStyle}>Polkadot/Kusama</h2>
        <label className={labelStyle} htmlFor="polkadot">Polkadot/Kusama Address</label>
        <input
          id="polkadot"
          className={inputStyle}
          placeholder="Enter Polkadot or Kusama address"
          value={polkadotAddress}
          onChange={(e) => setPolkadotAddress(e.target.value)}
        />
        {polkadotAddress && (
          <div className="mt-4 flex justify-center">
            <QRCodeSVG 
              value={polkadotAddress} 
              size={200}
              bgColor="#ffffff"
              fgColor="#10352b"
              includeMargin={true}
            />
          </div>
        )}
      </div>
    </div>
  )
}
