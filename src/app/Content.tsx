'use client'

import { useState } from "react";

const OddLabel = () => {
  // any arbitrary react hook
  useState('foo');

  return (
    <div>this number is odd</div>
  );
}

export const Content = () => {
  const [leftCounter, setLeftCounter] = useState(0);
  const [rightCounter, setRightCounter] = useState(0);

  return (
    <div className="flex gap-6">
      <div className="flex w-80 h-60 flex-col gap-2 items-center p-8 bg-blue-400">
        <div className="text-center">{"Component invoked with <OddLabel />"}</div>
        <div>{leftCounter}</div>
        <button
          className="w-8 h-8 bg-blue-600 rounded-lg"
          onClick={() => setLeftCounter(leftCounter + 1)}
        >+</button>
        {leftCounter % 2 === 1 ? <OddLabel /> : null}
      </div>
      <div className="flex w-80 h-60 flex-col gap-2 items-center p-8 bg-red-400">
        <div className="text-center">{"Component invoked with OddLabel()"}</div>
        <div>{rightCounter}</div>
        <button
          className="w-8 h-8 bg-red-600 rounded-lg"
          onClick={() => setRightCounter(rightCounter + 1)}
        >+</button>
        {rightCounter % 2 === 1 ? OddLabel() : null}
      </div>
    </div>
  )
}
