// frontend/src/components/Terminal/Terminal.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalLine {
  type: 'command' | 'output';
  content: string;
  highlight?: boolean;
}

interface TerminalProps {
  lines: TerminalLine[];
  className?: string;
  autoType?: boolean;
  typeSpeed?: number;
}

const Terminal: React.FC<TerminalProps> = ({ 
  lines, 
  className = '', 
  autoType = false, 
  typeSpeed = 50 
}) => {
  const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!autoType) {
      setDisplayedLines(lines);
      return;
    }

    if (currentLineIndex < lines.length) {
      const currentLine = lines[currentLineIndex];
      const targetLength = currentLine.content.length;

      if (currentCharIndex <= targetLength) {
        const timer = setTimeout(() => {
          const newLine: TerminalLine = {
            ...currentLine,
            content: currentLine.content.substring(0, currentCharIndex)
          };

          setDisplayedLines(prev => {
            const newLines = [...prev];
            newLines[currentLineIndex] = newLine;
            return newLines;
          });

          setCurrentCharIndex(prev => prev + 1);
        }, typeSpeed);

        return () => clearTimeout(timer);
      } else {
        // Move to next line
        setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 500);
      }
    }
  }, [lines, autoType, typeSpeed, currentLineIndex, currentCharIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-black/90 border-2 border-primary rounded-lg p-6 font-mono text-sm ${className}`}
      style={{
        boxShadow: '0 0 40px rgba(255, 107, 53, 0.5)',
      }}
    >
      {/* Terminal Header */}
      <div className="flex gap-2 mb-6 pb-4 border-b border-gray-600">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      {/* Terminal Content */}
      <div className="space-y-2">
        {displayedLines.map((line, index) => (
          <div key={index}>
            {line.type === 'command' ? (
              <div className="flex items-center">
                <span className="text-accent mr-2">miranda@startup:~$</span>
                <span className="text-success">{line.content}</span>
              </div>
            ) : (
              <div className="pl-8">
                <span 
                  className={line.highlight ? 'text-primary font-bold' : 'text-light'}
                  dangerouslySetInnerHTML={{ __html: line.content }}
                />
              </div>
            )}
          </div>
        ))}
        
        {/* Cursor */}
        {autoType && currentLineIndex < lines.length && (
          <div className="flex items-center">
            <span className="text-accent mr-2">miranda@startup:~$</span>
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} bg-light`}>█</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Terminal;
