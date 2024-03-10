import './codeBlock.css';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { 
  coy,
  dark,
  funky,
  okaidia,
  solarizedlight,
  tomorrow,
  twilight,
  prism,
  a11yDark,
  atomDark,
  base16AteliersulphurpoolLight,
  cb,
  coldarkCold,
  coldarkDark,
  darcula,
  dracula,
  duotoneDark,
  duotoneEarth,
  duotoneForest,
  duotoneLight,
  duotoneSea,
  duotoneSpace,
  ghcolors,
  gruvboxDark,
  gruvboxLight,
  hopscotch,
  materialDark,
  materialLight,
  materialOceanic,
  nord,
  oneDark,
  oneLight,
  pojoaque,
  shadesOfPurple,
  synthwave84,
  vs,
  vscDarkPlus,
  xonokai,
} from 'react-syntax-highlighter/dist/esm/styles/prism';


interface CodeBlockProps {
  language: string | undefined;
  children: string;
}

function CodeBlock({ language, children }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = (): void => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const codeBlockStyle = {
    borderRadius: '8px',
    fontSize: '1.0rem',
    margin: 'auto auto 3px auto',
  };

  const codeBlockButtonStyle = {
    margin: 'auto auto 3px auto',
  };

  const lang = language ? language : 'bash';

  return (
    <div className="CodeBlock">
      <label className="LanguageLabel">{lang}</label>
      <CopyToClipboard text={children} onCopy={handleCopy}>
        <button style={codeBlockButtonStyle}>{isCopied ? 'Copied!' : 'Copy'}</button>
      </CopyToClipboard>
      <SyntaxHighlighter language={lang} style={materialDark} customStyle={codeBlockStyle}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;