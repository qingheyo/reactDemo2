/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import '../../styles/CalcHistory.scss';
/**
 * 创建Main纯函数
 */
export default function Main(props) {
    const { data } = props;
    return (
        <div id="calcBg">
            <ul>
                <li>计算表达式</li>
                <li>计算结果</li>
            </ul>
            {data.map((item, index) => (
                <ul key={index}>
                    <li>{item.calc_expression}</li>
                    <li>{item.res}</li>
                </ul>
            ))}
        </div>
    );
}
