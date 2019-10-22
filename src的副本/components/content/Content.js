import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Analyze from '../../pages/Analyze';
import Calculator from '../../pages/Calculator';
import CalcHistory from '../../pages/CalcHistory';
/**
 * 创建Content纯函数
 */
export default function Content() {
    return (
        <div className="containContent">
            <Switch>
                {/* 重定向 */}
                <Redirect
                    exact
                    from="/"
                    to="/analyze"
                />
                <Route
                    component={Analyze}
                    exact
                    path="/analyze"
                />
                <Route
                    component={Calculator}
                    exact
                    path="/index"
                />
                <Route
                    component={CalcHistory}
                    exact
                    path="/calcHistory"
                />
            </Switch>
        </div>
    );
}
