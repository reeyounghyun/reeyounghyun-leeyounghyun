import React, { useRef, useEffect } from 'react';
import './App.css'; // Tailwind CSS가 포함된 파일

const HorizontalScroll = () => {
  const containerRef = useRef(null);

  // 마우스 휠로 수평 스크롤 기능 추가
  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        container.scrollLeft += e.deltaY; // 마우스 휠로 수평 스크롤
      }
    };

    container.addEventListener('wheel', handleWheel);

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-auto bg-black text-white" ref={containerRef}>
      <div className="flex space-x-8 h-full">
        {/* 첫 번째 큰 ul */}
        <ul className="flex space-x-4 w-[200%] min-w-[769px]">
          <li className="w-1/4 h-full bg-gray-500">Item 1</li>
          <li className="w-1/4 h-full bg-gray-600">Item 2</li>
          <li className="w-1/4 h-full bg-gray-700">Item 3</li>
          <li className="w-1/4 h-full bg-gray-800">Item 4</li>
        </ul>

        {/* 두 번째 큰 ul */}
        <ul className="flex space-x-4 w-[200%] min-w-[769px]">
          <li className="w-1/4 h-full bg-gray-500">Item 5</li>
          <li className="w-1/4 h-full bg-gray-600">Item 6</li>
          <li className="w-1/4 h-full bg-gray-700">Item 7</li>
          <li className="w-1/4 h-full bg-gray-800">Item 8</li>
        </ul>
      </div>
    </div>
  );
};

export default HorizontalScroll;
