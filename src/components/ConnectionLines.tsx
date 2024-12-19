import React from 'react';
import { FUNCTION_CONNECTIONS } from '../constant/constant';
import useStore from '../store/store';
import { StoreType, Point } from '../types/chainCalculator';

const ConnectionLines: React.FC = () => {
  const {cardPositions} = useStore((state: StoreType) => state)

  // generating path based on starting and ending points
  const getSVGPath = (start: Point, end: Point) => {
    const midX = (start.x + end.x) / 2 - 10;
    const curveY = start.y - 50;
    return `M ${start.x} ${start.y} C ${start.x} ${start.y} ${midX} ${curveY} ${end.x} ${end.y}`;
  };

  // taking the card number and setting the start and end point (x,y) needed to make a connecting line;
  const getConnectionPoints = (fromId: number, toId: number): [Point, Point] => {
    const fromRect = cardPositions[fromId];
    const toRect = cardPositions[toId];

    if (!fromRect || !toRect) return [{ x: 0, y: 0 }, { x: 0, y: 0 }];
    
    const start: Point = {
      x: fromId === 0 ? fromRect.right - 25 : fromRect.right - 28,
      y: fromId === 0 ? fromRect.top + 52 : fromRect.top + 235,
    };

    const end: Point = {
      x: toId === 6 ? toRect.left + 25 : toRect.left + 28,
      y: toId === 6 ? toRect.top + 52 : toRect.top + 235,
    };

    return [start, end];
  };

  return (
    // rendering the svg to cover the whole page so that we can make connecting line anywhere on the page
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-50">
      {FUNCTION_CONNECTIONS.map(([fromId, toId]) => {
        const [start, end] = getConnectionPoints(fromId, toId);
        const path = getSVGPath(start, end);
        return (
          <path
            key={`${fromId}-${toId}`}
            d={path}
            fill="none"
            stroke="#0066FF4F"
            strokeWidth="7"
          />
        );
      })}
    </svg>
  );
};

export default ConnectionLines;
