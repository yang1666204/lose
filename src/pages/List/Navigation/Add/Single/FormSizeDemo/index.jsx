import React, { useState } from 'react';
import {Form,Input,Button,DatePicker} from 'antd';
import './index.css'
import { post } from '../../../../../../utils/axios';

const FormSizeDemo = () => {
  const [componentSize, setComponentSize] = useState('default');
  const [losename,setLosename] = useState({losename:''})
  const [losername,setLosername] = useState({losername:''})
  const [losernum,setLosernum] = useState({losenum:''})
  const [losedate,setLosedate] = useState({losedate:''})
  const [getaddress,setGetaddress] = useState({getaddress:''})
  const [istrue,setIstrue] = useState({istrue:true})
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const savelosename = (e)=>{
      setLosename({losename:e.currentTarget.value})
  }
  const savelosername = (e)=>{
      setLosername({losername:e.currentTarget.value})
  }
  const savelosernum = (e)=>{
    let regnum = /^[0-9]{10}$/
      setIstrue({istrue:regnum.test(e.currentTarget.value)})
      setLosernum({losernum:e.currentTarget.value})
      console.log(regnum.test(e.currentTarget.value))
  }
  const onPanelChange = (value)=>{
      setLosedate({losedate: value ? value.format('YYYY-MM-DD') : null})
  }
  const savegetaddress = (e)=>{
      setGetaddress({getaddress:e.currentTarget.value})
  }
  const create = async()=>{
    if(istrue.istrue){
    try{
      let res = await post('http://1.14.74.79:9090/laf/add',{
        date:losedate.losedate ? losedate.losedate : 0,
        thing:losename.losename ? losename.losename : "一卡通",
        name:losername.losername ? losername.losername : 0,
        student_number:losernum.losernum ? Number(losernum.losernum) : '',
        address:getaddress.getaddress ? getaddress.getaddress : 0
      })
      console.log(res)
      if(res.data.code===1000){
        alert('添加成功')
      }else if(res.data.code===1001){
        alert('请保证输入不为空且格式正确！')
      }
    }catch(err){
      console.log(err)
    }}
  }
  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        className="From"
      >
        <Form.Item label="失物名称">
          <Input placeholder="(默认为一卡通，点击修改)" onChange={savelosename}/>
        </Form.Item>
        <Form.Item label="失主姓名">
          <Input placeholder="点击输入姓名" onChange={savelosername}/>    
        </Form.Item>
        <Form.Item label="失主学号">
          <Input placeholder="点击输入学号信息" onChange={savelosernum}/>
          {istrue.istrue ? null : <div style={{color:'red'}}>学号为十位数字</div>}
        </Form.Item>
        <Form.Item label="选择日期">
          <DatePicker onChange={onPanelChange}/>
        </Form.Item>
        <Form.Item label="领取地址">
          <Input placeholder="点击输入地址" onChange={savegetaddress}/>
        </Form.Item>
        <Form.Item className="formbutton">
          <Button type="primary" onClick={create}>立即创建</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormSizeDemo