import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, CardTitle, CardHeader } from 'reactstrap';
import ReactMarkdown from 'react-markdown'

export const QA=[
    {
        question:"兩百字內的個人簡介。",
        answer:<h1>q1q1q1q1q111111111</h1>
    },
    {
        question:"為了成為軟體工程師，曾做過什麼努力？若有具體專案作品請分享給我們。",
        answer:<h1>q2q2q2q2q2222222</h1>
    },
    {
        question:"如果參與這個計畫，會怎麼安排學習時間？",
        answer:<h1>q3q3q3q3q3333333</h1>
    },
    {
        question:"是否有想要加入的軟體公司？為什麼想加入該公司？",
        answer:<h1>q3q3q3q3q3333333</h1>
    },
    {
        question:"請描述一件你曾經碰到最困難的事情，如何克服？",
        answer:<h1>q3q3q3q3q3333333</h1>
    },
    {
        question:"關於這份申請網頁，請分享一個你開發時的技術心得。",
        answer:<h1>q3q3q3q3q3333333</h1>
    },
    {
        question:"其他想要對我們說的事情？",
        answer:<h1>q3q3q3q3q3333333</h1>
    },
];


function CollapseCard(props) {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState('Closed');

  const onEntering = () => setStatus('Opening...');
  const onEntered = () => setStatus('Opened');
  const onExiting = () => setStatus('Closing...');
  const onExited = () => setStatus('Closed');
  const toggle = () => setCollapse(!collapse);

  console.log(props.answer.props.children);
  return (
    <div>
      <Card>
      <CardHeader >
        {props.question}
        <Button btn-xs="true" onClick={toggle}>
        {collapse?<i class="bi bi-arrow-down-square-fill"></i>:<i class="bi bi-arrow-up-square-fill"></i>}
      </Button>
      </CardHeader> 

      <Collapse
        isOpen={!collapse}
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
      >
        
        <CardBody>
        <ReactMarkdown children={props.answer.props.children} />
        
        {props.answer}
        </CardBody>   
      </Collapse>     
      </Card>

      <br></br>
    </div>
  );
}

export default CollapseCard;