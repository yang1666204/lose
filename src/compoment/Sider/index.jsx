import React from 'react';
import { NavLink } from 'react-router-dom'
import 'antd/dist/antd.css';
import {UserOutlined} from '@ant-design/icons'
import './index.css';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined,PoweroffOutlined  } from '@ant-design/icons';

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const Sider = () => {
  const [openKeys, setOpenKeys] = React.useState(['sub1']);
  const {username,num} = JSON.parse(localStorage.getItem('self_msg'))
  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
    
  };


  return (

    <div>
      <div className="self_wrp">
         <div className="head"><UserOutlined /></div>
          <div className="self_msg">
              <div>姓名：{username}</div>
              <div>学号：{num}</div>
          </div>
        </div>
    <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 200 }}>
      <SubMenu key="sub1" icon={<MailOutlined />} title="失物招领">
        <Menu.Item key="1"><NavLink to="/List/Add/Single">新增失物</NavLink></Menu.Item>
        <Menu.Item key="2"><NavLink to="/List/Record/ShowList">失物记录</NavLink></Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="成员管理">
        <Menu.Item key="3"><NavLink to='/List/MemberList'>成员列表</NavLink></Menu.Item>
        <Menu.Item key="4"><NavLink to='/List/Registration'>注册列表</NavLink></Menu.Item>
        </SubMenu>
      <SubMenu key="sub3" icon={<SettingOutlined />} title="系统设置">
        <Menu.Item key="5"><NavLink to='/List/Selfmsg'>个人信息</NavLink></Menu.Item>
        <Menu.Item key="6"><NavLink to='/List/About'>关于我们</NavLink></Menu.Item>
        </SubMenu>
        <Menu.Item icon={ <PoweroffOutlined /> }key="7"><NavLink to='/List/Exit'>退出登录</NavLink></Menu.Item>
    </Menu>
    </div>
  )
}
export default Sider