'use client'

import { Suspense, lazy, useState } from 'react'
import { motion } from "framer-motion"

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-3xl">
          <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="w-full h-full"
      >
        <Spline
          scene={scene}
          className={className}
          onLoad={() => {
            setIsLoading(false);
          }}
        />
      </motion.div>
    </Suspense>
  )
}
