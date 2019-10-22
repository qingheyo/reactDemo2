import React, { Component } from 'react';
import '../styles/CalcHistory.scss';
import Main from './calcHistoryChild/Main';
/**
 * 创建CalcHistory类
 */
class CalcHistory extends Component {
/**
 *状态集合
 */
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    /**
   *组件挂载之后调用
  */
    componentDidMount() {
        this.getData();
    }

  getData= () => {
      fetch('http://dhb:8081/test.php', {
          method: 'GET',
          mode: 'cors',
      }).then(res => res.text()).then((res) => {
          this.setState({ data: JSON.parse(res) });
      });
  }

  /**
   *render函数
  */
  render() {
      const { data } = this.state;
      return (
          <Main data={data} />
      );
  }
}

export default CalcHistory;
