import Spline from '@splinetool/react-spline';
import React, { useState } from 'react'

const Playground = () => {
  const [loading, setLoading] = useState(true);

  return (
      <>
        {loading && <div>Loading....</div>}
        <div className="w-full fixed left-0 right-0 bottom-0 top-0">
          <Spline onLoad={() => {
            setTimeout(() => {
              setLoading(false)
            }, 1000)
          }} scene="https://prod.spline.design/mtpnyKMdEtYOpwXE/scene.splinecode" />
        </div>
      </>
    )
}

export default Playground