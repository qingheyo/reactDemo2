/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-eval */
/* eslint-disable prefer-template */
/* eslint-disable key-spacing */

import React, { Component } from 'react';
import Loading from './calculatorChild/Loading';
import '../styles/Calculator.scss';


/**
 * 创建Demo2类
 */
class Demo2 extends Component {
/**
 *状态集合
 */
    constructor(props) {
        super(props);
        this.state = {
            // eslint-disable-next-line react/no-unused-state
            isFinish: false,
            lis: ['AC', '/', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=', ],
            total: '0',
            isShow: false,
            isClear: false,
            fs: 2.5,
            calc: '',
            calcRes: '',
        };
    }
    // 存入计算数据历史

postData = () => {
    const { calc, calcRes } = this.state;
    fetch('http://dhb:8081/test.php', {
        method: 'POST',
        mode: 'cors',
        headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', }),
        body: new URLSearchParams({
            calc,
            calcRes,
        }),
    }).then(res => res.json());
}

// 计算
calc= (e) => {
    const { total, isClear } = this.state;
    switch (e.target.innerText) {
    // 清除
    case 'AC': {
        this.setState({ total: '0' });
        break;
    }
    // 取反
    case '+/−': {
        this.setState({ total: -eval(total).toString() });
        break;
    }
    // 运算
    case '=': {
        this.setState({
            isShow: true,
            calc: total,
        });
        setTimeout(() => {
            this.setState({ isShow: false });
        }, 1500);
        setTimeout(() => {
            this.setState({
                total: eval(total).toString(),
                isClear: true,
                calcRes: eval(total),
            }, this.postData);
        }, 1500);
        break;
    }
    case '÷': {
        if (total.charAt(total.length - 1) === '+' || total.charAt(total.length - 1) === '-' || total.charAt(total.length - 1) === '*' || total.charAt(total.length - 1) === '/') {
            this.setState({
                total: total.substring(0, total.length - 1) + '/',
                isClear: false,
            });
        } else {
            this.setState({
                isClear: false,
                total: total + '/',
            });
        }
        break;
    }
    case '×': {
        if (total.charAt(total.length - 1) === '+' || total.charAt(total.length - 1) === '-' || total.charAt(total.length - 1) === '*' || total.charAt(total.length - 1) === '/') {
            this.setState({
                total: total.substring(0, total.length - 1) + '*',
                isClear: false,
            });
        } else {
            this.setState({
                isClear: false,
                total: total + '*',
            });
        }
        break;
    }
    case '+': {
        if (total.charAt(total.length - 1) === '+' || total.charAt(total.length - 1) === '-' || total.charAt(total.length - 1) === '*' || total.charAt(total.length - 1) === '/') {
            this.setState({
                total: total.substring(0, total.length - 1) + '+',
                isClear: false,
            });
        } else {
            this.setState({
                isClear: false,
                total: total + '+',
            });
        }
        break;
    }
    case '-': {
        if (total.charAt(total.length - 1) === '+' || total.charAt(total.length - 1) === '-' || total.charAt(total.length - 1) === '*' || total.charAt(total.length - 1) === '/') {
            this.setState({
                total: total.substring(0, total.length - 1) + '-',
                isClear: false,
            });
        } else {
            this.setState({
                isClear: false,
                total: total + '-',
            });
        }
        break;
    }
    // 百分号
    case '%': {
        this.setState({ total: eval(total + '*0.01').toString(), });
        break;
    }
    // 数字按键
    default:
        if (total === '0' || isClear === true) {
            this.setState({
                total: e.target.innerText,
                isClear: false,
            });
        } else {
            this.setState({ total: total + e.target.innerText });
        }
        break;
    }
}

/**
 *render函数
 */
render() {
    const { isShow, fs, total, lis } = this.state;
    return (
        <React.Fragment>
            {/* loading */}
            <Loading isShow={isShow}/>
            {/* 计算器容器 */}
            <div id="bg">
                <div id="containTop">
                    <span />
                    <span />
                    <span />
                </div>
                {/* 计算器屏幕 */}
                <div id="screen">
                    <input
                        onChange={this.sizeChange}
                        style={{ fontSize: fs + 'rem', }}
                        type="text"
                        value={total}
                    />
                </div>
                {/* 键盘计算 */}
                <ul>
                    {lis.map((item, index) => {
                        if (index === 1) {
                            return (
                                <li
                                    key="1"
                                    onClick={this.calc}>
                                      +/−
                                </li>
                            );
                        }
                        return (
                            <li
                                key={index}
                                onClick={this.calc}
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </React.Fragment>
    );
}
}

export default Demo2;
