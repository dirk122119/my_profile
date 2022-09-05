import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, CardTitle, CardHeader } from 'reactstrap';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';


export const QA=[
    {
        question:"兩百字內的個人簡介。",
        answer:<h1>q1q1q1q1q111111111</h1>
    },
    
    {
        question:"其他想要對我們說的事情？",
        answer:<h1>q3q3q3q3q3333333</h1>
    },
];

const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};


function CollapseCard(props) {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState('Closed');

  const onEntering = () => setStatus('Opening...');
  const onEntered = () => setStatus('Opened');
  const onExiting = () => setStatus('Closing...');
  const onExited = () => setStatus('Closed');
  const toggle = () => setCollapse(!collapse);

 
  return (
    <div>
      <Card>
      <CardHeader >
      <h4>{props.question}</h4>
        <div class="toggle-btn" onClick={toggle}>
        {collapse?<i class="bi bi-arrow-down-square-fill"></i>:<i class="bi bi-arrow-up-square-fill"></i>}
      </div>
      </CardHeader> 

      <Collapse
        isOpen={!collapse}
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
      >
        
        <CardBody>
        <ReactMarkdown children={props.answer.props.children} components={CodeBlock} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}/>
        </CardBody>   
      </Collapse>     
      </Card>

      <br></br>
    </div>
  );
}

export default CollapseCard;