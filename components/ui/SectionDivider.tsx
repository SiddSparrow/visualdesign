// components/ui/SectionDivider.tsx
'use client'

interface SectionDividerProps {
  type?: 'wave' | 'wave-inverted' | 'curve' | 'slope' | 'triangle'
  toColor?: string
  fromColor?: string
  className?: string
  background?: string
  height?: 'sm' | 'md' | 'lg' | 'xl'
  flip?: boolean
}

export default function SectionDivider({
  type = 'wave',
  toColor = '#ffffff',
  fromColor = 'transparent',
  className = '',
  height = 'md',
  flip = false,
  background = 'transparent'
}: SectionDividerProps) {

  const heightClasses = {
    sm: 'h-12 md:h-16',
    md: 'h-20 md:h-24',
    lg: 'h-28 md:h-32',
    xl: 'h-36 md:h-40'
  }
  
  const viewBox = {
    sm: '0 0 1200 120',
    md: '0 0 1200 200',
    lg: '0 0 1200 280',
    xl: '0 0 1200 360'
  }[height]
  
  // Cores com fallback para transparent
  const safeToColor = toColor || '#ffffff'
  const safeFromColor = fromColor || 'transparent'
  
  const getWavePath = () => {
    switch(type) {
      case 'wave':
        return "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
      
      case 'wave-inverted':
        return "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,192C960,181,1056,171,1152,165.3C1248,160,1344,160,1392,160L1440,160L1440,0L0,0Z"
      
      case 'curve':
        return "M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,250.7C1120,256,1280,224,1360,208L1440,192L1440,320L0,320Z"
      
      case 'slope':
        return "M0,192L120,176C240,160,480,128,720,138.7C960,149,1200,203,1320,229.3L1440,256L1440,320L0,320Z"
      
      case 'triangle':
        return "M0,320L120,293.3C240,267,480,213,720,213.3C960,213,1200,267,1320,293.3L1440,320L1440,320L0,320Z"
      
      default:
        return "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
    }
  }
  
  const renderDivider = () => {
    const pathData = getWavePath()
    const transform = flip ? 'scale(1, -1)' : ''
    
    return (
      <svg 
        className={`w-full ${heightClasses[height]} ${className}`}
        viewBox={viewBox}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{backgroundColor:background}}
      >
        {/* Gradiente suave */}
        <defs>
          <linearGradient id={`gradient-${type}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={safeFromColor} />
            <stop offset="100%" stopColor={safeToColor} />
          </linearGradient>
        </defs>
        
        {/* Caminho da onda com gradiente */}
        <path 
          d={pathData}
          fill={`url(#gradient-${type})`}
          transform={transform}
        />
        
        {/* Segunda onda sutil para profundidade */}
        {type === 'wave' && (
          <path 
            d="M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,186.7C840,192,960,160,1080,154.7C1200,149,1320,171,1380,181.3L1440,192L1440,320L0,320Z"
            fill={safeToColor}
            fillOpacity="0.1"
            transform={transform}
          />
        )}
      </svg>
    )
  }
  
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {renderDivider()}
    </div>
  )
}