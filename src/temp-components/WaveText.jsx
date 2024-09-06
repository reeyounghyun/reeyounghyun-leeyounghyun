import React from 'react';

//텍스트 애니메이션
const WaveText = ({ text, direction = 'vertical' }) => {
  const getAnimationStyle = () => {
    if (direction === 'slide') {
      return {
        display: 'inline-block',
        whiteSpace: 'nowrap',
      //   animation: 'slide-left-to-right infinite',
         animation: '50s linear(0 0%, 0 2.27%, 0.02 4.53%, 0.04 6.8%, 0.06 9.07%, 0.1 11.33%, 0.14 13.6%, 0.25 18.15%, 0.39 22.7%, 0.56 27.25%, 0.77 31.8%, 1 36.35%, 0.89 40.9%, 0.85 43.18%, 0.81 45.45%, 0.79 47.72%, 0.77 50%, 0.75 52.27%, 0.75 54.55%, 0.75 56.82%, 0.77 59.1%, 0.79 61.38%, 0.81 63.65%, 0.85 65.93%, 0.89 68.2%, 1 72.7%, 0.97 74.98%, 0.95 77.25%, 0.94 79.53%, 0.94 81.8%, 0.94 84.08%, 0.95 86.35%, 0.97 88.63%, 1 90.9%, 0.99 93.18%, 0.98 95.45%, 0.99 97.73%, 1 100%) 0s infinite normal none running slide-left-to-right'
        
      };
    }

    // 기존의 다른 애니메이션 스타일들...
    const baseStyle = {
      display: 'inline-block',
      animation: '2s infinite',
    };

    switch(direction) {
      case 'horizontal':
        return { ...baseStyle, animationName: 'wave-horizontal' };
      case 'diagonal':
        return { ...baseStyle, animationName: 'wave-diagonal' };
      case 'circular':
        return { ...baseStyle, animationName: 'wave-circular', animationDuration: '4s', animationTimingFunction: 'linear' };
      default:
        return { ...baseStyle, animationName: 'wave-vertical' };
    }
  };

  if (direction === 'slide') {
    return (
      <div style={{ overflow: 'hidden', width: '100%' }}>
        <div 
         style={getAnimationStyle()} 
         className="inline-block text-2xl font-bold shadow-sm mv-text whitespace-nowrap animate-slide-left-to-right">
          {text}&nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;{text}
        </div>
      </div>
    );
  }

  return (
    <div>
      {text.split('').map((char, index) => (
        <span
            key={index}
            className={`inline-block
            ${direction === 'horizontal' ? 'animate-bounce' : 'animate-pulse'}`}
            style={{
               ...getAnimationStyle(),
               animationDelay: `${index * 0.1}s`
            }}

        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default WaveText;