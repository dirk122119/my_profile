import React,{ useState } from "react";
import { Container, Row, Col, List,Card,CardHeader, CardTitle } from 'reactstrap';
import user from "../assets/img.jpg";

export const skill=[
    {
        title:"熟悉語法",
        answer:["python","javascript"]
    },
    {
        title:"前端",
        answer:["html","css","javascript","jquery","react"]
    },
    
    {
        title:"後端",
        answer:["flask","nodejs","django","EC2","heroku"]
    },
    {
        title:"雲端",
        answer:["AWS EC2","AWS Lightsail","heroku"]
    },
    {
        title:"深度學習",
        answer:["keras","tensorflow"]
    },
    {
        title:"曾使用過的語言",
        answer:["C","C#","python","JS"]
    },
];

const Resume=() => {
    const SkillCard=skill.map((x)=>{
        return(
    <Col lg="auto">
        <Card style={{width: '18rem'}}>
            <CardHeader>
                {x.title}
            </CardHeader>
            <CardTitle>
                <ul>
                {x.answer.map((x) => { return(<li>{x}</li>)})}
                </ul>
            </CardTitle>
        </Card>
      </Col>)});
    

    return(
        <div>
        <Row>
        <Col lg={{size :"auto"}} >
        <div className={`photo`}>
            <img src={user} alt="user" />
        </div>
            
        </Col>
        <Col lg={{offset:2,size :"auto"}}>
            <div class="text">姓名：陳冠守</div>
            <div class="text">生日：1992/12/02</div>
            <div class="text">學經歷</div>
            <List>
            <div class="headlist">
                <li>
                    2012~2015 國立中正大學資工系
                </li>
                <li>
                    2016~2018 國立中正大學資工所
                </li>
                <li>
                    2018~2020 群創光電股份有限公司
                </li>
                <li>
                    2020~2022 健身教練
                </li>
            </div>
            </List>
        </Col>
        </Row>
            
        <Row>
            {SkillCard}
        </Row>
        </div>   
    )
}

export default Resume;