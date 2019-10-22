/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import '../../styles/Analyze.scss';
/**
 * 创建contain纯函数
 */
export default function Contain(props) {
    const { theadData, tbodyData } = props;
    return (
        <div className="containFooter1">
            <table>
                {/* 头部列表渲染 */}
                <thead>
                    <tr>
                        {theadData.map((item, index) => <td key={index}>{item}</td>)}
                    </tr>
                </thead>
                {/* 后台返回数据渲染页面 */}
                <tbody>
                    {tbodyData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.day}</td>
                            <td>{item.payorder}</td>
                            <td>{item.freeorder}</td>
                            <td>{item.singleprice}</td>
                            <td>{item.totalprice}</td>
                            <td>{item.vipafterdatenum}</td>
                            <td>{item.neworder}</td>
                            <td>{item.againorder}</td>
                            <td>{item.updateorder}</td>
                            <td>{item.autoagainorder}</td>
                            <td>{item.vipagainpaynum}</td>
                            <td>{item.monthcycle}</td>
                            <td>{item.aquartercycle}</td>
                            <td>{item.sixmonthscycle}</td>
                            <td>{item.ayearcycle}</td>
                            <td><a href="javascript:void(0)">分析</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
