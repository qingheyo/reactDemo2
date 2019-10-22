import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/**
 * 创建Nav类
 */
class Nav extends Component {
/**
 * 状态集合
 */
    constructor(props) {
        super(props);
        this.state = {
            tab1: '',
            tab2: 'active',
            tab3: '',
        };
    }

    // tab切换
    tabChange=(attr) => {
        if (attr === '1') {
            this.setState({
                tab1: 'active',
                tab2: '',
                tab3: '',
            });
        } else if (attr === '2') {
            this.setState({
                tab1: '',
                tab2: 'active',
                tab3: '',
            });
        } else {
            this.setState({
                tab1: '',
                tab2: '',
                tab3: 'active',
            });
        }
    }

    /**
    * @dhb
    */
    render() {
        const { tab1, tab2, tab3 } = this.state;
        return (
            <div className="containNav">
                <ul>
                    <Link onClick={() => this.tabChange('1')} to="/index">
                        <li className={tab1}>首页</li>
                    </Link>
                    <Link onClick={() => this.tabChange('2')} to="analyze">
                        <li className={tab2}>收入分析</li>
                    </Link>
                    <Link onClick={() => this.tabChange('3')} to="calcHistory">
                        <li className={tab3}>计算历史</li>
                    </Link>
                </ul>
            </div>
        );
    }
}

export default Nav;
