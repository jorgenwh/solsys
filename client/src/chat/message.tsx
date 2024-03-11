import './message.css';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './codeBlock';
import { BlockMath, InlineMath } from 'react-katex';


interface MessageProps {
  isOwn: boolean;
  label: string;
  content: string;
}

interface ContentBlock {
  type: 'code' | 'text' | 'inlineMath' | 'blockMath';
  language?: string;
  content: string;
}

const parseCodeAndText = (input: string): ContentBlock[] => {
  const blocks: ContentBlock[] = [];
  const pattern = /```(\w+)?\n*([\s\S]*?)\n*```|([^`]+)/g;

  let match;
  while ((match = pattern.exec(input)) !== null) {
    const [, language, code, text] = match;
    if (code) {
      blocks.push({ type: 'code', language: language, content: code });
    } else if (text) {
      let currentIndex = 0;
      const inlineMathPatterns = [/\$(.*?)\$/g, /\\\((.*?)\\\)/g];
      let result;

      inlineMathPatterns.forEach(pattern => {
        while ((result = pattern.exec(text)) !== null) {
          const [match, mathContent] = result;
          const startIndex = result.index;
          const endIndex = pattern.lastIndex;

          // Push preceding text if exists
          if (startIndex > currentIndex) {
            const precedingText = text.substring(currentIndex, startIndex);
            if (precedingText.trim() !== '') {
              blocks.push({ type: 'text', content: precedingText });
            }
          }

          // Push inline math
          blocks.push({ type: 'inlineMath', content: mathContent });

          currentIndex = endIndex;
        }
        // Reset lastIndex for the next pattern
        pattern.lastIndex = 0;
      });

      // Push remaining text if any
      if (currentIndex < text.length) {
        const remainingText = text.substring(currentIndex);
        if (remainingText.trim() !== '') {
          blocks.push({ type: 'text', content: remainingText });
        }
      }
    }
  }

  return blocks;
}

const buildMessageComponent = (block: ContentBlock) => {
  if (block.type === 'code') {
    return (
      <CodeBlock language={block.language}>{block.content}</CodeBlock>
    );
  }
  else if (block.type === 'text') {
    return (
      <div className="Message-text"><ReactMarkdown className="Message-text-mk">{block.content}</ReactMarkdown></div>
    );
  }
  /*else if (block.type === 'inlineMath') {
    return (
      <p>
        <InlineMath math={block.content} />
      </p>
    );
  }*/
  return (
    <div className="Message-text"><ReactMarkdown className="Message-text-mk">{block.content}</ReactMarkdown></div>
  );
}

function Message({ isOwn, label, content }: MessageProps) {
  const blocks = parseCodeAndText(content);

  return (
    <div className={`Message ${isOwn ? 'is-own' : ''}`}>
      <div className="Message-label">{isOwn ? 'YOU' : label}</div>
      {blocks.map((block) => buildMessageComponent(block))}
    </div>
  );
}

export default Message;