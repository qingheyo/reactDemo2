/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { HashRouter } from 'react-router-dom';
import Content from './content/Content';
import Header from './header/Header';
import Nav from './nav/Nav';
import '../styles/App.scss';

/**
 * 创建App纯函数
 */
export default function App() {
/**
 * @dhb
 */
    return (
        <HashRouter>
            <div className="contain">
                {/* 头部绿框 */}
                <Header />
                {/* 导航条  */}
                <Nav />
                {/* 主要内容区  */}
                <Content />
            </div>
        </HashRouter>
    );
}
